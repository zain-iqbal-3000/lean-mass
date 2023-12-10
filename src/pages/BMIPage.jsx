import React from 'react';
import { useState, useEffect } from 'react';
import NavBar from '../components/NavBar';
import {Link } from 'react-router-dom';
import Footer from '../Footer';
import './DietPage';
import './LogInPage';

const LoadingScreen = () => (
  <div className="loading-screen">
      <img src="src/assets/lean-mass-logo.png" className="pulsing-element" />
    <h1><b>Calculating your bmi...</b></h1>
  </div>
);



const BMIChart = ({ bmi }) => {

    
    const categories = [
      { range: { min: 0, max: 18.4 }, label: 'Underweight', color: 'blue' },
      { range: { min: 18.5, max: 24.9 }, label: 'Normal weight', color: 'green' },
      { range: { min: 25, max: 29.9 }, label: 'Overweight', color: 'orange' },
      { range: { min: 30, max: Infinity }, label: 'Obese', color: 'red' },
    ];
  
    const selectedCategory = categories.find((category) => bmi >= category.range.min && bmi <= category.range.max);
   


    return (
      <>
      
      <div className="bmi-chart">
         
        {bmi && (
          <div style={{ color: selectedCategory.color }}>
            <img src="src/assets/bmi-chart.jpg" alt="BMI Chart" />
            <h2>
              You are <strong>{selectedCategory.label}</strong>
            </h2>
            <div className='bmi-chart-buttons'>
              <button className='exercise-btn'><Link to="/LogInPage">Start Exercising</Link></button>
              <button className='diet-btn'><Link to="/DietPage">Start Dieting</Link></button>
            </div>
          </div>
        )}
      </div>
      </>
    );
  };

export default function BMIPage({bmi, setBMI}) {
  const [age, setAge] = useState(0);
  const [weight, setWeight] = useState();
  const [height, setHeight] = useState();
  const [isLoading, setIsLoading] = useState(false);



  const calculateBMI = () => {
    setIsLoading(true);
    const heightInMeters = height.includes('cm') ? parseFloat(height) / 100 : parseFloat(height);
    const calculatedBMI = weight / (heightInMeters * heightInMeters);
    const roundedBMI = calculatedBMI.toFixed(2);

    setBMI(roundedBMI);
    

  };

  const handleAgeChange = (e) => {
    setAge(e.target.value);
  };

  const handleWeightChange = (e) => {
    setWeight(e.target.value);
  };

  const handleHeightChange = (e) => {
    setHeight(e.target.value);
  };


  useEffect(() => {
    if(isLoading){
      setTimeout(() => {
        setIsLoading(false);
      }, 4000); 
    }
  }, [isLoading]);

  return (  
    <>
   {isLoading ? (
        <LoadingScreen />
      ) :
      <>
      <NavBar />
      <div className="bmi-section">
        <div className="bmi-section-container">
          <h1 className="heading-text-align">
            <b>BMI Calculator</b>
          </h1>

          <h3 className="bmi-page-label red">
            <b>Age</b>
          </h3>
          <div className="age-input">
            <select className="form-select" id="inputGroupSelect02" value={age} onChange={handleAgeChange}>
            <option selected>Age...</option>
                            <option value="1">18</option>
                            <option value="2">19</option>
                            <option value="3">20</option>
                            <option value="4">21</option>
                            <option value="5">22</option>
                            <option value="6">23</option>
                            <option value="7">24</option>
                            <option value="8">25</option>
                            <option value="9">26</option>
                            <option value="10">27</option>
                            <option value="11">28</option>
                            <option value="12">29</option>
                            <option value="13">30</option>
                            <option value="14">31</option>
                            <option value="15">32</option>
                            <option value="16">33</option>
                            <option value="17">34</option>
                            <option value="18">35</option>
                            <option value="19">36</option>
                            <option value="20">37</option>
                            <option value="21">38</option>
                            <option value="22">39</option>
                            <option value="23">40</option>
            </select>
          </div>

          <h3 className="bmi-page-label red">
            <b>Weight</b>
          </h3>
          <div className="weight-input">
            {/* ... (radio buttons for weight units) */}
            <input
              className="form-control"
              aria-label="With textarea"
              placeholder="80kg/120lb..."
              value={weight}
              onChange={handleWeightChange}
            />
          </div>

          <h3 className="bmi-page-label red">
            <b>Height</b>
          </h3>
          <div className="height-input">
            <input
              className="form-control"
              aria-label="With textarea"
              placeholder="1.5m"
              value={height}
              onChange={handleHeightChange}
            />
          </div>

          <div className="calculate-button">
            <button type="button" className="btn btn-danger" onClick={calculateBMI}>
              Calculate
            </button>
          </div>

          <h3 className="bmi-page-label red">
            <b>BMI</b>
          </h3>
          <div className="height-input">
            <textarea className="form-control" aria-label="With textarea" placeholder="25..." value={bmi} />
          </div>
          {bmi && <BMIChart bmi={parseFloat(bmi)} />}
        </div>
      </div>
      <Footer />
      </>}

    </>
  )

}