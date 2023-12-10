import React from "react";
import { useRef } from "react";
import NavBarAfterLogin from "../components/NavBarAfterLogin";
import {Link } from "react-router-dom";
import Footer from "../Footer";

export default function PushUp(){
    const synthRef = useRef(window.speechSynthesis);

    const speakText = () => {
      const utterThis = new SpeechSynthesisUtterance("Lay prone on the ground with arms supporting your body. Keep your body straight while raising and lowering your body with your arms. This exercise works the chest, shoulders, triceps.");
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
                        <span className='red'>Pushup</span>
                    </b>
                </h4>

                <div className="section-1">

                        <div className="video-container">
                            <iframe 
                                width="100%" 
                                height="100%" 
                                padding="1%"
                                src="https://www.youtube.com/embed/R08gYyypGto?autoplay=1&loop=1&playlist=R08gYyypGto"
                                title="YouTube video player" 
                                frameborder="0" 
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                                allowfullscreen>
                            </iframe>
                        </div>
                        <div className="section-1-image-container">
                                <img src="./src/assets/pushup-focus-area.png" alt="Pushup Focus Area" />
                        </div>
                </div>
                <div className='section-2'>
                    <div className="exercise-description">
                        <br></br>
                        <br></br>
                        <h1><b>Pushup 2X10</b></h1>
                        <h5>Lay prone on the ground with arms supporting your body. Keep your body straight while raising and lowering your body with your arms. This exercise works the chest, shoulders, triceps.</h5>
                        <i class="fa-sharp fa-solid fa-volume-high -icon" onClick={speakText}></i>
                    </div>
                    <img src="./src/assets/pushup-muscle-highlight.png" alt="Pushup Muscle Highlight" />
                </div>
            </div>  
            <Footer />
        </div>
        </>
    )
}