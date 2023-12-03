const Flats = ({ flats, title, year, color }) => {
  return (
    <div
      className={`flats pointer-events-none z-[40] px-[4%] absolute w-full h-full transition-all duration-[1s] ease-in-out grid grid-cols-12 grid-rows-3`}
    >
      {/* LOGO AND HEADLINE */}
      <div className='col-span-3 row-span-2 w-full'>
        <img id='clogo' src={flats.logo} className="!w-[200%] -translate-y-[400px]" />
        <div id='cheader'
          className="textContainer w-full h-full text-center -mt-[10%] opacity-0"
          style={{ containerType: 'size' }}>
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
        <img src={flats.chapter} className='w-full' />
      </div>

      {/* ICONS */}
      <div
        id='cicons'
        className='col-span-full row-start-3 flex w-full h-full items-end translate-y-[200px]'
      >
        <div className="flex items-center w-fit h-[20%] gap-2 px-[1.5%] py-[1%] rounded-full 
        bg-white bg-opacity-80 backdrop-blur-sm drop-shadow-lg border border-white/20 mb-[2%]">
          {/* <img src="/assets/logos/world1/01Jollibee-Logo.png" alt="" className="w-auto h-full" />
          <img src="/assets/logos/world1/02Greenwich-Logo.png" alt="" className="w-auto h-full" />
          <img src="/assets/logos/world1/03Chowking-Logo.png" alt="" className="w-auto h-full" /> */}
           {flats.iconSet.map(icon => (
              <img src={icon} alt="" className="w-auto h-full" />
           ))}
        </div>
      </div>
    </div>
  );
};

export default Flats;
