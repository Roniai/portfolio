import { getTranslations } from "next-intl/server";
import { SectionTitle } from "../section-title";
import { Accordion } from "@radix-ui/react-accordion";
import { ExperienceCard } from "../experience-card";
import { MobileSvg, WebSvg } from "@/assets/icons";
import { COMPANY } from "@/constants/company";

export const Experiences = async () => {
  const t = await getTranslations("ExperiencesPage");
  const expItems = t.raw("expItems");

  return (
    <section className="font-primary mx-20 scroll-mt-20">
      <SectionTitle title={t("expTitle")} />
      <Accordion
        type="single"
        collapsible
        className="w-full px-36"
        defaultValue="1"
      >
        {expItems.map((exp: any, index: number) => {
          return (
            <ExperienceCard
              key={index}
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
          );
        })}
      </Accordion>
    </section>
  );
};
