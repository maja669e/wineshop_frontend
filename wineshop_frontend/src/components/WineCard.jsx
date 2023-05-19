import {Link} from 'react-router-dom'
import styled from "styled-components";
import {ShoppingCartOutlined} from '@material-ui/icons';
import '../App.css';

const Container = styled.div `
flex: 1;
margin: 15px;
max-width: 255px;
min-width: 255px;
height: 360px;
align-items: center; 
justify-content: center;
box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
position: relative;

`

const Image = styled.img `
display: flex;
justify-content: center;
margin: auto;
height: 250px;
width: 120px;

&:hover {
    display: block;
    opacity: 0.6;
    cursor: pointer;
}
`

const Info = styled.div `
width: 100%;
height: 100%;
top: 0;
bottom: 0;
z-index: 3;
align-items: center: 
justify-content: center;
padding: 10px;

`
const Icon = styled.div `
width: 40px;
height: 40px;
border-radius: 50%;
background-color: white:
margin: 10px;
right: 0;
bottom: 0;
position: absolute;

&:hover{
    opacity: 0.6;
    cursor: pointer;
}

`

const Title = styled.h1 `
font-family: 'Montserrat', sans-serif;
font-size: 18px;
`

const Price = styled.span `
font-family: 'Montserrat', sans-serif;
font-size: 16px;
`

const WineCard = ({wine}) => {

    const {productGuid, id, name, price, image} = wine;
    return <div>

        <Container>

            <div className='container'>
                <Link to={`graphql/${productGuid}`}><Image
                    src="https://th.bing.com/th/id/OIP.r-UUXaEE4rjItdHf8vmKuwHaO_?pid=ImgDet&rs=1"></Image>
                <div class="overlay">
                    <div class="text">View</div>
                </div>

                </Link>
            </div>

            <Info>
                <Title>
                    {name}
                </Title>

                <Price>{price}$</Price>
                <Icon>

                    <ShoppingCartOutlined/>
                </Icon>

            </Info>

        </Container>

    </div>

}

export default WineCard;