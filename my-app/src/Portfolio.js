import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import commandCenterImage from './img/command-center.jpg';
import djangoJams from './img/djangojams.jpg';
import rollingScones from './img/rollingscones.jpg';
import backendBistro from './img/backendbistro.jpg';
import sqlHeros from './img/sqlheros.jpg';

export default function Project() {
  const sourceCodeButtonStyle = {
    fontFamily: 'Courier New, monospace',
    backgroundColor: 'transparent',
    color: '#61dafb',
    padding: '0.25rem 0.5rem',
    outline: 'none',
    cursor: 'pointer',
    border: 'none',
    transition: 'color 0.3s ease',
  };

  const liveButtonStyle = {
    fontFamily: 'Courier New, monospace',
    backgroundColor: 'transparent',
    color: '#00C853',
    padding: '0.25rem 0.5rem',
    outline: 'none',
    cursor: 'pointer',
    border: 'none',
    transition: 'color 0.3s ease',
  };

  const cardTitleStyle = {
    fontFamily: 'Courier New, monospace',
    fontSize: '28px',
    color: '#61dafb',
  };

  const cardParaStyle = {
    fontFamily: 'Courier New, monospace',
    fontSize: '16px',
    color: '#FF4081',
  };

  return (
    <div className="container-fluid custom-background">
      <div className="container pt-3">
        <div className="row justify-content-center">
          <div className="col-md-6">
            <div className="card custom-color">
              <img src={commandCenterImage} className="card-img-top" alt="Command Center" />
              <div className="card-body">
                <h5 className="card-title" style={cardTitleStyle}>Command Center</h5>
                <p className="card-text" style={cardParaStyle}>Command Center is a web application used for tracking real-time Rocket League Statistics. It also houses an LFG feature that allows players to find new teammates to play with. This project was built with NextJS and Django REST Framework.</p>
                <a href="https://github.com/EricDEmery/Command-Center" className="btn mr-2" style={sourceCodeButtonStyle} target="_blank" rel="noopener noreferrer">SourceCode Front-End</a>
                <a href="https://github.com/EricDEmery/command-center-backend" className="btn" style={liveButtonStyle} target="_blank" rel="noopener noreferrer">Source Code Back-End</a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container pt-5">
        <div className="row justify-content-center">
          <div className="col-md-6">
            <div className="card custom-color">
              <img src={djangoJams} className="card-img-top" alt="Django Jams" />
              <div className="card-body">
                <h5 className="card-title" style={cardTitleStyle}>Django Jams</h5>
                <p className="card-text" style={cardParaStyle}>Django Jams is a backend project similar to platforms like Spotify. The program allows you to use CRUD features to update a database with Django REST Framework</p>
                <a href="https://github.com/EricDEmery/django-jams" className="btn mr-2" style={sourceCodeButtonStyle} target="_blank" rel="noopener noreferrer">Source Code</a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container pt-5">
        <div className="row justify-content-center">
          <div className="col-md-6">
            <div className="card custom-color">
              <img src={rollingScones} className="card-img-top" alt="Rolling Scones" />
              <div className="card-body">
                <h5 className="card-title" style={cardTitleStyle}>The Rolling Scones</h5>
                <p className="card-text" style={cardParaStyle}>The Rolling Scones is a web application designed using React. The site used to pull menu data from a third party API and used a .map array method to place each menu item into a separate bootstrap container. However, it is now connected to the Backend Bistro project you will see below where you can add menu items to a database that will make them appear on the web page.</p>
                <a href="https://github.com/EricDEmery/React-Random-Restaurant" className="btn mr-2" style={sourceCodeButtonStyle} target="_blank" rel="noopener noreferrer">Source Code</a>
                <a href="https://ericdemery.github.io/React-Random-Restaurant/" className="btn mr-2" style={liveButtonStyle} target="_blank" rel="noopener noreferrer">Github Pages URL</a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container pt-5">
        <div className="row justify-content-center">
          <div className="col-md-6">
            <div className="card custom-color">
              <img src={backendBistro} className="card-img-top" alt="Backend Bistro" />
              <div className="card-body">
                <h5 className="card-title" style={cardTitleStyle}>Backend Bistro</h5>
                <p className="card-text" style={cardParaStyle}>Backend Bistro is programmed using Django. It is now the backend for The Rolling Scones.</p>
                <a href="https://github.com/EricDEmery/Backend-Bistro" className="btn pr-2 pb-2" style={sourceCodeButtonStyle} target="_blank" rel="noopener noreferrer">Source Code</a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container pt-5">
        <div className="row justify-content-center">
          <div className="col-md-6">
            <div className="card custom-color">
              <img src={sqlHeros} className="card-img-top" alt="SQL Heros" />
              <div className="card-body">
                <h5 className="card-title" style={cardTitleStyle}>SQL Heros</h5>
                <p className="card-text" style={cardParaStyle}>SQL Heros is a project based on SQL Queries. The program enables you to Add, Update, Search, and Delete different heroes in the database directly from prompts in the terminal.</p>
                <a href="https://github.com/EricDEmery/SQL-Heros" className="btn mr-2" style={sourceCodeButtonStyle} target="_blank" rel="noopener noreferrer">Source Code</a>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}
