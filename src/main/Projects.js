import React from 'react';
import NYA from '../assets/Nya.png';
import WeatherNow from '../assets/WeatherNow.png';
import './Projects.scss';

export default function Projects() {
  const projectList = [
    {
      title: 'Weather Now',
      image: WeatherNow,
      link: 'https://weathernow-33262.web.app/welcome',
      color: 'rgb(238, 247, 238)',
      textColor: 'black',
    },
    {
      title: 'NYA Workouts',
      image: NYA,
      link: 'https://github.com/Sebastian-Ene/Nya-api',
      color: 'rgb(0, 31, 28)',
      textColor: 'rgb(238, 247, 238)',
    },
  ];

  return (
    <div>
      <h1> Latest Projects </h1>
      {projectList.map((project) => {
        return (
          <a href={project.link} target="_blank">
            <div className="project" style={{ backgroundColor: project.color }}>
              <p
                style={{ WebkitTextStroke: '3px ' + project.textColor }}
                className="empty-text"
              >
                {project.title}
              </p>
              <p style={{ color: project.textColor }} className="filled-text">
                {project.title}
              </p>
              <img src={project.image} alt=""></img>
              <img className="animatedImage" src={project.image} alt=""></img>
            </div>
          </a>
        );
      })}
    </div>
  );
}
