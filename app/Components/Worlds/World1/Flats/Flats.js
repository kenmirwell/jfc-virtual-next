const Flats = () => {
    return (
        <div className={`pointer-events-none overflow-hidden z-[0] fixed top-0 left-0 right-0 bottom-0 flex items-center justify-center transition-all duration-[1s] ease-in-out`}>
            <div className="absolute top-0 left-[20px]">
                <div id="clogo" className="translate-y-[-100px]">
                    <img src="/assets/world1/elements/logo.png" />
                </div>
                <div id="cheader" className="h-b text-center mx-auto text-white font-[700] absolute top-[130px] left-[95px] opacity-0">
                    <h2 data-text={"Humble"} className="h2-a text-[60px] leading-none uppercase">Humble</h2>
                    <h2 data-text={"Beginnings"} className="h2-b text-[60px] leading-none uppercase">Beginnings</h2>
                    <p data-text={"1979-2003"} className="text-[40px]">1979-2003</p>
                </div>
            </div>
            <div id="cicons" className="absolute bottom-[-70px] left-[-65px] translate-y-[200px]">
                <img src="/assets/world1/elements/icons.png" />
            </div>
            <div id="cchapter" className="absolute top-[90px] right-[110px] translate-x-[400px]">
                <img src="/assets/world1/elements/chapter.svg" width="200" />
            </div>
        </div>
    )
}

export default Flats;