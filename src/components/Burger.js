import React from 'react';
import styled from 'styled-components';
import './burger.css';

const BurgerStyle = styled.div`
    width: 24px;
    height: 18px;
    display: grid;
    place-items: center;
    cursor: pointer;
    `

const Burger = ( { open, setOpen } ) => {
    return (
        <BurgerStyle open={open} onClick={() => setOpen(!open)}>
            <div className='burger' id='line-1'></div>
            <div className='burger' id='line-2'></div>
            <div className='burger' id='line-3'></div>
        </BurgerStyle>
    )
}

export default Burger;
