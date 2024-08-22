import React from "react";
import "./Footer.css";
import InstagramIcon from "@mui/icons-material/Instagram";
import EmailIcon from "@mui/icons-material/Email";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { NavLink } from "react-router-dom";
const Footer = () => {
  return (
    <div className="main_footer">
      <div className="heading">Reelo Music</div>
      {/* <div className="icons">
        <a href="https://www.instagram.com">
          <InstagramIcon />
        </a>
        <a href="https://www.linkedin.com">
          <LinkedInIcon />
        </a>
        <a href="mailto:reelomusic.com">
          <EmailIcon />
        </a>
      </div> */}
    </div>
  );
};

export default Footer;
