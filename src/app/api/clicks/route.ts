import { NextResponse } from "next/server";
import { links } from "@/data/profile";
import { getClicksCollection } from "@/lib/mongodb";

export const dynamic = "force-dynamic";

const linkIds = new Set(links.map((link) => link.id));

// 링크별 클릭 수 조회
export async function GET() {
  try {
    const clicks = await getClicksCollection();
    if (!clicks) return NextResponse.json({ counts: {} });

    const docs = await clicks.find({ _id: { $in: Array.from(linkIds) } }).toArray();
    const counts = Object.fromEntries(docs.map((doc) => [doc._id, doc.count]));
    return NextResponse.json({ counts });
  } catch (error) {
    console.error("클릭 수 조회 실패:", error);
    return NextResponse.json({ counts: {} }, { status: 500 });
  }
}

// 링크 클릭 1회 기록
export async function POST(request: Request) {
  let id: unknown;
  try {
    ({ id } = await request.json());
  } catch {
    return NextResponse.json({ error: "잘못된 요청입니다." }, { status: 400 });
  }

  if (typeof id !== "string" || !linkIds.has(id)) {
    return NextResponse.json({ error: "존재하지 않는 링크입니다." }, { status: 400 });
  }

  try {
    const clicks = await getClicksCollection();
    if (!clicks) {
      return NextResponse.json({ error: "DB가 설정되지 않았습니다." }, { status: 503 });
    }

    const result = await clicks.findOneAndUpdate(
      { _id: id },
      { $inc: { count: 1 } },
      { upsert: true, returnDocument: "after" },
    );
    return NextResponse.json({ id, count: result?.count ?? 1 });
  } catch (error) {
    console.error("클릭 수 기록 실패:", error);
    return NextResponse.json({ error: "기록에 실패했습니다." }, { status: 500 });
  }
}
