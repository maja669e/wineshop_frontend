import React from 'react';
import styled from 'styled-components'
import {Remove, Add} from '@material-ui/icons';



const Container = styled.div`
`
const Wrapper = styled.div`
padding: 50px;
display: flex;
`

const ImgContainer = styled.div`
flex: 1;
`
const Image = styled.img`
width: 100%;
height: 90vh;
object-fit: cover;
`

const InfoContainer = styled.div`
flex: 1;
padding: 0px 50px;
`
const Title = styled.h1`
font-weight: 200;
`

const Desc = styled.p`
margin: 20px 0px;
`
const Price = styled.span`
font-weight: 100;
font-size: 40px;
`

const AddContainer = styled.div`
width: 50%;
display: flex;
align-items: center;
justify-content: space-between;
`
const AmountContainer = styled.div`
display: flex;
align-items: center;
font-weight: 700;
`
const Amount = styled.span`
width: 30px;
height: 30px;
border-radius: 10px;
border: 1px solid #5F021F;
display: flex;
align-item: center;
justify-content: center;
margin: 0px 5px;
`
const Button = styled.button`
padding: 15px;
border: 2px solid #5F021F;
background-color: white;
cursor: pointer;
font-weight: 500;

&:hover {
    opacity: 0.7;
}
`



const Product = () => {
    return (
        <Container>

        <Wrapper>
            <ImgContainer>
            
            <Image src="https://th.bing.com/th/id/R.4ef71627ed2c0ae3eed62d9678223ed9?rik=WpmUAmaMSMzbGA&pid=ImgRaw&r=0" />
            </ImgContainer>
          
           <InfoContainer>
            <Title>Vin</Title>
            <Desc>gjwopgjweopg </Desc>
            <Price>200 kr</Price>

            <AddContainer>
            <AmountContainer>
                <Remove/>
                <Amount>1</Amount>
                <Add/>
            </AmountContainer>
            <Button>ADD TO CART</Button>

            </AddContainer>
           </InfoContainer>
           
         
        </Wrapper>
        </Container>
    )
}

export default Product;