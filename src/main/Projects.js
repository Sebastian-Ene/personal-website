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
    },
    {
      title: 'NYA Workouts',
      image: NYA,
      link: 'https://github.com/Sebastian-Ene/Nya-api',
    },
  ];

  return (
    <div>
      <h1> Latest Projects </h1>
      {projectList.map((project) => {
        return (
          <a href={project.link} target="_blank">
            <div className="project">
              <p className="empty-text">{project.title}</p>
              <p className="filled-text">{project.title}</p>
              <img src={project.image} alt=""></img>
              <img className="animatedImage" src={project.image} alt=""></img>
            </div>
          </a>
        );
      })}
    </div>
  );
}
