import { useEffect } from "react";
import { gsap, Power3 } from 'gsap';

let timer;
const Prompt = ({ showJoy, flow, currentFlow, onClickInteractables }) => {
    useEffect(() => {
        if( showJoy && !currentFlow.get.action ) {
            gsap.timeline().to("#prompt", .5, { 
                x: 0, 
                ease: Power3.easeInOut
            });

            setTimeout(() => {
                currentFlow.set( flow[0] );
            }, 700);
        }

        if( currentFlow.get.action === "WAIT" ) {
            clearTimeout(timer);

            timer = setTimeout(() => {
                onProceed();
            }, currentFlow.get.end * 1000);
        }
    }, [showJoy, currentFlow.get]);

    const onProceed = () => {
        currentFlow.set( flow.find(f => f.step === currentFlow.get.step + 1 ) );
    }

    return (
        <>
            <div className={`fixed top-0 left-0 right-0 bottom-0 opacity-0 bg-black/50 transition-all duration-[0.3s] ease-in-out ${ currentFlow.get.action === "END" ? "opacity-100" : "pointer-events-none" }`}></div>
            <div id="prompt" className={`fixed bottom-0 right-[100px] z-[22]  text-center translate-x-[300px] h-[380px] w-[200px] flex items-end justify-center transition-all duration-[0.5s] ease-in-out ${ !showJoy ? "translate-x-[400%]" : "" } ${ currentFlow.get.action === "END" ? "!w-[100%] !right-0" : "" }`}>
                <video muted autoPlay loop className={`joy-idle absolute top-[10px] ml-[-63px] w-[900px] max-w-none opacity-0 ${ showJoy && currentFlow.get.action === "WAIT" ? "opacity-100" : "" }`}>
                    <source src="/assets/joy/Joy-Idle-v2.webm" type="video/webm" />
                </video>
                <video muted autoPlay loop className={`joy-wave absolute top-0 ml-[-63px] w-[900px] max-w-none opacity-0 ${ showJoy && currentFlow.get.action === "START" ? "opacity-100" : "" }`}>
                    <source src="/assets/joy/Joy-WavingLoop-v2.webm" type="video/webm" />
                </video>
                <video muted autoPlay loop className={`joy-point absolute top-0 ml-[-63px] w-[900px] max-w-none opacity-0 ${ showJoy && currentFlow.get.action === "GOTO" ? "opacity-100" : "" }`}>
                    <source src="/assets/joy/Joy-Idle-v2.webm" type="video/webm" />
                </video>
                <video muted autoPlay loop className={`joy-thinking absolute top-0 ml-[-63px] w-[900px] max-w-none opacity-0 ${ showJoy && currentFlow.get.action === "END" ? "opacity-100" : "" }`}>
                    <source src="/assets/joy/Joy-Thinking.webm" type="video/webm" />
                </video>
                <div id="promptc" className="relative text-center h-[300px] w-[200px] flex items-end justify-center">
                    <div 
                        className={
                            `prompt-content absolute top-[30px] right-[100%] mr-[40px] p-[30px] min-w-[470px] opacity-0 translate-x-[100px] ease-in-out 
                            ${ currentFlow.get.action === "START" ? "!min-w-[430px]" : "" }
                            ${ showJoy && currentFlow.get.prompt ? "!opacity-[100] !translate-x-[0]" : "" } 
                            ${ currentFlow.get.action === "END" ? "!bottom-[100%] !top-auto !left-[100%] !right-auto !py-[40px] !pb-[30px]" : "" } 
                            ${ currentFlow.get.action === "GOTO" || currentFlow.get.action === "WAIT" ? "!pr-[70px]" : "" } 
                            ${ currentFlow.get.action === "WAIT" ? "!py-[35px]" : "" } 
                            `
                        } 
                        style={{ 
                            backgroundSize: "100% 100%", 
                            backgroundImage: `url(${ currentFlow.get.action === "GOTO" || currentFlow.get.action === "WAIT" ? "/assets/prompt-speech.png" : "/assets/prompt-bg.png" })`,
                            minWidth: currentFlow.get.width ? currentFlow.get.width : null
                        }}
                    >
                        <div 
                            className={`
                                ${ currentFlow.get.action } 
                                leading-[1.2] text-center 
                                ${ currentFlow.get.action === "START" ? "text-[30px]" : "text-[30px]" }
                                ${ currentFlow.get.action === "END" || currentFlow.get.action === "START" ? "tracking-[0]" : "tracking-[-0.5px]" } 
                                ${ currentFlow.get.action === "WAIT" ? "!tracking-[0.9px]" : "" } 
                            `} 
                            dangerouslySetInnerHTML={{ __html: currentFlow.get.prompt }} 
                        />
                        { currentFlow.get.action === "START" && (
                            <button onClick={ onProceed } className="absolute right-[22px] bottom-[22px]">
                                <img src="/assets/arrow-right.svg" width={ 25 } />
                            </button> 
                        )}
                        { currentFlow.get.action === "GOTO" && <button onClick={ () => onClickInteractables("BUTTON") } className="bg-[#cf463f] text-white rounded-[50px] font-[700] text-[12px] px-[15px] mt-[5px]">CLICK HERE TO PROCEED</button> }
                        { currentFlow.get.action === "END" && (
                            <div>
                                <button className="bg-[#cf463f] text-white rounded-[50px] font-[700] text-[18px] px-[20px] mt-[5px]">PLAY GAME</button><br></br>
                                <button className="lowercase text-[12px] tracking-[1.4px] text-black/50 font-[500]">SKIP</button>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Prompt;