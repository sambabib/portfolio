import React, { useState, useEffect, useRef } from 'react';
import Header from '../components/Header';
import Intro from '../components/Intro';
import styled from 'styled-components';
import '../index.css'; 
import Technologies from '../components/Technologies';
import Projects from '../components/Projects';
import Connect from '../components/Connect';
import Menu from '../components/Menu';
import Animate from '../components/Animate';
import Cursor from '../components/Cursor';
import Welcome from '../components/Welcome';

const HeaderCss = styled.div`
  margin: 2rem 2rem;
  `

const Home = () => {
  const [open, setOpen] = useState(false);

  let skewApp = useRef(null);
    useEffect(() => {
      Animate(skewApp)
    }, []);


  useEffect(() => {
    onmousemove = (e) => {
      const cursor = document.querySelector('.cursor')
      cursor.style.left = `${e.pageX}px`
      cursor.style.top = `${e.pageY}px`
    }
  }, []);

  return (
    <div ref={(el) => {skewApp = el}}>
      <Welcome />
      <Cursor />
      <HeaderCss>
        <Header open={open} setOpen={setOpen} />
        <Menu open={open} setOpen={setOpen} />
        <Intro /> 
      </HeaderCss>
      <Technologies />
      <Projects />
      <Connect />
    </div>
  )
}

export default Home;