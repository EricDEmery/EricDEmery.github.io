import React from 'react'
import Eric from './img/Eric.jpg'

export default function About() {
 
        return (
                                                //Base is 540
          <div className="card mb-3" style={{maxWidth: '1140px'}}>
            <div className="row g-0">
              <div className="col-md-4">
                <img src={Eric} className="img-fluid rounded-start" alt="Me Playing Guitar" />
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <h5 className="card-title">Eric Emery</h5>
                  <p className="card-text">Hello! My name is Eric and I'm a 24 year old software developer! I am a happily married father of twin boys named Leo and Jett!</p>
                  <p className="card-text"><small className="text-body-secondary">Last updated 3 mins ago</small></p>
                </div>
              </div>
            </div>
          </div>
        );
      }