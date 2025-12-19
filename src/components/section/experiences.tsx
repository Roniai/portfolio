import { getTranslations } from "next-intl/server";
import { SectionTitle } from "../section-title";
import { Accordion } from "@radix-ui/react-accordion";
import { ExperienceCard } from "../experience-card";
import { MobileSvg, WebSvg } from "@/assets/icons";
import { COMPANY } from "@/constants/company";
import { FadeAnimation } from "../fade-animation";
import { Edirection, TexpItems } from "@/lib/types";

export const Experiences = async () => {
  const t = await getTranslations("ExperiencesPage");
  const expItems = t.raw("expItems");

  return (
    <section className="font-primary scroll-mt-20 px-4 sm:px-6 xl:px-10">
      <SectionTitle title={t("expTitle")} />
      <Accordion
        type="single"
        collapsible
        className="w-full px-0 sm:px-10 xl:px-36"
        defaultValue="1"
      >
        {expItems.map((exp: TexpItems, index: number) => {
          return (
            <FadeAnimation
              key={index}
              direction={Edirection.UP}
              delay={0.4 + index / 10}
            >
              <ExperienceCard
                icon={index < 2 ? MobileSvg : WebSvg}
                descriptions={exp.description}
                stacks={COMPANY[index].stacks}
                title={exp.title}
                endDate={exp.endDate}
                startDate={exp.startDate}
                duration={exp.duration}
                type={exp.type}
                companyLocation={COMPANY[index]?.location}
                company={COMPANY[index]?.name}
                value={index.toString()}
                isContinue={index === 0}
              />
            </FadeAnimation>
          );
        })}
      </Accordion>
    </section>
  );
};
