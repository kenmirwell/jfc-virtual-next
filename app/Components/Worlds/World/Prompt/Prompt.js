import { useEffect } from "react";
import { gsap, Power3 } from 'gsap';

let timer;
const Prompt = ({ showJoy, flow, currentFlow, onClickInteractables }) => {
    useEffect(() => {
        if( showJoy && !currentFlow.action ) {
            gsap.timeline().to("#prompt", .5, { 
                x: 0, 
                ease: Power3.easeInOut
            });
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
        <div id="prompt" className="fixed bottom-0 right-[100px] z-[22] translate-x-[300px] h-[200px] w-[200px] flex items-end justify-center">
            { currentFlow.get.prompt && (
                <div className="absolute top-0 right-[100%] mr-[20px] p-[20px] bg-white min-w-[300px]">
                    <div dangerouslySetInnerHTML={{ __html: currentFlow.get.prompt }} />
                    { currentFlow.get.action === "START" && <button onClick={ onProceed }>NEXT</button> }
                    { currentFlow.get.action === "GOTO" && <button onClick={ () => onClickInteractables("BUTTON") }>PROCEED</button> }
                    { currentFlow.get.action === "END" && (
                        <div>
                            <button>PLAY GAME</button><br></br>
                            <button>SKIP</button>
                        </div>
                    )}
                </div>
            )}
        </div>
    )
}

export default Prompt;