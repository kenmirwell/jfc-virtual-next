import React from "react"

const PopupsA = (props) => {
    const audioClick = props.audioClick
    const contents= props.contents
    const objSelected = props.objSelected
    const audio = props.audio
    const onDeselect = props.onDeselect
    const videoPlayed = props.videoPlayed
    
    const onClickwhiteButton = () => {
        props.onClickwhiteButton
    }

    const handleStartVideo = () => {
        props.handleStartVideo()
    }

    const onNext = () => {
        props.onNext
    }

    const onPrev = () => {
        props.onPrev
    }

    
    const PopupYearcomponent = ({popYears, i}) => {
        return (
            <>
                <video key={`popup-years-${i}`} autoPlay loop muted>
                    <source src={popYears} type="video/webm"/>
                </video>
            </>
        )
    }


    return (
        <div className={`details-modal-container opacity-0 transition-all duration-[0.5s] ease-in-out ${ objSelected ? "!opacity-100" : "pointer-events-none" }`}>
                <div className={`details-modal`}>
                    <div className="details-modal-content absolute flex h-[85%] w-[90%]">
                        {videoPlayed && 
                            <>
                                <div className="left-content w-[40%] flex flex-col justify-between">
                                    {audio ?
                                        <button className="audio-button" onClick={ audioClick }>
                                            <img src="/assets/world1/popup-icons/audio-icon.svg" width="100" />
                                        </button> :
                                        <button className="audio-button" onClick={ audioClick }>
                                            <img src="/assets/world1/popup-icons/audio-mute.svg" width="100" />
                                        </button>
                                     }
                                    <div className="button-rw-container w-[50%] ml-[15%] mb-[5%]">
                                        <div className={`rw-content-container flex ${(objSelected && contents[objSelected].year.length > 1) ? "justify-between" : "justify-around"}`}>
                                            {objSelected && contents[objSelected].year.map((item, i) => (
                                                <button key={`red-white-${i}`} className={`red-white-container bottom-[70px] ${contents[objSelected].post[i]}`} onClick={() => onClickwhiteButton(i)}>
                                                    {props.activeVideo === i ? 
                                                    <div className="red-button-container relative">
                                                        <p className={"active year-text absolute top-[-55px] left-[-26px]"}>{item}</p>
                                                        <img src="/assets/world1/popup-icons/circle-red.svg" width="20" />
                                                        <div className="red-button" />
                                                    </div> :
                                                    <div className="white-button-container relative">
                                                        <p className={"year-text absolute top-[-45px] left-[-15px]"}>{item}</p>
                                                        <img src="/assets/world1/popup-icons/circle-white.svg" width="20" />
                                                    </div>}
                                                </button>
                                            ))}
                                        </div>
                                        {objSelected && contents[objSelected].year.length > 1 && <div className="dashline"/>}
                                    </div>
                                </div>

                                <div className="right-content w-[60%] flex flex-col justify-between">
                                    <div>
                                        <div className={`exit-button flex justify-end ${contents[objSelected].year.filter((yr, i) => props.activeVideo === i)[0] === "2001" && "active" }`}>
                                            <img onClick={ onDeselect } src="/assets/world1/popup-icons/exit.svg" width="50" />
                                        </div>
                                        {objSelected && contents[objSelected].popupYears.filter((pYears, i) => props.activeVideo === i).map((popYears, i) => (
                                            <div className={"popup-years-container"} key={`popup-years-${i}`}>
                                                <PopupYearcomponent
                                                    popYears={popYears}
                                                    i={i}
                                                />
                                            </div>
                                            
                                        ))}
                                        <div className="text-container">
                                            {objSelected && contents[objSelected].title.filter((title, i) => props.activeVideo === i).map((title, i) => (
                                                <div className={"title-container top-[170px] right-[245px]"} key={`title-${i}`}>
                                                    <h4>{title}</h4>
                                                </div>
                                            ))}
                                        
                                            {objSelected && contents[objSelected].description.filter((desc, i) => props.activeVideo === i).map((desc, i) => (
                                                <div className="desc-container top-[200px] pr-[80px]" key={`desc-${i}`} dangerouslySetInnerHTML={{ __html: desc }} />
                                            ))}
                                        
                                            <div className="popup-image-container mt-[23px]">
                                                {objSelected && contents[objSelected].photos.filter((image, i) => props.activeVideo === i).map((image, i) => (
                                                    <div className="popup-image-single" key={`img-${i}`}>
                                                        <img src={image}/>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="button-lr-container flex justify-end gap-5">
                                        {objSelected && contents[objSelected].year.length > 1 &&
                                            <button className={`arrow-left ${props.activeVideo > 0 ? "" : "opacity-50"}`} onClick={ onPrev }>
                                                <img src="/assets/world1/popup-icons/arrow-left.svg" width="50" />
                                            </button>
                                        }

                                        {/* {objSelected && contents[objSelected].year.length > 1 &&
                                            <button className={`arrow-right ${activeVideo < (contents[objSelected].year.length - 1) ? "" : "opacity-50"}`} onClick={ () => onNext(contents[objSelected].year.length) }>
                                                <img src="/assets/world1/popup-icons/arrow-right.svg" width="50" />
                                            </button>
                                        } */}

                                        {objSelected &&
                                            <button className={`arrow-right`} onClick={props.activeVideo < (contents[objSelected].year.length - 1) ? () => onNext(contents[objSelected].year.length) : onDeselect}>
                                                <img src="/assets/world1/popup-icons/arrow-right.svg" width="50" />
                                            </button>
                                        }
                                    </div>
                                </div>
                            </>
                        }
                    </div>
                    {objSelected && contents[objSelected].popup.map((p, i) => (
                        <video onPlay={() => props.handleStartVideo()} key={`video-${i}`} autoPlay loop muted className={`${props.activeVideo !== i ? "video hidden" : "video"}`}>
                            <source src={p} type="video/webm"/>
                        </video>
                    ))}
                </div>                
                <div onClick={ onDeselect } className={`details-modal-overlay ${ objSelected ? "" : "pointer-events-none" }`} />
            </div>
    )
}

export default PopupsA