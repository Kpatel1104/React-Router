import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import image from "./images/bg3.jpg";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const Contact = () => {
  return (
    <>
      <div style={{ backgroundImage: `url(${image})` }}>
        <h2 className="text-center text-success"> Connect With Us </h2>
        <h4 className="text-center">
          Follow us to see blog updates, Industry news, new feature launches,
          and glimpses into the culture and activities at TUNE.
        </h4>
        <br />
        <br />
        <hr />
        <h2 className="text-success text-center"> Address </h2>
        <br />
        <div className="row gy-4">
          <h4 className="text-center fw-bold "> Surat Branch </h4>
          <h5 className="text-center">
            Block-B, A-307, ICC building, Majura Gate,
            <br />
            Surat, Gujarat 395008
            <br />
            Phone: 087586 07151
          </h5>
          <br />
          <h4 className="text-center fw-bold "> Main Branch </h4>
          <h5 className="text-center">
            1049-1051, Silver Business Point, VIP Cir, <br />
            near Royal Square, Utran, Surat, <br />
            Gujarat 394101
            <br />
            Phone: +91 087586 07151
          </h5>
          <br />
          <br />
          <h4 className="text-center text-success"> Follow US </h4>
          <div className=" text-center list-inline">
            <div
              className="list-inline-item"
              onClick={() => window.open("https://www.facebook.com/")}
            >
              <FacebookIcon />
            </div>
            <div
              className="list-inline-item"
              onClick={() => window.open("https://www.instagram.com/")}
            >
              <InstagramIcon />
            </div>
            <div
              className="list-inline-item"
              onClick={() => window.open("https://www.linkedin.com/feed/")}
            >
              <LinkedInIcon />
            </div>
            <div
              className="list-inline-item"
              onClick={() => window.open("https://twitter.com/?lang=en")}
            >
              <TwitterIcon />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
