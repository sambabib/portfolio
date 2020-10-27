import React from 'react';
import styled from 'styled-components';
import './menu.css';

const MenuItems = styled.div`
    background: #020202;
    height: 100vh;
    width: 100vw;
    display: flex;
    flex-direction: column;
    justify-content: center;
    position: absolute;
    top: 0;
    z-index: 3;
    transition: transform 0.3s ease-in-out;
    transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(-100%)'};
    `

const Menu = ( { open } ) => {
    return (
        <div className='menu-position'>
            <MenuItems open={open}>
                    <ul>
                        <li>
                            <a href='#'>
                                <span role='img' aria-label='books'>📚</span>
                            </a> 
                        Resume
                        </li>
                        <li>
                            <a href='#'>
                                <span role='img' aria-label='tools'>🔖</span>
                            </a> 
                        Technologies
                        </li>
                        <li>
                            <a href='#'>
                                <span role='img' aria-label='projects'>📁</span>
                            </a> 
                        Projects
                        </li>
                        <li>
                            <a href='#'>
                                <span role='img' aria-label='connect'>🌐</span>
                            </a> 
                        Connect with me
                        </li>
                    </ul>
            </MenuItems>
        </div>     
    )
}

export default Menu;
