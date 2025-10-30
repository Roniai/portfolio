import { getTranslations } from "next-intl/server";
import { SectionTitle } from "../section-title";
import { ContactForms } from "../contact-forms";
import { Mail, Phone } from "lucide-react";
import Link from "next/link";
import { CONTACT } from "@/constants/contact";

export const Contact = async () => {
  const t = await getTranslations("ContactPage");

  return (
    <section id="contact" className="font-primary mx-20 scroll-mt-20">
      <SectionTitle title={t("contactTitle")} />
      <div className="grid grid-cols-2 gap-32">
        <div className="space-y-10">
          <div className="space-y-5">
            <p className="text-md font-bold text-purple-600">
              {t("letsConnectHeader")}
            </p>
            <p className="text-md">{t("letsConnectBody")}</p>
            <p className="text-md">
              {t("letsConnectFooter")
                .split("—")
                .map((text, index) =>
                  index === 0 ? (
                    <span className="font-bold text-purple-600">{text}</span>
                  ) : (
                    <span> — {text}</span>
                  )
                )}
            </p>
          </div>
          <div className="ml-5 space-y-2">
            <div className="flex gap-3">
              <Phone className="text-purple-600" />
              <Link href={`tel:${CONTACT.PHONE}`}>
                <span>{CONTACT.PHONE}</span>
              </Link>
            </div>
            <div className="flex gap-3">
              <Mail className="text-purple-600" />
              <Link href={`mailto:${CONTACT.EMAIL}`}>
                <span>{CONTACT.EMAIL}</span>
              </Link>
            </div>
          </div>
        </div>
        <ContactForms />
      </div>
    </section>
  );
};
