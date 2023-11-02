'use client'

import {useEffect} from "react"
import { gsap, Bounce, Power3 } from 'gsap';



const Clouds = (props) => {
    useEffect( () => {
        if(props.animate) {
            gsap.to(`#cloud1`, {x: 0, y: 0, duration: .5, ease: Power3.easeInOut, delay: props.delay})
            gsap.to(`#cloud2`, {x: 0, y: 0, duration: .5, ease: Power3.easeInOut, delay: props.delay})
            gsap.to(`#cloud3`, {x: 0, y: 0, duration: .5, ease: Power3.easeInOut, delay: props.delay})
            gsap.to(`#cloud4`, {x: 0, y: 0, duration: .5, ease: Power3.easeInOut, delay: props.delay})
            gsap.to(`#cloud5`, {x: 0, y: 0, duration: .5, ease: Power3.easeInOut, delay: props.delay})

            gsap.to("#text", {opacity: 100, duration: 1, ease: Power3.easeInOut, delay: 1})
            gsap.to("#welcome-text", {y: -1000, duration: 2, ease: Power3.easeInOut, delay: 2})
        }
    }, [props.animate])

    return (
        <div id="welcome-text" className="pointer-events-none fixed top-0 left-0 right-0 bottom-0">
            <div id="cloud1" className="pointer-events-none clouds absolute flex items-center justify-center flex-wrap text-center translate-x-[-1000px] translate-y-[-1000px]">
                <svg width="250" height="138" viewBox="0 0 250 138" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="123" cy="48" r="48" fill="white"/>
                    <circle cx="75" cy="81" r="48" fill="white"/>
                    <circle cx="130" cy="90" r="48" fill="white"/>
                    <ellipse cx="182" cy="109" rx="26" ry="19" fill="white"/>
                    <ellipse cx="224" cy="74" rx="26" ry="19" fill="white"/>
                    <ellipse cx="26.5" cy="80" rx="26.5" ry="25" fill="white"/>
                    <ellipse cx="178.5" cy="74" rx="45.5" ry="41" fill="white"/>
                </svg>
            </div>
            <div id="cloud2" className="pointer-events-none clouds absolute flex right-0 top-[200px] items-center justify-center flex-wrap text-center translate-x-[1000px] translate-y-[-1000px]">
                <svg width="250" height="138" viewBox="0 0 250 138" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="123" cy="48" r="48" fill="white"/>
                    <circle cx="75" cy="81" r="48" fill="white"/>
                    <circle cx="130" cy="90" r="48" fill="white"/>
                    <ellipse cx="182" cy="109" rx="26" ry="19" fill="white"/>
                    <ellipse cx="224" cy="74" rx="26" ry="19" fill="white"/>
                    <ellipse cx="26.5" cy="80" rx="26.5" ry="25" fill="white"/>
                    <ellipse cx="178.5" cy="74" rx="45.5" ry="41" fill="white"/>
                </svg>
            </div>
            <div id="cloud3" className="pointer-events-none clouds absolute flex top-[300px] items-center justify-center flex-wrap text-center translate-x-[-1000px] translate-y-[1000px]">
                <svg width="250" height="138" viewBox="0 0 250 138" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="123" cy="48" r="48" fill="white"/>
                    <circle cx="75" cy="81" r="48" fill="white"/>
                    <circle cx="130" cy="90" r="48" fill="white"/>
                    <ellipse cx="182" cy="109" rx="26" ry="19" fill="white"/>
                    <ellipse cx="224" cy="74" rx="26" ry="19" fill="white"/>
                    <ellipse cx="26.5" cy="80" rx="26.5" ry="25" fill="white"/>
                    <ellipse cx="178.5" cy="74" rx="45.5" ry="41" fill="white"/>
                </svg>
            </div>
            <div id="cloud4" className="pointer-events-none clouds absolute flex top-[500px] items-center justify-center flex-wrap text-center translate-x-[1000px] translate-y-[1000px]">
                <svg width="250" height="138" viewBox="0 0 250 138" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="123" cy="48" r="48" fill="white"/>
                    <circle cx="75" cy="81" r="48" fill="white"/>
                    <circle cx="130" cy="90" r="48" fill="white"/>
                    <ellipse cx="182" cy="109" rx="26" ry="19" fill="white"/>
                    <ellipse cx="224" cy="74" rx="26" ry="19" fill="white"/>
                    <ellipse cx="26.5" cy="80" rx="26.5" ry="25" fill="white"/>
                    <ellipse cx="178.5" cy="74" rx="45.5" ry="41" fill="white"/>
                </svg>
            </div>
            <div id="cloud5" className="pointer-events-none clouds absolute flex right-[-50px] top-[500px] items-center justify-center flex-wrap text-center translate-x-[1000px] translate-y-[1000px]">
                <svg width="250" height="138" viewBox="0 0 250 138" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="123" cy="48" r="48" fill="white"/>
                    <circle cx="75" cy="81" r="48" fill="white"/>
                    <circle cx="130" cy="90" r="48" fill="white"/>
                    <ellipse cx="182" cy="109" rx="26" ry="19" fill="white"/>
                    <ellipse cx="224" cy="74" rx="26" ry="19" fill="white"/>
                    <ellipse cx="26.5" cy="80" rx="26.5" ry="25" fill="white"/>
                    <ellipse cx="178.5" cy="74" rx="45.5" ry="41" fill="white"/>
                </svg>
            </div>
            <div id="text" className="pointer-events-none opacity-0 absolute top-0 left-0 right-0 bottom-0 text-center flex items-center justify-center">
                <h1 className="uppercase text-white text-[80px] leading-none font-[700] tracking-[-2.5px]" style={{ WebkitTextStroke: "2px #03BBDF"}}>Humble<br></br>Beginnings</h1>
            </div>
        </div>
    )
}

export default Clouds;