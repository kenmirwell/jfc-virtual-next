import Button from "./Button/Button";
import { gsap, Power3 } from "gsap";

const Buttons = (props) => {
    const onClick = () => {
        gsap.timeline().to(`#world1`, {x: -1000, y: -1000, opacity: 0,  duration: .5, ease: Power3.easeInOut})
        gsap.timeline().to(`#world2`, {x: 1000, y: -1000, opacity: 0,  duration: .5, ease: Power3.easeInOut})
        gsap.timeline().to(`#world3`, {x: -1000, y: 1000, opacity: 0,  duration: .5, ease: Power3.easeInOut})
        gsap.timeline().to(`#world4`, {x: 1000, y: 1000, opacity: 0,  duration: .5, ease: Power3.easeInOut})

        props.onAnimate()
    }

    return (
        <div className="buttons fixed top-0 left-0 right-0 bottom-0 flex items-center justify-center flex-wrap text-center">
            <div className="max-w-[500px] flex items-center justify-center flex-wrap w-full">
                <Button id="world1" onClick={ onClick } label={"1"}/>
                <Button id="world2"  onClick={ onClick } label={"2"}/>
                <Button id="world3"  onClick={ onClick } label={"3"}/>
                <Button id="world4"  onClick={ onClick } label={"4"}/>
            </div>
        </div>
    )
}

export default Buttons;