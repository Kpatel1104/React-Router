import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Common from "./Common";
import web from "../src/images/delay.jpg";

const About = () => {
  return (
    <>
      <Common
        name="Welcome to About page"
        imgsrc={web}
        visit="/contact"
        btname="Contact Now"
      />
    </>
  );
};

export default About;
