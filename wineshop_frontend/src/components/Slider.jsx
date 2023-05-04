import React from "react";
import styled from 'styled-components';
import {ArrowLeftOutlined, ArrowRightOutlined} from '@material-ui/icons';

const Container = styled.div`
 width: 100%;
 height: 100vh;
 display: flex;
 position: relative;
 overflow: hidden;
`

const Arrow = styled.div`
    width: 50px;
    height: 50px;
    background-color: #fff7f7;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center; 
    position: absolute;
    top: 0;
    bottom: 0;
    left: ${props=> props.direction === "left" && "10px"};
    right: ${props=> props.direction === "right" && "10px"};
    margin: auto;
    cursor: pointer;
    opacity: 0.5;
    z-index: 2;
`

const Wrapper = styled.div`
 height: 100%;
 display: flex;
 width: 100%;
`


const Slide = styled.div`
margin-top: 3vw;
height: 100vh;
display: flex;
align-items: center;
width: 100%;

`
const ImgContainer = styled.div`
height: 100%;
width: 100%;
`
const Image = styled.div`
background-image: url("https://th.bing.com/th/id/R.c767655b3a953a6e2fedc55fa32ebf88?rik=JXq53VZP5aRzQg&pid=ImgRaw&r=0");
width: 100%;
margin: 0;
background-attachment: fixed;
background-size: cover;
height: 85%;
width: 100%;
`


const Slider = () => {
    return (
        <Container>
            <Arrow direction="left">
                <ArrowLeftOutlined/>
            </Arrow>
        <Wrapper>
            <Slide>
           
            <ImgContainer>
            <Image></Image>
            </ImgContainer>
            
            </Slide>

        </Wrapper>
            <Arrow direction="right">
                <ArrowRightOutlined/>
            </Arrow>
        </Container>
        
    )
} 

export default Slider;