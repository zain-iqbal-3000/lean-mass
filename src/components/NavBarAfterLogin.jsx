import React from 'react'
import { Link } from 'react-router-dom'
import { Outlet } from 'react-router-dom'

export default function NavBarAfterLogin(){

    return(
        <>
         <div className = 'Navbar'>
              <Link to="/"><img src='src/assets/lean-mass-logo.png' alt='Lean Mass Logo' /></Link>
              <div class="navbar-pages">
                  <Link to="/BMIPage"className={`navbar-link ${location.pathname === '/BMIPage' ? 'underline' : ''}`}>BMI</Link>
                  <Link to="/ExerciseWeek" className={`navbar-link ${location.pathname === '/ExerciseWeek' ? 'underline' : ''}`}>Exercises</Link>
                  <Link to="/NutritionPage"className={`navbar-link ${location.pathname === '/NutritionPage' ? 'underline' : ''}`}>Nutrition</Link>
                  <Link to="/Contact"className={`navbar-link ${location.pathname === '/Contact' ? 'underline' : ''}`}>Contacts</Link>
                </div>
            <Link to="/ProfilePage"><i class="fa-solid fa-user -icon"></i></Link>

        </div>
        <Outlet />
        </>
    )
}
