import { LinkedInSvg, PeoplePerHourSvg, UpworkSvg } from "@/assets/icons";
import { CONTACT } from "@/constants/contact";

export const FollowMe = ({ text }: { text: string }) => {
  return (
    <div className="mt-10 inline-flex items-center">
      <span className="border-purple-700 w-20 h-1 border-2 mr-6 text-sm" />
      <div className="inline-flex gap-4 items-center">
        <span className="text-sm">{text}</span>
        {/* LinkedIn */}
        <a target="_blank" href={CONTACT.LINKEDIN}>
          <LinkedInSvg
            width={50}
            height={50}
            className="text-gray-500 hover:text-purple-600"
          />
        </a>
        {/* UpWork */}
        <a target="_blank" href={CONTACT.UPWORK}>
          <UpworkSvg
            width={35}
            height={35}
            className="text-gray-500 hover:text-purple-600"
          />
        </a>
        {/* PeoplePerHour */}
        <a target="_blank" href={CONTACT.PEOPLEPERHOUR}>
          <PeoplePerHourSvg
            width={40}
            height={40}
            className="text-gray-500 hover:text-purple-600"
          />
        </a>
      </div>
    </div>
  );
};
