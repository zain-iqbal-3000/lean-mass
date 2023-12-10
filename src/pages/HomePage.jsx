import React from 'react'
// import NavBar from '../components/NavBar';
// import NavBarAfterLogin from '../components/NavBarAfterLogin';
import Footer from '../Footer'
import NavBar from '../components/NavBar'


export default function HomePage() {
    return (
        <>
         {/* <NavBarAfterLogin /> */}
         <NavBar  />
        
         <div className="hero-section">
             <div className="hero-section-text">
                <h1 className=" text-overlay-1"><b>IMPROVE YOURSELF</b></h1>
                <br></br>
                <h2 className=" text-overlay-2"><b>EVERYDAY</b></h2>
            </div>
            <img className='hero-section-img' src="src/assets/man-scrolling-phone.jpeg" alt="man-scrolling-phone" />
        </div>

       <section>
            <div className="filler"></div>
            <div className="sections">
            <h2 className="h2"><b>Feature Highlights</b></h2>
            <h3 className="red"><b>Your personal path to health and fitness</b></h3>
                <div className="section-container">
                    <div className="section-text-container">
                        <p className="section-text lead selector">At LeanMass, we understand that every journey to a healthier you is unique. That's why we offer personalized diet and exercise recommendations tailored to you, your goals, and your preferences. Our comprehensive approach ensures you get the guidance you need to achieve and maintain your fitness objectives.</p>
                    </div>
                    <div className ="section-img-container" >
                        <img className="  rounded  img-fluid" src="src/assets/couple-jogging.jpeg" alt="couple jogging" />
                    </div>
                </div>
            </div>
            <div className="sections">
                <h3 className='red'><b>Calculate your BMI for a healthier you</b></h3>
                <div className="section-container">
                    <div className ="section-img-container" >
                        <img className="  rounded  img-fluid" src="src/assets/man-scrolling-phone-forward.jpeg" alt="couple jogging" />
                    </div>
                    <div className="section-text-container">
                        <p className="section-text lead selector">Discover where you stand on your fitness journey with our easy-to-use BMI calculator. Your Body Mass Index (BMI) is a key indicator of your overall health. Calculate it in seconds and gain valuable insights to kick start your wellness path.  </p>
                    </div>
                </div>
            </div>

            
            <div className="sections">
            <h3 className='red'><b>Master Proper Exercise Techniques with 3D Demonstrations</b></h3>
                
                <div className="section-container">
                    
                    <div className="section-text-container ">
                        <p className="section-text lead selector text-justify">Transform your workouts with our revolutionary 3D exercise demonstrations. Visualize, understand, and perfect your form for a safer and more effective fitness journey. Our comprehensive library ensures you get it right every time.</p>
                    </div>
                    <div className ="section-img-container" >
                    <img className="rounded img-fluid" src="src/assets/exercise-cartoon.jpeg" alt="exercise-cartoon" />
                    </div>
                </div>
            </div>
        </section> 

        <Footer />
           
        </>
    )

}