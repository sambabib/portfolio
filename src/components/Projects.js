import React from 'react';
import styled from 'styled-components';
import './projects.css';
import github from '../assets/github.svg';
import link from '../assets/link.svg';
// import Tilt from 'react-tilt';

const ProjectsCss = styled.div`
    margin: 75px 53px;
    `

const HeadingStyle = styled.h2`
    font-size: 11px;
    font-weight: 900;
    color: #fff
    `

const ParagraphStyle = styled.p`
    font-size: 10px;
    color: #A9A3A3;
    padding: 1rem 0;
    `

// const options = { 
//     max: 25,
//     speed: 300,
//     easing: 'cubic-bezier(.03,.98,.52,.99)'
//  }

// const style = {
//     width: '100px',
//     height: '75px'
// }

const Projects = () => {
    return (
        <ProjectsCss>
            <HeadingStyle>
                Projects <span role='img' aria-label='folder'>📁</span>
            </HeadingStyle>
            <ParagraphStyle>Hey! Come have a look at some of the stuff I have worked on.</ParagraphStyle><div className='projects-container'>
            <div className='projects'>
                <div className='stacks'>
                    <p>React</p>
                </div>
                <p>Robofriends</p>
                <div className='code-link'>
                    <img src={github} alt='github'/> 
                    <img src={link} alt='live link'/>
                </div>
            </div>
                </div>

            {/* <Tilt className='Tilt' options={options} style={{style}}>
            </Tilt> */}
        </ProjectsCss>
    )
}

export default Projects;
