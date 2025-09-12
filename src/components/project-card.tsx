import { Button } from "./ui/button";

type ProjectCardProps = {
  title: string;
  description: string;
  image: string;
};

export const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  image,
}) => {
  return (
    <div className="border border-gray-200 rounded-xl shadow-md hover:shadow-2xl transition-transform transform hover:-translate-y-2 hover:translate-z-0 duration-300 ease-in-out">
      <img src={image} alt={title} className="w-full rounded-t-xl" />
      <div className="p-5">
        <p className="text-lg font-semibold mb-1">{title}</p>
        <p className="text-sm mb-5">{description}</p>
        <div className="flex justify-end">
          <Button variant={"outline"}>Voir plus</Button>
        </div>
      </div>
    </div>
  );
};
