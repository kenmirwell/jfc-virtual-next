const Loader = ({ model3d }) => {
    return (
        <div className={`${ model3d ? "!opacity-0 !pointer-events-none" : "" } opacity-100 fixed top-0 left-0 right-0 bottom-0 bg-white flex items-center justify-center transition-all duration-[1s] ease-in-out z-[10]`}>
            <div className="loader"></div>
        </div>
    )
}

export default Loader;