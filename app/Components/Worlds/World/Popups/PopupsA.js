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
      <video autoPlay loop muted width={240} className='md:!w-[150px]'>
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
      className={`details-modal-container opacity-0 transition-all duration-[0.5s] ease-in-out ${
        objSelected ? "!opacity-100" : "pointer-events-none"
      }`}
    >
      <div
        className={`details-modal max-w-[1280px] xl:max-w-[1024px] md:!max-w-[767px]`}
      >
        <div className='details-modal-content absolute flex top-[33px] bottom-[47px] left-[38px] right-[41px]'>
          {videoPlayed && (
            <>
              <div className='left-content w-[425px] xl:w-[319px] md:!w-[225px] flex flex-col justify-between'>
                <div className='ml-[-10px] mt-[5px]'>
                  <button className='audio-button' onClick={audioClick}>
                    <img
                      src={`/assets/world1/popup-icons/audio-${audioIcon}.svg`}
                      width='120'
                    />
                  </button>
                  {/* {playing ? (
                    <button className='audio-button' onClick={audioClick}>
                      <img
                        src='/assets/world1/popup-icons/audio-icon.svg'
                        width='120'
                      />
                    </button>
                  ) : (
                    <button className='audio-button' onClick={audioClick}>
                      <img
                        src='/assets/world1/popup-icons/audio-mute.svg'
                        width='120'
                      />
                    </button>
                  )} */}
                </div>
                <div
                  className={`button-rw-container mx-auto w-full ${
                    Object.keys(documents).length === 3
                      ? "max-w-[280px] md:!max-w-[180px]"
                      : "max-w-[200px] md:!max-w-[150px]"
                  } mb-[60px] md:!mb-[20px]`}
                >
                  <div
                    className={`rw-content-container flex ${
                      Object.keys(documents).length > 1
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
              </div>

              <div className='right-content w-[calc(100%-425px)] xl:w-[calc(100%-319px)] md:!w-[calc(100%-225px)] pl-[80px] flex flex-col justify-between pt-[80px] xl:pt-[40px] md:!pt-[20px] md:!pb-0 md:!pr-0 pb-[20px] pr-[20px]'>
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
                    className={`arrow-left mr-[10px] ${
                      activeVideo > 0 ? "" : "opacity-50"
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
              </div>

              <audio className='hidden' controls ref={ref}>
                <source src={curr.audio} />
              </audio>
            </>
          )}
        </div>
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
      </div>
      <div
        onClick={onExit}
        className={`details-modal-overlay ${
          objSelected ? "" : "pointer-events-none"
        }`}
      />
    </div>
  );
};

export default PopupsA;
