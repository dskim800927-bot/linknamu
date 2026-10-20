"use client";

import { useEffect, useState } from "react";
import type { LinkItem } from "@/data/profile";
import LinkCard from "./LinkCard";

export default function LinkList({ links }: { links: LinkItem[] }) {
  const [counts, setCounts] = useState<Record<string, number> | null>(null);

  useEffect(() => {
    fetch("/api/clicks")
      .then((res) => res.json())
      .then((data) => setCounts(data.counts ?? {}))
      .catch(() => setCounts(null));
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
    setCounts((prev) => (prev ? { ...prev, [id]: (prev[id] ?? 0) + 1 } : prev));
  };

  return (
    <ul className="flex w-full flex-col gap-5">
      {links.map((link) => (
        <li key={link.id}>
          <LinkCard
            title={link.title}
            url={link.url}
            brand={link.brand}
            count={counts ? (counts[link.id] ?? 0) : undefined}
            onClick={() => recordClick(link.id)}
          />
        </li>
      ))}
    </ul>
  );
}
