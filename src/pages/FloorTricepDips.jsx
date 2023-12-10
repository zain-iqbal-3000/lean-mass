import React from "react";
import { useRef } from "react";
import NavBarAfterLogin from "../components/NavBarAfterLogin";
import {Link } from "react-router-dom";
import Footer from "../Footer";


export default function FloorTricepDips(){
    const synthRef = useRef(window.speechSynthesis);

  const speakText = () => {
    const utterThis = new SpeechSynthesisUtterance("Sit on the floor with your knees bent and feet flat on the floor. Put your hands beneath your shoulders with your fingers pointing toward your hips. Lift your hips off the floor. Then bend and extend your elbows to lower and lift your hips. Repeat the exercise to strengthen your upper arms and back.");
    synthRef.current.speak(utterThis);
  };
    return(
        <>
        <NavBarAfterLogin />
        <div className="mountain-climber-page">
            <div className="mountain-climber-container">
                
                <h4>
                    <b>
                        <Link to="/ExerciseWeek">Exercise &#10148;</Link> 
                        <span><Link to="/Monday">Monday &#10148;</Link></span>
                        <span className='red'>Floor Tricep Dips</span>
                    </b>
                </h4>

                <div className="section-1">
 
                        <div className="video-container">
                            <iframe 
                                width="100%" 
                                height="100%" 
                                padding="1%"
                                src="https://www.youtube.com/embed/geNkbcZ6qDo?autoplay=1&loop=1&playlist=geNkbcZ6qDo" 
                                title="YouTube video player" 
                                frameborder="0" 
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                                allowfullscreen>
                            </iframe>
                        </div>
                        <div className="section-1-image-container">
                                <img src="./src/assets/floortricepdips-focus-area.png" alt="Mountain Climber Focus Area" />
                        </div>
                </div>
                <div className='section-2'>
                    <div className="exercise-description">
                        <br></br>
                        <br></br>
                        <h1><b>Floor Tricep Dips 2X12</b></h1>
                        <h5>Sit on the floor with your knees bent and feet flat on the floor. Put your hands beneath your shoulders with your fingers pointing toward your hips. Lift your hips off the floor. Then bend and extend your elbows to lower and lift your hips. Repeat the exercise to strengthen your upper arms and back.</h5>
                        <i class="fa-sharp fa-solid fa-volume-high -icon" onClick={speakText}></i>
                    </div>
                    <img src="./src/assets/floortricepdips-muscle-highlight.png" alt="Mountain Climber Muscle Highlight" />
                </div>
            </div>
                
            <Footer />
        </div>
        </>
    )
}