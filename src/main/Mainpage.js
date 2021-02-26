import React from 'react';
import heropic from '../assets/Heropic.jpg';
import Logos from './Logos';
import Projects from './Projects';
import './Mainpage.scss';

export default function Mainpage() {
  return (
    <>
      <div className="bigCard">
        <div className="herocontainer">
          <div className="image-container">
            <img className="hero-img" src={heropic} alt=""></img>
            <div className="grad"></div>
          </div>
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
        </div>
        <div className="mainContainer">
          <div className="skills-container">
            <h2>I Loved working with</h2>
            <div className="skill-img-container">
              <Logos></Logos>
            </div>
          </div>
          <Projects></Projects>
          <div className="footer">
            Do you like what you see? Do you want to meet the man behind this
            site? Contact{' '}
            <a href="https://www.linkedin.com/in/sebastian-ene/">me</a>
          </div>
        </div>
      </div>
    </>
  );
}
