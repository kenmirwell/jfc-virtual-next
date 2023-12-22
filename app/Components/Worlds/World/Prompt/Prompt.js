import { useEffect, useRef, useState } from "react";
import { gsap, Power3 } from "gsap";

import { usePathname } from "next/navigation";
import config from "../../../../utils";
import { Box } from "@chakra-ui/react";

let timer;
const Prompt = ({
  showJoy,
  flow,
  world,
  currentFlow,
  onClickInteractables,
  audioEnding,
  audioIcon,
  isSafari,
}) => {
  useEffect(() => {
    if (showJoy && !currentFlow.get.action) {
      gsap.timeline().to("#prompt", 0.5, {
        x: 0,
        ease: Power3.easeInOut,
      });

      setTimeout(() => {
        currentFlow.set(flow[0]);
      }, 700);
    }

    if (currentFlow.get.action === "WAIT") {
      clearTimeout(timer);

      timer = setTimeout(() => {
        onProceed();
      }, currentFlow.get.end * 1000);
    }
  }, [showJoy, currentFlow.get]);

  const [hasPlayed, setHasPlayed] = useState(false);

  const promptRef = useRef(null);

  const onProceed = () => {
    currentFlow.set(flow.find((f) => f.step === currentFlow.get.step + 1));

    // PLAY ONCE

    if (
      !hasPlayed &&
      !path.includes("world2") &&
      !path.includes("world3") &&
      !path.includes("world4")
    )
      soundRef.current.play();
  };

  const handleClickHere = () => {
    if (currentFlow.get.action === "START") {
      return onProceed();
    }
    onClickInteractables("BUTTON");

    // PAUSE AFTER AND NEVER PLAY AGAIN
    soundRef.current.pause();
  };

  const soundRef = useRef(null);

  const path = usePathname();

  const getNextWorld = () => {
    if (path.includes("world2")) return 3;
    if (path.includes("world3")) return 4;
    return 2;
  };

  const [isEnd, setIsEnd] = useState(false);

  useEffect(() => {
    if (currentFlow.get.action === "END") setIsEnd(true);
  }, [currentFlow.get.action]);

  const pointingRef = useRef(null);

  useEffect(() => {
    if (!showJoy && world === 1 && currentFlow.get.action === "GOTO") {
      isSafari ? null : pointingRef.current.play();
    }
  }, [currentFlow]);
  const pathname = usePathname();
  const getGameLink = () => {
    if (
      !pathname.includes("world2") &&
      !pathname.includes("world3") &&
      !pathname.includes("world4")
    )
      return "game/SmashAndMatch";
    if (pathname.includes("world2")) return "game/ExpressRecall";
    if (pathname.includes("world3")) return "game/TriviaKing";
    if (pathname.includes("world4")) return "page/photobooth";
  };

  const joyUrl = `${config.apiURL}/World1/joy/`;

  useEffect(() => {
    if (currentFlow?.get.prompt)
      promptRef.current.innerHTML = currentFlow.get.prompt;
  }, [currentFlow?.get.prompt]);

  const [pointingCount, setPointingCount] = useState(0);
  const handlePointEnd = () => {
    setPointingCount(pointingCount + 1);
    console.log(pointingCount);
    if (pointingCount >= 1) {
      // pointingRef.current.load();
      pointingRef.current.pause();
      setPointingCount(0);
    } else {
      pointingRef.current.play();
    }
    // pointingRef.current.load();
  };

  return (
    <>
      <audio
        onPlay={() => setHasPlayed(true)}
        ref={soundRef}
        className='hidden'
        muted={audioIcon === "mute" ? true : false}
        controls
      >
        <source src='https://d1bh4bdsrj0ehq.cloudfront.net/World1/audio/JFC_VO_W1_INTRO.mp3' />
      </audio>
      {isEnd && (
        <audio
          autoPlay
          className='hidden'
          muted={audioIcon === "mute" ? true : false}
          controls
        >
          <source src={audioEnding} />
        </audio>
      )}
      <div
        className={`z-50 absolute w-full h-full opacity-0 bg-black/50 transition-all duration-[1s] ease-in-out ${
          currentFlow.get.action === "END"
            ? "opacity-100"
            : "pointer-events-none"
        }`}
      ></div>

      <div
        id='prompt'
        className={`z-[60] overflow-hidden  absolute w-full h-full transition-all duration-[1s] ease-in-out grid grid-cols-12 grid-rows-3`}
      >
        <div
          id='promptc'
          className={`
          w-full h-full relative bg-white/0 row-start-2 mt-[20%]
          ${
            currentFlow.get.action === "END"
              ? "col-span-4 col-start-9 row-span-1"
              : "col-span-5 col-start-5 row-span-2 left-[15%]"
          }
          `}
        >
          <div
            className={`container-inline cursor-pointer p-[5%] w-full h-fit opacity-0 ease-in-out text-center
            bg-opacity-80 backdrop-blur-[2px] drop-shadow-lg rounded-2xl
            absolute top-1/2 -translate-y-1/2 scale-[80%]
            
            ${
              showJoy && currentFlow.get.prompt
                ? "!opacity-[100] !translate-x-[0]"
                : ""
            } 
              ${`${
                currentFlow.get.action === "GOTO" ||
                currentFlow.get.action === "WAIT"
                  ? "bg-white/70 speechArrow"
                  : "bg-white/70"
              }`}
              `}
            // style={{ containerType: "inline-size" }}
          >
            <div
              onClick={
                currentFlow.get.action === "START"
                  ? onProceed
                  : currentFlow.get.action === "GOTO"
                  ? handleClickHere
                  : null
              }
              className='tracking-[0] leading-[1.2] text-[8cqw]'
              // className={`${currentFlow.get.action
              //   } leading-[1.2] text-center "text-[#E23636]" ${currentFlow.get.action === "START"
              //     ? "text-[30px]"
              //     : "text-[30px]"
              //   } ${currentFlow.get.action === "END" ||
              //     currentFlow.get.action === "START"
              //     ? "tracking-[0]"
              //     : "tracking-[-0.5px]"
              //   } ${currentFlow.get.action === "WAIT" ? "!tracking-[0.9px]" : ""
              //   } `}
              // dangerouslySetInnerHTML={{ __html: currentFlow.get.prompt }}
              ref={promptRef}
            />
            {/* {currentFlow.get.action === "START" && (
              <button
                onClick={onProceed}
                className='absolute right-[22px] bottom-[22px]'
              >
                <img src='/assets/arrow-right.svg' width={25} />
              </button>
            )} */}
            {(currentFlow.get.action === "GOTO" ||
              currentFlow.get.action === "START") && (
              <button
                onClick={handleClickHere}
                className='bg-[#E23636] w-[70%] h-fit text-white rounded-full font-[700] px-[8%] py-[1%]  mt-[3%] container-inline'
                // style={{ containerType: "inline-size" }}
              >
                <Box
                  as='span'
                  className='text-[10cqw] block'
                  // style={{ fontFamily: "inherit" }}
                  fontFamily='inherit'
                >
                  CLICK HERE
                </Box>
              </button>
            )}
            {currentFlow.get.action === "END" && (
              <div>
                <a href={`http://jfcmilestones.com/${getGameLink()}`}>
                  <div
                    className='mx-auto bg-[#E23636] w-[70%] h-fit text-white rounded-full font-[700] px-[8%] py-[1%]  mt-[3%] container-inline'
                    // style={{ containerType: "inline-size" }}
                  >
                    <Box
                      as='span'
                      className='text-[10cqw] block'
                      // style={{ fontFamily: "inherit" }}
                      fontFamily='inherit'
                    >
                      {!path.includes("world4")
                        ? "PLAY GAME"
                        : "Visit our Photobooth"}
                    </Box>
                  </div>
                </a>
                <a
                  href={
                    !path.includes("world4")
                      ? `http://jfcmilestones.com/world-selector?next=${getNextWorld()}`
                      : "http://jfcmilestones.com/thankyou"
                  }
                >
                  <div
                    className='mx-auto w-[80%] h-fit text-black/50 lowercase container-inline'
                    // style={{ containerType: "inline-size" }}
                  >
                    <Box
                      as='span'
                      className='text-[8cqw] block'
                      // style={{ fontFamily: "inherit" }}
                      fontFamily='inherit'
                    >
                      SKIP
                    </Box>
                  </div>
                </a>
              </div>
            )}
          </div>
        </div>
        {/* VIDEOS OF JOY */}
        <div
          className={`promptVideos relative w-full h-full pointer-events-none 
        row-start-2 row-span-2 
        ${
          currentFlow.get.action === "END"
            ? "col-span-full"
            : "col-span-4 col-start-9"
        }`}
        >
          {isSafari ? (
            <>
              {showJoy && currentFlow.get.action === "WAIT" && (
                <img
                  src='https://frdmqigbelepsdgiecdr.supabase.co/storage/v1/object/public/world1%20assets/joy/Joy-Idle-v2.gif?t=2023-12-04T12%3A34%3A11.981Z'
                  className={`joy-idle absolute w-full scale-[2] top-[70%] left-[15%]`}
                />
              )}
              {showJoy && currentFlow.get.action === "START" && (
                <img
                  src='https://frdmqigbelepsdgiecdr.supabase.co/storage/v1/object/public/world1%20assets/joy/Joy-Waving.gif'
                  className={`joy-wave absolute w-full scale-[2] top-[70%] left-[15%]`}
                />
              )}
              {showJoy && currentFlow.get.action === "GOTO" && (
                <img
                  src='https://frdmqigbelepsdgiecdr.supabase.co/storage/v1/object/public/world1%20assets/joy/Joy-Idle-v2.gif?t=2023-12-04T12%3A34%3A11.981Z'
                  className={`joy-point absolute w-full scale-[2] top-[70%] left-[15%]`}
                />
              )}
              {showJoy && currentFlow.get.action === "END" && (
                <img
                  src={
                    !path.includes("world4")
                      ? "https://frdmqigbelepsdgiecdr.supabase.co/storage/v1/object/public/world1%20assets/joy/Joy-Thinking.gif"
                      : "https://frdmqigbelepsdgiecdr.supabase.co/storage/v1/object/public/world1%20assets/joy/Joy-Waving.gif"
                  }
                  className={`joy-thinking absolute w-full`}
                />
              )}
              {!showJoy && world === 1 && currentFlow.get.action === "GOTO" && (
                <img
                  src='https://frdmqigbelepsdgiecdr.supabase.co/storage/v1/object/public/world1%20assets/joy/Joy-Pointing.gif'
                  className={`joy-pointing absolute w-full scale-[2] top-[70%] left-[15%]`}
                />
              )}
              {!showJoy && world === 2 && currentFlow.get.action === "GOTO" && (
                <img
                  src='https://frdmqigbelepsdgiecdr.supabase.co/storage/v1/object/public/world1%20assets/joy/Joy-WavePeek.gif'
                  className={`joy-thinking absolute w-full scale-[2] top-[70%] left-[15%]`}
                />
              )}
              {!showJoy && world === 3 && currentFlow.get.action === "GOTO" && (
                <img
                  src='https://frdmqigbelepsdgiecdr.supabase.co/storage/v1/object/public/world1%20assets/joy/Joy-PointLetsGo.gif'
                  className={`joy-thinking absolute w-full scale-[2] top-[70%] left-[15%]`}
                />
              )}
              {!showJoy && world === 4 && currentFlow.get.action === "GOTO" && (
                <img
                  src='https://frdmqigbelepsdgiecdr.supabase.co/storage/v1/object/public/world1%20assets/joy/Joy-LetsGo.gif'
                  className={`joy-thinking absolute w-full scale-[2] top-[70%] left-[15%]`}
                />
              )}
            </>
          ) : (
            <>
              {showJoy && currentFlow.get.action === "WAIT" && (
                <video
                  muted
                  autoPlay
                  loop
                  poster=''
                  className={`joy-idle absolute w-full scale-[2] top-[70%] left-[15%]`}
                >
                  <source src={`${joyUrl}Joy-Idle-v2.webm`} type='video/webm' />
                </video>
              )}
              {showJoy && currentFlow.get.action === "START" && (
                <video
                  muted
                  autoPlay
                  loop
                  poster=''
                  className={`joy-wave absolute w-full scale-[2] top-[70%] left-[15%]`}
                >
                  <source src={`${joyUrl}Joy-Waving.webm`} type='video/webm' />
                </video>
              )}
              {showJoy && currentFlow.get.action === "GOTO" && (
                <video
                  muted
                  autoPlay
                  loop
                  poster=''
                  className={`joy-point absolute w-full scale-[2] top-[70%] left-[15%]`}
                >
                  <source src={`${joyUrl}Joy-Idle-v2.webm`} type='video/webm' />
                </video>
              )}
              {showJoy && currentFlow.get.action === "END" && (
                <video
                  muted
                  autoPlay
                  loop
                  poster=''
                  className={`joy-thinking absolute w-full scale-[.8] translate-y-[-2%]`}
                >
                  <source
                    src={
                      !path.includes("world4")
                        ? `${joyUrl}Joy-Thinking.webm`
                        : `${joyUrl}Joy-Waving.webm`
                    }
                    type='video/webm'
                  />
                </video>
              )}
              {!showJoy && world === 1 && currentFlow.get.action === "GOTO" && (
                <video
                  muted
                  ref={pointingRef}
                  onPlay={() => {
                    pointingRef.current.playbackRate = 1.4;
                  }}
                  onEnded={handlePointEnd}
                  // autoPlay
                  // loop
                  poster=''
                  className={`joy-pointing absolute w-full scale-[2] top-[70%] left-[15%]`}
                >
                  <source
                    src={`${joyUrl}Joy-Pointing.webm`}
                    type='video/webm'
                  />
                </video>
              )}
              {!showJoy && world === 2 && currentFlow.get.action === "GOTO" && (
                <video
                  muted
                  autoPlay
                  loop
                  poster=''
                  className={`joy-thinking absolute w-full scale-[2] top-[70%] left-[15%]`}
                >
                  <source
                    src={`${joyUrl}Joy-WavePeek.webm`}
                    type='video/webm'
                  />
                </video>
              )}
              {!showJoy && world === 3 && currentFlow.get.action === "GOTO" && (
                <video
                  muted
                  autoPlay
                  loop
                  poster=''
                  className={`joy-thinking absolute w-full scale-[2] top-[70%] left-[15%]`}
                >
                  <source
                    src={`${joyUrl}Joy-PointLetsGo.webm`}
                    type='video/webm'
                  />
                </video>
              )}
              {!showJoy && world === 4 && currentFlow.get.action === "GOTO" && (
                <video
                  muted
                  autoPlay
                  loop
                  poster=''
                  className={`joy-thinking absolute w-full scale-[2] top-[70%] left-[15%]`}
                >
                  <source src={`${joyUrl}Joy-LetsGo.webm`} type='video/webm' />
                </video>
              )}
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default Prompt;
