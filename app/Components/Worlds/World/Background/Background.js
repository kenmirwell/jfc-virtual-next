const Background = ({ background }) => {
    return (
        <div className="absolute z-[-1] overflow-hidden pointer-events-none w-full aspect-video transition-all duration-[0.5s] ease-out ">
            <video autoPlay muted loop poster="/posters/bgposter.jpg">
                <source src={background} type="video/mp4" className="w-full" />
            </video>
        </div>
    )
}

export default Background;