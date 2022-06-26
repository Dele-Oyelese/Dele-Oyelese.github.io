import React from "react";
import "../../App.css";
import { Button } from "./Button";
import "../css/HeroSection.css";
import video from '../../videos/video-2.mp4';


console.log(video);

function HeroSection() {
    return (
      <div className='hero-container'>
        {/* <video src = {video} autoPlay loop muted />
        <h1>ADVENTURE AWAITS</h1>
        <p>What are you waiting for</p> */}
        <h1>ABOUT THIS WEBSITE</h1>
        <p>This website is a personal project to help document 
        my Software Engineering Journey. The purpose
        is to help solidify my knowledge as I go through my Master’s 
        of Software Engineering at the University of Calgary. This project is run using 
        React Js and containerized using docker. The code can be found on my github linked 
        in the footer</p>
        <div className="hero-btns">
          <Button
            className="btns"
            buttonStyle="btn--outline"
            buttonSize="btn--large"
            path= '/bio'>
          About Me
          </Button>
        </div>
      </div>
    );
  }


export default HeroSection;
