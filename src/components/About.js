import React from "react";
import './About.css'; // Import the CSS file

const About = () => {
    const containerStyles = {
        display: 'flex',
        justifyContent: 'space-between',
      };
    
      const leftColumnStyles = {
        flex: '1',
        display: 'flex',
        flexDirection: 'column',
      };
    
      const headingStyles = {
        fontSize: '1.875rem',
        fontWeight: 'bold',
        lineHeight: '1.125',
        color: '#333',
        paddingBottom: '1rem',
      };
    
      const paragraphStyles = {
        fontSize: '20px',
        lineHeight: '1.5',
        color: '#666',
      };
    
      const imageStyles = {
        width: '70%',
        height: 'auto',
        marginLeft: '60px',
      };
  return (
    <div className="container mx-auto py-16 px-20 md:py-12 md:px-6 py-9 px-4">
      <br />
      <br />
      <p style={{ fontSize: "40px" }} className="text-bblue">
        <b>Bringing Convenience Straight To Your Homes!!!</b>
      </p>
      <br />
      <div style={containerStyles}>
      <div style={leftColumnStyles}>
        <h1 style={headingStyles}>About Us</h1>
        <p style={paragraphStyles}>
          Supreme appliances was Established in the year 2020. The aim of the company is to provide good quality products. The product range includes Electronics like Televisions, Refrigerators, Air conditioners, Washing Machines, and furniture like Cupboards, Sofa, etc. The goods are available at a low cost and with high quality. Supreme home appliances has a well-established Quality Management System and Security Standards.
        </p>
        <br />
        <h3>
          <b style={{ color:'black', }}>Living Doesn't Have To Be Hard.</b>
        </h3>
      </div>
      <div>
        <img
          style={imageStyles}
          src="https://e0.pxfuel.com/wallpapers/414/230/desktop-wallpaper-appliance-recalls-archives-home-appliances.jpg"
          alt="A group of Products"
        />
      </div>
    </div>
      <br />
      <br />

     

    
      <center>
       
      </center>
    </div>
  );
};

export default About;
