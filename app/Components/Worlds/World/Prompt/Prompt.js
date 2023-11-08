import { useEffect } from "react";
import { gsap, Power3 } from 'gsap';

let timer;
const Prompt = ({ flow, currentFlow, onClickInteractables }) => {
    useEffect(() => {
        if( currentFlow.get.step === 0 ) {
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
    }, [currentFlow.get]);

    const onProceed = () => {
        currentFlow.set( flow.find(f => f.step === currentFlow.get.step + 1 ) );
    }

    return (
        <div id="prompt" className="fixed bottom-0 right-[30px] z-[22] translate-x-[300px]">
            <div className="relative bg-black h-[300px] w-[200px]">
                { currentFlow.get.prompt && (
                    <div className="absolute top-0 right-[100%] mr-[20px] p-[20px] bg-white min-w-[300px]">
                        <div dangerouslySetInnerHTML={{ __html: currentFlow.get.prompt }} />
                        { currentFlow.get.action === "WAVE" && <button onClick={ onProceed }>NEXT</button> }
                        { currentFlow.get.action === "GOTO" && <button onClick={ () => onClickInteractables("BUTTON") }>PROCEED</button> }
                    </div>
                )}
            </div>
        </div>
    )
}

export default Prompt;