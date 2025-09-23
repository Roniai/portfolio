import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const getPathImageNamesRank = (
  baseName: string,
  extension: string,
  size: number
) => {
  const array = [];
  for (let i = 0; i < size; i++) {
    array[i] = `${baseName}_${i + 1}.${extension}`;
  }
  return array;
};
