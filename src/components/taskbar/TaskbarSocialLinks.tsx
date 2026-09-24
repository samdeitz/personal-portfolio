import { LuMail } from "react-icons/lu";
import { FaGithub, FaLinkedin } from "react-icons/fa6";
import type { Ref } from "react";

const links = [
  { label: "mail", href: "mailto: sdeitz@uwo.ca", Icon: LuMail },
  { label: "linkedin", href: "https://www.linkedin.com/in/sam-deitz-80559a31a/", Icon: FaLinkedin },
  { label: "github", href: "https://github.com/samdeitz", Icon: FaGithub },
];

const TaskbarSocialLinks = ({ iconRef }: { iconRef: Ref<HTMLAnchorElement> }) => {
  return (
    <div className="flex flex-nowrap shrink-0">
      {links.map((link, index) => (
        <a
          key={link.label}
          ref={index === 0 ? iconRef : undefined}
          className="taskbar-item shrink-0"
          aria-label={link.label}
          href={link.href}
          target="_blank"
          rel="noreferrer"
        >
          <link.Icon className="size-7" aria-hidden="true" />
        </a>
      ))}
    </div>
  );
};

export default TaskbarSocialLinks;
