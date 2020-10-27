import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import './welcome.css';

const Welcome = () => {
    let transition = useRef(null); 
    useEffect(() => {
          var tl = gsap.timeline();
    
          tl.to('.transition li', {
              duration: .5,
              scaleY: 1,
              transformOrigin: 'bottom-left',
              stagger: .2
          });
    
          tl.from('transition li', {
              duration: .5,
              scaleY: 1,
              transformOrigin: 'top-right',
              stagger: .1,
              delay: .1
          });
      })

    return (
        <div ref={(el) => {transition = el}}>
            <ul className='transition'>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
            </ul> 
        </div>
    )
}

export default Welcome;
