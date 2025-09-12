import { getTranslations } from "next-intl/server";
import { ProjectCard } from "../project-card";
import { SectionTitle } from "../section-title";

export const Projects = async () => {
  const t = await getTranslations("ProjectsPage");

  return (
    <section id="projects" className="font-primary mx-20 scroll-mt-20">
      <SectionTitle title={t("projectTitle")} />
      <div className="space-y-10">
        <div className="grid grid-cols-3 gap-10">
          <ProjectCard
            title={"AZ+"}
            description={
              "Une application mobile de commande et livraison à domicile, pensée pour offrir une expérience simple, rapide et intuitive."
            }
            image={"/pj-azplus.jpeg"}
          />
          <ProjectCard
            title={"AZ+"}
            description={
              "Une application mobile de commande et livraison à domicile, pensée pour offrir une expérience simple, rapide et intuitive."
            }
            image={"/pj-azplus.jpeg"}
          />
          <ProjectCard
            title={"AZ+"}
            description={
              "Une application mobile de commande et livraison à domicile, pensée pour offrir une expérience simple, rapide et intuitive."
            }
            image={"/pj-azplus.jpeg"}
          />
        </div>
        <div className="grid grid-cols-3 gap-10">
          <ProjectCard
            title={"AZ+"}
            description={
              "Une application mobile de commande et livraison à domicile, pensée pour offrir une expérience simple, rapide et intuitive."
            }
            image={"/pj-azplus.jpeg"}
          />
          <ProjectCard
            title={"AZ+"}
            description={
              "Une application mobile de commande et livraison à domicile, pensée pour offrir une expérience simple, rapide et intuitive."
            }
            image={"/pj-azplus.jpeg"}
          />
          <ProjectCard
            title={"AZ+"}
            description={
              "Une application mobile de commande et livraison à domicile, pensée pour offrir une expérience simple, rapide et intuitive."
            }
            image={"/pj-azplus.jpeg"}
          />
        </div>
      </div>
    </section>
  );
};
