import React from 'react';
import Eric from './img/Eric2.jpg';

export default function About() {
  const containerStyle = {
    backgroundColor: '#1E1E1E', // Darker theme background color
    height: '100vh', // Set container height to 100% of viewport height
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    color: '#F8F8F2', // Light text color
    fontFamily: 'Courier New, monospace', // Use the code-like font

  };

  const cardStyle = {
    width: '85%', // Set the width to 80% for a better layout
    maxWidth: '540px',
    borderRadius: '0.25rem',
    transform: 'scale(1.2)',
    backgroundColor: '#272822',
  };

  const cardImgStyle = {
    backgroundImage: `url(${Eric})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '285px', // Set the height of the image container
    width: '100%', // Set the width of the image container
  };

  const cardTitleStyle = {
    fontSize: '28px', // Adjust the font size for the card title
    color: '#61dafb', // Use the blue color from the page's color scheme
  };

  const cardFirstParaStyle = {
    fontSize: '16px', // Adjust the font size for the first paragraph
    color: '#00C853', // Use the green color used in the navbar
  };

  const cardSecondParaStyle = {
    fontSize: '16px', // Adjust the font size for the second paragraph
    color: '#FF4081', // Use the pink color used in the navbar
  };

  return (
    <>
    <div className="pt-5" style={containerStyle}>
      <div className="card text-center" style={cardStyle}>
        <div className="row">
          <div className="col-md-4 d-flex align-items-center">
            <div className="card-img" style={cardImgStyle}></div>
          </div>
          <div className="col-md-8">
          <div className="card-body" style={{ margin: 0 }}>
              <h5 className="card-title" style={cardTitleStyle}>
                Eric Emery
              </h5>
              <p className="card-text" style={cardFirstParaStyle}>
                Hello! My name is Eric and I'm a 24-year-old software developer! I am a happily married father of twin boys named Leo and Jett! I specialize in Front End web development, but I'm proficient in Python, SQL, Django, and Django Rest as well.
              </p>
              <p className="card-text" style={cardSecondParaStyle}>
                All projects included in this portfolio as well as the site itself were developed by yours truly.
              </p>
              <a href="https://github.com/EricDEmery" className="btn btn-primary">Github</a>
                <a href="https://www.linkedin.com/in/eric-emery-bb1544279/" className="btn btn-primary">LinkedIn</a>
            </div>
          </div>
        </div>
      </div>
    </div>
        {/* <div style={containerStyle}>
        <div className="card text-center" style={cardStyle}>
          <div className="row">
            <div className="col-md-4 d-flex align-items-center">
            </div>
            <div className="col-md-8">
            <div className="card-body" style={{ margin: 0 }}>
                <h5 className="card-title" style={cardTitleStyle}>
                  Lets Work Together!
                </h5>
                <a href="https://github.com/EricDEmery" className="btn btn-primary">Github</a>
                <a href="https://www.linkedin.com/in/eric-emery-bb1544279/" className="btn btn-primary">LinkedIn</a>
              </div>
            </div>
          </div>
        </div>
      </div> */}
      </>
  );
}
