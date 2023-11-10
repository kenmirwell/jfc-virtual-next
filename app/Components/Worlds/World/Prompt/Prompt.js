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
            <div id="prompt" className={`fixed bottom-0 right-[100px] z-[22]  text-center translate-x-[300px] h-[300px] w-[200px] flex items-end justify-center transition-all duration-[0.5s] ease-in-out ${ currentFlow.get.action === "END" ? "!w-[100%] !right-0" : "" }`}>
                <div id="promptc" className="relative text-center h-[300px] w-[200px] flex items-end justify-center">
                    <div className={`absolute top-0 right-[100%] mr-[20px] p-[30px] min-w-[400px] bg-[url(/assets/prompt-bg.png)] opacity-0 transition-all duration-[0.3s] translate-x-[100px] ease-in-out ${ showJoy && currentFlow.get.prompt ? "!opacity-[100] !translate-x-[0]" : "" } ${ currentFlow.get.action === "END" ? "!bottom-[100%] !top-auto !left-[100%] !right-auto" : "" }`} style={{ backgroundSize: "100% 100%" }}>
                        <div className="text-[30px] leading-[1.2] text-center" dangerouslySetInnerHTML={{ __html: currentFlow.get.prompt }} />
                        { currentFlow.get.action === "START" && <button onClick={ onProceed }>NEXT</button> }
                        { currentFlow.get.action === "GOTO" && <button onClick={ () => onClickInteractables("BUTTON") }>PROCEED</button> }
                        { currentFlow.get.action === "END" && (
                            <div>
                                <button>PLAY GAME</button><br></br>
                                <button>SKIP</button>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Prompt;