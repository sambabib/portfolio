import React from 'react';
import Burger from '../components/Burger';
import logo from '../assets/logo.svg';
import styled from 'styled-components';
import './header.css';

const HeaderFlex = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    `

const Header = ( { open, setOpen } ) =>  {
    return (
        <div>
            <HeaderFlex>
                <div className='logo-container'>
                 <img src={logo} alt="logo" />
                </div>
                <Burger open={open} setOpen={setOpen} />
            </HeaderFlex>
        </div>
    )
}

export default Header;
