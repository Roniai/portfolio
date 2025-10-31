import { ContactMe } from "./contact-me";

export const FollowMe = ({ text }: { text: string }) => {
  return (
    <div className="mt-10 inline-flex items-center">
      <span className="border-purple-700 w-20 h-1 border-2 mr-2 text-sm" />
      <div className="inline-flex gap-2 items-center">
        <span className="text-sm">{text}</span>
        <ContactMe />
      </div>
    </div>
  );
};
