const Background = ({ background }) => {
    return (
        <div className={`world-background pointer-events-none z-[-1] overflow-hidden fixed top-0 left-0 right-0 bottom-0 bg-white flex items-center justify-center transition-all duration-[1s] ease-in-out`}>
            <video autoPlay muted loop className="object-cover !max-w-none">
                <source src={ background } type="video/mp4" />
            </video>
        </div>
    )
}

export default Background;