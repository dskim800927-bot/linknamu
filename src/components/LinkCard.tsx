import { Grand_Hotel, Nanum_Gothic, Roboto } from "next/font/google";
import type { Brand } from "@/data/profile";
import BrandIcon from "./BrandIcon";

// 브랜드 전용 글꼴은 공개되어 있지 않아 가장 비슷한 무료 글꼴로 대체합니다.
const nanumGothic = Nanum_Gothic({ weight: "800", subsets: ["latin"], preload: false });
const grandHotel = Grand_Hotel({ weight: "400", subsets: ["latin"] });
const roboto = Roboto({ weight: "700", subsets: ["latin"] });

// 글래스모피즘: 반투명 배경 + 배경 흐림 + 위쪽 하이라이트 테두리
const glass =
  "border border-white/40 backdrop-blur-md shadow-[inset_0_1px_0_rgba(255,255,255,0.35),0_10px_28px_-14px_rgba(120,60,25,0.45)] dark:border-white/10 dark:shadow-[inset_0_1px_0_rgba(255,255,255,0.08),0_10px_28px_-14px_rgba(0,0,0,0.7)]";

const defaultStyle =
  "border-white/70 bg-white/55 font-medium text-stone-800 dark:bg-white/10 dark:text-stone-100";

const brandStyles: Record<Brand, string> = {
  naver: `bg-[#03C75A]/85 text-white ${nanumGothic.className}`,
  instagram: `bg-gradient-to-r from-[#F58529]/85 via-[#DD2A7B]/85 to-[#515BD4]/85 text-2xl leading-6 text-white ${grandHotel.className}`,
  youtube: `bg-[#FF0000]/80 text-white ${roboto.className}`,
  github:
    "bg-[#24292F]/85 font-['-apple-system','BlinkMacSystemFont','Segoe_UI','Helvetica','Arial',sans-serif] font-semibold text-white",
};

type LinkCardProps = {
  title: string;
  url: string;
  brand?: Brand;
  count: number;
  onClick: () => void;
};

export default function LinkCard({ title, url, brand, count, onClick }: LinkCardProps) {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      onClick={onClick}
      className={`relative flex w-full items-center justify-center rounded-2xl px-5 py-[1.125rem] outline-none transition duration-300 ease-out hover:-translate-y-0.5 hover:brightness-105 focus-visible:ring-2 focus-visible:ring-orange-300 focus-visible:ring-offset-2 focus-visible:ring-offset-[#FFF1E6] active:translate-y-0 motion-reduce:transition-none motion-reduce:hover:translate-y-0 dark:focus-visible:ring-offset-[#211815] ${glass} ${
        brand ? brandStyles[brand] : defaultStyle
      }`}
    >
      <span className="flex items-center gap-2">
        {brand && <BrandIcon brand={brand} />}
        {title}
      </span>
      <span
        className={`absolute right-5 font-sans text-xs tabular-nums ${brand ? "text-white/75" : "text-stone-400"}`}
        aria-label={`클릭 ${count.toLocaleString()}회`}
      >
        {count.toLocaleString()}회
      </span>
    </a>
  );
}
