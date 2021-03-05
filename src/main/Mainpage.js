import React from 'react';
import heropic from '../assets/Heropic.jpg';
import Logos from './Logos';
import Projects from './Projects';
import './Mainpage1.scss';
import { useSpring, animated } from 'react-spring';

export default function Mainpage() {
  const heroAnim = useSpring({ opacity: 1, from: { opacity: 0 } });

  return (
    <animated.div style={heroAnim}>
      <div className="big-div">
        <div className="hero-container">
          <div className="hero-content">
            <h1>Everyday is an Adventure</h1>
            <button
              onClick={() =>
                window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })
              }
            >
              Let's begin
            </button>
          </div>
          <img className="hero-img" src={heropic} alt=""></img>
          <div className="grad"></div>
        </div>
        <div className="mainContainer">
          <Logos></Logos>
          <Projects></Projects>
          <div className="footer">
            Do you like what you see? Do you want to meet the man behind this
            site? Contact{' '}
            <a href="https://www.linkedin.com/in/sebastian-ene/">me</a>
          </div>
        </div>
      </div>
    </animated.div>
  );
}
