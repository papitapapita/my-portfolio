import Link from "next/link";
import {
  FaGithub,
  FaLinkedin,
  FaYoutube,
  FaTwitter,
} from "react-icons/fa";

interface SocialsProps {
  containerStyles: string;
  iconStyles: string;
}

const socialMedia = [
  { path: "", icon: <FaGithub /> },
  { path: "", icon: <FaLinkedin /> },
  { path: "", icon: <FaYoutube /> },
  { path: "", icon: <FaTwitter /> },
];

export function Socials({
  containerStyles,
  iconStyles,
}: SocialsProps) {
  return (
    <div className={containerStyles}>
      {socialMedia.map((socialMedia, index) => {
        return (
          <Link
            href={socialMedia.path}
            key={index}
            className={iconStyles}
          >
            {socialMedia.icon}
          </Link>
        );
      })}
    </div>
  );
}
