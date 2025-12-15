"use client";

import { MobileColorfulSvg } from "@/assets/icons";
import { TypingAnimation } from "./typing-animation";
import { useTranslations } from "next-intl";
import { FadeAnimation } from "./fade-animation";
import { Edirection } from "@/lib/types";

export const SplashScreen = () => {
  const t = useTranslations("SplashScreen");
  return (
    <div className="flex h-screen flex-col items-center justify-center font-primary px-4 sm:px-6 lg:px-20 overflow-hidden">
      <p className="text-[clamp(1.5rem,4vw,2.5rem)] md:text-4xl mb-5 md:mb-10 md:w-[600px] text-center">
        <TypingAnimation text={t("greeting")} />
      </p>
      <FadeAnimation direction={Edirection.UP}>
        <MobileColorfulSvg
          className="animate-pulse text-purple-700"
          width={180}
          height={180}
        />
      </FadeAnimation>
    </div>
  );
};
