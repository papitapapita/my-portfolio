import Link from "next/link";
import {
  FaGithub,
  FaLinkedin,
  FaYoutube,
  //FaTwitter,
} from "react-icons/fa";

interface SocialsProps {
  containerStyles: string;
  iconStyles: string;
}

const socialMedia = [
  { path: "https://github.com/papitapapita", icon: <FaGithub /> },
  {
    path: "https://www.linkedin.com/in/jonathan-olivos/",
    icon: <FaLinkedin />,
  },
  {
    path: "https://www.youtube.com/@JonathanDev-j2p",
    icon: <FaYoutube />,
  },
  //{ path: "", icon: <FaTwitter /> },
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
            target="_blank"
            rel="noopener noreferrer"
          >
            {socialMedia.icon}
          </Link>
        );
      })}
    </div>
  );
}
