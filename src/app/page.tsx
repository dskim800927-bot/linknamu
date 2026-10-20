import LinkList from "@/components/LinkList";
import Profile from "@/components/Profile";
import SocialIcons from "@/components/SocialIcons";
import ThemeToggle from "@/components/ThemeToggle";
import { links, profile, socials } from "@/data/profile";

export default function Home() {
  return (
    <>
      {/* 배경: 크림색 → 연한 살구색 그라데이션 + 글래스 카드가 비쳐 보이도록 은은한 빛 번짐 */}
      <div
        aria-hidden="true"
        className="pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-gradient-to-b from-[#FFF8EF] via-[#FFEFE2] to-[#FFDCC8] dark:from-[#1A1412] dark:via-[#211815] dark:to-[#2B1D17]"
      >
        <div className="absolute -left-24 -top-24 h-80 w-80 rounded-full bg-[#FFD9B8]/70 blur-3xl dark:bg-[#7A3E1E]/25" />
        <div className="absolute -bottom-32 -right-24 h-96 w-96 rounded-full bg-[#FFB8A0]/50 blur-3xl dark:bg-[#8A3B2A]/20" />
      </div>

      <main className="relative mx-auto flex min-h-screen w-full max-w-md flex-col px-6 pb-16 pt-20 sm:px-8 sm:pt-24">
        <div className="absolute right-5 top-5">
          <ThemeToggle />
        </div>
        <div className="flex flex-col items-center gap-12">
          <Profile {...profile} />
          <LinkList links={links} />
          <div className="-mt-4">
            <SocialIcons socials={socials} />
          </div>
        </div>
      </main>
    </>
  );
}
