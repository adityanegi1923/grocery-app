import React,{useRef} from "react";
import Navbar from "../components/Navbar";
import BottomNavbar from "../components/BottomNavbar";
import "../css/Contactus.css";
import imgplane from "../images/plane.jpg"
import Footer from '../components/Footer'
import emailjs from '@emailjs/browser';



const Contactpage = () => {
  const form = useRef() 

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_c1oragd', 'template_w02lute', form.current, 'fE0WWZuFp4Phs4PJU')
      .then((result) => {
          console.log(result.text);
          alert("Message sent Succesfully")
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <div>
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css"
          integrity="sha512-z3gLpd7yknf1YoNbCzqRKc4qyor8gaKU1qmn+CShxbuBusANI9QpRohGBreCFkKxLhei6S9CQXFEbbKuqLg0DA=="
          crossorigin="anonymous"
          referrerpolicy="no-referrer"
        />
      </head>
      <Navbar />
      <BottomNavbar />
      <div className="contact-page">
        <h1>Contact Us</h1>
        <p1>Any questions or remark? Just write us a message</p1>
        <br />
        <div id="contact-container">
          <div className="contact-info">
            <h4>Contact Information</h4>
            <p>Say Something to start a live chat! </p>
            <div className="icon-text">
              <i class="fa-solid fa-phone"></i>
              <span>+91987654321</span>
            </div>
            <div className="icon-text">
              <i class="fa-solid fa-envelope"></i>
              <span>AlphaPro@gmail.com</span>
            </div>
            <div className="icon-text">
              <i class="fa-solid fa-location-dot"></i>
              <span> Dehradun,Uttrakhand</span>
            </div>
            <div className="bottom">
              <div className="social-media">
                <a href="/#" className="icon-circle">
                  <i class="fa-brands fa-twitter"></i>
                </a>
                <a href="/#" className="icon-circle">
                  <i class="fa-brands fa-instagram"></i>
                </a>
                <a href="/#" className="icon-circle">
                  <i class="fa-brands fa-discord"></i>
                </a>
              </div>
              <div className="circle">
              <span className="dot-2"></span>
                <span className="dot"></span>

              </div>
            </div>
          </div>
          <form ref={form} onSubmit={sendEmail}>
            <div className="col-2">
              <div className="form-group">
                <label htmlFor="">First Name</label>
                <input type="text" className="inputfields" name="user_fname" required />
              </div>
              <div className="form-group">
                <label htmlFor="">Last Name</label>
                <input type="text" className="inputfields" name="user_lname" required />
              </div>
            </div>
            <div className="col-2">
              <div className="form-group">
                <label htmlFor="">Email</label>
                <input type="email" className="inputfields" name="user_email" required />
              </div>
              <div className="form-group">
                <label htmlFor="">Phone Number</label>
                <input type="tel" className="inputfields" name="user_phone" required />
              </div>
            </div>
            <div className="col-2">
              <div className="form-group solo">
                <label htmlFor="">Message</label>
                <input
                  type="text"
                  className="inputfields"
                  placeholder="Write your message.."
                  name="user_message"
                  required
                />
              </div>
            </div>
            <input type="submit" className="contactbutton" id="btttn" value="Send Message"/>
            <img className="aeroplane" alt="" src={imgplane} />
          </form>
        </div>
      </div>
      <Footer/>
    </div>

  );
};

export default Contactpage;
