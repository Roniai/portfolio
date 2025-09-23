import { projectsData } from "@/assets/data/projects";
import { Button } from "./button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./carousel";
import {
  DrawerClose,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
} from "./drawer";
import { getTranslations } from "next-intl/server";
import { Badge } from "./badge";
import { CardContent } from "./card";

export const DrawerBottom = async ({ id }: { id: number }) => {
  const t = await getTranslations("ProjectsPage");
  const projectsDetails = t.raw("projectsDetails");
  const parts = projectsDetails[id].split("{{break}}");

  return (
    <DrawerContent>
      <DrawerHeader>
        <DrawerTitle></DrawerTitle>
      </DrawerHeader>
      <div className="flex justify-center pl-20 pr-8 gap-28">
        <Carousel className="w-[50vw]">
          <CarouselContent className="flex items-center">
            {projectsData[id].imagePaths.map((path, index) => (
              <CarouselItem key={index}>
                <CardContent className="flex items-center justify-center w-[50vw]">
                  <img
                    src={path}
                    alt={path}
                    className="object-contain h-[75vh]"
                  />
                </CardContent>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
        <div className="">
          <h2 className="text-3xl text-purple-700">{projectsData[id].title}</h2>
          <div className="mt-5">
            {parts.map((part: any, index: number) => (
              <p key={index} className="mb-4">
                {part.trim()}
              </p>
            ))}
          </div>
          <div className="mt-5">
            {projectsData[id].stacksLabels.map((label: string) => (
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
