"use client";

import { Button } from "@/components/ui/button";
import { Field, FieldGroup, FieldLabel, FieldSet } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "./ui/card";
import emailjs from "@emailjs/browser";
import { FormEvent } from "react";
import { ToastContainer, toast, Bounce } from "react-toastify";

type Props = {
  formName: string;
  formNamePlaceHolder: string;
  formEmail: string;
  formEmailPlaceHolder: string;
  formMessage: string;
  formMessagePlaceHolder: string;
  sendButton: string;
  successMessage: string;
  errorMessage: string;
  waitMessage: string;
};

export const ContactForms: React.FC<Props> = ({
  formName,
  formEmail,
  formMessage,
  formNamePlaceHolder,
  formEmailPlaceHolder,
  formMessagePlaceHolder,
  sendButton,
  successMessage,
  errorMessage,
  waitMessage,
}) => {
  const sendEmail = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    toast.info(waitMessage);

    const formData = new FormData(event.currentTarget);

    const templateParams = {
      name: formData.get("name"),
      email: formData.get("email"),
      message: formData.get("message"),
    };

    emailjs
      .send(
        process.env.NEXT_PUBLIC_SERVICE_ID ?? "",
        process.env.NEXT_PUBLIC_TEMPLATE_ID ?? "",
        templateParams,
        {
          publicKey: process.env.NEXT_PUBLIC_PUBLIC_KEY,
        }
      )
      .then(
        (response) => {
          console.log("SUCCESS!", response.status, response.text);
          toast.success(successMessage);
        },
        (err) => {
          console.log("FAILED...", err);
          toast.error(errorMessage);
        }
      );
  };

  return (
    <Card className="w-full pt-10 px-0 lg:px-2 shadow-lg">
      <CardContent>
        <form onSubmit={sendEmail}>
          <FieldGroup>
            <FieldSet>
              <FieldGroup>
                <Field>
                  <FieldLabel htmlFor="name">{formName}</FieldLabel>
                  <Input
                    id="name"
                    name="name"
                    placeholder={formNamePlaceHolder}
                    className="border border-slate-400 "
                    required
                  />
                </Field>
                <Field>
                  <FieldLabel htmlFor="email">{formEmail}</FieldLabel>
                  <Input
                    id="email"
                    name="email"
                    placeholder={formEmailPlaceHolder}
                    type="email"
                    className="border border-slate-400"
                    required
                  />
                </Field>
                <Field>
                  <FieldLabel htmlFor="message">{formMessage}</FieldLabel>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder={formMessagePlaceHolder}
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
                {sendButton}
              </Button>
              <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick={false}
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
                transition={Bounce}
              />
            </Field>
          </FieldGroup>
        </form>
      </CardContent>
    </Card>
  );
};
