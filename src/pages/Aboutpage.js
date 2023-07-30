import React from 'react'
import Navbar from '../components/Navbar'
import img1 from "../images/aboutimg1.png"
import img2 from "../images/aboutimg2.png"
import img3 from "../images/aboutimg3.jpg"
import img4 from "../images/aboutimg4.jpg"
import '../css/Aboutpage.css'
import BottomNavbar from '../components/BottomNavbar'
const Aboutpage = () => {
  return (
    <div>
      <Navbar />
      <BottomNavbar/>
      <div className='about-container'>
      <div class="about-intro">
        <h2>OUR MISSION</h2>
        <h1>Buying groceries better for everyone</h1>
        <p>We help people achieve Independence by making it easier to
          buy and sell groceries online. We beleive the future of commerce has
          more voices , not fewer , so we're reducing the barriers to business owenership
          to make commerce better for everyone.
        </p>
        <h2>Introducing to</h2>
        <h1 id="teamname">Team Alpha Pro</h1>
        <h3 id="slogan">Creating a community for impact</h3>
        <hr />
      </div>
      </div>
      <div class="about-content">
        <div class="about-card">
          <div class="left-about-card">
            <img alt="" src={img1} />
          </div>
          <div class="right-about-card">
            <div class="right-about-content">
              <h3>Innovation</h3>
              <h1>About Us</h1>
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequatur ex sequi aliquam reiciendis
                perspiciatis esse a eum velit! Perspiciatis assumenda dolorem provident debitis expedita
                aliquam,
                quas exercitationem fuga ducimus tenetur!</p>
              <button>LEARN MORE</button>
            </div>
          </div>
        </div>
        <div class="about-card">
          <div class="right-about-card">
            <div class="right-about-content">
              <h3>Innovation</h3>
              <h1>About Us</h1>
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequatur ex sequi aliquam reiciendis
                perspiciatis esse a eum velit! Perspiciatis assumenda dolorem provident debitis expedita
                aliquam,
                quas exercitationem fuga ducimus tenetur!</p>
              <button>LEARN MORE</button>
            </div>
          </div>
          <div class="left-about-card">
            <img alt="" src={img2} />
          </div>
        </div>
        <div class="about-card">
          <div class="left-about-card">
            <img alt="" src={img3} />
          </div>
          <div class="right-about-card">
            <div class="right-about-content">
              <h3>Innovation</h3>
              <h1>About Us</h1>
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequatur ex sequi aliquam reiciendis
                perspiciatis esse a eum velit! Perspiciatis assumenda dolorem provident debitis expedita
                aliquam,
                quas exercitationem fuga ducimus tenetur!</p>
              <button>LEARN MORE</button>
            </div>
          </div>
        </div>
        <div class="about-card">
          <div class="right-about-card">
            <div class="right-about-content">
              <h3>Innovation</h3>
              <h1>About Us</h1>
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequatur ex sequi aliquam reiciendis
                perspiciatis esse a eum velit! Perspiciatis assumenda dolorem provident debitis expedita
                aliquam,
                quas exercitationem fuga ducimus tenetur!</p>
              <button>LEARN MORE</button>
            </div>
          </div>
          <div class="left-about-card">
            <img alt="" src={img4} />
          </div>
        </div>
        <div class="about-card">
          <div class="left-about-card">
            <img alt="" src={img1} />
          </div>
          <div class="right-about-card">
            <div class="right-about-content">
              <h3>Innovation</h3>
              <h1>About Us</h1>
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequatur ex sequi aliquam reiciendis
                perspiciatis esse a eum velit! Perspiciatis assumenda dolorem provident debitis expedita
                aliquam,
                quas exercitationem fuga ducimus tenetur!</p>
              <button>LEARN MORE</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Aboutpage
