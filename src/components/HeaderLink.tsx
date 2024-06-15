import React from "react";

interface HeaderLinkProps {
  link: string;
  icon: React.ReactNode;
}

const HeaderLink: React.FC<HeaderLinkProps> = ({ link, icon }) => {
  return (
    <a
      className="mx-2 text-primary"
      href={link}
      target="_blank"
      rel="noopener noreferrer"
    >
      {icon}
    </a>
  );
};

export default HeaderLink;
