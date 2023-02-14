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
        <h1>DELE OYELESE</h1>
        <p>This website is a personal project to help document and showcase projects 
        I have and am currently working on. 
        This website is run using React Js and containerized using docker. 
        The code can be found on my GitHub link in the footer</p>
        <br/>
        <h2>Website is still under construction</h2>


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
