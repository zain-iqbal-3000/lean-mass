import React from "react";
import NavBarAfterLogin from "../components/NavBarAfterLogin";
import Footer from "../Footer";
import {Link} from 'react-router-dom'
import MountainClimber from "./MountainClimber";

export default function Monday(){

    return(

        <>
          <NavBarAfterLogin />
       
        <section className="monday">
            <div className='exercises-container'>
                <h4><b><Link to="/ExerciseWeek">Exercise</Link> &#10148; <span className='red' href="./Monday.jsx">Monday</span></b></h4>
                <div className='exercises'>

                    <div className="days-container">
                        <Link to="/MountainClimber"><h1><b>Mountain Climber<span className='grey'>  2X30S</span></b></h1></Link>
                        <h1  className='arrow-btn'> &#10148; </h1>
                    </div>
                        
                        <hr></hr>

                    <div className="days-container">
                        <Link to="/PushUp"><h1><b>Pushups<span className='grey'>   2X10</span></b></h1></Link>
                        <h1  className='arrow-btn'> &#10148; </h1>
                    </div>
                        <hr></hr>

                    <div className="days-container">
                        <Link to="/FloorTricepDips"><h1><b>Floor Tricep Dips<span className='grey'>     2X12</span></b></h1></Link>
                        <h1  className='arrow-btn'> &#10148; </h1>
                    </div>
                </div>
            </div>

        </section>
        <Footer />
        </>
    )
}