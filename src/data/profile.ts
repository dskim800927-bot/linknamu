export type LinkItem = {
  id: string;
  title: string;
  url: string;
};

// TODO: 보여주기용 더미 값입니다. 실제 프로필 정보로 교체하세요.
export const profile = {
  name: "김동석",
  bio: "AI의 신 김동석",
  image: "/profile.jpg",
};

// TODO: url은 더미 값입니다. 실제 내 계정 주소로 교체하세요.
// id는 클릭 수 집계 키로 사용되므로 실제 값을 정한 뒤에는 바꾸지 않는 것이 좋습니다.
export const links: LinkItem[] = [
  { id: "blog", title: "블로그", url: "https://blog.naver.com/" },
  { id: "instagram", title: "Instagram", url: "https://instagram.com/" },
  { id: "youtube", title: "YouTube", url: "https://youtube.com/" },
];
