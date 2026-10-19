import Image from "next/image";

type ProfileProps = {
  name: string;
  bio: string;
  image: string;
};

export default function Profile({ name, bio, image }: ProfileProps) {
  return (
    <section className="flex flex-col items-center text-center">
      <Image
        src={image}
        alt={`${name} 프로필 사진`}
        width={150}
        height={150}
        priority
        className="h-[150px] w-[150px] rounded-full border-4 border-orange-400 object-cover"
      />
      <h1 className="mt-6 text-xl font-bold tracking-[0.3em] text-blue-600 dark:text-blue-400">{name}</h1>
      <p className="mt-3 text-base text-red-500 dark:text-red-400">{bio}</p>
    </section>
  );
}
