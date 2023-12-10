import React, { useState } from 'react';
import NavBar from '../components/NavBar';
import Footer from '../Footer';

export default function FAQPage() {
  const [q1, setQ1] = useState(false);
  const [q2, setQ2] = useState(false);
  const [q3, setQ3] = useState(false);
  const [q4, setQ4] = useState(false);
  const [q5, setQ5] = useState(false);

  const q1Answer = () => setQ1(!q1);
  const q2Answer = () => setQ2(!q2);
  const q3Answer = () => setQ3(!q3);
  const q4Answer = () => setQ4(!q4);
  const q5Answer = () => setQ5(!q5);

  const AnswerComponent = ({ show, children }) => show && <div className="answer">{children}</div>;

  return (
    <>
      <NavBar />
      <div className="faq-page">
        <h1 className="faq-heading"><b>
          Frequently Asked<span className="red">
            <br />
            Questions
          </span>
          </b>
        </h1>
        <p className="faq-description">Do you need some help with something or do you have some questions on some features</p>
        <section className="faq-question-section">
          <div className="q1">
            <h1><b>What is LeanMass?</b></h1>
            <h1 onClick={q1Answer} className='plus-btn'>+</h1>
            </div>
            <AnswerComponent show={q1}>Lean mass is a fitness web app designed to make exercising easily accessible to all. It calculates your BMI and provides you a personalized fitness and nutrition plan to help you become your best self.</AnswerComponent>
            <hr></hr>
          <div className="q2">
            <h1><b>What is BMI, and why is it Important?</b></h1>
            <h1 onClick={q2Answer} className='plus-btn'>+</h1>
            </div>
            <AnswerComponent show={q2}>BMI is a numerical value of a person's weight in relation to their height. It is calculated by dividing a person's weight in kilograms by the square of their height in meters. BMI is important as it provides a quick and easy screening method to identify possible weight-related health issues.</AnswerComponent>
            <hr></hr>

          <div className="q3">
            <h1><b>How do Personalized Recommendations work?</b></h1>
            <h1 onClick={q3Answer} className='plus-btn'>+</h1>
            </div>
            <AnswerComponent show={q3}>Personalized recommendations in your fitness app likely involve analyzing the user's BMI, along with other input data, to tailor fitness and diet suggestions based on their specific goals and health conditions. This could include exercise routines, dietary plans, and lifestyle adjustments to support their journey towards a healthier lifestyle.</AnswerComponent>
            <hr></hr>

          <div className="q4">
            <h1><b>What type of exercises are in the library?</b></h1>
            <h1 onClick={q4Answer} className='plus-btn'>+</h1>
            </div>
            <AnswerComponent show={q4}>The exercise library in your app likely encompasses a variety of exercises catering to different fitness levels and goals. This may include cardiovascular exercises, strength training, flexibility exercises, and more. The incorporation of 3D models can enhance the user experience by visually demonstrating proper techniques and form.</AnswerComponent>
            <hr></hr>

          <div className="q5">
            <h1><b>Is LeanMass free to use?</b></h1>
            <h1 onClick={q5Answer} className='plus-btn'>+</h1>
            </div>
            <AnswerComponent show={q5}>Yes, LeanMass is completely free to use. All you have to do is sign up on the web app and start improving.</AnswerComponent>

        </section>
      </div>
      <Footer />
    </>
  );
}
