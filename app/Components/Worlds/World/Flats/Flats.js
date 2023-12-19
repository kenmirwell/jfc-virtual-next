"use client";

import { usePathname } from "next/navigation";

const Flats = ({ flats, title, year, color, subtitle }) => {
  const pathname = usePathname();

  const getFontSize = () => {
    // if (
    //   pathname.includes("2") ||
    //   pathname.includes("3") ||
    //   pathname.includes("4")
    // )
    return "20cqmin";
    // return "16cqmin";
  };

  return (
    <div
      className={`flats pointer-events-none z-[40] px-[4%] absolute w-full h-full transition-all duration-[1s] ease-in-out grid grid-cols-12 grid-rows-3`}
    >
      {/* LOGO AND HEADLINE */}
      <div className='col-span-3 row-span-2 w-full'>
        <img
          id='clogo'
          src={flats.logo}
          className='!w-[200%] -translate-y-[400px]'
        />
        <div
          id='cheader'
          className='textContainer w-full h-full text-center -mt-[10%] opacity-0'
          style={{ containerType: "size" }}
        >
          <h1
            id='mheader'
            className='uppercase text-white leading-none font-[700] w-full'
            style={{ fontSize: getFontSize() }}
          >
            <span
              style={{
                WebkitTextStroke: `.5cqmin ${color ? color : "#00bbdc"}`,
                fontSize: "12cqmin",
              }}
              className={`relative headline-single block`}
            >
              {subtitle}
            </span>
            {title.split(" ").map((w, wi) => (
              <span className='flex justify-center' key={`headline_word_${wi}`}>
                {w.split("").map((t, i) => (
                  <span
                    key={`word_ltr_${wi}_${i}`}
                    className={`relative headline-single block`}
                  >
                    <span
                      className='absolute left-0 right-0'
                      style={{
                        WebkitTextStroke: `2cqmin ${color ? color : "#00bbdc"}`,
                      }}
                    >
                      {t}
                    </span>
                    <span className='relative'>{t}</span>
                  </span>
                ))}
              </span>
            ))}
          </h1>
          <p
            data-text={year}
            className='text-[40px] uppercase text-white w-full'
            style={{ fontSize: "15cqmin" }}
          >
            <span
              className='stroke-text absolute left-0 right-0'
              style={{
                WebkitTextStroke: `2cqmin ${color ? color : "#00bbdc"}`,
              }}
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
        {flats.iconSet && (
          <img
            src={flats.iconSet}
            alt='company logos'
            // className='w-auto h-full translate-x-[-8%] translate-y-[32%]'
            className='w-auto h-full translate-y-[30%] translate-x-[-7.2%]'
          />
        )}
      </div>
    </div>
  );
};

export default Flats;
