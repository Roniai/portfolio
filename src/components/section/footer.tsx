import { ContactMe } from "../contact-me";

export const Footer = () => {
  return (
    <div className="flex w-full items-center justify-between font-primary mt-20 mb-5 px-4 sm:px-6 lg:px-20">
      <div className="inline-flex gap-2 items-center">
        <ContactMe />
      </div>
      <p>Copyright © 2025</p>
    </div>
  );
};
