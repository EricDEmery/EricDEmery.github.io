import React from 'react';
import Eric from './img/Eric.jpg';

export default function About() {
  return (
    <div className="card mb-3 d-flex text-center" style={{ maxWidth: '540px', borderRadius: '0.25rem' }}>
      <div className="row g-0">
        <div className="col-md-4 d-flex align-items-center">
          <div
            style={{
              backgroundImage: `url(${Eric})`,
              backgroundSize: 'cover',
              height: '100%',
              width: '100%',
              borderRadius: '0.25rem', // Same as the card's border radius
            }}
          ></div>
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h5 className="card-title">Eric Emery</h5>
            <p className="card-text">Hello! My name is Eric and I'm a 24-year-old software developer! I am a happily married father of twin boys named Leo and Jett! I specialize in Front End web development, but I'm proficient in Python, SQL, Django, and Django Rest as well.</p>
            <p className="card-text"><small className="text-body-secondary">All projects included in this portfolio as well as the site itself were developed by yours truly.</small></p>
          </div>
        </div>
      </div>
    </div>
  );
}
