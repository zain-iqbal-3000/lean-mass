import React from "react";
import NavBar from '../components/NavBar';
import Footer from "../Footer";

export default function BMIPage({bmi}){
    return(
            <>  <NavBar />
                <div className='diet-page'>
                    <div className='diet-page-container'>
                        <h1><b>NUTRITION PLAN</b></h1>
                        {bmi <= 18.5 ?<img src="src/assets/chart-underweight.jpeg" alt="BMI Chart" /> : 
                        bmi <= 24.9 ? <img src="src/assets/chart-normal.jpeg" alt="BMI Chart" /> :  
                        bmi <= 29.9 ? <img src="src/assets/chart-overweight.jpeg" alt="BMI Chart" /> :
                        bmi >= 30 ? <img src="src/assets/chart-obese.jpeg" alt="BMI Chart" /> : null
                        }

                    </div>
                </div>
                <Footer />
            </>
    )
}