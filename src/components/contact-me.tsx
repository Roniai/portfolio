import { LinkedInSvg, PeoplePerHourSvg, UpworkSvg } from "@/assets/icons";
import { CONTACT } from "@/constants/contact";

export const ContactMe = () => {
  return (
    <>
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
          className="text-gray-500 hover:text-purple-600 mr-1"
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
    </>
  );
};
