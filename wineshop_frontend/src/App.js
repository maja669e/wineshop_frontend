import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from 'react';

function App() {
const [wines, setWines] = useState([]);

useEffect(() => {
  fetch('http://localhost:5032/api/Wine')
     .then((response) => response.json())
     .then((data) => {
        console.log(data);
        setWines(data);
     })
     .catch((err) => {
        console.log(err.message);
     });
}, []);

  return (
    <div className="App">

      {/* //Print from get request */}
      <div className="wines-container">
      {wines.map((wine) => {
         return (
            <div className="post-card" key={wine.id}>
               <h2 className="post-title">{wine.name}</h2>
               <p className="post-origin">{wine.origin}</p>
            </div>
         );
      })}
   </div>

   
    </div>
  );
}

export default App;


