import React from 'react';
import Node_JS from '../assets/Node_JS.svg';
import angular from '../assets/angular.png';
import aws from '../assets/aws.svg';
import Cpp from '../assets/Cpp.svg';
import javaScript from '../assets/javaScript.svg';
import ReactLogo from '../assets/ReactLogo.svg';
import Sass from '../assets/Sass.svg';
import mongodb from '../assets/mongodb.png';
import Python from '../assets/Python.png';
import './Logos1.scss';

export default function Logos() {
  const skillsList = [
    { img: Node_JS, col: 1 },
    { img: angular, col: 2 },
    { img: ReactLogo, col: 2 },
    { img: Python, col: 3 },
    { img: javaScript, col: 3 },
    { img: Cpp, col: 3 },
    { img: aws, col: 4 },
    { img: mongodb, col: 4 },
    { img: Sass, col: 5 },
  ];

  function coloane(i) {
    return (
      <div className="columns">
        {skillsList.map((skill) => {
          if (skill.col === i) {
            return <img className="logo" src={skill.img} alt=""></img>;
          }
        })}
      </div>
    );
  }

  return (
    <>
      <div className="skills-container">
        <h2>I Loved working with</h2>
        <div className="skill-img-container">
          {coloane(1)}
          {coloane(2)}
          {coloane(3)}
          {coloane(4)}
          {coloane(5)}
        </div>
      </div>
    </>
  );
}
