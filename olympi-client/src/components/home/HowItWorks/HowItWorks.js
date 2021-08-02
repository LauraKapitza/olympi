import React from 'react'
import "./HowItWorks.css";
import LooksOneRoundedIcon from '@material-ui/icons/LooksOneRounded';
import LooksTwoRoundedIcon from '@material-ui/icons/LooksTwoRounded';
import Looks3RoundedIcon from '@material-ui/icons/Looks3Rounded';
import Looks4RoundedIcon from '@material-ui/icons/Looks4Rounded';
import Looks5RoundedIcon from '@material-ui/icons/Looks5Rounded';
import Looks6RoundedIcon from '@material-ui/icons/Looks6Rounded';
import ArrowDownwardRoundedIcon from '@material-ui/icons/ArrowDownwardRounded';
import ReplayRoundedIcon from '@material-ui/icons/ReplayRounded';

function HowItWorks() {
  return (
    <div className="HowItWorksContainer">


<div class="custom-shape-divider-top-1627919333">
    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" class="shape-fill"></path>
    </svg>
</div> 

      
<div className="titleHowitWorks"> <h3>How it Works</h3></div>
    <div className="StepsList">


    <div className="Step 1">
     <h3 className="StepTitle"><LooksOneRoundedIcon/>Upload and describe your video</h3> 
     <div className="stepPhoto"><img src="/assets/icons/athlete.svg"></img><img src="/assets/icons/upload.svg"></img></div>
     </div>

 


     <div className="arrowIcon"><ArrowDownwardRoundedIcon/></div>

    <div className="Step 2">
    <h3 className="StepTitle"><LooksTwoRoundedIcon/>Get feedback from other weightlifters around the world</h3> 
    <div className="stepPhoto"><img src="/assets/icons/opinion.svg"></img> </div>
     </div>

     <div className="arrowIcon"><ArrowDownwardRoundedIcon/></div>

    <div className="Step 3">
    <h3 className="StepTitle"><Looks3RoundedIcon/>Ask for detailed help from a professional</h3> 
    <div className="stepPhoto"><img src="/assets/icons/coach.svg"></img> </div>
    </div>

    <div className="arrowIcon"><ArrowDownwardRoundedIcon/></div>
    <div className="Step 4">
    <h3 className="StepTitle"><Looks4RoundedIcon/>Help other lifters by tagging their videos</h3> 
    <div className="stepPhoto"><img src="/assets/icons/tutorial.svg"></img> </div>
     </div>

     <div className="arrowIcon"><ArrowDownwardRoundedIcon/></div>

    <div className="Step 5">
    <h3 className="StepTitle"><Looks5RoundedIcon/>Update your profile to share your progress</h3> 
    <div className="stepPhoto"><img src="/assets/icons/growth (1).svg"></img> </div>
     </div>
    

     <div className="arrowIcon"><ArrowDownwardRoundedIcon/></div>

    <div className="Step 6">
    <h3 className="StepTitle"><Looks6RoundedIcon/>Go at it again tomorrow</h3> 
    <div className="stepPhoto"><img src="/assets/icons/weightlift.svg"></img> </div>
    </div>
    
    <div className="arrowIcon"><ReplayRoundedIcon/></div>



    </div>




    </div>
  )
}

export default HowItWorks
