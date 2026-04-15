import Link from "next/link";
import { FC } from "react";

interface MainBrandLogoProps {
  className?: string;
  /** Уменьшенный текст для узкой колонки (мобильный хедер) */
  compact?: boolean;
}

/**
 * Текстовый логотип: Royal Reels (жирный) + Direct (обычный), золото на тёмном фоне.
 */
const MainBrandLogo: FC<MainBrandLogoProps> = ({
  className = "",
  compact = false,
}) => {
  const primary = compact
    ? "text-base sm:text-lg font-bold tracking-tight"
    : "text-lg font-bold tracking-tight sm:text-xl";
  const secondary = compact
    ? "text-sm font-normal sm:text-base"
    : "text-base font-normal sm:text-lg";

  return (
    <Link
      href="/"
      className={`inline-flex max-w-[min(100%,280px)] flex-wrap items-baseline rounded-lg bg-zinc-900 px-2.5 py-1.5 ring-1 ring-amber-600/35 transition hover:bg-zinc-950 hover:ring-amber-500/55 sm:px-3 sm:py-2 ${className}`}
    >
      <span className={`text-amber-400 ${primary}`}>Royal Reels</span>
      <span className={`text-amber-100/90 ${secondary}`}>&nbsp;Direct</span>
    </Link>
  );
};

export default MainBrandLogo;
