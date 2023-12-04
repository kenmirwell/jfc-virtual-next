"use client";

import React, { useEffect, useState } from "react";
import { getCookie } from "cookies-next";

const PopupsA = (props) => {
  const lang = getCookie("lang");
  const activeVideo = props.activeVideo;
  const contents = props.contents;
  const objSelected = props.objSelected;
  const audio = props.audio;
  const audioIcon = props.audioIcon;
  const onDeselect = props.onDeselect;
  const videoPlayed = props.videoPlayed;
  const ref = React.createRef();
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
      <video autoPlay loop muted width={240} className='w-[50%] aspect-year' poster={curr.yearPoster}>
        <source src={curr.year} type='video/webm' />
      </video>
    );
  };

  const onExit = () => {
    onDeselect();
  };

  return (
    <div
      className={`z-[999] backdrop-blur-lg details-modal-container relative w-full h-full bg-[#0f172a]/80 transition-all duration-[0.5s] ease-in-out ${objSelected ? "!opacity-100" : "pointer-events-none"
        }`}
    >
      <div
        className={`w-full absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2`}
      >
        {/* VIDEO BACKGROUND */}
        {Object.keys(documents).map((k, i) => (
          <video
            onPlay={props.handleStartVideo}
            key={`video-${i}`}
            autoPlay
            loop
            muted
            backgroundPoster={documents[k].bgPoster}
            className={`${activeVideo !== i ? "video hidden" : "video"}`}
          >
            <source src={documents[k].bg} type='video/webm' />
          </video>
        ))}
        <div
          className='details-modal-content 
        absolute w-[90%] h-auto overflow-hidden aspect-video
        flex gap-5
        left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2
        pb-[1.5%]
        '
        >
          {videoPlayed && (
            <>
              <div className='w-[65%] flex flex-col justify-between box-border'>
                <div
                  className={
                    "w-full p-[6%] max-w-[78%] overflow-y-auto h-[88%] box-border"
                  }
                  style={{ containerType: "size" }}
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
                      <div
                        key={`img_${img}`}
                        className='w-2/4 flex content-center items-center'
                      >
                        <img src={img} className='w-full p-[4px]' />
                      </div>
                    ))}
                  </div>
                </div>

                <div className='h-[10%] w-full button-lr-container flex gap-2 px-[6%]'>
                  <button
                    className={`arrow-left ${activeVideo > 0 ? "" : "opacity-50"
                      }`}
                    onClick={() => props.onPrev()}
                  >
                    <img
                      src='/assets/world1/popup-icons/arrow-left.svg'
                      className='w-auto h-full'
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
                      className='w-auto h-full'
                    />
                  </button>
                </div>
              </div>
              <div className='w-[35%] flex items-end pb-[2%]'>
                <div className={`button-rw-container mx-auto w-[70%]`}>
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
                        style={{ containerType: "size" }}
                        onClick={() => props.onClickwhiteButton(i)}
                      >
                        {activeVideo === i ? (
                          <>
                            <span
                              className='absolute w-full red-button--big scale-[1.5] aspect-square
                              border border-white rounded-full
                              top-0 left-0
                               '
                            ></span>
                            <span
                              className='absolute w-full red-button--small aspect-square
                              border-2 border-white rounded-full
                              top-0 left-0
                               '
                            ></span>
                            <img
                              src='/assets/world1/popup-icons/circle-red.svg'
                              className='absolute w-full top-0 left-0'
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
                            <span
                              className='absolute w-full scale-[1.5] aspect-square
                              border border-white rounded-full
                              top-0 left-0
                               '
                            ></span>
                            <img
                              src='/assets/world1/popup-icons/circle-white.svg'
                              className='absolute w-full top-0 left-0'
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
                    {Object.keys(documents).length > 1 && (
                      <div className='absolute w-[98%] h-[1px] dotted-line'></div>
                    )}
                  </div>
                  {/* {Object.keys(documents).length > 1 && (
                    <div className='dashline' />
                  )} */}
                </div>
              </div>

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
        className={`details-modal-overlay ${objSelected ? "" : "pointer-events-none"
          }`}
      />
    </div>
  );
};

export default PopupsA;
