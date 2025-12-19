import { getTranslations } from "next-intl/server";
import { SectionTitle } from "../section-title";
import { TechStack } from "../tech-stack";
import { Badge } from "../ui/badge";
import { ShieldPlus } from "lucide-react";
import { techStackData } from "@/assets/data";
import { Edirection } from "@/lib/types";
import { FadeAnimation } from "../fade-animation";

export const Skills = async () => {
  const t = await getTranslations("SkillsPage");
  const assets = t.raw("assets");

  return (
    <section
      id="skills"
      className="font-primary scroll-mt-20 px-4 sm:px-6 lg:px-10"
    >
      <SectionTitle title={t("skillsTitle")} />
      <div className="grid md:grid-cols-2">
        <FadeAnimation direction={Edirection.LEFT}>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4">
            {techStackData.map((tech, index) => (
              <TechStack
                key={index}
                label={tech.label}
                level={tech.level}
                icon={tech.icon}
              />
            ))}
          </div>
        </FadeAnimation>
        <div className="mt-6 md:mt-0 md:ml-20">
          <FadeAnimation direction={Edirection.DOWN}>
            <div className="flex gap-2 items-center">
              <ShieldPlus color="#7e22ce" size={40} />
              <span className="text-purple-700 font-bold text-[clamp(2rem,4vw,3rem)] md:text-4xl">
                {t("skillsSubTitle")}
              </span>
            </div>
          </FadeAnimation>
          <div className="mt-5">
            {assets.map((skills: string, index: number) => (
              <FadeAnimation
                key={skills}
                direction={Edirection.UP}
                className="inline-flex"
                delay={0.6 + index / 10}
              >
                <Badge
                  variant="outline"
                  className="py-2 px-5 m-2 rounded-full text-lg bg-none border-2 border-purple-500"
                >
                  {skills}
                </Badge>
              </FadeAnimation>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
