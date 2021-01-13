import React from 'react';
import heropic from '../assets/heropic.jpeg';
import Logos from './Logos';
import './Mainpage.scss';

export default function Mainpage() {
  return (
    <>
      <div class="herocontainer">
        <img class="hero" src={heropic} alt=""></img>
      </div>
      <div class="cover"></div>
      <div class="mainContainer">
        <div class="hero-content">
          <h1>Everyday is an Adventure</h1>
          <h2>Code for a healthy mind, climb for a healthy body</h2>
        </div>
        <div class="skills-container">
          <h2>Skills</h2>
          <Logos></Logos>
        </div>
        <h2>
          So you've seen enough? Do you want to meet the man behind this site?
          Contact me
        </h2>
      </div>
    </>
  );
}
