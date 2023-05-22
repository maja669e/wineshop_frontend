import React, { useEffect, useState } from 'react';

const Cart = () => {
  const [basket, setBasket] = useState([]);

  
  useEffect(() => {
    const getBasket = async () => {
      try {
        const result = await fetch('http://localhost:5121/api/basket/GetBasket/123');
        const data = await result.json();
        console.log(data); // Check the fetched data in the console
        setBasket(data);
      } catch (error) {
        console.error('Error fetching basket:', error);
      }
    };
  
    getBasket();
  }, []);

  return (
    <div>
      {basket.result ? (
        <ul>
          {basket.result.basketDetails.map((item) => (
            <li key={item.basketDetailsId}>{item.wine.name}</li>
          ))}
        </ul>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default Cart;
