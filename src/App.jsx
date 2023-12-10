import React from 'react'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import { useState } from 'react'
import './App.css'
import './styles.scss'
import './index.css'
import HomePage from './pages/homePage'
import BMIPage from './pages/BMIPage'
import Contact from './pages/Contact'
import FAQPage from './pages/FAQPage'
import ProfilePage from './pages/ProfilePage'
import MountainClimber from './pages/MountainClimber'
import PushUp from './pages/PushUp'
import FloorTricepDips from './pages/FloorTricepDips'
import ExerciseWeek from './pages/ExerciseWeek'
import Monday from './pages/Monday'
import NutritionPage from './pages/NutritionPage'
import LoginPage from './pages/LogInPage'


import '@fortawesome/fontawesome-free/css/all.css';

function App() {
  const [count, setCount] = useState(0)
  const [bmi, setBMI] = useState('')
  const [loggedIn, setLoggedIn] = useState(false)

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />}/>
        <Route path="/ExerciseWeek" element={<ExerciseWeek />}/>
        <Route path="/BMIPage" element={<BMIPage bmi={bmi} setBMI={setBMI} />}/>
        <Route path="/Contact" element={<Contact />}/>
        <Route path="/FAQPage" element={<FAQPage />}/>
        <Route path="/Monday" element={<Monday />}/>
        <Route path="/MountainClimber" element={<MountainClimber />}/>
        <Route path="/PushUp" element={<PushUp />}/>
        <Route path="/NutritionPage" element={<NutritionPage bmi={bmi} />}/>
        <Route path="/FloorTricepDips" element={<FloorTricepDips />}/>
        <Route path="/LoginPage" element={<LoginPage  loggedIn={loggedIn} setLoggedIn={setLoggedIn}/>}/>
      </Routes>
    </BrowserRouter>

  )
}

export default App
