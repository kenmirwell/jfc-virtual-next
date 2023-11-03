import Button from "./Button/Button";
import { gsap, Power3 } from "gsap";

const Buttons = (props) => {
    const onClick = () => {
        gsap.timeline().to(`#button1`, {x: -1000, y: -1000, opacity: 0,  duration: .5, ease: Power3.easeInOut})
        gsap.timeline().to(`#button2`, {x: 1000, y: -1000, opacity: 0,  duration: .5, ease: Power3.easeInOut})
        gsap.timeline().to(`#button3`, {x: -1000, y: 1000, opacity: 0,  duration: .5, ease: Power3.easeInOut})
        gsap.timeline().to(`#button4`, {x: 1000, y: 1000, opacity: 0,  duration: .5, ease: Power3.easeInOut})

        props.onAnimate()
    }

    return (
        <div className="buttons fixed top-0 left-0 right-0 bottom-0 flex items-center justify-center flex-wrap text-center">
            <div className="max-w-[500px] flex items-center justify-center flex-wrap w-full">
                <Button id="button1" onClick={ onClick } label={"1"}/>
                <Button id="button2"  onClick={ onClick } label={"2"}/>
                <Button id="button3"  onClick={ onClick } label={"3"}/>
                <Button id="button4"  onClick={ onClick } label={"4"}/>
            </div>
        </div>
    )
}

export default Buttons;