import { gsap, Bounce, Power3 } from 'gsap';

const Button = (props) => {
    return (
        <>
            <div id={ props.id } className={`intial-button w-6/12 flex items-center justify-center px-[15px] pb-[30px]`}>
                <div className="button-content w-full">
                    <button onClick={ props.onClick } className="h-[120px] text-[70px] font-[700] w-full bg-[#FF1A00] text-white rounded-[15px] leading-none">{ props.label }</button>
                </div>
            </div>
        </>
    )
}

export default Button;