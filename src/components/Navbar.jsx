import React from 'react';
import styled from 'styled-components'
import {Search, ShoppingCartOutlined} from '@material-ui/icons';
import {Badge} from '@material-ui/core';
import Cart from './Cart';
import {Routes, Route, Link} from "react-router-dom";


const Container = styled.div`
    height: 60px;
    width: 100%;
    top: 0;
    position: sticky;
    background-color: white;
    z-index: 4;
`
const Wrapper = styled.div`
    padding: 15px 25px;
    display: flex;
    align-items: center;
    justify-content: space-between;
`

const Left = styled.div`
    display: flex;
    align-items: center;
    flex: 1;

`


const Center = styled.div`
text-align: center;
 flex: 1;
`

const Logo = styled.h1`
color: #5F021F;
font-weigth: bold;
font-family: 'Philosopher', sans-serif;
font-size: 45px;
`
const Right = styled.div`
display: flex;
align-items: center;
justify-content: flex-end;
 flex: 1;

`

const MenuItem = styled.div`
font-size: 14px;
cursor: pointer;
margin-left: 25px;
`
const Navbar = () => {

    return (
     
        <Container>
            <Wrapper>
                <Left>
                  
                </Left>
                <Center><Logo>FINE WINE</Logo></Center>
                <Right>
                    <MenuItem>REGISTER</MenuItem>
                    <MenuItem>SIGN IN</MenuItem>
                    <MenuItem> 

                    <Badge badgeContent={4} color="primary" overlap="rectangular">
              <Link to={`cart/123`}>
                <ShoppingCartOutlined color="action" />
              </Link>
            </Badge>
                    </MenuItem>
                    </Right>
                
            </Wrapper>
        </Container>
        
    )
}

export default Navbar;