import React from "react";

import HomeIcon from "@mui/icons-material/Home";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import HeaderLink from "./HeaderLink";

const Header: React.FC = () => {
  return (
    <div className="flex justify-between items-center mx-10 my-12">
      <div className="text-primary font-bold text-2xl">
        <h1>Project List</h1>
      </div>
      <div>
        <HeaderLink
          link="http://www.litianningl.com.s3-website-us-east-1.amazonaws.com/"
          icon={<HomeIcon />}
        />
        <HeaderLink link="https://github.com/lit26/" icon={<GitHubIcon />} />
        <HeaderLink
          link="https://www.linkedin.com/in/tianning-li/"
          icon={<LinkedInIcon />}
        />
      </div>
    </div>
  );
};

export default Header;
