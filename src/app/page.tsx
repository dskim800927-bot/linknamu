import LinkList from "@/components/LinkList";
import Profile from "@/components/Profile";
import ThemeToggle from "@/components/ThemeToggle";
import { links, profile } from "@/data/profile";

export default function Home() {
  return (
    <main className="relative mx-auto flex min-h-screen w-full max-w-md flex-col px-4 pb-12 pt-16 sm:pt-20">
      <div className="absolute right-4 top-4">
        <ThemeToggle />
      </div>
      <div className="flex flex-col items-center gap-12">
        <Profile {...profile} />
        <div className="w-full px-4">
          <LinkList links={links} />
        </div>
      </div>
    </main>
  );
}
