import { useState } from 'react'
import { useNavigate } from 'react-router-dom';
const StudentLogin = () => {
   
   return(
<>
     <div class="Header">
        <a class="nav-link" href="#HOME">HOME </a>  <br>
        <a  class="nav-link" href="#ABOUT US"> ABOUT US </a> <br>
        <a  class="nav-link" href="#LOG OUT"> LOG OUT </a> <br> 
        </div>

    <img src="../images/NicePng_sunrisers-hyderabad-logo-png_2702875.png"height="180" width="300"/>
  
   > 

  <div >
    <h2><center>REGISTERATION OF THE COMPLAINT</center></h1>
  </div>
<div >
  <h2> TOPIC OF THE COMPLAINT </h2>
<form>
  <input type="radio" id="Sexual Abuse" name="Complaint_Name" value="Sexual Abuse">
  <label for="Sexual Abuse">Sexual Abuse</label><br>
  <input type="radio" id="Ragging or Bullying" name="Complaint_Name" value="Ragging or Bullying">
  <label for="Ragging or Bullying">Ragging or Bullying</label><br>
  <input type="radio" id="IITH AIMS Course Registration Issue" name="Complaint_Name" value="IITH AIMS Course Registration Issue">
  <label for="IITH AIMS Course Registration Issuejavascript">IITH AIMS Course Registration IssueJavaScript</label><br>
  <input type="radio" id="Mail Related Issue" name="Complaint_Name" value="Mail Related Issue">
  <label for="Mail Related Issue">Mail Related Issue</label><br>
  <input type="radio" id="IITH AIMS/AIMS Login Issue" name="Complaint_Name" value="IITH AIMS/AIMS Login Issue">
  <label for="IITH AIMS/AIMS Login Issue">IITH AIMS/AIMS Login Issue</label><br>
  <input type="radio" id="Fees Related Issue" name="Complaint_Name" value="Fees Related Issue">
  <label for="Fees Related Issue">Fees Related Issue</label><br>
  <input type="radio" id="Lost your Items" name="Complaint_Name" value="Lost your Items">
  <label for="Lost your Items">Lost your Items</label><br>
  <input type="radio" id="Construction and Maintenance" name="Complaint_Name" value="Construction and Maintenance">
  <label for="Construction and Maintenance">Construction and Maintenance</label><br>
  <input type="radio" id="Softwares/Scientific Software Issues" name="Complaint_Name" value="Softwares/Scientific Software IssuesJavaScript">
  <label for="Softwares/Scientific Software Issuesjavascript">Softwares/Scientific Software IssuesJavaScript</label><br>
  <input type="radio" id="Website/Institute Website" name="Complaint_Name" value="Website/Institute Website">
  <label for="Website/Institute Website">Website/Institute Website</label><br>
  <input type="radio" id="Networking/Open firewall port" name="Complaint_Name" value="Networking/Open firewall port">
  <label for="Networking/Open firewall port">Networking/Open firewall port</label><br>
  <input type="radio" id="Others" name="Complaint_Name" value="Others">
  <label for="Others">Others</label>
</form> 
<div class="Complaint">
<h2>CHECK STATUS OF YOUR COMPLAINT</h2>
<button type="CLICK">CLICK</button><br>
       
<h2>RESOLVED COMPLAINTS</h2>
<button type="CLICK">CLICK</button><br>
       

 </div>
</>
           );
        };
         
export default StudentLogin;
