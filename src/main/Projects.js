import React from 'react';
import NYA from '../assets/Nya.png';
import WeatherNow from '../assets/WeatherNow.png';
import './Projects1.scss';

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
    <>
      <h2 className="projects-title"> Latest Projects </h2>
      {projectList.map((project) => {
        return (
          <a href={project.link} target="_blank">
            <div className="project">
              <p className="empty-text">{project.title}</p>
              <p className="filled-text">{project.title}</p>
              <img className="animatedImage" src={project.image} alt=""></img>
              <img src={project.image} alt=""></img>
            </div>
          </a>
        );
      })}
    </>
  );
}
