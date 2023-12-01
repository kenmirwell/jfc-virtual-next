'use client'

import { useEffect } from "react"
import { gsap, Power3 } from 'gsap';

const clouds = [
    {
        id: "cloud1",
        className: "absolute w-2/12 top-[30%] right-[10%] cloudRight opacity-0",
        svg: (
            <img src="/assets/world1/clouds/cloud1.png" width="100%" />
        )
    },
    {
        id: "cloud2",
        className: "absolute w-3/12 left-[-8%] top-[15%] cloudLeft opacity-0",
        svg: (
            <img src="/assets/world1/clouds/cloud2.png" width="100%" />
        )
    },
    {
        id: "cloud3",
        className: "absolute w-2/12 top-[2%] right-[-2%] cloudRight opacity-0",
        svg: (
            <img src="/assets/world1/clouds/cloud2.png" width="100%" />
        )
    },
    {
        id: "cloud4",
        className: "absolute w-4/12 bottom-[-7%] right-[-6%] cloudRight opacity-0",
        svg: (
            <img src="/assets/world1/clouds/cloud1.png" width="100%" />
        )
    },
    {
        id: "cloud5",
        className: "absolute w-5/12 bottom-[-8%] left-[-6%] cloudLeft opacity-0",
        svg: (
            <img src="/assets/world1/clouds/cloud2.png" width="100%" />
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

    useEffect(() => {
        if (animate) {
            gsap.set(['.clouds'], { opacity: 1 });
            gsap.from(['.cloudRight'], { x: '+=400%', y: 0, duration: .5, ease: Power3.easeInOut, delay });
            gsap.from(['.cloudLeft'], { x: '-=400%', y: 0, duration: .5, ease: Power3.easeInOut, delay });

            for (var x = 0; x < headlineLength; x++) {
                gsap.to(`.lt${x}`, .5, { scale: 1, ease: Power3.easeInOut, delay: .8 + (x * headlineDuration) });
            }

            gsap.to(['.clouds', '#mtitle'], { y: '-=500%', duration: 2, ease: Power3.easeInOut, delay: 2 });
            // gsap.to(`#cloud1`, { y: -1200, duration: 2.1, ease: Power3.easeInOut, delay: 2 });
            // gsap.to(`#cloud2`, { y: -1200, duration: 2.2, ease: Power3.easeInOut, delay: 2 });
            // gsap.to(`#cloud3`, { y: -1200, duration: 2.3, ease: Power3.easeInOut, delay: 2 });
            // gsap.to(`#cloud4`, { y: -1200, duration: 1.8, ease: Power3.easeInOut, delay: 2 });
            // gsap.to(`#cloud5`, { y: -1200, duration: 1.8, ease: Power3.easeInOut, delay: 2 });
            // gsap.to(`#mtitle`, { y: -1200, duration: 2, ease: Power3.easeInOut, delay: 2 });
        }
    }, [animate])

    return (
        <div id="welcome-text" className="pointer-events-none absolute top-0 left-0 w-full h-full">
            {clouds.map(c => (
                <div id={c.id} key={`cloud_${c.id}`}
                    // className="absolute w-1/4"
                    // style={{ transform: `translate(${c.position.x}px, ${c.position.y}px)` }} 
                    className={`${c.className} pointer-events-none clouds`}
                >
                    {c.svg}
                </div>
            ))}
            <div id="text" className="pointer-events-none absolute top-0 left-0 right-0 bottom-0 text-center flex items-center justify-center">
                <h1 id="mtitle" className="uppercase text-white text-[100px] leading-none font-[700]">
                    {headline.split(" ").map((w, wi) => (
                        <span className="flex justify-center" key={`headline_word_${wi}`}>
                            {w.split("").map((t, i) => (
                                <span key={`word_ltr_${wi}_${i}`} className={`relative headline-single block scale-0 lt${i}`}>
                                    <span className="absolute left-0 right-0" style={{ WebkitTextStroke: `5px ${color ? color : "#00bbdc"}` }}>{t}</span>
                                    <span className="relative">{t}</span>
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