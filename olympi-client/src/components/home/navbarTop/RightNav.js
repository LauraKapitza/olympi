import "./RightNav.css"
import React from 'react'
import {Link} from 'react-router-dom';
import styled from 'styled-components';

const Ul = styled.ul`
  list-style: none;
  display: flex;
  flex-flow: row nowrap;
  li {
    padding: 18px 10px;
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

    li a {
      color: #ffff;
      hover: black;
      
    }

    li a:hover {
     color: #ec6262;
  }
    }
  }
`;

const RightNav = ({ open }) => {
  return (
    <Ul open={open}>
      <li>How it Works</li>
      <li>Features</li>
      <li><Link  to="/signup">FAQ</Link></li>
      <li><Link to="/definitions">Tag Definitions</Link></li>
      <li><Link to="/professionals">For Professionals</Link></li>
      <li><Link to="/about">About</Link></li>
      <li><Link to="/team">Team</Link></li>
      <li><Link  to="/signup">Sign up</Link></li>
      <li><Link to="/login">Log in</Link></li>
      
      


    </Ul>
  )
}

export default RightNav
