import React from "react";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Common from "./Common";
import web from '../src/images/frame.jpg';

const Home = () => {
  return (
    <>
      <Common
      name= " Explore Your Journey with" 
      imgsrc={web}
      visit="/service"
      btname="Get Started"
      />
    </> 
  );
}

export default Home;
