import React from 'react'
import {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'

const WineDetails = () => {

    const [wine, setWine] = useState({});
    const params = useParams();

    useEffect(() => {
        const getWine = async () => {
            const result = await fetch(`http://localhost:5032/api/Wine/${params.productGuid}`);
            const data = await result.json();
            console.log(data);
            setWine(data)
        }
        getWine();
    }, [])


    const {guid, id, name, price} = wine;
    return <div> 
        <img
            src="https://th.bing.com/th/id/OIP.r-UUXaEE4rjItdHf8vmKuwHaO_?pid=ImgDet&rs=1"
            alt={name}
            style={{
                height: "180px",
                width: "100px"
            }}/>
            
        <h1>{name}</h1>
        <span>{price}</span>

    </div>

}

export default WineDetails;