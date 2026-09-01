"use client";

import { PlayIcon } from "lucide-react";
import { DrawerClose } from "./ui/drawer";

type DemoLinkProps = {
  targetId: string;
  label: string;
};

const MAX_WAIT_MS = 1000;

export const DemoLink: React.FC<DemoLinkProps> = ({ targetId, label }) => {
  const goToSection = () => {
    const startedAt = performance.now();

    const scrollWhenClosed = () => {
      const stillOpen = document.querySelector("[data-vaul-drawer]");

      if (stillOpen && performance.now() - startedAt < MAX_WAIT_MS) {
        requestAnimationFrame(scrollWhenClosed);
        return;
      }

      document
        .getElementById(targetId)
        ?.scrollIntoView({ behavior: "smooth", block: "start" });
    };

    requestAnimationFrame(scrollWhenClosed);
  };

  return (
    <DrawerClose asChild>
      <button
        type="button"
        onClick={goToSection}
        className="mt-2 inline-flex items-center gap-2 rounded-full bg-purple-700 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-purple-800"
      >
        <PlayIcon className="h-4 w-4 fill-white" />
        {label}
      </button>
    </DrawerClose>
  );
};
