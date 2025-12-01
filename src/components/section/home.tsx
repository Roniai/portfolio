import { getTranslations } from "next-intl/server";
import Image from "next/image";
import { FollowMe } from "../follow-me";

export const HomePage = async () => {
  const t = await getTranslations("HomePage");

  return (
    <div className="bg-gradient-to-r left-0 from-purple-300 from-10% to-white dark:from-gray-900 dark:from-30% dark:to-neutral-950  ">
      <div className="xl:container mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-5 lg:gap-20 pt-14 lg:pt-20 mb-16 font-primary px-4 sm:px-6 lg:px-10">
          <div className="flex flex-col w-full mt-14 min-w-0">
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
            height={300}
            className="w-full max-w-[200px] lg:max-w-[300px] h-auto mx-auto"
          />
        </div>
      </div>
    </div>
  );
};
