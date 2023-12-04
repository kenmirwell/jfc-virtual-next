import { useEffect, useRef, useState } from "react";
import { gsap, Power3 } from "gsap";

import { useRouter } from "next/router";
import { usePathname } from "next/navigation";

let timer;
const Prompt = ({
  showJoy,
  flow,
  world,
  currentFlow,
  onClickInteractables,
  audioEnding,
  audioIcon
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

  const onProceed = () => {
    currentFlow.set(flow.find((f) => f.step === currentFlow.get.step + 1));

    // PLAY ONCE

    if (!hasPlayed && path === "/") soundRef.current.play();
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
    if (path === "/") return 2;
    if (path.includes("world2")) return 3;
    if (path.includes("world3")) return 4;
  };

  const [isEnd, setIsEnd] = useState(false);

  useEffect(() => {
    if (currentFlow.get.action === "END") setIsEnd(true);
  }, [currentFlow.get.action]);

  const pointingRef = useRef(null);

  useEffect(() => {
    if (!showJoy && world === 1 && currentFlow.get.action === "GOTO")
      pointingRef.current.play();
  }, [currentFlow]);

  return (
    <>
      <audio
        onPlay={() => setHasPlayed(true)}
        ref={soundRef}
        className='hidden'
        muted={audioIcon === "mute" ? true : false}
        controls
      >
        <source
          src={`https://frdmqigbelepsdgiecdr.supabase.co/storage/v1/object/public/world1%20assets/audio/JFC_VO_W1_INTRO.mp3?t=2023-12-01T02%3A44%3A54.815Z`}
        />
      </audio>
      {isEnd && (
        <audio autoPlay className='hidden' muted={audioIcon === "mute" ? true : false} controls>
          <source src={audioEnding} />
        </audio>
      )}
      <div
        className={`z-50 absolute w-full h-full opacity-0 bg-black/50 transition-all duration-[1s] ease-in-out ${currentFlow.get.action === "END"
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
          ${currentFlow.get.action === "END" ? "col-span-4 col-start-9 row-span-1" : "col-span-5 col-start-5 row-span-2"}
          `}
        >
          <div
            className={`cursor-pointer p-[5%] w-full h-fit opacity-0 ease-in-out text-center
            bg-opacity-80 backdrop-blur-[2px] drop-shadow-lg rounded-2xl
            absolute top-1/2 -translate-y-1/2 scale-[80%]
            
            ${showJoy && currentFlow.get.prompt
                ? "!opacity-[100] !translate-x-[0]"
                : ""
              } 
              ${`${currentFlow.get.action === "GOTO" ||
                currentFlow.get.action === "WAIT"
                ? "bg-white/70 speechArrow"
                : "bg-white/70"
              }`
              }
              `}
            style={{ containerType: 'inline-size' }}
          >
            <div
              onClick={
                currentFlow.get.action === "START"
                  ? onProceed
                  : currentFlow.get.action === "GOTO"
                    ? handleClickHere
                    : null
              }
              className="tracking-[0] leading-[1.2] text-[8cqw]"
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
              dangerouslySetInnerHTML={{ __html: currentFlow.get.prompt }}
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
                  className='bg-[#E23636] w-[70%] h-fit text-white rounded-full font-[700] px-[8%] py-[1%]  mt-[3%]'
                  style={{ containerType: 'inline-size' }}
                >
                  <span className="text-[10cqw] block" style={{ fontFamily: 'inherit' }}>
                    CLICK HERE
                  </span>
                </button>
              )}
            {currentFlow.get.action === "END" && (
              <div>
                <a href='http://ec2-18-143-60-83.ap-southeast-1.compute.amazonaws.com/game/SmashAndMatch'
                >
                  <div
                    className='mx-auto bg-[#E23636] w-[70%] h-fit text-white rounded-full font-[700] px-[8%] py-[1%]  mt-[3%]'
                    style={{ containerType: 'inline-size' }}
                  >
                    <span className="text-[10cqw] block" style={{ fontFamily: 'inherit' }}>
                      PLAY GAME
                    </span>
                  </div>
                </a>
                <a
                  href={`http://ec2-18-143-60-83.ap-southeast-1.compute.amazonaws.com/world-selector?next=${getNextWorld()}`}
                >
                  <div
                    className='mx-auto w-[80%] h-fit text-black/50 lowercase'
                    style={{ containerType: 'inline-size' }}
                  >
                    <span className="text-[8cqw] block" style={{ fontFamily: 'inherit' }}>
                      SKIP
                    </span>
                  </div>
                </a>
              </div>
            )}
          </div>
        </div>
        {/* VIDEOS OF JOY */}
        <div className={`promptVideos relative w-full h-full pointer-events-none 
        row-start-2 row-span-2 
        ${currentFlow.get.action === "END" ? "col-span-full" : "col-span-4 col-start-9"}`}>
          <video
            muted
            autoPlay
            loop
            className={`joy-idle absolute w-full opacity-0 scale-[2] top-[70%] ${showJoy && currentFlow.get.action === "WAIT" ? "opacity-100" : ""
              }`}
          >
            <source
              src='https://frdmqigbelepsdgiecdr.supabase.co/storage/v1/object/public/world1%20assets/joy/Joy-Idle-v2.webm?t=2023-12-01T02%3A47%3A29.340Z'
              type='video/webm'
            />
          </video>
          <video
            muted
            autoPlay
            loop
            className={`joy-wave absolute w-full opacity-0 scale-[2] top-[70%] ${showJoy && currentFlow.get.action === "START" ? "opacity-100" : ""
              }`}
          >
            <source
              src='https://frdmqigbelepsdgiecdr.supabase.co/storage/v1/object/public/world1%20assets/joy/Joy-Waving.webm?t=2023-12-01T03%3A40%3A56.076Z'
              type='video/webm'
            />
          </video>
          <video
            muted
            autoPlay
            loop
            className={`joy-point absolute w-full opacity-0 scale-[2] top-[70%] ${showJoy && currentFlow.get.action === "GOTO" ? "opacity-100" : ""
              }`}
          >
            <source
              src='https://frdmqigbelepsdgiecdr.supabase.co/storage/v1/object/public/world1%20assets/joy/Joy-Idle-v2.webm?t=2023-12-01T02%3A47%3A29.340Z'
              type='video/webm'
            />
          </video>
          <video
            muted
            autoPlay
            loop
            className={`joy-thinking absolute w-full opacity-0 
            ${showJoy && currentFlow.get.action === "END"
                ? "opacity-100 scale-[80%] -top-[15%]"
                : ""
              }`}
          >
            <source
              src='https://frdmqigbelepsdgiecdr.supabase.co/storage/v1/object/public/world1%20assets/joy/Joy-Thinking.webm'
              type='video/webm'
            />
          </video>
          <video
            muted
            ref={pointingRef}
            // autoPlay
            // loop
            className={`joy-pointing absolute w-full opacity-0 scale-[2] top-[70%] ${!showJoy && world === 1 && currentFlow.get.action === "GOTO"
              ? "opacity-100"
              : ""
              }`}
          >
            <source
              src='https://frdmqigbelepsdgiecdr.supabase.co/storage/v1/object/public/world1%20assets/joy/Joy-Pointing.webm'
              type='video/webm'
            />
          </video>
          <video
            muted
            autoPlay
            loop
            className={`joy-thinking absolute w-full opacity-0 scale-[2] top-[70%] ${!showJoy && world === 2 && currentFlow.get.action === "GOTO"
              ? "opacity-100"
              : ""
              }`}
          >
            <source
              src='https://frdmqigbelepsdgiecdr.supabase.co/storage/v1/object/public/world1%20assets/joy/Joy-WavePeek.webm'
              type='video/webm'
            />
          </video>
          <video
            muted
            autoPlay
            loop
            className={`joy-thinking absolute w-full opacity-0 scale-[2] top-[70%] ${!showJoy && world === 3 && currentFlow.get.action === "GOTO"
              ? "opacity-100"
              : ""
              }`}
          >
            <source
              src='https://frdmqigbelepsdgiecdr.supabase.co/storage/v1/object/public/world1%20assets/joy/Joy-PointLetsGo.webm'
              type='video/webm'
            />
          </video>
          <video
            muted
            autoPlay
            loop
            className={`joy-thinking absolute w-full opacity-0 scale-[2] top-[70%] ${!showJoy && world === 4 && currentFlow.get.action === "GOTO"
              ? "opacity-100"
              : ""
              }`}
          >
            <source
              src='https://frdmqigbelepsdgiecdr.supabase.co/storage/v1/object/public/world1%20assets/joy/Joy-LetsGo.webm'
              type='video/webm'
            />
          </video>
        </div>
      </div>
    </>
  );
};

export default Prompt;
