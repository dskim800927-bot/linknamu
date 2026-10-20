import type { SocialItem } from "@/data/profile";

// 네이버·넷플릭스 마크 출처: Simple Icons (CC0) — https://simpleicons.org
// 모든 아이콘은 앱 아이콘처럼 브랜드 색 둥근 사각형 위에 마크를 올린 형태입니다.
const icons: Record<SocialItem["id"], JSX.Element> = {
  // 문자 메시지: 파란 타일 + 흰 말풍선 (점 세 개는 뚫린 모양)
  sms: (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-7 w-7">
      <rect width="24" height="24" rx="6" fill="#3D8BFF" />
      <path
        transform="translate(4.5 4.6) scale(0.625)"
        fillRule="evenodd"
        fill="#fff"
        d="M12 2.5c-5.8 0-10.5 3.9-10.5 8.7 0 2.7 1.5 5.1 3.8 6.7-.2 1.4-.9 2.7-1.9 3.6-.3.3-.1.8.3.8 2.2-.1 4.1-.9 5.4-2.1.9.2 1.9.3 2.9.3 5.8 0 10.5-3.9 10.5-8.7S17.8 2.5 12 2.5Zm-4.6 10.1a1.4 1.4 0 1 1 0-2.8 1.4 1.4 0 0 1 0 2.8Zm4.6 0a1.4 1.4 0 1 1 0-2.8 1.4 1.4 0 0 1 0 2.8Zm4.6 0a1.4 1.4 0 1 1 0-2.8 1.4 1.4 0 0 1 0 2.8Z"
      />
    </svg>
  ),
  // 네이버: 초록 타일 + 흰 N
  naver: (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-7 w-7">
      <rect width="24" height="24" rx="6" fill="#03C75A" />
      <path
        transform="translate(7 7) scale(0.417)"
        fill="#fff"
        d="M16.273 12.845 7.376 0H0v24h7.726V11.156L16.624 24H24V0h-7.727v12.845Z"
      />
    </svg>
  ),
  // 넷플릭스: 검정 타일 + 빨간 N 리본
  netflix: (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-7 w-7">
      <rect width="24" height="24" rx="6" fill="#141414" />
      <path
        transform="translate(4.8 4.8) scale(0.6)"
        fill="#E50914"
        d="m5.398 0 8.348 23.602c2.346.059 4.856.398 4.856.398L10.113 0H5.398zm8.489 0v9.172l4.715 13.33V0h-4.715zM5.398 1.5V24c1.873-.225 2.81-.312 4.715-.398V14.83L5.398 1.5z"
      />
    </svg>
  ),
};

export default function SocialIcons({ socials }: { socials: SocialItem[] }) {
  return (
    <ul className="flex items-center justify-center gap-4">
      {socials.map((social) => (
        <li key={social.id}>
          <a
            href={social.url}
            target={social.url.startsWith("http") ? "_blank" : undefined}
            rel="noopener noreferrer"
            aria-label={social.label}
            className="flex h-11 w-11 items-center justify-center rounded-xl outline-none transition duration-300 ease-out hover:-translate-y-0.5 hover:brightness-105 focus-visible:ring-2 focus-visible:ring-orange-300 motion-reduce:transition-none motion-reduce:hover:translate-y-0 [&>svg]:rounded-[7px] [&>svg]:shadow-[0_6px_14px_-6px_rgba(120,60,25,0.5)] dark:[&>svg]:shadow-[0_6px_14px_-6px_rgba(0,0,0,0.8)]"
          >
            {icons[social.id]}
          </a>
        </li>
      ))}
    </ul>
  );
}
