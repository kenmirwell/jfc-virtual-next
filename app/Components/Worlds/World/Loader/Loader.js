const Loader = ({ model3d }) => {
    return (
        <div className={`${ model3d ? "!opacity-0 !pointer-events-none" : "" } opacity-100 fixed top-0 left-0 right-0 bottom-0 bg-transparent flex items-center justify-center transition-all duration-[1s] ease-in-out z-[10]`}>
            {/* <div className="loader"></div> */}
            <video  autoPlay loop muted >
                <source src={"/assets/world1/j-loader.webm"} type="video/webm"/>
                {/* <source src={"https://frdmqigbelepsdgiecdr.supabase.co/storage/v1/object/public/Worlds/Jollibee_Loading_Icon.webm?t=2023-11-30T09%3A15%3A33.014Z"} type="video/webm"/> */}
            </video>
        </div>
    )
}

export default Loader;