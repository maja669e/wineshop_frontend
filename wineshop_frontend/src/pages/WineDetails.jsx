import React from 'react'
import {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'

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




const WineDetails = () => {

    const [wine, setWine] = useState({});
    const params = useParams();

    useEffect(() => {
        const getWine = async () => {
            const result = await fetch(`http://localhost:5157/graphql/${params.productGuid}`);
            const data = await result.json();
            console.log(data);
            setWine(data)
        }
        getWine();
    }, [])


    const {guid, description, id, name, price} = wine;
    return <div> 

        <Container>
        <Wrapper>
            <ImgContainer>
            
            <Image src="https://th.bing.com/th/id/OIP.r-UUXaEE4rjItdHf8vmKuwHaO_?pid=ImgDet&rs=1" />
            </ImgContainer>
          
           <InfoContainer>
            <Title>{name}</Title>
            <Desc>{description}</Desc>
            <Price>{price}$</Price>

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



    </div>

}

export default WineDetails;