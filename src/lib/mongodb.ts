import { MongoClient } from "mongodb";

const uri = process.env.MONGODB_URI;

declare global {
  // eslint-disable-next-line no-var
  var _mongoClientPromise: Promise<MongoClient> | undefined;
}

// 개발 중 핫 리로드 시 연결이 중복 생성되지 않도록 전역에 캐시합니다.
function getClient(): Promise<MongoClient> | null {
  if (!uri) return null;
  if (!global._mongoClientPromise) {
    global._mongoClientPromise = new MongoClient(uri).connect().catch((error) => {
      // 연결에 실패하면 캐시를 비워 다음 요청에서 다시 연결을 시도합니다.
      global._mongoClientPromise = undefined;
      throw error;
    });
  }
  return global._mongoClientPromise;
}

export async function getClicksCollection() {
  const clientPromise = getClient();
  if (!clientPromise) return null;
  const client = await clientPromise;
  return client
    .db(process.env.MONGODB_DB || "linknamu")
    .collection<{ _id: string; count: number }>("clicks");
}
