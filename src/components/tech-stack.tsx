import { SvgProps } from "@/lib/types";

type TechProps = {
  label: string;
  level: number;
  icon: React.FC<SvgProps>;
};

export const TechStack = ({ label, level, icon: Icon }: TechProps) => {
  return (
    <div className="flex flex-col items-center mb-5">
      <div className="relative w-28 h-28 rounded-2xl border-4 overflow-hidden bg-gray-600">
        <div
          className="absolute bottom-0 left-0 w-full bg-purple-600 animate-wave"
          style={{ height: `${level}%` }}
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <Icon width={60} height={60} color={"white"} />
        </div>
      </div>
      <span className="text-center font-semibold text-lg">{label}</span>
    </div>
  );
};
