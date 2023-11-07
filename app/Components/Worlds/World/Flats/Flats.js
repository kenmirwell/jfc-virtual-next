const Flats = ({ flats }) => {
    return (
        <div className={`pointer-events-none overflow-hidden z-[0] fixed top-0 left-0 right-0 bottom-0 flex items-center justify-center transition-all duration-[1s] ease-in-out`}>
            <div className="absolute top-0 left-[20px]">
                <div id="clogo" className="translate-y-[-100px]">
                    <img src={ flats.logo } />
                </div>
                <div id="cheader" className="h-b text-center mx-auto text-white font-[700] absolute top-[130px] left-[95px] opacity-0 min-w-[360px]">
                    { flats.header }
                </div>
            </div>
            <div id="cicons" className="absolute bottom-[-70px] left-[-65px] translate-y-[200px]">
                <img src={ flats.icons } />
            </div>
            <div id="cchapter" className="absolute top-[90px] right-[110px] translate-x-[400px]">
                <img src={ flats.chapter } width="200" />
            </div>
        </div>
    )
}

export default Flats;