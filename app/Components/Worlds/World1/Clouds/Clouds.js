'use client'

import {useEffect} from "react"
import { gsap, Power3 } from 'gsap';

const clouds = [
    {
        id: "cloud1",
        className: "right-[350px] top-[300px]",
        position: {
            x: 800,
            y: 0,
        },
        svg: (
            <img src="/assets/world1/clouds/cloud1.png" width="300" />
        )
    },
    {
        id: "cloud2",
        className: "right-[-5px] top-[80px]",
        position: {
            x: 300,
            y: -300,
        },
        svg: (
            <img src="/assets/world1/clouds/cloud2.png" width="300" />
        )
    },
    {
        id: "cloud3",
        className: "left-[-90px] top-[250px]",
        position: {
            x: -450,
            y: 0,
        },
        svg: (
            <img src="/assets/world1/clouds/cloud2.png" width="430" />
        )
    },
    {
        id: "cloud4",
        className: "right-[-135px] bottom-[-55px]",
        position: {
            x: 400,
            y: -400,
        },
        svg: (
            <img src="/assets/world1/clouds/cloud1.png" width="530" />
        )
    },
    {
        id: "cloud5",
        className: "left-[-100px] bottom-[-90px]",
        position: {
            x: -300,
            y: 300,
        },
        svg: (
            <img src="/assets/world1/clouds/cloud2.png" width="700" />
        )
    }
];

const Clouds = (props) => {
    const headline = "Humble Beginnings";
    const headlineLength = headline.replace(" ", "").length;
    const headlineDuration = 1 / headlineLength;

    console.log(headlineDuration)

    useEffect( () => {
        if(props.animate) {
            gsap.to(`#cloud1`, {x: 0, y: 0, duration: .5, ease: Power3.easeInOut, delay: props.delay});
            gsap.to(`#cloud2`, {x: 0, y: 0, duration: .5, ease: Power3.easeInOut, delay: props.delay});
            gsap.to(`#cloud3`, {x: 0, y: 0, duration: .5, ease: Power3.easeInOut, delay: props.delay});
            gsap.to(`#cloud4`, {x: 0, y: 0, duration: .5, ease: Power3.easeInOut, delay: props.delay});
            gsap.to(`#cloud5`, {x: 0, y: 0, duration: .5, ease: Power3.easeInOut, delay: props.delay});

            for(var x = 0; x < headlineLength; x++) {
                gsap.to(`.lt${ x }`, .5, { scale: 1, ease: Power3.easeInOut, delay: .8 + ( x * headlineDuration ) });
            }

            gsap.to(`#cloud1`,   {y: -1000, duration: 2.1, ease: Power3.easeInOut, delay: 2});
            gsap.to(`#cloud2`,   {y: -1000, duration: 2.2, ease: Power3.easeInOut, delay: 2});
            gsap.to(`#cloud3`,   {y: -1000, duration: 2.3, ease: Power3.easeInOut, delay: 2});
            gsap.to(`#cloud4`,   {y: -1000, duration: 1.8, ease: Power3.easeInOut, delay: 2});
            gsap.to(`#cloud5`,   {y: -1000, duration: 1.8, ease: Power3.easeInOut, delay: 2});
            gsap.to(`.headline`, {y: -1000, duration: 2, ease: Power3.easeInOut, delay: 2});
        }
    }, [props.animate])

    return (
        <div id="welcome-text" className="pointer-events-none fixed top-0 left-0 right-0 bottom-0">
            { clouds.map( c => (
                <div id={ c.id } key={`cloud_${ c.id }`} style={{ transform: `translate(${ c.position.x }px, ${ c.position.y }px)`}}  className={`${ c.className } pointer-events-none clouds absolute flex items-center justify-center flex-wrap text-center`}>
                    { c.svg }
                </div>
            ))}
            <div id="text" className="pointer-events-none absolute top-0 left-0 right-0 bottom-0 text-center flex items-center justify-center">
                <h1 className="headline uppercase text-white text-[100px] leading-none font-[700] tracking-[-2.5px]">
                    { headline.split(" ").map((w, wi) => (
                        <span className="flex justify-center" key={`headline_word_${ wi }`}>
                            {w.split("").map((t,i) => <span key={`word_ltr_${ wi }_${ i }`} className={`block scale-0 lt${i}`}>{t}</span>)}
                        </span>
                    ))}
                </h1>
            </div>
        </div>
    )
}

export default Clouds;