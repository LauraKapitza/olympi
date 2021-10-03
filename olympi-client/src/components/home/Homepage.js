import NavbarTop from "./navbarTop/NavbarTop";
import Features from "./Features/Features";
import Intro from "./Intro/Intro";
import HowItWorks from "./HowItWorks/HowItWorks";
import Footer from "./Footer/Footer";
import Reviews from "./Reviews/Reviews";
import './Homepage.css';

export default function Homepage (props) {
  return (
    <>
      <NavbarTop/>
      <div className="homeContainer">
        <Intro/>
        <Features/>
        <HowItWorks/>
        <Reviews/>
        <Footer/>
      </div>
    </>
  )
}
