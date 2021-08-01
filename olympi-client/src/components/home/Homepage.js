import NavbarTop from "./navbarTop/NavbarTop"
import Features from "./Features/Features"
import Intro from "./Intro/Intro"
import HowItWorks from "./HowItWorks/HowItWorks"
import Footer from "./Footer/Footer"

export default function Homepage (props) {
  console.log("user --->", props.user)
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
