"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";

export function LanguageSwitcher() {
  const router = useRouter();
  const [activeLang, setActiveLang] = useState<"en" | "fr">("en");

  function switchTo(lang: "fr" | "en") {
    setActiveLang(lang);
    document.cookie = `NEXT_LOCALE=${lang}; path=/`;
    router.refresh();
  }

  return (
    <div className="inline-flex items-center bg-gray-200 dark:bg-gray-700 rounded-full p-1">
      <button
        className={`px-4 py-1 rounded-full transition-colors text-sm font-medium ${
          activeLang === "en"
            ? "bg-white dark:bg-gray-500 shadow text-black dark:text-white"
            : "text-gray-600 dark:text-white hover:text-black"
        }`}
        onClick={() => switchTo("en")}
      >
        English
      </button>
      <button
        className={`px-4 py-1 rounded-full transition-colors text-sm font-medium ${
          activeLang === "fr"
            ? "bg-white dark:bg-gray-500 shadow text-black dark:text-white"
            : "text-gray-600 dark:text-white hover:text-black"
        }`}
        onClick={() => switchTo("fr")}
      >
        French
      </button>
    </div>
  );
}
