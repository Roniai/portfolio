import { getTranslations } from "next-intl/server";
import { LanguageSwitcher } from "./language-switcher";
import ThemeToggle from "./theme-toggle";

export const NavBarMenu = async () => {
  const t = await getTranslations("NavBarMenu");

  return (
    <nav className="flex fixed top-0 left-0 w-full bg-white dark:bg-black shadow px-8 py-4 z-50 justify-between">
      <div className="flex gap-4">
        <LanguageSwitcher />
        <ThemeToggle />
      </div>
      <ul className="flex gap-6 items-center">
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
