import React from 'react';
import styled from 'styled-components';
import arrow from '../assets/arrow.svg';
import './intro.css';

const Paragraph = styled.p`
    color: #A9A3A3;
    font-size: 10px
    `

const Intro = () => {
    return (
        <div>
            <Paragraph style={{marginTop: '3rem'}}>
                Hey, I'm <span style={{color: 'white', fontWeight: 700}}>Adekite</span><span role='img' aria-label='wave'>👋</span>
            </Paragraph>
            <Paragraph style={{marginBottom: '1rem'}}>
                Welcome to my portfolio website. <span role='img' aria-label='grin'>😁</span> 
            </Paragraph>
            <Paragraph className='code'>
                I write front-end code from a space pod out of Lagos, Nigeria do some UI enthusiasm in my spare time when my eyes wander out the pod.
            </Paragraph>
            <div style={{position: 'relative'}}>
                <div className='collaborate'>
                    Let's collaborate <span><img src={arrow} alt='connect icon'/></span>
                </div>
             </div>
        </div>
    )
}

export default Intro;
