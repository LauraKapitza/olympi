import React from 'react'
import Footer from '../../Footer/Footer'
import NavbarTop from '../../navbarTop/NavbarTop'
import { Link} from 'react-router-dom'
import "./Blog.css"



function Blog() {
  return (
    <div>
      <NavbarTop/>

      <div className="BlogContainer">
      <div className="BlogNavigation"><Link to="/">Home</Link> {'>'} <Link to="/blog">Blog</Link>  </div>    


<h1><img src="/assets/logos/olympiword.png"></img>Blog</h1>
<h2>What is "elite" and what should you aim for? </h2>
While weightlifting can be very rewarding as you can prove that you get stronger week after week, the question of "where is this going?" and "what should I aim for?" will inevitably pop up. In other sports, progress is subjective and can be measured by making a specific team, being able to compete in an advanced league or improving a certain technique. For those of us who want to level up, but aren't necessarily looking to become olympians we provide this chart as a suggestion for your benchmarks. 

Based on data from <Link to="//strengthlevel.com/strength-standards/male/kgStrengthLevel.com">StrengthLevel.com</Link> here's how weightlifters from different ages, weight, and strength perform on average. 
You can now reach for a goal based on realistic expectations for a body of your size and gender. 


</div>


     <Footer/>

    </div>
  )
}

export default Blog
