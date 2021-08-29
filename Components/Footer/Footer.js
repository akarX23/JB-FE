import React from "react";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import useMediaQuery from "@material-ui/core/useMediaQuery";

const Footer = () => {
  let mobileView = useMediaQuery((theme) => theme.breakpoints.down("sm"));

  return (
    <div
      className={`w-full padding-alignment py-4 flex ${
        mobileView && "flex-col text-center items-center"
      } justify-between items-center bg-primary-main`}
    >
      <p className="text-secondary-dark sm:text-lg text-sm sm:mb:0 mb-3">
        Just Books - All right reserved - Design & Developed by RedQ, Inc
      </p>
      <div className="flex w-28 justify-between">
        <FacebookIcon />
        <InstagramIcon />
        <LinkedInIcon />
      </div>
    </div>
  );
};

export default Footer;
