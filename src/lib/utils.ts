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

/**
 * Nombre d'années et de mois écoulés depuis `startedAt` (format "YYYY-MM").
 * Sert à afficher une durée qui reste à jour toute seule pour le poste en cours.
 */
export const getElapsedSince = (startedAt: string, now: Date = new Date()) => {
  const [year, month] = startedAt.split("-").map(Number);
  const totalMonths =
    (now.getFullYear() - year) * 12 + (now.getMonth() + 1 - month);
  const safeMonths = Math.max(totalMonths, 0);

  return {
    years: Math.floor(safeMonths / 12),
    months: safeMonths % 12,
  };
};
