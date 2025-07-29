import { getTranslations } from "next-intl/server";
import { LanguageSwitcher } from "./language-switcher";
import ThemeToggle from "./theme-toggle";

export const NavBarMenu = async () => {
  const t = await getTranslations("NavBarMenu");

  return (
    <nav className="inline-flex fixed top-0 bg-white dark:bg-black w-full shadow px-8 py-4 z-50 justify-between">
      <div className="inline-flex gap-4">
        <LanguageSwitcher />
        <ThemeToggle />
      </div>
      <ul className="gap-6 inline-flex items-center">
        <li>
          <a href="#services">{t("services")}</a>
        </li>
        <li>
          <a href="#skills">{t("skills")}</a>
        </li>
        <li>
          <a href="#projects">{t("projects")}</a>
        </li>
        <li>
          <a href="#contact">{t("contact")}</a>
        </li>
      </ul>
    </nav>
  );
};
