import React, { useState } from 'react';
import { Input } from '@mui/material';
import logo1 from "../images/Home_Bg.jpeg";
import './Home.css';
import About from "./About";
import Footer from "./Footer";

const Home = () => {
  

  return (
    <main>
      <div className="container">
        <div className="image-container">
          <img
            src="https://www.smarthomeguide.in/wp-content/uploads/2021/05/banner-image.png"
            alt="Background"
            className="background-image"
          />
          <div className="text-overlay">
            <br></br><br></br>
            <h1 className="line1"style={{ marginRight: '320px' }}>Supreme Appliances</h1>
            <br></br>
            <br></br>
            
            <h2 className="line2"style={{ marginRight: '20px' }}>Where Quality Meets Comfort: 
          Your One-Stop Shop for Home Appliances...</h2>
          </div>
        </div>
       
      </div>
      <About/>
      <Footer/>
    </main>
  );
};

export default Home;
