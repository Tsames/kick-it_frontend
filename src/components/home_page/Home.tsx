//Dependencies
import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

//Styling
import '../../styles/home_styling/home.scss';

//Props Interface
interface homeProps {

}

const Home: FC<homeProps> = () => {

  /* ------------------------------------------ Component Variables & State ------------------------------------------ */


  /* ------------------------------------------ Animation Details (Framer-Motion) ------------------------------------------ */

  //Container (#navbar-shell) Variant
  const homeVariant = {
    initial: { 
      scale: 0,
      x: "-50vw",
      y: "-50vh"
    },
    animate: {
      scale: 1,
      x: 0,
      y: 0,
      transition: {
        duration: 0.8,
        delay: 0.2,
        when: "beforeChildren" 
      }
    }
  }

  //Child Variants
  const childVariant = {
    initial: { 
      opacity: 0 
    },
    animate: {
      opacity: 1,
      transition: {
        delay: 0.6,
        duration: 0.6
      }
    }
  }

    /* --------------- Gestures --------------- */

  //Hover
  const buttonItemHover = {
    scale: 1.3,
    borderWidth: "max(0.4rem, 0.4vw)",
    transition: {
      duration: 0.2,
    }
  }

  //Tap
  const buttonItemTap = {
    scale: 0.9,
    backgroundColor: "#2b37a5"
  }

  //In Viewport Variants
  const scrollVariant = {
    initial: { 
      opacity: 0,
    },
    animate: {
      opacity: 1,
      transition: {
        delay: 0.1,
        duration: 0.4
      }
    }
  }


  /* ------------------------------------------ Helper Functions ------------------------------------------ */
  
  /* ------------------------------------------ Event Handler Functions ------------------------------------------ */

  /* ------------------------------------------ Returning JSX ------------------------------------------ */

  return (
    <div id="home-shell">
      <motion.div id="home-landing" variants={homeVariant} initial="initial" animate="animate">
        <motion.button id="createEvent" variants={childVariant} whileHover={buttonItemHover} whileTap={buttonItemTap}>Create Your Event</motion.button>
      </motion.div>
      <div id="home-testimonials">
        <div id="home-testimonial-one" className="no-select">
          <h1 id="home-testimonial-quote-one" className="home-testimonial-quote">"Kick It makes it so easy to hang with my pals. Scheduling sucks without it!"</h1>
          <p id="home-testimonial-speaker-one" className="home-testimonial-speaker">-Jimbo</p>
        </div>
      </div>
      <div id="home-contents">
        <div id="home-secondary"></div>
        <div id="home-content-block-one">
          <div id="home-content-graphic-one" className="home-content-graphic"></div>
          <p id="home-content-text-one" className="home-content-text">Create an event and choose a few potential days and times for it.</p>
          <motion.div id="home-content-graphic-two" className="home-content-graphic" variants={scrollVariant} initial="initial" whileInView="animate" viewport={{ once: true, amount: 0.8 }}></motion.div>
        </div>
        <div id="home-content-block-two">
          <div id="home-content-text-two-wrapper">
            <p id="home-content-text-two" className="home-content-text">Share the event with your friends and see when they are free.</p>
          </div>
          <div id="home-content-graphic-three" className="home-content-graphic"></div>
          <motion.div id="home-content-graphic-four" className="home-content-graphic" variants={scrollVariant} initial="initial" whileInView="animate" viewport={{ once: true, amount: 0.8 }}></motion.div>
        </div>
        <div id="home-content-block-three">
          <div id="home-content-text-three-four-wrapper">
            <p id="home-content-text-three" className="home-content-text">Pick the best day and time for everyone! Its time to</p>
            <p id="home-content-text-four" className="home-content-text">Kick It!</p>
          </div>
          <div id="home-content-graphic-five" className="home-content-graphic"></div>
        </div>
        <motion.div id="home-content-graphic-six" className="home-content-graphic" variants={scrollVariant} initial="initial" whileInView="animate" viewport={{ once: true, amount: 0.8 }}></motion.div>
        <Link to="/create"><motion.button id="getStarted" variants={childVariant} whileHover={buttonItemHover} whileTap={buttonItemTap}>Get Started</motion.button></Link>
      </div>
    </div>
  )
}

export default Home;