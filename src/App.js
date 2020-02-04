import React from 'react';
import './App.css';

function App() {
  var helloWorld = 'Welcome to the Road to Learn React';
  let user = {
    first_name: 'Damion',
    last_name: 'Gomez',
    middle: 'G'
  };
  return (
    <div className="App">
      <h2>{helloWorld}</h2>
      <h3>Implemented by: {user.first_name} {user.middle}. {user.last_name}</h3>
    </div>
  );
}

export default App;
