import {
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@radix-ui/react-accordion";
import { Separator } from "./ui/separator";
import { ChevronDown } from "lucide-react";
import { Badge } from "./ui/badge";
import { SvgProps } from "@/lib/types";

type XPprops = {
  value: string;
  title: string;
  company?: string;
  companyLocation?: string;
  type: string;
  endDate: string;
  startDate: string;
  duration: string;
  descriptions: string[];
  stacks: string[];
  icon: React.FC<SvgProps>;
  isContinue?: boolean;
};

export const ExperienceCard: React.FC<XPprops> = ({
  value,
  title,
  company,
  companyLocation,
  type,
  endDate,
  startDate,
  duration,
  descriptions,
  stacks,
  icon: Icon,
  isContinue,
}) => {
  return (
    <AccordionItem value={value}>
      <AccordionTrigger className="group w-full">
        <div className="flex justify-between items-center">
          <div className="flex gap-4 items-center justify-center">
            <div className="flex items-center justify-center rounded-sm w-6 h-6 bg-slate-500">
              <Icon width={20} height={20} color={"white"} />
            </div>
            <p className="flex text-xl">{title}</p>
          </div>
          <div className="flex gap-4">
            <Badge variant={"secondary"}>
              {startDate} - {endDate}
            </Badge>
            <ChevronDown className="h-4 w-4 shrink-0 transition-transform duration-200 group-data-[state=open]:rotate-180" />
          </div>
        </div>
        <div className="flex justify-between items-center mt-2">
          <div className="flex ml-10 gap-4 items-center">
            {company && <Badge variant={"default"}>{company}</Badge>}
            {companyLocation && <p className="text-xs">{companyLocation}</p>}
            <Badge variant={"outline"}>{type}</Badge>
          </div>
          <p className="text-xs mr-10">{duration}</p>
        </div>
      </AccordionTrigger>
      <AccordionContent
        className="
          overflow-hidden
          text-sm
          data-[state=closed]:animate-accordion-up
          data-[state=open]:animate-accordion-down"
      >
        <ul className="md:pl-9 pl-5">
          {descriptions.map((description, index) => (
            <li key={index} className="pt-2 list-disc">
              {description}
            </li>
          ))}
        </ul>
        <div className="pl-5 mt-3">
          {stacks.map((label: string) => (
            <Badge
              key={label}
              variant="outline"
              className="py-1 px-3 m-1 rounded-full text-sm bg-none border border-purple-500"
            >
              {label}
            </Badge>
          ))}
        </div>
      </AccordionContent>
      {!isContinue ? (
        <Separator className="my-4" />
      ) : (
        <div className="my-6"></div>
      )}
    </AccordionItem>
  );
};
