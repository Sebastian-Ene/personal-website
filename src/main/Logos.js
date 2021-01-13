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
import './Logos.scss';

export default function Logos() {
  const skillsList = [
    { img: Node_JS },
    { img: angular },
    { img: aws },
    { img: Cpp },
    { img: javaScript },
    { img: ReactLogo },
    { img: Sass },
    { img: mongodb },
    { img: Python },
  ];
  return (
    <div>
      <div class="skillsContainer">
        {skillsList.map((skill) => {
          return <img class="logo" height="100" src={skill.img} alt=""></img>;
        })}
      </div>
    </div>
  );
}
