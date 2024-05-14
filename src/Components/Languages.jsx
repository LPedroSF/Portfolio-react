import React from 'react'
import HTML from "../Assets/html.png"
import CSS from "../Assets/css.png"
import JS from "../Assets/javascript.png"
import react from "../Assets/react.png"
import Java from "../Assets/java.png"
import Py from "../Assets/Python.png"
import Cpp from "../Assets/cpp.png"

import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init()

function Languages() {
  return (
    <section id="languages">
      <div data-aos="fade-up" className="container">
        <div className="row">
          <h1 className ="title">These are the <span className="red__text">languages</span> I know. </h1>
          <div className = "languages">
            <figure data-aos="fade-left" data-aos-duration="1000" data-aos-delay="100" className = "language">
              <img className = "language--img" src= { HTML } alt = "HTML" />
              <h3 className="language__name">HTML</h3>
            </figure>
            <figure data-aos="fade-left" data-aos-duration="1000" data-aos-delay="200" className = "language">
              <img className = "language--img" src= {CSS} alt = "CSS" />          
              <h3 className="language__name">CSS</h3>
            </figure>
            <figure data-aos="fade-left" data-aos-duration="1000" data-aos-delay="300" className = "language">
              <img className = "language--img" src= {JS} alt = "JavaScript" />
              <h3 className="language__name">JavaScript</h3>
            </figure>
            <figure data-aos="fade-left" data-aos-duration="1000" data-aos-delay="400" className = "language">
              <img className = "language--img" src= {react} alt = "React" />
              <h3 className="language__name">React</h3>
            </figure>
            <figure data-aos="fade-left" data-aos-duration="1000" data-aos-delay="500" className = "language">
              <img className = "language--img" src= {Java} alt = "Java" />
              <h3 className="language__name">Java</h3>
            </figure>
            <figure data-aos="fade-left" data-aos-duration="1000" data-aos-delay="100" className = "language">
              <img className = "language--img" src= {Py} alt = "Python" />
              <h3 className="language__name">Python</h3>
            </figure>
            <figure data-aos="fade-left" data-aos-duration="1000" data-aos-delay="200" className = "language">
              <img className = "language--img" src= {Cpp} alt = "C++" />
              <h3 className="language__name ">C++</h3>
            </figure>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Languages