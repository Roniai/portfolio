import { getTranslations } from "next-intl/server";
import { ProjectCard } from "../project-card";
import { SectionTitle } from "../section-title";
import { projectsData } from "@/assets/data/projects";

export const Projects = async () => {
  const t = await getTranslations("ProjectsPage");
  const projectsDescription = t.raw("projectsDescription");

  return (
    <section
      id="projects"
      className="font-primary scroll-mt-20 px-4 sm:px-6 xl:px-20"
    >
      <SectionTitle title={t("projectTitle")} />
      <div className="space-y-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projectsData.map((project, i) => (
            <ProjectCard
              key={i}
              id={i}
              title={project.title}
              description={projectsDescription[i]}
              image={project.imagePath}
              stacks={project.stacks}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
