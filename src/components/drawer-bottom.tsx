import { projectsData } from "@/assets/data/projects";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";
import {
  DrawerClose,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
} from "./ui/drawer";
import { getLocale, getTranslations } from "next-intl/server";
import { DemoLink } from "./demo-link";
import { Badge } from "./ui/badge";
import { CardContent } from "./ui/card";

export const DrawerBottom = async ({ id }: { id: number }) => {
  const t = await getTranslations("ProjectsPage");
  const locale = await getLocale();
  const projectsDetails = t.raw("projectsDetails");
  const parts = projectsDetails[id].split("{{break}}");
  const project = projectsData[id];

  const releaseLabel = project.releasedAt
    ? new Intl.DateTimeFormat(locale, { month: "long", year: "numeric" }).format(
        new Date(`${project.releasedAt}-01T00:00:00`),
      )
    : null;

  return (
    <DrawerContent preventCloseAutoFocus={Boolean(project.demoTargetId)}>
      <DrawerHeader>
        <DrawerTitle></DrawerTitle>
      </DrawerHeader>
      <div className="flex flex-col lg:flex-row justify-center gap-5">
        <div className="flex self-center lg:pl-20">
          <Carousel className="w-[70vw] lg:w-[50vw]">
            <CarouselContent className="flex items-center">
              {project.imagePaths.map((path, index) => (
                <CarouselItem key={index}>
                  <CardContent className="flex items-center justify-center w-[70vw] lg:w-[50vw]">
                    <img
                      src={path}
                      alt={path}
                      className="object-contain h-[40vh] lg:h-[75vh]"
                    />
                  </CardContent>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
        <div className="overflow-y-scroll xl:overflow-y-hidden h-[35vh] lg:h-[75vh] xl:h-auto px-6 lg:pl-20">
          <h2 className="text-[clamp(1.5rem,5vw,4rem)] md:text-3xl text-purple-700">
            {project.title}
          </h2>
          {project.version && (
            <div className="mt-2 flex flex-wrap items-center gap-2">
              <Badge className="rounded-full">
                {t("version", { version: project.version })}
              </Badge>
              {releaseLabel && (
                <span className="text-xs capitalize">{releaseLabel}</span>
              )}
            </div>
          )}
          <div className="mt-5">
            {parts.map((part: string, index: number) => (
              <p key={index} className="mb-4">
                {part.trim()}
              </p>
            ))}
          </div>
          {project.demoTargetId && (
            <DemoLink targetId={project.demoTargetId} label={t("watchDemo")} />
          )}
          <div className="mt-5">
            {project.stacksLabels.map((label: string) => (
              <Badge
                key={label}
                variant="outline"
                className="py-1 px-3 m-1 rounded-full text-sm bg-none border border-purple-500"
              >
                {label}
              </Badge>
            ))}
          </div>
        </div>
      </div>
      <DrawerFooter>
        <DrawerClose>
          {/* <Button variant="outline">Cancel</Button> */}
        </DrawerClose>
      </DrawerFooter>
    </DrawerContent>
  );
};
