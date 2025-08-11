import { getTranslations } from "next-intl/server";
import Image from "next/image";
import { FollowMe } from "../follow-me";

export const HomePage = async () => {
  const t = await getTranslations("HomePage");

  return (
    <div className="bg-gradient-to-r left-0 from-purple-300 from-10% to-white dark:from-black dark:from-30% dark:to-gray-900">
      <div className="container mx-auto">
        <div className="flex flex-row gap-20 pt-20 mb-16 font-primary  mx-20">
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
    </div>
  );
};
