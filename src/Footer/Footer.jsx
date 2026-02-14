import React from "react";
import "./Footer.css";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import YouTubeIcon from "@mui/icons-material/YouTube";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import LocationPinIcon from '@mui/icons-material/LocationPin';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">

        <div className="footer-column">
          <h2 className="logo">MU softek solutions Private Limited</h2>
          <p>
            MU softek solutions Private Limited is a trusted IT
            partner delivering innovative software solutions, mobile and web
            app development, and IT consulting.
          </p>
          <p>
            <span style={{ color: "#da9e46" }}><h3 style={{marginBottom:"0px"}}> Working Hours:</h3> </span>
           <h4> Monday – Friday </h4>
            09:00 AM – 06:00 PM
          </p>
        </div>

        <div className="footer-column">
          <h3>Services</h3>
          <ul>
            <li>Custom Software Development</li>
            <li>Mobile App Development</li>
            <li>Web App Development</li>
            <li>UI/UX Design</li>
          </ul>
        </div>
        {/* <div className="footer-column">
        
        </div> */}
        <div className="footer-column">
          <h3>Quick Link</h3>
          <ul>
            <li>Home</li>
            <li>About Us</li>
            <li>Our Services</li>
            <li>Contact Us</li>
            {/* <li>Privacy & Policy</li>
            <li>Terms & Conditions</li> */}
          </ul>
        </div>

        <div className="footer-column">
          <h3>Contact Us</h3>
          <span style={{ color: "#da9e46" }}> <h4>Address</h4></span>
          <p>
            <span style={{ color: "#da9e46" }}>  Madhapur:</span>
            Plot No: 305, swamy Ayyappa Nilayam, Ayyappa Society, Madhapur, Hyderabad <br /><br />

            <span style={{ color: "#da9e46" }}> Main Branch:</span>
            2 Floor, Uptown Cyberabad Building, 100 ft Road, Madhapur, Hyderabad.
          </p>
          {/* <p><LocationPinIcon className="icon"/></p> */}
          <p><PhoneIcon className="icon" /> +91 8745258969</p>
          <p><EmailIcon className="icon" /> hrmanager@musoftware.co.in</p>

          <div className="social-icons">
            <FacebookIcon />
            <TwitterIcon />
            <LinkedInIcon />
            <YouTubeIcon />
          </div>
        </div>

      </div>

      <div className="footer-bottom">
        <p>© 2026 MU softek solutions Private Limited</p>
      </div>
    </footer>
  );
};

export default Footer;
