import React from 'react'
import NavBar from '../components/NavBar';
import Footer from '../Footer'

export default function Contact() {
    return (
        <>  
            <NavBar />

            <div className="contacts-hero-section">
                <img className="rounded img-fluid contacts-hero-section-img" src="src/assets/man-lifting-barbell-straight.jpeg" />
            </div>

            <div className="contact-info">
                <h1 className="red heading-text-align height"><b>CONTACT US</b></h1>
                <div className="contact-container">
                    <div className="indiviual-contact-container">
                        <i class="fa-solid fa-location-dot  fa-2xl"></i>
                        <h4 className="heading-text-align"><b>ADDRESS</b></h4>
                        <p><small>FAST-NU, Lahore</small></p>
                    </div>
                    <div className="indiviual-contact-container">
                        <i class="fa-solid fa-mobile  fa-2xl"></i>
                        <h4 className="heading-text-align"><b>PHONE</b></h4>
                        <p><small>090078601</small></p>
                    </div>
                    <div className="indiviual-contact-container">
                        <i class="fa-regular fa-envelope  fa-2xl "></i>
                        <h4 className="heading-text-align"><b>E-MAIL</b></h4>
                        <p><small>lean.mass@gmail.com</small></p>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}