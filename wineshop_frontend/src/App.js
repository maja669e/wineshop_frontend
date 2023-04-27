import './App.css';
import React, { useState, useEffect } from 'react';



function App() {
const [wines, setWines] = useState([]);

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



function Card(props){
   return (
      <div className='card'>
         <div className='card_body'>
            <img src={props.img} className='card_img'/>
            <h2 className='card_name'>{props.name}</h2>
            <p className='card_description'>{props.description}</p>

         </div>
         <button className='card_button'>Read more</button>
         <button className='card_button'>Add to cart</button>

      </div>
   )

}

   

  return (
   
    <div className="App">
        

      {/* //Print from get request */}
      <div className="wines-container">
      {wines.map((wine) => {
          return (
           <Card
           
           img={wine.image}
           name={wine.name}
           description={wine.description}
           />
         );
         
      
            
       
      })}
   </div>



   
    </div>
  );
}

export default App;


