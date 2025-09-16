import { getTranslations } from "next-intl/server";
import { ProjectCard } from "../project-card";
import { SectionTitle } from "../section-title";
import { projectsData } from "@/assets/data/projects";

export const Projects = async () => {
  const t = await getTranslations("ProjectsPage");
  const projectsDescription = t.raw("projectsDescription");

  const chunkArray = (arr: any[], size: number) => {
    return arr.reduce(
      (acc, _, i) => (i % size ? acc : [...acc, arr.slice(i, i + size)]),
      []
    );
  };

  const projectChunks = chunkArray(projectsData, 3);

  return (
    <section id="projects" className="font-primary mx-20 scroll-mt-20">
      <SectionTitle title={t("projectTitle")} />
      <div className="space-y-10">
        {projectChunks.map((chunk: any[], rowIndex: number) => (
          <div key={rowIndex} className="grid grid-cols-3 gap-10">
            {chunk.map((project, i) => (
              <ProjectCard
                key={i}
                title={project.title}
                description={projectsDescription[rowIndex * 3 + i]}
                image={project.imagePath}
                stacks={project.stacks}
              />
            ))}
          </div>
        ))}
      </div>
    </section>
  );
};
