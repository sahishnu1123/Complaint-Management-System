import { useState } from 'react'
import { useNavigate } from 'react-router-dom';
const LoginPage = () => {
   
   return(
<>
    <h2><center>WELCOME TO THE COMPLAINT MANAGEMENT PORTAL</center></h2>
    <div class="Header">
        <a class="nav-link" href="#HOME">HOME </a>  <br>
        <a  class="nav-link" href="#ABOUT US"> ABOUT US </a> <br>
        <a  class="nav-link" href="#LOG OUT"> LOG OUT </a> <br>
    </div>
        

    <img src="../images/NicePng_sunrisers-hyderabad-logo-png_2702875.png"height="180" width="300" alt="IIT HYDERABAD"/>  
    <div class="loginbox"<br>
        <label for="UserName    ">    User Name</label><input type="text" id="UserName" name="UserName"><br>
        <label for="UserEmailId "> User emailId</label><input type="email" id="UserEmailId" name="UserEmailId"><br>
        <label for="Userpassword">User password</label><input type="text" id="Userpassword" name="Userpassword"><br>
         <button type="submit">Login</button><br>
       
    
   <a class="nav-link" href="#STUDENT"> REGISTER AS A STUDENT </a> <br>
   <a  class="nav-link" href="#TEAM MEMBER">REGISTER AS A TEAM MEMBER  </a><br> 
   <a  class="nav-link" href="#TEAM HEAD">REGISTER AS A TEAM HEAD  </a><br>
   
    </div>

        
    <div class="FEATURES" > <br>
        
        <h2>
        Our complaint management system registers complaints from students and 
        take steps to resolve them to give better experience. <br>
        Our website offers you special features <br>
       <p> <ul>
         <li>REGISTER A COMPLAINT </li>
         <li>YOU CAN SEE OTHER RESOLVE COMPLAINTS</li>
         <li>CHECK STATUS OF YOUR COMPLAINT AT ANY TIME</li>
         <li> YOU CAN FORWARD THE COMPLAINT TO TEAM HEAD </li>
         <li>SAFE AND SECURE </li>
         <li> EASY AND CONVENIENT TO USE</li>
        </ul></p>

        </h2>

    </div>
</>
           );
        };
         
export default LoginPage;
