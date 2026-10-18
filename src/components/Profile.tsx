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
        width={112}
        height={112}
        priority
        className="h-28 w-28 rounded-full border-2 border-gray-800 object-cover dark:border-gray-200"
      />
      <h1 className="mt-6 text-xl font-bold tracking-[0.3em]">{name}</h1>
      <p className="mt-3 text-base text-red-500 dark:text-red-400">{bio}</p>
    </section>
  );
}
