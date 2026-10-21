"use client";

import { useEffect, useState } from "react";
import type { LinkItem } from "@/data/profile";
import LinkCard from "./LinkCard";

export default function LinkList({ links }: { links: LinkItem[] }) {
  // 데이터를 받기 전에는 모든 링크를 0회로 표시합니다.
  const [counts, setCounts] = useState<Record<string, number>>({});

  useEffect(() => {
    fetch("/api/clicks", { cache: "no-store" })
      .then((res) => (res.ok ? res.json() : Promise.reject(res.status)))
      .then((data: { counts?: Record<string, number> }) => {
        const server = data.counts ?? {};
        // 조회 응답보다 먼저 눌린 클릭이 사라지지 않도록 더 큰 값을 유지
        setCounts((prev) => {
          const next = { ...server };
          for (const [id, n] of Object.entries(prev)) next[id] = Math.max(next[id] ?? 0, n);
          return next;
        });
      })
      .catch(() => {}); // 실패하면 0회(또는 로컬에서 올린 값)를 그대로 둡니다.
  }, []);

  const recordClick = (id: string) => {
    const body = JSON.stringify({ id });
    // 새 탭으로 이동하는 중에도 요청이 유실되지 않도록 sendBeacon 우선 사용
    const sent =
      typeof navigator.sendBeacon === "function" &&
      navigator.sendBeacon("/api/clicks", new Blob([body], { type: "application/json" }));
    if (!sent) {
      fetch("/api/clicks", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body,
        keepalive: true,
      }).catch(() => {});
    }
    setCounts((prev) => ({ ...prev, [id]: (prev[id] ?? 0) + 1 }));
  };

  return (
    <ul className="flex w-full flex-col gap-5">
      {links.map((link) => (
        <li key={link.id}>
          <LinkCard
            title={link.title}
            url={link.url}
            brand={link.brand}
            count={counts[link.id] ?? 0}
            onClick={() => recordClick(link.id)}
          />
        </li>
      ))}
    </ul>
  );
}
