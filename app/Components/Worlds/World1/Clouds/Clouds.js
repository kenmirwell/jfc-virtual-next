'use client'

import {useEffect} from "react"
import { gsap, Power3 } from 'gsap';

const clouds = [
    {
        id: "cloud1",
        className: "left-[250px]",
        position: {
            x: -1000,
            y: 0,
        },
        svg: (
            <svg className="scale-[0.6]" width="250" height="138" viewBox="0 0 250 138" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="123" cy="48" r="48" fill="white"/>
                <circle cx="75" cy="81" r="48" fill="white"/>
                <circle cx="130" cy="90" r="48" fill="white"/>
                <ellipse cx="182" cy="109" rx="26" ry="19" fill="white"/>
                <ellipse cx="224" cy="74" rx="26" ry="19" fill="white"/>
                <ellipse cx="26.5" cy="80" rx="26.5" ry="25" fill="white"/>
                <ellipse cx="178.5" cy="74" rx="45.5" ry="41" fill="white"/>
            </svg>
        )
    },
    {
        id: "cloud2",
        className: "right-[150px] top-[200px]",
        position: {
            x: 1000,
            y: 0,
        },
        svg: (
            <svg width="250" height="138" viewBox="0 0 250 138" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="123" cy="48" r="48" fill="white"/>
                <circle cx="75" cy="81" r="48" fill="white"/>
                <circle cx="130" cy="90" r="48" fill="white"/>
                <ellipse cx="182" cy="109" rx="26" ry="19" fill="white"/>
                <ellipse cx="224" cy="74" rx="26" ry="19" fill="white"/>
                <ellipse cx="26.5" cy="80" rx="26.5" ry="25" fill="white"/>
                <ellipse cx="178.5" cy="74" rx="45.5" ry="41" fill="white"/>
            </svg>
        )
    },
    {
        id: "cloud3",
        className: "left-[50px] top-[300px]",
        position: {
            x: -1000,
            y: 0,
        },
        svg: (
            <svg width="250" height="138" viewBox="0 0 250 138" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="123" cy="48" r="48" fill="white"/>
                <circle cx="75" cy="81" r="48" fill="white"/>
                <circle cx="130" cy="90" r="48" fill="white"/>
                <ellipse cx="182" cy="109" rx="26" ry="19" fill="white"/>
                <ellipse cx="224" cy="74" rx="26" ry="19" fill="white"/>
                <ellipse cx="26.5" cy="80" rx="26.5" ry="25" fill="white"/>
                <ellipse cx="178.5" cy="74" rx="45.5" ry="41" fill="white"/>
            </svg>
        )
    },
    {
        id: "cloud4",
        className: "left-[150px] top-[500px]",
        position: {
            x: -1000,
            y: 0,
        },
        svg: (
            <svg className="scale-[0.8]" width="250" height="138" viewBox="0 0 250 138" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="123" cy="48" r="48" fill="white"/>
                <circle cx="75" cy="81" r="48" fill="white"/>
                <circle cx="130" cy="90" r="48" fill="white"/>
                <ellipse cx="182" cy="109" rx="26" ry="19" fill="white"/>
                <ellipse cx="224" cy="74" rx="26" ry="19" fill="white"/>
                <ellipse cx="26.5" cy="80" rx="26.5" ry="25" fill="white"/>
                <ellipse cx="178.5" cy="74" rx="45.5" ry="41" fill="white"/>
            </svg>
        )
    },
    {
        id: "cloud5",
        className: "right-[50px] top-[500px]",
        position: {
            x: 1000,
            y: 0,
        },
        svg: (
            <svg className="scale-[0.5]" width="250" height="138" viewBox="0 0 250 138" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="123" cy="48" r="48" fill="white"/>
                <circle cx="75" cy="81" r="48" fill="white"/>
                <circle cx="130" cy="90" r="48" fill="white"/>
                <ellipse cx="182" cy="109" rx="26" ry="19" fill="white"/>
                <ellipse cx="224" cy="74" rx="26" ry="19" fill="white"/>
                <ellipse cx="26.5" cy="80" rx="26.5" ry="25" fill="white"/>
                <ellipse cx="178.5" cy="74" rx="45.5" ry="41" fill="white"/>
            </svg>
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
            gsap.to(`#cloud1`, {x: 0, duration: .5, ease: Power3.easeInOut, delay: props.delay});
            gsap.to(`#cloud2`, {x: 0, duration: .5, ease: Power3.easeInOut, delay: props.delay});
            gsap.to(`#cloud3`, {x: 0, duration: .5, ease: Power3.easeInOut, delay: props.delay});
            gsap.to(`#cloud4`, {x: 0, duration: .5, ease: Power3.easeInOut, delay: props.delay});
            gsap.to(`#cloud5`, {x: 0, duration: .5, ease: Power3.easeInOut, delay: props.delay});

            for(var x = 0; x < headlineLength; x++) {
                gsap.to(`.lt${ x }`, .5, { scale: 1, ease: Power3.easeInOut, delay: .8 + ( x * headlineDuration ) });
            }

            gsap.to(`#cloud1`,   {y: -1000, duration: 2.2, ease: Power3.easeInOut, delay: 2});
            gsap.to(`#cloud2`,   {y: -1000, duration: 2, ease: Power3.easeInOut, delay: 2});
            gsap.to(`#cloud3`,   {y: -1000, duration: 2, ease: Power3.easeInOut, delay: 2});
            gsap.to(`#cloud4`,   {y: -1000, duration: 2.4, ease: Power3.easeInOut, delay: 2});
            gsap.to(`#cloud5`,   {y: -1000, duration: 2.6, ease: Power3.easeInOut, delay: 2});
            gsap.to(`.headline`, {y: -1000, duration: 2, ease: Power3.easeInOut, delay: 2});
        }
    }, [props.animate])

    return (
        <div id="welcome-text" className="pointer-events-none fixed top-0 left-0 right-0 bottom-0">
            { clouds.map( c => (
                <div id={ c.id } key={`cloud_${ c.id }`} style={{ transform: `translate(${ c.position.x }px, ${ c.position.y }px)`}} className={`${ c.className } pointer-events-none clouds absolute flex items-center justify-center flex-wrap text-center`}>
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