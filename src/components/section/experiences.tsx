import { getTranslations } from "next-intl/server";
import { SectionTitle } from "../section-title";
import { Accordion } from "@radix-ui/react-accordion";
import { ExperienceCard } from "../experience-card";
import { MobileSvg, WebSvg } from "@/assets/icons";
import { COMPANY } from "@/constants/company";
import { FadeAnimation } from "../fade-animation";
import { Edirection, TexpItems } from "@/lib/types";
import { getElapsedSince } from "@/lib/utils";

export const Experiences = async () => {
  const t = await getTranslations("ExperiencesPage");
  const expItems = t.raw("expItems");

  // Durée dynamique pour le poste actuel
  const buildDuration = (startedAt: string, fallback: string) => {
    const { years, months } = getElapsedSince(startedAt);
    const parts = [
      years > 0 ? t("durationYear", { count: years }) : null,
      months > 0 ? t("durationMonth", { count: months }) : null,
    ].filter(Boolean);

    return parts.length > 0 ? parts.join(" ") : fallback;
  };

  return (
    <section
      id="experiences"
      className="font-primary scroll-mt-20 px-4 sm:px-6 xl:px-10"
    >
      <SectionTitle title={t("expTitle")} />
      <Accordion
        type="single"
        collapsible
        className="w-full px-0 sm:px-10 xl:px-36"
        defaultValue="0"
      >
        {expItems.map((exp: TexpItems, index: number) => {
          const company = COMPANY[index];
          const duration = company?.startedAt
            ? buildDuration(company.startedAt, exp.duration)
            : exp.duration;

          return (
            <FadeAnimation
              key={index}
              direction={Edirection.UP}
              delay={0.4 + index / 10}
            >
              <ExperienceCard
                icon={index < 3 ? MobileSvg : WebSvg}
                descriptions={exp.description}
                stacks={company.stacks}
                title={exp.title}
                endDate={exp.endDate}
                startDate={exp.startDate}
                duration={duration}
                type={exp.type}
                companyLocation={company?.location}
                company={company?.name}
                value={index.toString()}
                isContinue={index === 1}
              />
            </FadeAnimation>
          );
        })}
      </Accordion>
    </section>
  );
};
