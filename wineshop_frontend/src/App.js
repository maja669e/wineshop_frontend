import React, {Component, useState, useEffect} from 'react';
import Navbar from './components/Navbar';
import Slider from './components/Slider';
import WineList from './components/WineList';
import {Routes, Route, Link} from 'react-router-dom'

import './App.css';
import WineDetails from './pages/WineDetails';

const App = () => {
    const [wines, setWines] = useState([]);
    const [showWines, setShowWines] = useState(false);
    const [searchInput, setSearchInput] = useState('');
 
    useEffect(() => {
        fetch('http://localhost:5032/api/Wine')
            .then((response) => response.json())
            .then((apiWines) => {
            setWines(apiWines);
            setShowWines(true);
            }
            );
    }, [])


    const searchWinesHandler = (event) => {
        const search = event.target.value.toLocaleLowerCase();
        setSearchInput(search)
      
    }

        const filteredWines =
            wines
            .filter((wine) => {
                return wine
                    .name
                    .toLocaleLowerCase()
                    .includes(searchInput)
            })

        let renderWines = "Loading wines..."

        if (showWines) {
           renderWines =  <WineList wines={filteredWines}/>
        }
        return (

            <div className="max-w-6xl mx-auto bg-slate-200">
                <Navbar/>
                <Slider/>

                <input
                    type='search'
                    placeholder="Search..."
                    onChange={searchWinesHandler}/> 
                    <Routes>
                        <Route path="/" element={renderWines}/>
                        <Route path="/api/Wine/:productGuid" element={<WineDetails/>}/>
                    </Routes>
                   
        
            </div>
        );
}

export default App;

