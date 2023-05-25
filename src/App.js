import React, { useState, useEffect } from 'react';
import { Routes, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import Slider from './components/Slider';
import WineList from './components/WineList';
import WineDetails from './pages/WineDetails';
import Cart from './components/Cart'
import './App.css';

const App = () => {
  const [wines, setWines] = useState([]);
  const [showWines, setShowWines] = useState(false);
  const [searchInput, setSearchInput] = useState('');
  const [data, setData] = useState(null);


  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://wine-webshop.azurewebsites.net/graphql', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ query: `query {
            wines {
              id
              name
              price
              productGuid
              description
              image
            }
          }` }),
        })
        const result = await response.json();
        setData(result.data);
        console.log(result, "result")
        console.log(data, "data")
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);



/*   const searchWinesHandler = (event) => {
    const search = event.target.value.toLowerCase();
    setSearchInput(search);
  };

  const filteredWines = wines.filter((wine) =>
    wine.name.toLowerCase().includes(searchInput)
  );

  let renderWines = 'Loading wines...';

  if (showWines) {
    renderWines = <WineList wines={filteredWines} />;
  }
 */


  return (
  <div className="max-w-6xl mx-auto bg-slate-200">
        <Navbar />
        <Slider />
  {/*    <input
          type="search"
          placeholder="Search..."
          onChange={searchWinesHandler}
        />   */}

    {data ? (
    <WineList wines={data.wines} />
        ) : (
    <p>Loading...</p>
        )}
        <Routes>
        <Route path="/cart/123" element={<Cart/>} />
          {/* <Route path="/" element={renderWines} /> */}
          {/* <Route path="/graphql/:productGuid" element={<WineDetails />} /> */}
        </Routes>  
     
    </div>
  );
};

export default App;
