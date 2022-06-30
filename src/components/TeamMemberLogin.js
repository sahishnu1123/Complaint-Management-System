import { useState } from 'react'
import { useNavigate } from 'react-router-dom';
const TeamMember = () => {
   
   return(
<>
   <div class="title">
            <h1><center>WELCOME TO YOUR PORTAL</center></h1>
        </div>
        <div class="Header">
            <a class="nav-link" href="#HOME">HOME </a>  <br>
            <a  class="nav-link" href="#ABOUT US"> ABOUT US </a> <br>
            <a  class="nav-link" href="#LOG OUT"> LOG OUT </a> <br> 
            </div>
          
        
        <img src="../images/NicePng_sunrisers-hyderabad-logo-png_2702875.png"height="180" width="300"/>
        <div class="main">
        <h2>PENDING COMPLAINTS</h2>
        <button type="CLICK">CLICK</button><br>
               
        <h2>RESOLVED COMPLAINTS</h2>
        <button type="CLICK">CLICK</button><br>
    </div>
</>
           );
        };
         
export default TeamMember;
