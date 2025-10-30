import { Button } from "@/components/ui/button";
import { Field, FieldGroup, FieldLabel, FieldSet } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "./ui/card";
import { getTranslations } from "next-intl/server";

export const ContactForms = async () => {
  const t = await getTranslations("ContactPage");

  return (
    <Card className="w-full pt-10 px-2 shadow-lg">
      <CardContent>
        <form>
          <FieldGroup>
            <FieldSet>
              <FieldGroup>
                <Field>
                  <FieldLabel htmlFor="name">{t("formName")}</FieldLabel>
                  <Input
                    id="name"
                    placeholder={t("formNamePlaceHolder")}
                    className="border border-slate-400 "
                    required
                  />
                </Field>
                <Field>
                  <FieldLabel htmlFor="email">{t("formEmail")}</FieldLabel>
                  <Input
                    id="email"
                    placeholder={t("formEmailPlaceHolder")}
                    type="email"
                    className="border border-slate-400"
                    required
                  />
                </Field>
                <Field>
                  <FieldLabel htmlFor="message">{t("formMessage")}</FieldLabel>
                  <Textarea
                    id="message"
                    placeholder={t("formMessagePlaceHolder")}
                    className="border border-slate-400"
                    required
                  />
                </Field>
              </FieldGroup>
            </FieldSet>
            <Field orientation="horizontal" className="flex justify-end">
              <Button
                type="submit"
                className="px-12 bg-purple-700 text-white
                  dark:hover:text-black dark:hover:bg-white
                  hover:bg-black hover:text-white"
              >
                Send
              </Button>
            </Field>
          </FieldGroup>
        </form>
      </CardContent>
    </Card>
  );
};
