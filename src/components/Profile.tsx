import Image from "next/image";

type ProfileProps = {
  name: string;
  bio: string;
  image: string;
};

export default function Profile({ name, bio, image }: ProfileProps) {
  return (
    <section className="flex flex-col items-center text-center">
      {/* 흰 테두리 + 아래로 떨어지는 부드러운 그림자로 살짝 떠 있는 느낌 */}
      <div className="rounded-full bg-gradient-to-br from-white to-[#FFE6D4] p-1.5 shadow-[0_18px_40px_-14px_rgba(150,80,40,0.45)] dark:from-stone-700 dark:to-stone-900 dark:shadow-[0_18px_40px_-14px_rgba(0,0,0,0.7)]">
        <Image
          src={image}
          alt={`${name} 프로필 사진`}
          width={150}
          height={150}
          priority
          className="h-[150px] w-[150px] rounded-full object-cover"
        />
      </div>
      <p className="mt-7 text-xl font-semibold tracking-tight text-stone-800 dark:text-stone-100">
        {bio}
      </p>
    </section>
  );
}
