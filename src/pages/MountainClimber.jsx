import React from "react";
import { useRef } from "react";
import { useState, useEffect } from "react";
import NavBarAfterLogin from "../components/NavBarAfterLogin";
import {Link } from "react-router-dom";
import Footer from "../Footer";


export default function MountainClimber(){
  const synthRef = useRef(window.speechSynthesis);

  const speakText = () => {
    const utterThis = new SpeechSynthesisUtterance("Start in the push-up position. Bend your right knee towards your chest and keep your left leg straight, then quickly switch from one leg to another. This exercise strengthens multiple muscle groups as shown above.");
    synthRef.current.speak(utterThis);
  };
 
    const [seconds, setSeconds] = useState(30);
    const [isActive, setIsActive] = useState(false);
  

  function toggle() {
    setIsActive(!isActive);
  }

  function reset() {
    setSeconds(30); 
    setIsActive(false);
  }

  useEffect(() => {
    let interval = null;
    if (isActive) {
      interval = setInterval(() => {
        setSeconds(seconds => seconds - 1); 
      }, 1000);
    } else if (!isActive && seconds !== 0) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isActive, seconds]);


    return(
        <>
        <NavBarAfterLogin />
        <div className="mountain-climber-page">
            <div className="mountain-climber-container">
                
                <h4>
                    <b>
                        <Link to="/ExerciseWeek">Exercise &#10148;</Link> 
                        <span><Link to="/Monday">Monday &#10148;</Link></span>
                        <span className='red'>Mountain Climber</span>
                    </b>
                </h4>

                <div className="section-1">

                        <div className="video-container">
                            <iframe 
                                width="100%" 
                                height="100%" 
                                padding="1%"
                                src="https://www.youtube.com/embed/wQq3ybaLZeA?autoplay=1&loop=1&playlist=wQq3ybaLZeA" 
                                title="YouTube video player" 
                                frameborder="0" 
                                allow="accelerometer;  autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                               
                                >
                            </iframe>
                        </div>
                        <div className="section-1-image-container">
                                <img src="./src/assets/mountain-climber-focus-area.png" alt="Mountain Climber Focus Area" />
                        </div>
                </div>
                <div className='section-2'>
                    <div className="exercise-description">
                        <br></br>
                        <br></br>
                        <h1><b>MOUNTAIN CLIMBER 30S</b></h1>
                        <h5>Start in the push-up position. Bend your right knee towards your chest and keep your left leg straight, then quickly switch from one leg to another. This exercise strengthens multiple muscle groups as shown above.</h5>
                        <div className="row-btns">
                            <i class="fa-sharp fa-solid fa-volume-high -icon" onClick={speakText}></i>
                            <div className='align-btns'>
                            <div className="time">
                                {seconds}s
                            </div>
                                <i class="fa-solid fa-clock -icon" onClick={toggle}></i> 
                                {/* <div className="time">{isActive ? 'Pause' : 'Start'}</div> */}
                            </div>
                        </div>
                    </div>
                    <img src="./src/assets/mountain-climber-muscle-highlight.png" alt="Mountain Climber Muscle Highlight" />
                </div>
            </div>
            <Footer />  
            
        </div>
        </>
    )
}