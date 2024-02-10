import React, { useState, useEffect } from 'react'; // Importing useEffect

import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import axios from 'axios';

function App() {
  const [jokes, setJokes] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/jokes')
      .then((response) => {
        setJokes(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }); // Empty dependency array to execute the effect only once

  return (
    <>
      <h1>Chai Aur Sutta firr code</h1>
      <p> JOKES : {jokes.length}</p>
      {jokes.map((joke, index) => (
        <div key={joke.id}>
          <h3>{joke.title}</h3>
          <p>{joke.flirty_lines}</p>
        </div>
      ))}
    </>
  );
}

export default App;
