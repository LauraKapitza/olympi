import React from 'react'
import "./Footer.css";
import {Link} from 'react-router-dom';
import InstagramIcon from '@material-ui/icons/Instagram';



function Footer() {
  return (
    <div className= "FooterContainer">
      <div className="FooterLeft">
      <img src="/assets/logos/olympifigure.png" alt="" className="logo"/><img src="/assets/logos/olympiword.png" alt="" className="logo"/>  </div>
        

      <div className="FooterCenterLeft"> 
      <h3>Company</h3>
      <Link to="/team" >Olympi Team</Link>
      
      
      </div>
 
      <div className="FooterCenterRight"> 
      <h3>Resources</h3>
      <Link to="/faq" >FAQ</Link>
      <Link to="/blog" >Blog</Link>
      <Link to="/terms" >Terms & Conditions</Link>
      </div>


      <div id="ContactUs">
      <h3>Contact Us</h3>
      <span>+33 07 66 33 78 48 </span>
      <span>olympi.app@gmail.com</span>
      </div>

      <div className="Instagram">
      <Link to="//www.instagram.com/olympi_app/" ><InstagramIcon/></Link>

      </div>

    </div>




  )
}

export default Footer
