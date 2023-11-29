"use client"

import React from "react"
import { getCookie } from "cookies-next"

const PopupsA = (props) => {
    const lang = getCookie("lang");
    const activeVideo = props.activeVideo;
    const audioClick = props.audioClick;
    const contents= props.contents;
    const objSelected = props.objSelected;
    const audio = props.audio;
    const onDeselect = props.onDeselect;
    const videoPlayed = props.videoPlayed;

    if( !objSelected ) return null;

    const documents = contents[objSelected];
    const curr = (() => {
        const y = Object.keys(documents)[activeVideo];
        let data = documents[y];
        let content = data.contents[lang];
        
        return {
            ...data,
            ...content
        };
    })();
    
    const PopupYearcomponent = () => {
        return (
            <video autoPlay loop muted>
                <source src={ curr.year } type="video/webm"/>
            </video>
        )
    }

    return (
        <div className={`details-modal-container opacity-0 transition-all duration-[0.5s] ease-in-out ${ objSelected ? "!opacity-100" : "pointer-events-none" }`}>
            <div className={`details-modal`}>
                <div className="details-modal-content absolute flex top-[33px] bottom-[47px] left-[38px] right-[41px]">
                    {videoPlayed && (
                        <>
                            <div className="left-content w-[40%] flex flex-col justify-between">
                                {audio ? (
                                    <button className="audio-button" onClick={ audioClick }>
                                        <img src="/assets/world1/popup-icons/audio-icon.svg" width="100" />
                                    </button> 
                                ) : (
                                    <button className="audio-button" onClick={ audioClick }>
                                        <img src="/assets/world1/popup-icons/audio-mute.svg" width="100" />
                                    </button>
                                )}
                                <div className="button-rw-container w-[50%] ml-[15%] mb-[5%]">
                                    <div className={`rw-content-container flex ${ Object.keys( documents ).length > 1 ? "justify-between" : "justify-around"}`}>
                                        { Object.keys( documents ).map((item, i) => (
                                            <button key={`red-white-${i}`} className={`red-white-container bottom-[70px]`} onClick={() => props.onClickwhiteButton(i)}>
                                                { activeVideo === i ? (
                                                    <div className="red-button-container relative">
                                                        <p className={"active year-text absolute top-[-55px] left-[-26px]"}>{item}</p>
                                                        <img src="/assets/world1/popup-icons/circle-red.svg" width="20" />
                                                        <div className="red-button" />
                                                    </div> 
                                                ) : (
                                                    <div className="white-button-container relative">
                                                        <p className={"year-text absolute top-[-45px] left-[-15px]"}>{item}</p>
                                                        <img src="/assets/world1/popup-icons/circle-white.svg" width="20" />
                                                    </div>
                                                )}
                                            </button>
                                        ))}
                                    </div>
                                    {Object.keys( documents ).length > 1 && <div className="dashline"/>}
                                </div>
                            </div>

                            <div className="right-content w-[60%] flex flex-col justify-between">
                                <div>
                                    {/* <div className={`exit-button flex justify-end ${contents[objSelected].year.filter((yr, i) => props.activeVideo === i)[0] === "2001" && "active" }`}>
                                        <img onClick={ onDeselect } src="/assets/world1/popup-icons/exit.svg" width="50" />
                                    </div> */}
                                    <div className={"popup-years-container"}>
                                        <PopupYearcomponent />
                                    </div>
                                    <div className="text-container">
                                        <div className={"title-container top-[170px] right-[245px]"}>
                                            <h4>{ curr.title }</h4>
                                        </div>
                                        <div className="desc-container top-[200px] pr-[80px]" dangerouslySetInnerHTML={{ __html: curr.description }} />
                                        <div className="popup-image-container mt-[23px]">
                                            <div className="popup-image-single">
                                                { curr.photos.map((img, i) => <img src={img} key={`img--${i}`} /> )}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="button-lr-container flex justify-end gap-5">
                                    <button className={`arrow-left ${ activeVideo > 0 ? "" : "opacity-50"}`} onClick={ () => props.onPrev() }>
                                        <img src="/assets/world1/popup-icons/arrow-left.svg" width="50" />
                                    </button>
                                    <button className={`arrow-right`} onClick={() => activeVideo < Object.keys(documents).length - 1 ? props.onNext() : onDeselect()}>
                                        <img src="/assets/world1/popup-icons/arrow-right.svg" width="50" />
                                    </button>
                                </div>
                            </div>
                        </>
                    )}
                </div>
                {Object.keys( documents ).map((k, i) => (
                    <video onPlay={ props.handleStartVideo } key={`video-${i}`} autoPlay loop muted className={`${ activeVideo !== i ? "video hidden" : "video" }`}>
                        <source src={ documents[k].bg } type="video/webm"/>
                    </video>
                ))}
            </div>                
            <div onClick={ onDeselect } className={`details-modal-overlay ${ objSelected ? "" : "pointer-events-none" }`} />
        </div>
    )
}

export default PopupsA