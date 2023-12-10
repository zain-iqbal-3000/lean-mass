import React from "react";
import NavBarAfterLogin from "../components/NavBarAfterLogin";
import Footer from "../Footer";
import {Link} from 'react-router-dom'

export default function ExerciseWeek(){
    return(
        <>
        
        <section className="exercise-week-section">
        <NavBarAfterLogin />  
          
           <div className='exercise-week-container'>
            <h1 className='red'><b>Exercise</b></h1>
            <hr></hr>
          <div className="days-container">
           <Link to="/Monday"><h1><b>Monday</b></h1></Link>
            <h1  className='arrow-btn'> &#10148; </h1>
            </div>
            
            <hr></hr>

          <div className="days-container">
            <h1><b>Tuesday</b></h1>
            <h1  className='arrow-btn'> &#10148; </h1>
            </div>
           
            <hr></hr>

          <div className="days-container">
            <h1><b>Wednesday</b></h1>
            <h1  className='arrow-btn'> &#10148; </h1>
            </div>
            
            <hr></hr>

          <div className="days-container">
            <h1><b>Thursday</b></h1>
            <h1  className='arrow-btn'> &#10148; </h1>
            </div>
            <hr></hr>

           <div className="days-container">
                <h1><b>Friday</b></h1>
                <h1  className='arrow-btn'> &#10148; </h1>
            </div>
            </div>

        </section>
        <Footer />
        </>
    )
}