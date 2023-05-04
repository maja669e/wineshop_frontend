import styled from "styled-components";
import {ShoppingCartOutlined} from '@material-ui/icons';
import {Router, Route, Link} from "react-router-dom";

const Container = styled.div`
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


const Image = styled.img`
height: 75%;
width: 100%;
` 

const Info = styled.div`
width: 100%;
height: 100%;
top: 0;
bottom: 0;
z-index: 3;
display: flex;
align-items: center: 
justify-content: center;

` 
const Icon = styled.div`
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

const Title = styled.h1`
font-family: 'Montserrat', sans-serif;
font-size: 18px;
` 

const Product = ({wine}) => {
    return (

        <Container>
            <Image src="https://th.bing.com/th/id/R.4ef71627ed2c0ae3eed62d9678223ed9?rik=WpmUAmaMSMzbGA&pid=ImgRaw&r=0"/>
            <Info>
                <Title>
                {wine.name}
            </Title>
           
            <Icon>
                    <ShoppingCartOutlined/>
                </Icon>
            </Info>
           
            
        </Container>
    )
}

export default Product;