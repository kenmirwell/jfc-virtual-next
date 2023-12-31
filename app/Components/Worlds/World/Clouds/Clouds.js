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
            <img src="https://frdmqigbelepsdgiecdr.supabase.co/storage/v1/object/public/world1%20assets/clouds/CLOUD-ASSET-1.webp?t=2023-11-30T10%3A20%3A11.622Z" width="300" />
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
            <img src="https://frdmqigbelepsdgiecdr.supabase.co/storage/v1/object/public/world1%20assets/clouds/CLOUD-ASSET-2.webp?t=2023-11-30T10%3A21%3A53.811Z" width="300" />
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
            <img src="https://frdmqigbelepsdgiecdr.supabase.co/storage/v1/object/public/world1%20assets/clouds/CLOUD-ASSET-2.webp?t=2023-11-30T10%3A21%3A53.811Z" width="430" />
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
            <img src="https://frdmqigbelepsdgiecdr.supabase.co/storage/v1/object/public/world1%20assets/clouds/CLOUD-ASSET-1.webp?t=2023-11-30T10%3A20%3A11.622Z" width="530" />
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
            <img src="https://frdmqigbelepsdgiecdr.supabase.co/storage/v1/object/public/world1%20assets/clouds/CLOUD-ASSET-2.webp?t=2023-11-30T10%3A21%3A53.811Z" width="700" />
        )
    }
];

const Clouds = ({
    title,
    delay,
    animate,
    color
}) => {
    const headline = title;
    const headlineLength = headline.replace(" ", "").length;
    const headlineDuration = 1 / headlineLength;

    useEffect( () => {
        if(animate) {
            gsap.to(`#cloud1`, {x: 0, y: 0, duration: .5, ease: Power3.easeInOut, delay});
            gsap.to(`#cloud2`, {x: 0, y: 0, duration: .5, ease: Power3.easeInOut, delay});
            gsap.to(`#cloud3`, {x: 0, y: 0, duration: .5, ease: Power3.easeInOut, delay});
            gsap.to(`#cloud4`, {x: 0, y: 0, duration: .5, ease: Power3.easeInOut, delay});
            gsap.to(`#cloud5`, {x: 0, y: 0, duration: .5, ease: Power3.easeInOut, delay});

            for(var x = 0; x < headlineLength; x++) {
                gsap.to(`.lt${ x }`, .5, { scale: 1, ease: Power3.easeInOut, delay: .8 + ( x * headlineDuration ) });
            }

            gsap.to(`#cloud1`,   {y: -1200, duration: 2.1, ease: Power3.easeInOut, delay: 2});
            gsap.to(`#cloud2`,   {y: -1200, duration: 2.2, ease: Power3.easeInOut, delay: 2});
            gsap.to(`#cloud3`,   {y: -1200, duration: 2.3, ease: Power3.easeInOut, delay: 2});
            gsap.to(`#cloud4`,   {y: -1200, duration: 1.8, ease: Power3.easeInOut, delay: 2});
            gsap.to(`#cloud5`,   {y: -1200, duration: 1.8, ease: Power3.easeInOut, delay: 2});
            gsap.to(`#mtitle`, {y: -1200, duration: 2, ease: Power3.easeInOut, delay: 2});
        }
    }, [animate])

    return (
        <div id="welcome-text" className="pointer-events-none fixed top-0 left-0 right-0 bottom-0">
            { clouds.map( c => (
                <div id={ c.id } key={`cloud_${ c.id }`} style={{ transform: `translate(${ c.position.x }px, ${ c.position.y }px)`}}  className={`${ c.className } pointer-events-none clouds absolute flex items-center justify-center flex-wrap text-center`}>
                    { c.svg }
                </div>
            ))}
            <div id="text" className="pointer-events-none absolute top-0 left-0 right-0 bottom-0 text-center flex items-center justify-center">
                <h1 id="mtitle" className="uppercase text-white text-[100px] leading-none font-[700]">
                    { headline.split(" ").map((w, wi) => (
                        <span className="flex justify-center" key={`headline_word_${ wi }`}>
                            {w.split("").map((t,i) => (
                                <span key={`word_ltr_${ wi }_${ i }`} className={`relative headline-single block scale-0 lt${i}`}>
                                    <span className="absolute left-0 right-0" style={{ WebkitTextStroke: `5px ${ color ? color : "#00bbdc" }` }}>{ t }</span>
                                    <span className="relative">{ t }</span>
                                </span>
                            ))}
                        </span>
                    ))}
                </h1>
            </div>
        </div>
    )
}

export default Clouds;