const Flats = ({ flats, title, year, color }) => {
  return (
    <div
      className={`flats pointer-events-none z-[999] px-[4%] absolute w-full h-full transition-all duration-[1s] ease-in-out grid grid-cols-12 grid-rows-3`}
    >
      {/* LOGO AND HEADLINE */}
      <div className='col-span-3 row-span-2 w-full'>
        <img id='clogo' src={flats.logo} className="!w-[200%] -translate-y-[400px]" />
        <div id='cheader'
          className="textContainer w-full h-full text-center -mt-[10%] opacity-0"
          style={{ containerType: 'size', resize: 'horizontal' }}>
          <h1 id="mheader" className="uppercase text-white leading-none font-[700] w-full" style={{ fontSize: '20cqmin' }}>
            {title.split(" ").map((w, wi) => (
              <span className="flex justify-center" key={`headline_word_${wi}`}>
                {w.split("").map((t, i) => (
                  <span key={`word_ltr_${wi}_${i}`} className={`relative headline-single block`}>
                    <span className="absolute left-0 right-0" style={{ WebkitTextStroke: `2cqmin ${color ? color : "#00bbdc"}` }}>{t}</span>
                    <span className="relative">{t}</span>
                  </span>
                ))}
              </span>
            ))}
          </h1>
          <p data-text={year} className='text-[40px] uppercase text-white w-full' style={{ fontSize: '15cqmin' }}>
            <span
              className='stroke-text absolute left-0 right-0'
              style={{ WebkitTextStroke: `2cqmin ${color ? color : "#00bbdc"}` }}
            >
              {year}
            </span>
            <span className='fill-text relative'>{year}</span>
          </p>
        </div>
      </div>
      {/* CHAPTER */}
      <div
        id='cchapter'
        className='col-span-2 col-start-11 mt-[15%] translate-x-[400px]'
      >
        <img src={flats.chapter} width='w-full' />
      </div>

      {/* ICONS */}
      <div
        id='cicons'
        className='col-span-full row-start-3'
      >
        <img src={flats.icons} />
      </div>
      {/* <div className="hidden">
        <div className='clogo-cheader absolute top-0 left-[20px]'>
          <div id='clogo'
            className='translate-y-[-100px]'
          >
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
      </div> */}
    </div>
  );
};

export default Flats;
