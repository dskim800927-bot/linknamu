export type Brand = "naver" | "instagram" | "youtube" | "github";

export type LinkItem = {
  id: string;
  title: string;
  url: string;
  brand?: Brand;
};

// TODO: 보여주기용 더미 값입니다. 실제 프로필 정보로 교체하세요.
export const profile = {
  name: "Dongseok KIM",
  bio: "AI's GOD DONGSEOK KIM",
  image: "/profile.jpg",
};

// TODO: url은 더미 값입니다. 실제 내 계정 주소로 교체하세요.
// id는 클릭 수 집계 키로 사용되므로 실제 값을 정한 뒤에는 바꾸지 않는 것이 좋습니다.
export const links: LinkItem[] = [
  { id: "blog", title: "블로그", url: "https://blog.naver.com/", brand: "naver" },
  { id: "instagram", title: "Instagram", url: "https://instagram.com/", brand: "instagram" },
  { id: "youtube", title: "YouTube", url: "https://youtube.com/", brand: "youtube" },
  { id: "github", title: "GitHub", url: "https://github.com/dskim800927-bot", brand: "github" },
];

// 하단 아이콘 (왼쪽부터 순서대로 표시)
export type SocialItem = {
  id: "sms" | "naver" | "netflix";
  label: string;
  url: string;
};

export const socials: SocialItem[] = [
  // TODO: 받는 번호를 넣으려면 "sms:010XXXXXXXX" 형식으로 바꾸세요.
  { id: "sms", label: "문자 메시지", url: "sms:" },
  { id: "naver", label: "네이버", url: "https://www.naver.com/" },
  { id: "netflix", label: "넷플릭스", url: "https://www.netflix.com/" },
];
