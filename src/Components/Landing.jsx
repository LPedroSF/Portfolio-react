import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from "react-router-dom";
import CV from "../Assets/LuisFaria.pdf";
import certificate from "../Assets/Certificate.pdf"
import Contact from './Contact';
import AOS from 'aos';
import 'aos/dist/aos.css';
//Images
import bike from "../Assets/bike.png"
import car from "../Assets/car.png"
import car2 from "../Assets/car-2.png"

AOS.init()

const scaleFactor = 1/20;
document.addEventListener("mousemove", moveBackground)
function moveBackground(event) {
  const icons = document.querySelectorAll(".icon");
  const x = event.clientX * scaleFactor;
  const y = event.clientY * scaleFactor;

  for(let i = 0; i < icons.length; ++i){
      const isOdd = i % 2 !== 0;
      const boolInt = isOdd ? -1 : 1;
      icons[i].style.transform = `translate(${x * boolInt}px, ${y * boolInt}px)`
  }
}

function scrollDown() {
  window.scrollTo(0, 1000)
}

function Landing() {
  return (
    <div onChange={(e) => moveBackground(e)}>
       <header>
        <div className = "header">
          <div data-aos= "fade-up">
            <h1  className = "header__title">Hello!</h1>
            <h1 className = "header__title red__text">I'm Luis Pedro Faria.</h1>
            <p className="header__p"> I'm a <span className="red__text">junior software developer</span> specialising in CSS, JavaScript and React.</p>
          </div>
          <div className="header--icons">
            <Link data-aos="fade-left" data-aos-delay="300" to="https://github.com/LPedroSF" target="_blank" className="header--icons click">
              <FontAwesomeIcon icon="fa-brands fa-github" />
            </Link>
            <Link data-aos="fade-left" data-aos-delay="400" to= {CV} target="_blank" className="header--icons click">
              <FontAwesomeIcon icon="fa-solid fa-file" />
            </Link>
            <Link data-aos="fade-left" data-aos-delay="500" to = {certificate} target="_blank" className="header--icons click">
              <FontAwesomeIcon icon="fa-solid fa-certificate" />
            </Link>
            <Link data-aos="fade-left" data-aos-delay="600" target="_blank" to="https://www.linkedin.com/in/luis-pedro-faria-814824224/" className="header--icons click">
              <FontAwesomeIcon icon="fa-brands fa-linkedin" />
            </Link>
          </div>
        </div>
      </header>
      <button onClick={scrollDown} className="scroll-button">
        <div className="scroll">
          <FontAwesomeIcon icon="fa-solid fa-arrow-down" />
        </div>
      </button>
      <Contact />
      
      <img src= { car } alt='' className='icon icon--0' />
      <img src= { car2 } alt='' className='icon icon--1'  />
      <img src= { bike } alt='' className='icon icon--2' />
      <img src= { car } alt='' className='icon icon--3'  />
      <img src= { bike } alt='' className='icon icon--4' />
      <img src= { car2 } alt='' className='icon icon--5'  />
      <img src= { car2 } alt='' className='icon icon--6' />
      <img src= { bike } alt='' className='icon icon--7'  />
      <img src= { car } alt='' className='icon icon--8' />

    </div>
  )
}

export default Landing