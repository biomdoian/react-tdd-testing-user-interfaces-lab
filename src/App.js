import React from 'react';
import yourImage from './images/me.jpeg'; 

function App() {
  return (
    <div>
      <h1>Hi, I'm Ian Biomdo</h1>
      <img src={yourImage} alt="A picture of Your Name" />
      <h2>About Me</h2>
      <p>A little bit about me and my journey as a developer.</p>
      <a href="https://github.com/dashboard" target="_blank" rel="noopener noreferrer">
        GitHub
      </a>
      <a href="https://www.linkedin.com/feed/" target="_blank" rel="noopener noreferrer">
        LinkedIn
      </a>
    </div>
  );
}

export default App;