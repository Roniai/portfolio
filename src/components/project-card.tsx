import { SvgProps } from "@/lib/types";
import { Button } from "./ui/button";

type ProjectCardProps = {
  title: string;
  description: string;
  image: string;
  stacks: React.FC<SvgProps>[];
};

export const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  image,
  stacks,
}) => {
  return (
    <div className="border border-gray-200 rounded-xl shadow-md hover:shadow-2xl transition-transform transform hover:-translate-y-2 hover:translate-z-0 duration-300 ease-in-out">
      <div className="h-44">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover rounded-t-xl"
        />
      </div>
      <div className="p-5">
        <p className="text-lg font-semibold mb-1">{title}</p>
        <p className="text-sm mb-5">{description}</p>
        <div className="flex justify-between">
          <div className="flex gap-1 items-center">
            {stacks.map((Stack, i) => (
              <div
                key={i}
                className="rounded-full border w-7 h-7 flex items-center justify-center"
              >
                <Stack width={16} height={16} />
              </div>
            ))}
          </div>
          <div className="flex justify-end">
            <Button variant={"outline"}>Voir plus</Button>
          </div>
        </div>
      </div>
    </div>
  );
};
