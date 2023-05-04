
import styled from 'styled-components'
import Product from "./Product";
import React, { useState, useEffect } from 'react'


const Container = styled.div`
padding: 20px;
display: flex;
flex-wrap: wrap;
justify-content: space-between;
`


const Products = () => {
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

    

    return (

     
        
        <Container>
            
            {wines.map((wine) =>(
                
                <Product wine={wine} key={wine.id}>
                </Product>                

            ))}

     {/*    {wines.map((wine) => {
         return (
            <div key={wine.id}>
               <h2>{wine.name}</h2>
               <p>{wine.description}</p>
            </div>
         );
      })} */}
        </Container>

    
    )
}



export default Products;