'use client'
// import { Helmet } from 'react-helmet-async';
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import './Banner.css';
const texts = [
  <>
    Welcome to<br /> Oviya MedSafe
  </>,
  "Meticulosity",
  "Commitment",
  "Team Work",
  <>
    Client <br /> Satisfaction
  </>
];
const images = ["/b1.png", "/b2.png", "/b3.png", "/b4.png", "/b5.png"];

function Banner() {
  const [currentText, setCurrentText] = useState(0);
  useEffect(() => {
    window.scroll(0, 0);
    
    const interval = setInterval(() => {
      setCurrentText((prevText) => (prevText + 1) % texts.length);
    }, 5100);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className='container-fluid bnpart p-0 m-0'>
      {/* Common Layout for All Devices */}
      <div className="servicesbg pt-0 pt-md-5" id="ourservices">
        <div className="row w-100">
          
          {/* Left side: Animated Text */}
          <div className="col-sm-6 col-md-7 d-flex justify-content-start align-items-center text-start">
            <motion.h4
              className="saptext text-light ms-0 ms-lg-5 ps-1 ps-md-5 ps-lg-5 pt-4"
              key={currentText}
              initial={{ opacity: 0, y: 70 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -50 }}
              transition={{ duration: 1 }}>
              {texts[currentText]}
            </motion.h4>
          </div>

          {/* Right side: Animated Image */}
          <div className="col-sm-6 col-md-5 px-0 px-md-2">
            <motion.img
              src={images[currentText]}
              alt={`Banner Image ${currentText + 1}`}
              className="rounded text-light bimg img-fluid"
              key={currentText}
              initial={{ opacity: 0.4, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 1 }}
            />
          </div>
        </div>
      </div>

      {/* Rotating Molecule Images */}
      <motion.img
         src="./mol.png"
        alt="Rotating Image Top Left"
        className="rotating-img-left"
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, repeatType: "loop", duration: 10 }}
      />
      <motion.img
        src="./mol.png"
        alt="Rotating Image Top Right"
        className="rotating-img-right"
        animate={{ rotate: -360 }}
        transition={{ repeat: Infinity, repeatType: "loop", duration: 10 }}
      />
    </div>
  );
}

export default Banner;



 