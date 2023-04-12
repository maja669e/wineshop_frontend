import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from 'react';


function App() {
const [wines, setWines] = useState([]);

const [name, setName] = useState('');
const [categoryId, setCategoryId] = useState('');
const [size, setSize] = useState('');
const [image, setImage] = useState('');
const [origin, setOrigin] = useState('');
const [description, setDescription] = useState('');


const url = 'http://localhost:5032/api/Wine';


//Get request
useEffect(() => {
  fetch(url)
     .then((response) => response.json())
     .then((data) => {
        console.log(data);
        setWines(data);
     })
     .catch((err) => {
        console.log(err.message);
     });
}, []);



//Post request
const addWine = async (name, categoryId, size, image, origin, description) => {
  await fetch(url, {
     method: 'POST',
     mode: 'cors',
     body: JSON.stringify({
        name: name,
        categoryId: categoryId,
        size: size,
        image: image, 
        origin: origin,
        description: description,
     }),
     headers: {
        'Content-type': 'application/json; charset=UTF-8',
     },
  })
     .then((response) => response.json())
     .then((data) => {
        setWines((wines) => [data, ...wines]);
        setName('');
        setCategoryId('');
        setSize("");
        setImage("");
        setOrigin("");
        setDescription("");
     })
     .catch((err) => {
        console.log(err.message);
     });
};

const handleSubmit = (e) => {
  e.preventDefault();
  addWine(name, categoryId, size, image, origin, description);
};    

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


  {/* //Print from post request */}
   <div className="add-wine-container">
         <form onSubmit={handleSubmit}>
          <label>Name</label>
            <input type="text" className="form-control" value={name}
               onChange={(e) => setName(e.target.value)}
            />

              <label>Wine category</label>
              <input type="number" className="form-control" value={categoryId}
               onChange={(e) => setCategoryId(e.target.value)}
            />

              <label>Wine Size</label>
              <input type="text" className="form-control" value={size}
               onChange={(e) => setSize(e.target.value)}
            />


              <label>Image</label>
            <input type="text" className="form-control" value={image}
               onChange={(e) => setImage(e.target.value)}
            />


            <label>Origin</label>
            <input type="text" className="form-control" value={origin}
               onChange={(e) => setOrigin(e.target.value)}
            />

            <label>Description</label>
            <textarea name="" className="form-control" id="" cols="10" rows="8" 
               value={description} onChange={(e) => setDescription(e.target.value)} 
            ></textarea>
            <button type="submit">Add Wine</button>
         </form>
      </div>

   
    </div>
  );
}

export default App;


