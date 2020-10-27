import React from 'react';
import styled from 'styled-components';
import './technologies.css';
import javascript from '../assets/javascript.svg';
import react from '../assets/react.svg';
import node from '../assets/node.svg';

const TechnologiesCss = styled.div`
    margin: 75px 53px;
    `
const HeaderStyling = styled.h2`
    font-size: 11px;
    font-weight: 900;
    color: #fff;
    `

const ParagraphStyling = styled.p`
    font-size: 10px;
    color: #A9A3A3;
    padding: 1rem 0; 
    padding-bottom: 2rem;
    `

function Technologies() {
    return (
        <TechnologiesCss>
            <HeaderStyling>Technologies <span role='img' aria-label='hammer'>🛠</span></HeaderStyling>
            <ParagraphStyling>Here's some of the technologies I have used recently</ParagraphStyling>
            <div className='languages javascript'>
                <p>Javascript</p>
                <img src={javascript} alt='javascript'/>
            </div>
            <div className='languages react'>
                <p>React</p>
                <img src={react} alt='react'/>
            </div>
            <div className='languages node'>
                <p>Node.js</p>
                <img src={node} alt='node'/>
            </div>
        </TechnologiesCss>
    );
}

export default Technologies;
