import { getTranslations } from "next-intl/server";
import { SectionTitle } from "../section-title";
import { TechStack } from "../tech-stack";
import { JavaScriptSvg } from "@/assets";

export const Skills = async () => {
  const t = await getTranslations("SkillsPage");
  return (
    <section id="skills" className="font-primary mx-20 scroll-mt-20">
      <SectionTitle title={t("skillsTitle")} />
      <TechStack
        label="JavaScript"
        level={70}
        logo={<JavaScriptSvg className="w-16 h-16 fill-white" />}
      />
    </section>
  );
};
