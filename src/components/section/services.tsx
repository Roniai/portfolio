import { getTranslations } from "next-intl/server";
import { SectionTitle } from "../section-title";
import Image from "next/image";

export const Services = async () => {
  type ServiceContentProps = {
    title: string;
    position: "left" | "right";
    textBody: string;
    imageSrc: string;
    imageAlt: string;
  };

  const ServiceContent: React.FC<ServiceContentProps> = ({
    title,
    position,
    textBody,
    imageSrc,
    imageAlt,
  }) => {
    return (
      <div
        className={`flex ${
          position === "right" ? "flex-row-reverse" : "flex-row"
        } mb-32 gap-40`}
      >
        <div className="mt-20">
          <h2 className="text-3xl font-bold">
            <span className="text-purple-700 mr-4">#</span>
            {title}
          </h2>
          <p className="mt-4">{textBody}</p>
        </div>
        <Image src={imageSrc} alt={imageAlt} width={350} height={10} />
      </div>
    );
  };

  const t = await getTranslations("ServicesPage");

  return (
    <section id="services" className="font-primary mx-20 scroll-mt-20">
      <SectionTitle title={t("serviceTitle")} />
      <ServiceContent
        title={t("mobileTitle")}
        position={"left"}
        textBody={t("mobile")}
        imageSrc={"/dev-mobile.png"}
        imageAlt="App mobile"
      />
      <ServiceContent
        title={t("webTitle")}
        position={"right"}
        textBody={t("web")}
        imageSrc={"/dev-web.png"}
        imageAlt="App mobile"
      />
    </section>
  );
};
