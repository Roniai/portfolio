import { FollowMe } from "@/components/follow-me";
import { LanguageSwitcher } from "@/components/language-switcher";
import ThemeToggle from "@/components/theme-toggle";
import { getTranslations } from "next-intl/server";
import Image from "next/image";

export default async function Home() {
  const t = await getTranslations("HomePage");

  return (
    <div>
      <header className="flex flex-row m-4">
        <LanguageSwitcher />
        <div className="ml-4">
          <ThemeToggle />
        </div>
      </header>
      <main>
        <div className="bg-gradient-to-r from-purple-300 from-10% to-white dark:from-black dark:from-30% dark:to-gray-900">
          <div className="flex flex-row gap-20 mx-20 my-10 font-primary">
            <div className="flex flex-col mt-14">
              <p>{t("greeting")}</p>
              <h1 className="text-4xl mt-5">
                {t("iam")}{" "}
                <strong className="text-purple-800 dark:text-purple-500">
                  {t("name")}
                </strong>
              </h1>
              <p className="mt-10">
                {t("biography")
                  .split(".")
                  .map((line, index, array) => {
                    if (index + 1 < array.length)
                      return (
                        <span key={index}>
                          {line}. <br />
                        </span>
                      );
                  })}
              </p>
              <div className="mt-8 text-white justify-center">
                <h2 className="rounded-full bg-purple-700 px-3 justify-center text-xl inline-block">
                  {t("xp")}
                </h2>
              </div>
              <FollowMe text={t("follow")} />
            </div>
            <Image
              src="/pdp.png"
              alt={"Mon photo de profil"}
              width={300}
              height={50}
            />
          </div>
        </div>
      </main>
      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/file.svg"
            alt="File icon"
            width={16}
            height={16}
          />
          Learn
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/window.svg"
            alt="Window icon"
            width={16}
            height={16}
          />
          Examples
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/globe.svg"
            alt="Globe icon"
            width={16}
            height={16}
          />
          Go to nextjs.org →
        </a>
      </footer>
    </div>
  );
}
