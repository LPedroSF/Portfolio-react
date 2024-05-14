import React from 'react'
import Project from "./Project"
import bl from "../Assets/Book.png"
import ultra from "../Assets/Ultraverse.png"
import twitter from "../Assets/twitter.png"
import inv from "../Assets/Python.png"

function Projects() {
  return (
    <section id="projects">
      <div className="container">
        <h1 className ="title">My <span className ="red__text">Projects</span></h1>
        <div className="projects">
          <Project img = {inv} title = "Invoice Calculator" description = "Calculate the total amount of your Amazon invoices" link = "https://github.com/LPedroSF/Amazon-Invoice-Reader" />
          <Project img = { ultra } title ="ULTRAVERSE" description = "Online NFT marketplace." link = "https://luis-internship-lpedrosf.vercel.app" git="https://github.com/LPedroSF/luis-internship"/>      
          <Project img= { twitter } title="Twitter Clone" description="Twitter Clone connected to a database. Go and leave a nice message!" link="https://twitter-clone-rouge-seven.vercel.app/" git="https://github.com/LPedroSF/twitter-clone"/>
          <Project img = { bl } title = "Book Library" description = "A Library where you can browse books." link="https://book-library-hazel.vercel.app" git="https://github.com/LPedroSF/book-library"/>
        </div>
      </div>
    </section>
  )
}

export default Projects