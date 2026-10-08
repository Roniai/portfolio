import { getTranslations } from "next-intl/server";
import { SectionTitle } from "../section-title";
import { Badge } from "../ui/badge";
import { DemoPlayer } from "../demo-player";
import {
  DEMO_CHAPTER_TIMES,
  DEMO_POSTER_SRC,
  DEMO_TEASER_SRC,
  DEMO_VIDEO_SRC,
} from "@/constants/demo";

export const Demo = async () => {
  const t = await getTranslations("DemoPage");
  const chapterLabels: string[] = t.raw("chapters");

  const chapters = DEMO_CHAPTER_TIMES.map((time, index) => ({
    time,
    label: chapterLabels[index],
  }));

  return (
    <section id="demo" className="font-primary scroll-mt-20 px-4 sm:px-6 xl:px-10">
      <SectionTitle title={t("title")} />
      <div className="mb-8 flex flex-col items-center gap-3 text-center">
        <Badge
          variant="outline"
          className="rounded-full border border-purple-500 px-3 py-1 text-sm"
        >
          {t("privateBadge")}
        </Badge>
        <p className="max-w-2xl">{t("intro")}</p>
        <p className="max-w-2xl text-sm font-semibold text-purple-800 dark:text-purple-500">
          {t("stack")}
        </p>
      </div>
      <DemoPlayer
        chapters={chapters}
        videoSrc={DEMO_VIDEO_SRC}
        teaserSrc={DEMO_TEASER_SRC}
        posterSrc={DEMO_POSTER_SRC}
        playLabel={t("play")}
        chaptersLabel={t("chaptersLabel")}
      />
    </section>
  );
};
