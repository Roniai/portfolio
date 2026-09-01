"use client";

import { useRef, useState } from "react";
import { PlayIcon } from "lucide-react";
import { cn } from "@/lib/utils";

export type DemoChapter = {
  time: number;
  label: string;
};

type DemoPlayerProps = {
  chapters: DemoChapter[];
  videoSrc: string;
  teaserSrc: string;
  posterSrc: string;
  playLabel: string;
  chaptersLabel: string;
};

const formatTime = (seconds: number) =>
  `${Math.floor(seconds / 60)}:${String(Math.floor(seconds % 60)).padStart(2, "0")}`;

export const DemoPlayer: React.FC<DemoPlayerProps> = ({
  chapters,
  videoSrc,
  teaserSrc,
  posterSrc,
  playLabel,
  chaptersLabel,
}) => {
  const [started, setStarted] = useState(false);
  const [activeChapter, setActiveChapter] = useState<number | null>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  const playFrom = (time: number, chapterIndex: number | null) => {
    const video = videoRef.current;
    if (!video) return;

    setStarted(true);
    setActiveChapter(chapterIndex);
    video.currentTime = time;
    void video.play();
  };

  return (
    <div className="grid gap-8 lg:grid-cols-[minmax(0,34rem)_1fr] lg:gap-12 lg:items-start">
      <div className="relative aspect-square w-full overflow-hidden rounded-2xl shadow-2xl ring-1 ring-purple-500/40">
        {/* La vidéo complète n'est téléchargée qu'au premier clic (preload="none") */}
        <video
          ref={videoRef}
          src={videoSrc}
          poster={posterSrc}
          controls={started}
          playsInline
          preload="none"
          className="h-full w-full bg-black object-cover"
        />

        {!started && (
          <button
            type="button"
            onClick={() => playFrom(0, null)}
            aria-label={playLabel}
            className="group absolute inset-0 flex flex-col items-center justify-center gap-4"
          >
            {/* Boucle muette : c'est elle qui accroche l'oeil au scroll */}
            <video
              src={teaserSrc}
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
              className="absolute inset-0 h-full w-full object-cover"
            />
            <span className="absolute inset-0 bg-black/40 transition-colors group-hover:bg-black/25" />
            <span className="relative flex h-20 w-20 items-center justify-center rounded-full bg-purple-700 shadow-lg transition-transform group-hover:scale-110">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-purple-500 opacity-60" />
              <PlayIcon className="relative h-8 w-8 translate-x-0.5 fill-white text-white" />
            </span>
            <span className="relative rounded-full bg-black/60 px-4 py-1.5 text-sm font-medium text-white">
              {playLabel}
            </span>
          </button>
        )}
      </div>

      <div>
        <h3 className="mb-3 text-lg font-semibold">{chaptersLabel}</h3>
        <ul>
          {chapters.map((chapter, index) => (
            <li key={chapter.time}>
              <button
                type="button"
                onClick={() => playFrom(chapter.time, index)}
                className={cn(
                  "flex w-full items-baseline gap-4 rounded-lg px-3 py-2 text-left transition-colors hover:bg-purple-100 dark:hover:bg-purple-900/40",
                  activeChapter === index && "bg-purple-100 dark:bg-purple-900/40",
                )}
              >
                <span className="font-mono text-sm tabular-nums text-purple-700 dark:text-purple-400">
                  {formatTime(chapter.time)}
                </span>
                <span className="text-sm">{chapter.label}</span>
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
