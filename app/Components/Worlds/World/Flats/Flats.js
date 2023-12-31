const Flats = ({ flats, title, year, color }) => {
  return (
    <div
      className={`flats pointer-events-none overflow-hidden z-[0] fixed top-0 left-0 right-0 bottom-0 flex items-center justify-center transition-all duration-[1s] ease-in-out`}
    >
      <div className='clogo-cheader absolute top-0 left-[20px]'>
        <div id='clogo' className='translate-y-[-100px]'>
          <img src={flats.logo} />
        </div>
        <div
          id='cheader'
          className='text-center mx-auto text-white font-[700] absolute top-[130px] left-[95px] opacity-0 min-w-[350px]'
        >
          {title.split(" ").map((h) => (
            <h2
              key={`title_${h}`}
              className='relative text-[60px] leading-none uppercase flex justify-center'
            >
              <span
                className='absolute left-0 right-0'
                style={{ WebkitTextStroke: `5px ${color ? color : "#00bbdc"}` }}
              >
                {h}
              </span>
              <span className='relative'>{h}</span>
            </h2>
          ))}
          <p data-text={year} className='text-[40px] text-white'>
            <span
              className='stroke-text absolute left-0 right-0'
              style={{ WebkitTextStroke: `5px ${color ? color : "#00bbdc"}` }}
            >
              {year}
            </span>
            <span className='fill-text relative'>{year}</span>
          </p>
        </div>
      </div>
      <div
        id='cicons'
        className='absolute bottom-[-70px] left-[-65px] translate-y-[200px]'
      >
        <img src={flats.icons} />
      </div>
      <div
        id='cchapter'
        className='chapter-icon flex justify-right absolute top-[90px] right-[110px] translate-x-[400px]'
      >
        <img src={flats.chapter} width='200' />
      </div>
    </div>
  );
};

export default Flats;
