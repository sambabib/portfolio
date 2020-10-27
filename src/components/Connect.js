import React from 'react';
import styled from 'styled-components';
import './connect.css';
import github from '../assets/github-socials.svg';
import twitter from '../assets/twitter.svg';


const ConnectCss = styled.div`
    margin: 75px 53px;
    `

const HeadingStyle = styled.h2`
    font-size: 11px;
    font-weight: 900;
    color: #fff;
    `

const ParagraphStyle = styled.p`
    font-size: 10px;
    color: #A9A3A3;
    padding: 1rem 0;
    `
const Contact = styled.p`
    font-size: 11px;
    font-weight: 500;
    color: #A9A3A3;
    padding-bottom: 1rem;
    margin-top: 3rem;
    `


const Connect = () => {
    return (
        <ConnectCss>
            <HeadingStyle>Connect with Me <span role='img' aria-label='handshake'>🤝🌎</span></HeadingStyle>
            <ParagraphStyle>
                Rumour has it that I'm pretty awesome. If you have heard and want to keep in touch. You can find me here.
            </ParagraphStyle>
            <div className='main-div'>
                <div className='back-border'>
                    <div className='socials front-border'>
                        <img src={twitter} alt='twitter'/> 
                        <p>Twitter</p>
                    </div>
                </div>
                <div className='back-border'>
                    <div className='socials front-border'>
                        <img src={github} alt='github'/> 
                        <p>Github</p>
                    </div>
                </div>
            </div>
            <div className='contact'>
                <Contact>Say Hello</Contact>
                <p><span role='img' aria-label='phone'>📞</span> +234 (902) 415 4488</p> 
                <p><span role='img' aria-label='email'>📧</span> adekyte@gmail.com</p>
            </div>
        </ConnectCss>
    )
}

export default Connect;
