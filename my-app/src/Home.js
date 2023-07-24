import React from 'react';

export default function FullscreenComponent() {
  const codeStyle = {
    backgroundColor: '#272822',
    color: '#F8F8F2',
    fontFamily: 'Courier New, monospace',
    fontSize: '1.25rem', // Increase font size for better visibility
    padding: '1.5rem',
    borderRadius: '0.25rem',
  };

  return (
    <div
      className="d-flex flex-column justify-content-center align-items-center vh-100"
      style={{ backgroundColor: '#1E1E1E', color: '#F8F8F2' }}
    >
      <div className="text-center">
        <h1 className="display-3 mb-4" style={{ fontFamily: 'Courier New, monospace', color: '#FFD700' }}>
          Eric Emery
        </h1>
        <h3 className="mb-5" style={{ fontFamily: 'Courier New, monospace', color: '#00CED1' }}>
          Full Stack Software Developer
        </h3>
      </div>
      {/* Code-like blocks using the same color scheme */}
      <pre style={codeStyle}>
        <code>
          <span style={{ color: '#F92672' }}>function</span> <span style={{ color: '#A6E22E' }}>greet</span>
          <span style={{ color: '#66D9EF' }}>()</span> {'{'}
          {'\n'}
          {'  '}
          <span style={{ color: '#A6E22E' }}>console</span>.
          <span style={{ color: '#66D9EF' }}>log</span>
          <span style={{ color: '#F92672' }}>(</span>
          <span style={{ color: '#E6DB74' }}>'Hello, world!'</span>
          <span style={{ color: '#F92672' }}>)</span>
          <span style={{ color: '#66D9EF' }}>;</span>
          {'\n'}
          {'\n'}
          {'  '}
          <span style={{ color: '#A6E22E' }}>console</span>.
          <span style={{ color: '#66D9EF' }}>log</span>
          <span style={{ color: '#F92672' }}>(</span>
          <span style={{ color: '#E6DB74' }}>'Welcome to my website!'</span>
          <span style={{ color: '#F92672' }}>)</span>
          <span style={{ color: '#66D9EF' }}>;</span>
          {'\n'}
          {'}'}
        </code>
      </pre>
    </div>
  );
}
