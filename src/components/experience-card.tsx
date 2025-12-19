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
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-2 md:gap-0">
          <div className="flex gap-4 items-center justify-start md:justify-center">
            <div className="relative flex items-center justify-center rounded-sm w-6 h-6 bg-slate-500">
              <Icon width={20} height={20} color={"white"} />
              {isContinue && (
                <Separator
                  orientation="vertical"
                  className="
                    absolute top-full left-1/2 -translate-x-1/2
                    w-p
                    transition-all duration-400
                    h-48 ss:h-44 sm:h-20 group-data-[state=open]:h-[1200px] ss:group-data-[state=open]:h-[850px] sm:group-data-[state=open]:h-[650px] md:group-data-[state=open]:h-[450px]
                  "
                />
              )}
            </div>
            <p className="flex text-left text-[clamp(1rem,2vw,2rem)] md:text-xl">
              {title}
            </p>
          </div>
          <div className="flex justify-between md:justify-normal w-full md:w-auto ml-10 md:ml-0 pr-20 md:pr-0 gap-4">
            <Badge variant={"secondary"} className="flex md:flex-none">
              {startDate} - {endDate}
            </Badge>
            <ChevronDown className="h-4 w-4 shrink-0 transition-transform duration-200 group-data-[state=open]:rotate-180" />
          </div>
        </div>
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mt-2">
          <div className="flex flex-col sm:flex-row ml-10 gap-2 sm:gap-4 items-start sm:items-center">
            {company && <Badge variant={"default"}>{company}</Badge>}
            {companyLocation && <p className="text-xs">{companyLocation}</p>}
            {type && <Badge variant={"outline"}>{type}</Badge>}
          </div>
          <p className="text-xs ml-10 sm:ml-0 mr-10 mt-2 sm:mt-0">{duration}</p>
        </div>
      </AccordionTrigger>
      <AccordionContent
        className="
          overflow-hidden
          text-sm
          data-[state=closed]:animate-accordion-up
          data-[state=open]:animate-accordion-down"
      >
        <ul className="pl-8 md:pl-9">
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
