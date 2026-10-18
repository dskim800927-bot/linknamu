type LinkCardProps = {
  title: string;
  url: string;
  count?: number;
  onClick: () => void;
};

export default function LinkCard({ title, url, count, onClick }: LinkCardProps) {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      onClick={onClick}
      className="relative flex w-full items-center justify-center rounded-xl border-2 border-gray-800 bg-white px-4 py-4 font-medium transition hover:-translate-y-0.5 hover:shadow-md active:translate-y-0 dark:border-gray-200 dark:bg-gray-900"
    >
      <span>{title}</span>
      {count !== undefined && (
        <span className="absolute right-4 text-xs text-gray-400" aria-label={`클릭 ${count}회`}>
          {count.toLocaleString()}
        </span>
      )}
    </a>
  );
}
