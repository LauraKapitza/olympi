import React from 'react'
import styled from 'styled-components';
import { HashLink as Link } from 'react-router-hash-link';


const Ul = styled.ul`
  list-style: none;
  display: flex;
  flex-flow: row nowrap;
  li {
    padding: 18px 10px;
    display: flex;
    align-items: center;
    order: 3;
  }

  .auth-nav-button:first-child{
      margin-left: 40px;
    }  

  li.auth-nav-button a{
    background-color: #E41E1E;
    padding: 15px 10px;
    border-radius: 10px;
    color: white;
  }
  @media (max-width: 768px) {
    flex-flow: column nowrap;
    background-color: #E41E1E;
    position: fixed;
    transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(100%)'};
    top: 0;
    right: 0;
    height: 100vh;
    width: 250px;
    padding-top: 1.5rem;
    transition: transform 0.3s ease-in-out;
    li {
      color: #ffff;
    }

    li a{
      color: #ffff;
      hover: black;
      
    }

    li a:hover {
     color: #ec6262;
    }

    li.auth-nav-button{
      order: 1;
      margin-left: 0;
    }
    li.auth-nav-button:nth-child(1){
      order: 2;
    }

    li.auth-nav-button a{
      background-color: transparent;
      padding: 0;
      border-radius: none;
      color: inherit;
    }
    }
  }
`;

const RightNav = ({ open }) => {
  return (
    <Ul open={open}>
      <li><Link to ="/#Features">Features</Link></li>
      <li><Link to ="/#HowItWorks">How it works</Link></li>
      <li><Link to ="/#Reviews">Reviews</Link></li>
      {/* <li><Link to="/about">About</Link></li> */}
      {/* <li><Link to="/professionals">For Professionals</Link></li> */}
      {/* <li><Link to="/definitions">Tag Definitions</Link></li> */}
      {/* <li><Link to="/team">Team</Link></li> */}
      {/* <li><Link  to="/faq">FAQ</Link></li> */}
      <li><Link to ="/#ContactUs">Contact Us</Link></li>
      <li className="auth-nav-button"><Link  to="/signup">Sign up</Link></li>
      <li className="auth-nav-button"><Link to="/login">Log in</Link></li>
      
      
      


    </Ul>
  )
}

export default RightNav
