import { getTranslations } from "next-intl/server";
import { SectionTitle } from "../section-title";
import Image from "next/image";
import { FadeAnimation } from "../fade-animation";
import { Edirection } from "@/lib/types";

export const Services = async () => {
  type ServiceContentProps = {
    title: string;
    position: "left" | "right";
    textBody: string;
    imageSrc: string;
    imageAlt: string;
    directionAnimation?: Edirection;
  };

  const ServiceContent: React.FC<ServiceContentProps> = ({
    title,
    position,
    textBody,
    imageSrc,
    imageAlt,
    directionAnimation = Edirection.UP,
  }) => {
    return (
      <div
        className={`flex flex-col ${
          position === "right" ? "lg:flex-row-reverse" : "lg:flex-row"
        } mb-4 lg:mb-32 gap-10 lg:gap-40`}
      >
        <FadeAnimation direction={directionAnimation}>
          <div className="mt-5 lg:mt-20">
            <h2 className="text-[clamp(1.5rem,5vw,4rem)] md:text-3xl font-bold">
              <span className="text-purple-700 mr-4">#</span>
              {title}
            </h2>
            <p className="mt-4">{textBody}</p>
          </div>
        </FadeAnimation>
        <Image
          src={imageSrc}
          alt={imageAlt}
          width={350}
          height={10}
          className="w-full max-w-[250px] lg:max-w-[350px] h-auto mx-auto"
        />
      </div>
    );
  };

  const t = await getTranslations("ServicesPage");

  return (
    <section
      id="services"
      className="font-primary scroll-mt-20 px-4 sm:px-6 lg:px-10"
    >
      <SectionTitle title={t("serviceTitle")} />
      <ServiceContent
        title={t("mobileTitle")}
        position={"left"}
        textBody={t("mobile")}
        imageSrc={"/dev-mobile.png"}
        imageAlt="App mobile"
        directionAnimation={Edirection.LEFT}
      />
      <ServiceContent
        title={t("webTitle")}
        position={"right"}
        textBody={t("web")}
        imageSrc={"/dev-web.png"}
        imageAlt="App mobile"
        directionAnimation={Edirection.RIGHT}
      />
    </section>
  );
};
