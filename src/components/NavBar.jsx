import React from 'react'
import { Link } from 'react-router-dom'
import { Outlet } from 'react-router-dom'

export default function NavBar(){

    return(
        <>
         <div className = 'Navbar'>
              <Link to="/"><img src='src/assets/lean-mass-logo.png' alt='Lean Mass Logo' /></Link>
              <div class="navbar-pages">
                  <Link to="/"       className={`navbar-link ${location.pathname === '/' ? 'underline' : ''}`}>Home</Link>
                  <Link to="/Contact"className={`navbar-link ${location.pathname === '/Contact' ? 'underline' : ''}`}>Contact</Link>
                  <Link to="/FAQPage"className={`navbar-link ${location.pathname === '/FAQPage' ? 'underline' : ''}`}>FAQ</Link>
                  <Link to="/BMIPage"className={`navbar-link ${location.pathname === '/BMIPage' ? 'underline' : ''}`}>BMI</Link>
                </div>
            <Link to="/LoginPage"><button>Start Improving</button></Link>

        </div>
        <Outlet />
        </>
    )
}
