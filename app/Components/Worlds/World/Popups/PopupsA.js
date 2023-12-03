"use client";

import React, { useEffect, useState } from "react";
import { getCookie } from "cookies-next";

const PopupsA = (props) => {
  const lang = getCookie("lang");
  const activeVideo = props.activeVideo;
  const contents = props.contents;
  const objSelected = props.objSelected;
  const audio = props.audio;
  const onDeselect = props.onDeselect;
  const videoPlayed = props.videoPlayed;
  const ref = React.createRef();
  // const [playing, setPlaying] = useState(true);
  const [audioIcon, setAudioIcon] = useState("icon");
  let curr;

  useEffect(() => {
    if (ref.current) {
      if (objSelected) {
        if (curr.audio) {
          ref.current.load();
          ref.current.play();
        }
      } else {
        ref.current.pause();
        ref.current.currentTime = 0;
      }
    }
  }, [objSelected, ref, curr]);

  if (!objSelected) return null;

  const documents = contents[objSelected];
  curr = (() => {
    const y = Object.keys(documents)[activeVideo];
    let data = documents[y];
    let content = data.contents[lang];

    return {
      ...data,
      ...content,
    };
  })();

  const PopupYearcomponent = () => {
    return (
      <video autoPlay loop muted width={240} className='w-[50%]'>
        <source src={curr.year} type='video/webm' />
      </video>
    );
  };

  const onExit = () => {
    onDeselect();
  };

  const audioClick = () => {
    if (ref.current.volume === 1) {
      setAudioIcon("mute");
      ref.current.volume = 0;
    } else {
      setAudioIcon("icon");
      ref.current.volume = 1;
    }
    // if (playing) {
    //   setPlaying(false);
    //   if (ref.current) {
    //     ref.current.pause();
    //   }
    // } else {
    //   setPlaying(true);
    //   if (ref.current) {
    //     ref.current.play();
    //   }
    // }
  };

  return (
    <div
      className={`details-modal-container relative w-full h-full bg-black/80 transition-all duration-[0.5s] ease-in-out ${objSelected ? "!opacity-100" : "pointer-events-none"
        }`}
    >
      <div
        className={`w-full absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-[99]`}
      >
        {/* VIDEO BACKGROUND */}
        {Object.keys(documents).map((k, i) => (
          <video
            onPlay={props.handleStartVideo}
            key={`video-${i}`}
            autoPlay
            loop
            muted
            className={`${activeVideo !== i ? "video hidden" : "video"}`}
          >
            <source src={documents[k].bg} type='video/webm' />
          </video>
        ))}
        <div className='details-modal-content 
        absolute w-[90%] h-auto overflow-hidden aspect-video
        flex gap-5
        left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2
        pb-[1.5%]
        '
        // style={{ gridTemplateColumns: '3.5fr 6.5fr' }}
        >
          {videoPlayed && (
            <>
              <div className="w-[35%] flex items-end pb-[2%]">
                <div
                  className={`button-rw-container mx-auto w-[70%]`}
                >
                  <div
                    className={`rw-content-container relative flex items-center ${Object.keys(documents).length > 1
                      ? "justify-between"
                      : "justify-around"
                      }`}
                  >
                    {Object.keys(documents).map((item, i) => (
                      <button
                        key={`red-white-${i}`}
                        className={`red-white-container relative aspect-square w-[10%]`}
                        style={{ containerType: 'size' }}
                        onClick={() => props.onClickwhiteButton(i)}
                      >
                        {activeVideo === i ? (
                          <>
                            <span className='absolute w-full red-button--big scale-[1.5] aspect-square
                              border border-white rounded-full
                              top-0 left-0
                               ' ></span>
                            <span className='absolute w-full red-button--small aspect-square
                              border-2 border-white rounded-full
                              top-0 left-0
                               ' ></span>
                            <img
                              src='/assets/world1/popup-icons/circle-red.svg'
                              className="absolute w-full top-0 left-0"
                            />
                            <span
                              className={
                                "active year-text text-[150cqmin] absolute top-0 left-1/2 -translate-x-1/2 -translate-y-full"
                              }
                            >
                              {item}
                            </span>
                          </>
                        ) : (
                          <>
                            <span className='absolute w-full scale-[1.5] aspect-square
                              border border-white rounded-full
                              top-0 left-0
                               ' ></span>
                            <img
                              src='/assets/world1/popup-icons/circle-white.svg'
                              className="absolute w-full top-0 left-0"
                            />
                            <span
                              className={
                                "year-text text-[75cqmin] absolute top-0 left-1/2 -translate-x-1/2 -translate-y-[120%]"
                              }
                            >
                              {item}
                            </span>
                          </>
                        )}
                      </button>
                    ))}
                    <div className="absolute w-[98%] h-[1px] dotted-line"></div>
                  </div>
                  {/* {Object.keys(documents).length > 1 && (
                    <div className='dashline' />
                  )} */}
                </div>
              </div>
              <div className="w-[65%] flex flex-col justify-between box-border">
                <div className="w-full p-[3%] overflow-y-scroll h-[88%] box-border"
                  style={{ containerType: 'size' }}
                >
                  <PopupYearcomponent />

                  <h4 className='text-[8cqmin] leading-[1.1] mt-[2.5%] mb-[1.5%]'>
                    {curr.title}
                  </h4>
                  <div
                    className='desc-container text-[5cqmin] leading-[1.2]'
                    dangerouslySetInnerHTML={{ __html: curr.description }}
                  />
                  <div className='flex flex-wrap mt-[2.5%]'>
                    {curr.photos.map((img) => (
                      <div key={`img_${img}`} className='w-2/4'>
                        <img
                          src={img}
                          className='w-full p-[4px]'
                        />
                      </div>
                    ))}
                  </div>
                </div>

                <div className='h-[10%] w-fullbutton-lr-container flex gap-2 justify-end'>
                  <button
                    className={`arrow-left ${activeVideo > 0 ? "" : "opacity-50"
                      }`}
                    onClick={() => props.onPrev()}
                  >
                    <img
                      src='/assets/world1/popup-icons/arrow-left.svg'
                      className="w-auto h-full"
                    />
                  </button>
                  <button
                    className={`arrow-right`}
                    onClick={() =>
                      activeVideo < Object.keys(documents).length - 1
                        ? props.onNext()
                        : onDeselect()
                    }
                  >
                    <img
                      src='/assets/world1/popup-icons/arrow-right.svg'
                      className="w-auto h-full"
                    />
                  </button>
                </div>
              </div>

              {/* OLD LEFT */}
              {/* <div className='hidden left-content w-[425px] xl:w-[319px] md:!w-[225px] flex flex-col justify-between overflow-hidden z-[999]'>
                <div className='ml-[16px] mt-[16px]'>
                  <button className='audio-button' onClick={audioClick}>
                    <img
                      src={`/assets/world1/popup-icons/audio-${audioIcon}.webp`}
                      width='56'
                    />
                  </button>
                </div>
                <div
                  className={`button-rw-container mx-auto w-full ${Object.keys(documents).length === 3
                    ? "max-w-[280px] md:!max-w-[180px]"
                    : "max-w-[200px] md:!max-w-[150px]"
                    } mb-[60px] md:!mb-[20px]`}
                >
                  <div
                    className={`rw-content-container flex ${Object.keys(documents).length > 1
                      ? "justify-between"
                      : "justify-around"
                      }`}
                  >
                    {Object.keys(documents).map((item, i) => (
                      <button
                        key={`red-white-${i}`}
                        className={`red-white-container bottom-[70px]`}
                        onClick={() => props.onClickwhiteButton(i)}
                      >
                        {activeVideo === i ? (
                          <div className='red-button-container relative'>
                            <p
                              className={
                                "active year-text !text-[36px] md:!text-[30px] absolute top-[-65px] left-[-26px] md:!left-[-20px] md:!top-[-50px]"
                              }
                            >
                              {item}
                            </p>
                            <img
                              src='/assets/world1/popup-icons/circle-red.svg'
                              width='20'
                            />
                            <div className='red-button' />
                          </div>
                        ) : (
                          <div className='white-button-container relative'>
                            <p
                              className={
                                "year-text !text-[24px] md:!text-[18px] absolute top-[-45px] left-[-15px] md:!left-[-10px] md:!top-[-35px]"
                              }
                            >
                              {item}
                            </p>
                            <img
                              src='/assets/world1/popup-icons/circle-white.svg'
                              width='20'
                            />
                          </div>
                        )}
                      </button>
                    ))}
                  </div>
                  {Object.keys(documents).length > 1 && (
                    <div className='dashline' />
                  )}
                </div>
              </div> */}

              {/* OLD RIGHT */}
              {/* <div className='hidden right-content w-[calc(100%-425px)] xl:w-[calc(100%-319px)] md:!w-[calc(100%-225px)] pl-[80px] flex flex-col justify-between pt-[80px] xl:pt-[40px] md:!pt-[20px] md:!pb-0 md:!pr-0 pb-[20px] pr-[20px]'>
                <div>
                  <div className='ml-[-10px]'>
                    <PopupYearcomponent />
                  </div>
                  <div className='text-container  pr-[80px] md:!pr-[20px] max-h-[400px] md:!max-h-[220px] overflow-scroll'>
                    <div className={"title-container pb-[8px] pt-[5px]"}>
                      <h4 className='text-[28px] md:!text-[18px] leading-[1.1]'>
                        {curr.title}
                      </h4>
                    </div>
                    <div
                      className='desc-container top-[200px] leading-[1.2] md:!text-[14px] text-xl'
                      dangerouslySetInnerHTML={{ __html: curr.description }}
                    />
                    <div className='popup-image-container mt-[23px]'>
                      <div className='popup-image-single'>
                        {curr.photos.map((img) => (
                          <div key={`img_${img}`} className='px-[5px]'>
                            <img
                              src={img}
                              width={300}
                              className='md:!w-[180px]'
                            />
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
                <div className='button-lr-container flex justify-end'>
                  <button
                    className={`arrow-left mr-[10px] ${activeVideo > 0 ? "" : "opacity-50"
                      }`}
                    onClick={() => props.onPrev()}
                  >
                    <img
                      src='/assets/world1/popup-icons/arrow-left.svg'
                      width='50'
                    />
                  </button>
                  <button
                    className={`arrow-right`}
                    onClick={() =>
                      activeVideo < Object.keys(documents).length - 1
                        ? props.onNext()
                        : onDeselect()
                    }
                  >
                    <img
                      src='/assets/world1/popup-icons/arrow-right.svg'
                      width='50'
                    />
                  </button>
                </div>
              </div> */}

              <audio
                className='hidden'
                muted={audioIcon === "mute" ? true : false}
                controls
                ref={ref}
              >
                <source src={curr.audio} />
              </audio>
            </>
          )}
        </div>
      </div>
      <div
        onClick={onExit}
        className={`details-modal-overlay absolute w-full h-full bg-[#0f172a]/80 opacity-50 ${objSelected ? "" : "pointer-events-none"
          }`}
      />
    </div>
  );
};

export default PopupsA;
