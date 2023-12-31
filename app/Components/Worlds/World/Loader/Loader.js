const Loader = ({ model3d }) => {
    return (
        <div className={`${ model3d ? "!opacity-0 !pointer-events-none" : "" } opacity-100 fixed top-0 left-0 right-0 bottom-0 bg-transparent flex items-center justify-center transition-all duration-[1s] ease-in-out z-[10]`}>
            <video  autoPlay loop mutedwidth="400" >
                <source src={"https://frdmqigbelepsdgiecdr.supabase.co/storage/v1/object/public/Worlds/Jollibee_Loading_Icon%20(1).webm?t=2023-11-30T11%3A02%3A50.555Z"} type="video/webm"/>
            </video>
        </div>
    )
}

export default Loader;