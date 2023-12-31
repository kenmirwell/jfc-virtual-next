import { useEffect, useRef, useState } from "react";
import { gsap, Power3 } from "gsap";

import { useRouter } from "next/router";
import { usePathname } from "next/navigation";

let timer;
const Prompt = ({ showJoy, flow, world, currentFlow, onClickInteractables, audioEnding }) => {
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

    if (!hasPlayed) soundRef.current.play();
  };

  const handleClickHere = () => {
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

  return (
    <>
      <audio onPlay={() => setHasPlayed(true)} ref={soundRef} className='hidden' controls>
        <source src={`https://frdmqigbelepsdgiecdr.supabase.co/storage/v1/object/public/world1%20assets/audio/JFC_VO_W1_INTRO.mp3?t=2023-11-30T18%3A57%3A22.862Z`} />
      </audio>
      {isEnd && (
        <audio autoPlay className='hidden' controls>
          <source src={audioEnding} />
        </audio>
      )}
      <div className={`fixed top-0 left-0 right-0 bottom-0 opacity-0 bg-black/50 transition-all duration-[0.3s] ease-in-out ${currentFlow.get.action === "END" ? "opacity-100" : "pointer-events-none"}`}></div>
      <div id='prompt' className={`fixed bottom-0 right-[100px] z-[22]  text-center translate-x-[300px] h-[380px] w-[200px] flex items-end justify-center transition-all duration-[0.5s] ease-in-out ${currentFlow.get.action === "END" ? "!w-[100%] !right-0" : ""}`}>
        <video muted autoPlay loop className={`joy-idle absolute top-[10px] ml-[-63px] w-[900px] max-w-none opacity-0 ${showJoy && currentFlow.get.action === "WAIT" ? "opacity-100" : ""}`}>
          <source src='https://frdmqigbelepsdgiecdr.supabase.co/storage/v1/object/public/world1%20assets/joy/Joy-Idle-v2.webm?t=2023-11-30T21%3A26%3A49.058Z' type='video/webm' />
        </video>
        <video muted autoPlay loop className={`joy-wave absolute top-0 ml-[-63px] w-[900px] max-w-none opacity-0 ${showJoy && currentFlow.get.action === "START" ? "opacity-100" : ""}`}>
          <source src='https://frdmqigbelepsdgiecdr.supabase.co/storage/v1/object/public/world1%20assets/joy/Joy-Waving.webm?t=2023-11-30T21%3A28%3A03.630Z' type='video/webm' />
        </video>
        <video muted autoPlay loop className={`joy-point absolute top-0 ml-[-63px] w-[900px] max-w-none opacity-0 ${showJoy && currentFlow.get.action === "GOTO" ? "opacity-100" : ""}`}>
          <source src='https://frdmqigbelepsdgiecdr.supabase.co/storage/v1/object/public/world1%20assets/joy/Joy-Idle-v2.webm?t=2023-11-30T21%3A26%3A49.058Z' type='video/webm' />
        </video>
        <video muted autoPlay loop className={`joy-thinking absolute top-0 ml-[-63px] w-[900px] max-w-none opacity-0 ${showJoy && currentFlow.get.action === "END" ? "opacity-100" : ""}`}>
          <source src='https://frdmqigbelepsdgiecdr.supabase.co/storage/v1/object/public/world1%20assets/joy/Joy-Thinking.webm?t=2023-11-30T21%3A27%3A44.094Z' type='video/webm' />
        </video>
        <video muted autoPlay loop className={`joy-thinking absolute top-0 ml-[-63px] w-[900px] max-w-none opacity-0 ${!showJoy && world === 1 && currentFlow.get.action === "GOTO" ? "opacity-100" : ""}`}>
          <source src='https://frdmqigbelepsdgiecdr.supabase.co/storage/v1/object/public/world1%20assets/joy/Joy-Pointing.webm?t=2023-11-30T21%3A27%3A33.857Z' type='video/webm' />
        </video>
        <video muted autoPlay loop className={`joy-thinking absolute top-0 ml-[-63px] w-[900px] max-w-none opacity-0 ${!showJoy && world === 2 && currentFlow.get.action === "GOTO" ? "opacity-100" : ""}`}>
          <source src='https://frdmqigbelepsdgiecdr.supabase.co/storage/v1/object/public/world1%20assets/joy/Joy-WavePeek.webm?t=2023-11-30T21%3A27%3A56.548Z' type='video/webm' />
        </video>
        <video muted autoPlay loop className={`joy-thinking absolute top-0 ml-[-63px] w-[900px] max-w-none opacity-0 ${!showJoy && world === 3 && currentFlow.get.action === "GOTO" ? "opacity-100" : ""}`}>
          <source src='https://frdmqigbelepsdgiecdr.supabase.co/storage/v1/object/public/world1%20assets/joy/Joy-PointLetsGo.webm?t=2023-11-30T21%3A27%3A23.323Z' type='video/webm' />
        </video>
        <video muted autoPlay loop className={`joy-thinking absolute top-0 ml-[-63px] w-[900px] max-w-none opacity-0 ${!showJoy && world === 4 && currentFlow.get.action === "GOTO" ? "opacity-100" : ""}`}>
          <source src='https://frdmqigbelepsdgiecdr.supabase.co/storage/v1/object/public/world1%20assets/joy/Joy-LetsGo.webm?t=2023-11-30T21%3A27%3A12.569Z' type='video/webm' />
        </video>
        <div id='promptc' className='relative text-center h-[300px] w-[200px] flex items-end justify-center'>
          <div className={`prompt-content absolute top-[30px] right-[100%] mr-[40px] p-[30px] min-w-[470px] opacity-0 translate-x-[100px] ease-in-out ${currentFlow.get.action === "START" ? "!min-w-[430px]" : ""} ${showJoy && currentFlow.get.prompt ? "!opacity-[100] !translate-x-[0]" : ""} 
                            ${currentFlow.get.action === "END" ? "!bottom-[100%] !top-auto !left-[100%] !right-auto !py-[40px] !pb-[30px]" : ""} 
                            ${currentFlow.get.action === "GOTO" || currentFlow.get.action === "WAIT" ? "!pr-[70px]" : ""} 
                            ${currentFlow.get.action === "WAIT" ? "!py-[35px]" : "" } 
                            `}
            style={{
              backgroundSize: "100% 100%",
              backgroundImage: `url(${
                currentFlow.get.action === "GOTO" ||
                currentFlow.get.action === "WAIT"
                  ? "/assets/prompt-speech.png"
                  : "/assets/prompt-bg.png"
              })`,
              minWidth: currentFlow.get.width ? currentFlow.get.width : null,
            }}
          >
            <div onClick={currentFlow.get.action === "START" ? onProceed : currentFlow.get.action === "GOTO" ? handleClickHere : null } className={`${currentFlow.get.action} leading-[1.2] text-center ${currentFlow.get.action === "START" ? "text-[30px]" : "text-[30px]" } ${ currentFlow.get.action === "END" || currentFlow.get.action === "START" ? "tracking-[0]" : "tracking-[-0.5px]" } ${ currentFlow.get.action === "WAIT" ? "!tracking-[0.9px]" : "" } `} dangerouslySetInnerHTML={{ __html: currentFlow.get.prompt }}/>
            {/* {currentFlow.get.action === "START" && (
              <button
                onClick={onProceed}
                className='absolute right-[22px] bottom-[22px]'
              >
                <img src='/assets/arrow-right.svg' width={25} />
              </button>
            )} */}
            {currentFlow.get.action === "GOTO" && (
              <button
                onClick={handleClickHere}
                className='bg-[#cf463f] text-white rounded-[50px] font-[700] text-[12px] px-[15px] mt-[5px]'
              >
                CLICK HERE TO PROCEED
              </button>
            )}
            {currentFlow.get.action === "END" && (
              <div>
                <a href='http://ec2-13-213-56-159.ap-southeast-1.compute.amazonaws.com/game/SmashAndMatch'>
                  <button className='bg-[#cf463f] text-white rounded-[50px] font-[700] text-[18px] px-[20px] mt-[5px]'>
                    PLAY GAME
                  </button>
                </a>
                <br></br>
                <a href={`http://ec2-13-213-56-159.ap-southeast-1.compute.amazonaws.com/world-selector?next=${getNextWorld()}`}>
                  <button className='lowercase text-[12px] tracking-[1.4px] text-black/50 font-[500]'>
                    SKIP
                  </button>
                </a>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Prompt;
