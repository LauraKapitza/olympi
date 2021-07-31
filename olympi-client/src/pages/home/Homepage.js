import NavbarTop from "../../components/navbarTop/NavbarTop"
import Features from "../../components/Features/Features"
import Intro from "../../components/Intro/Intro"
import HowItWorks from "../../components/HowItWorks/HowItWorks"
import Footer from "../../components/Footer/Footer"

export default function Homepage () {
  return (
    <>
    <NavbarTop/>
    <div className="homeContainer">
    <Intro/>
    <Features/>
    <HowItWorks/>
    <Footer/>
    </div>

    </>
  )
}
