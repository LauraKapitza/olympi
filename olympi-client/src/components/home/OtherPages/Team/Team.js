import React from 'react'
import NavbarTop from '../../navbarTop/NavbarTop'
import "./Team.css"
import {Link} from "react-router-dom"
import Footer from '../../Footer/Footer'

function Team() {
  return (
    <>
    <div className="TeamContainer">
 <NavbarTop/>
  <div className="pagesNavigation"><Link to="/">Home</Link> {'>'} <Link to="/team">Team</Link>  </div>    
  <div className="TeamTitle"><h1>Meet Team Olympi</h1></div>
  <div className="Teammates">
  <div className="Karina"><span>Karina Gonzalez</span><img src="/assets/photos/karinaphoto.jpeg" alt="" /></div>
  <div className="Laura"><span> Laura Kapitza</span><img src="/assets/photos/lauraphoto.jpeg" alt=""/></div>
  <div className="Sandra"><span>Sandra Gonzalez</span><img src="/assets/photos/sandraphoto.jpeg" alt=""/></div>
  </div>
  <div className="Description">
This project began during the <Link to="//www.ironhack.com/en">Ironhack Part-Time Web Development Bootcamp</Link> in Paris 2021.
The developers behind the scenes were <Link to="//www.linkedin.com/in/laura-kapitza"> Laura Kapitza</Link> and <Link to="//www.linkedin.com/in/karinags"> Karina Gonzalez</Link>. The subject-matter expert and professional weightlifter is <Link to="//www.linkedin.com/in/sandragonzalezsanchez/">Sandra Gonzalez</Link>. Whoever said women do not like weightlifting was wrong ;) 
</div>

<img src="assets/icons/womanlifting.png" alt=""></img>

    </div>
    <Footer/> </>
  )
}

export default Team