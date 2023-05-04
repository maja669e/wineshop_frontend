import {Link} from 'react-router-dom'

const WineCard = ({wine}) => {

    const {productGuid, id, name, price} = wine;
    return <div>
        <img
            src="https://th.bing.com/th/id/OIP.r-UUXaEE4rjItdHf8vmKuwHaO_?pid=ImgDet&rs=1"
            alt={name}
            style={{
                height: "180px",
                width: "100px"
            }}/>
            <Link to={`api/Wine/${productGuid}`}>{name}</Link>
        
        <span>{price}</span>

    </div>

}

export default WineCard;