import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { CSSPlugin } from 'gsap/CSSPlugin';

const plugins = [ CSSPlugin ];

const Animate = (el) => {
    gsap.registerPlugin(ScrollTrigger, plugins);
    gsap.core.globals('ScrollTrigger', ScrollTrigger);
        let clamp = gsap.utils.clamp(-20, 20)
        ScrollTrigger.create({
            trigger: el,
            onUpdate: (self) => {
                const velocity = clamp(Math.round(self.getVelocity() / 300));
                gsap.to(el, {
                    skewY: velocity,
                    ease: 'power3',
                    duration: .8,
                    overwrite: true
                });
            },
        });
    gsap.set(el, {
        transformOrigin: 'right center',
        force3D: true
    });
}

export default Animate;
