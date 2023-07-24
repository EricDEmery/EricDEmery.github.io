import React from 'react';

export default function Navbar(props) {
  const homeButtonStyle = {
    fontFamily: 'Courier New, monospace',
    backgroundColor: 'transparent',
    color: '#61dafb', // Use the blue color from the page's color scheme
    padding: '0.25rem 0.5rem',
    outline: 'none',
    cursor: 'pointer',
    border: 'none',
    transition: 'color 0.3s ease', // Transition font color on hover
  };

  const aboutButtonStyle = {
    fontFamily: 'Courier New, monospace',
    backgroundColor: 'transparent',
    color: '#00C853', // Use the green color from the page's color scheme
    padding: '0.25rem 0.5rem',
    outline: 'none',
    cursor: 'pointer',
    border: 'none',
    transition: 'color 0.3s ease', // Transition font color on hover
  };

  const portfolioButtonStyle = {
    fontFamily: 'Courier New, monospace',
    backgroundColor: 'transparent',
    color: '#FF4081', // Use the pink color from the page's color scheme
    padding: '0.25rem 0.5rem',
    outline: 'none',
    cursor: 'pointer',
    border: 'none',
    transition: 'color 0.3s ease', // Transition font color on hover
  };

  const navbarStyle = {
    fontFamily: 'Courier New, monospace',
    backgroundColor: '#272822', // Set the background color to a dark theme
    color: '#F8F8F2', // Use the same font color as the rest of the page
  };

  return (
    <nav className="navbar navbar-expand-lg" style={navbarStyle}>
      <div className="container-fluid">
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <button className="nav-link active" onClick={() => props.setPage("Home")} aria-current="page" style={homeButtonStyle}>
                Home
              </button>
            </li>
            <li className="nav-item">
              <button className="nav-link active" onClick={() => props.setPage("About")} aria-current="page" style={aboutButtonStyle}>
                About
              </button>
            </li>
            <li className="nav-item">
              <button className="nav-link active" onClick={() => props.setPage("Portfolio")} aria-current="page" style={portfolioButtonStyle}>
                Portfolio
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
