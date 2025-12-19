import { SVGProps } from "react";

export interface SvgProps extends SVGProps<SVGSVGElement> {
  width?: number;
  height?: number;
  color?: string;
}

export enum Edirection {
  UP = "up",
  DOWN = "down",
  LEFT = "left",
  RIGHT = "right",
}
