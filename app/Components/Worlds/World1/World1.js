import World from "../World/World";
import { en } from "./en";
import { vi } from "./vi";
import { ch } from "./ch";

const World1 = ({ lang }) => {
  let flow = [
    {
      step: 0,
      action: "START",
      prompt:
        "<p>This is JOY, she will be your guide as  you explore the <strong>JFC Universe</strong></p>",
      end: 1,
    },
    {
      step: 1,
      action: "GOTO",
      target: "Empty005",
      joy: "Joy-Pointing003",
      light: "Light-Rays-Jollibee",
      prompt: "<p>Let's go to the<br /><strong>Jollibee Building</strong></p>",
      end: "EXIT",
      width: 400,
    },
    {
      step: 2,
      action: "WAIT",
      prompt: "<p>Now that we're done continue to the next landmark</p>",
      end: 2,
    },
    {
      step: 3,
      action: "GOTO",
      target: "Empty004",
      joy: "Joy-Pointing002",
      light: "Light-Rays-Transparent002",
      prompt: "<p>Let's go to the<br /><strong>Jollibee Mascot</strong></p>",
      end: "EXIT",
      width: 400,
    },
    {
      step: 4,
      action: "WAIT",
      prompt: "<p>Now that we're done continue to the next landmark</p>",
      end: 2,
    },
    {
      step: 5,
      action: "GOTO",
      target: "Empty003",
      joy: "Joy-Pointing004",
      light: "Light-Rays-Transparent004",
      prompt: "<p>Let's check out the<br /><strong>Open Sign</strong></p>",
      end: "EXIT",
      width: 400,
    },
    {
      step: 6,
      action: "WAIT",
      prompt: "<p>Now that we're done continue to the next landmark</p>",
      end: 2,
    },
    {
      step: 7,
      action: "GOTO",
      target: "Empty001",
      joy: "Joy-Pointing001",
      light: "Light-Rays-Transparent001",
      prompt: "<p>Let's go to the<br /><strong>Greenwich Building</strong></p>",
      end: "EXIT",
    },
    {
      step: 8,
      action: "WAIT",
      prompt: "<p>Now that we're done continue to the next landmark</p>",
      end: 2,
    },
    {
      step: 9,
      action: "GOTO",
      target: "Empty002",
      joy: "Joy-Pointing",
      light: "Light-Rays-Transparent",
      prompt: "<p>Let's go to the<br /><strong>Chowking Building</strong></p>",
      end: "EXIT",
    },
    {
      step: 10,
      action: "END",
      prompt:
        "<p>Now that we're done,<br />it's time to test<br />your knowledge",
    },
  ];

  let contents = {
    Empty005: {
      1978: {
        audio:
          "https://frdmqigbelepsdgiecdr.supabase.co/storage/v1/object/public/world1%20assets/audio/JFC_VO_W1_MS1.mp3?t=2023-12-01T02%3A41%3A52.498Z",
        bg: "https://frdmqigbelepsdgiecdr.supabase.co/storage/v1/object/public/world1%20assets/popups/1978-MAIN.webm",
        bgPoster:
          "https://frdmqigbelepsdgiecdr.supabase.co/storage/v1/object/public/world1%20assets/popups/1978.png",
        year: "https://frdmqigbelepsdgiecdr.supabase.co/storage/v1/object/public/world1%20assets/popup%20years/1978-YEAR.webm?t=2023-12-01T06%3A44%3A00.282Z",
        yearPoster:
          "https://frdmqigbelepsdgiecdr.supabase.co/storage/v1/object/public/world1%20assets/popup%20years/1978_YEAR.png",
        photos: [
          "https://frdmqigbelepsdgiecdr.supabase.co/storage/v1/object/public/world1%20assets/popup%20assets/1978/1978_1.png",
          "https://frdmqigbelepsdgiecdr.supabase.co/storage/v1/object/public/world1%20assets/popup%20assets/1978/1978_2.png",
        ],
        contents: {
          en: en["1978"],
          ch: ch["1978"],
          vi: vi["1978"],
        },
        icons: ["/assets/logos/world1/jollibee.png"],
      },
      1979: {
        bg: "https://frdmqigbelepsdgiecdr.supabase.co/storage/v1/object/public/world1%20assets/popups/1979-MAIN.webm",
        bgPoster:
          "https://frdmqigbelepsdgiecdr.supabase.co/storage/v1/object/public/world1%20assets/popups/1979.png",
        year: "https://frdmqigbelepsdgiecdr.supabase.co/storage/v1/object/public/world1%20assets/popup%20years/1979-YEAR.webm?t=2023-12-01T06%3A47%3A03.831Z",
        yearPoster:
          "https://frdmqigbelepsdgiecdr.supabase.co/storage/v1/object/public/world1%20assets/popup%20years/1979_YEAR.png",
        photos: [
          "https://frdmqigbelepsdgiecdr.supabase.co/storage/v1/object/public/world1%20assets/popup%20assets/1979/1979.png",
        ],
        contents: {
          en: en["1979"],
          ch: ch["1979"],
          vi: vi["1979"],
        },
      },
    },
    Empty004: {
      1980: {
        audio:
          "https://frdmqigbelepsdgiecdr.supabase.co/storage/v1/object/public/world1%20assets/audio/JFC_VO_W1_MS2.mp3?t=2023-12-01T02%3A42%3A18.404Z",
        bg: "https://frdmqigbelepsdgiecdr.supabase.co/storage/v1/object/public/world1%20assets/popups/1980-MAIN.webm?t=2023-12-01T06%3A47%3A56.576Z",
        bgPoster:
          "https://frdmqigbelepsdgiecdr.supabase.co/storage/v1/object/public/world1%20assets/popups/1980.png",
        year: "https://frdmqigbelepsdgiecdr.supabase.co/storage/v1/object/public/world1%20assets/popup%20years/1980-YEAR.webm?t=2023-12-01T06%3A48%3A03.837Z",
        yearPoster:
          "https://frdmqigbelepsdgiecdr.supabase.co/storage/v1/object/public/world1%20assets/popup%20years/1980_YEAR.png",
        photos: [
          "https://frdmqigbelepsdgiecdr.supabase.co/storage/v1/object/public/world1%20assets/popup%20assets/1980/1980.png?t=2023-12-01T06%3A48%3A28.409Z",
        ],
        contents: {
          en: en["1980"],
          ch: ch["1980"],
          vi: vi["1980"],
        },
        icons: ["/assets/logos/world1/jollibee.png"],
      },
    },
    Empty003: {
      1984: {
        audio:
          "https://frdmqigbelepsdgiecdr.supabase.co/storage/v1/object/public/world1%20assets/audio/JFC_VO_W1_MS3.mp3?t=2023-12-01T02%3A42%3A29.897Z",
        bg: "https://frdmqigbelepsdgiecdr.supabase.co/storage/v1/object/public/world1%20assets/popups/1984-MAIN.webm",
        bgPoster:
          "https://frdmqigbelepsdgiecdr.supabase.co/storage/v1/object/public/world1%20assets/popups/1984.png",
        year: "https://frdmqigbelepsdgiecdr.supabase.co/storage/v1/object/public/world1%20assets/popup%20years/1984-YEAR.webm?t=2023-12-01T06%3A50%3A43.770Z",
        yearPoster:
          "https://frdmqigbelepsdgiecdr.supabase.co/storage/v1/object/public/world1%20assets/popup%20years/1984_YEAR.png",
        photos: [
          "https://frdmqigbelepsdgiecdr.supabase.co/storage/v1/object/public/world1%20assets/popup%20assets/1984/1984.png?t=2023-12-01T06%3A50%3A08.726Z",
        ],
        contents: {
          en: en["1984"],
          ch: ch["1984"],
          vi: vi["1984"],
        },
        icons: ["/assets/logos/world1/jollibee.png"],
      },
      1990: {
        bg: "https://frdmqigbelepsdgiecdr.supabase.co/storage/v1/object/public/world1%20assets/popups/1990-MAIN.webm?t=2023-12-01T06%3A52%3A23.536Z",
        bgPoster:
          "https://frdmqigbelepsdgiecdr.supabase.co/storage/v1/object/public/world1%20assets/popups/1990.png",
        year: "https://frdmqigbelepsdgiecdr.supabase.co/storage/v1/object/public/world1%20assets/popup%20years/1990-YEAR.webm?t=2023-12-01T06%3A52%3A30.088Z",
        yearPoster:
          "https://frdmqigbelepsdgiecdr.supabase.co/storage/v1/object/public/world1%20assets/popup%20years/1990_YEAR.png",
        photos: [
          "https://frdmqigbelepsdgiecdr.supabase.co/storage/v1/object/public/world1%20assets/popup%20assets/1990/1990.png",
        ],
        contents: {
          en: en["1990"],
          ch: ch["1990"],
          vi: vi["1990"],
        },
        icons: ["/assets/logos/world1/jollibee.png"],
      },
      1993: {
        bg: "https://frdmqigbelepsdgiecdr.supabase.co/storage/v1/object/public/world1%20assets/popups/1993-MAIN.webm?t=2023-12-01T06%3A52%3A54.430Z",
        bgPoster:
          "https://frdmqigbelepsdgiecdr.supabase.co/storage/v1/object/public/world1%20assets/popups/1993.png",
        year: "https://frdmqigbelepsdgiecdr.supabase.co/storage/v1/object/public/world1%20assets/popup%20years/1993-YEAR.webm?t=2023-12-01T06%3A53%3A01.260Z",
        yearPoster:
          "https://frdmqigbelepsdgiecdr.supabase.co/storage/v1/object/public/world1%20assets/popup%20years/1993_YEAR.png",
        photos: [
          "https://frdmqigbelepsdgiecdr.supabase.co/storage/v1/object/public/world1%20assets/popup%20assets/1993/1993.png",
        ],
        contents: {
          en: en["1993"],
          ch: ch["1993"],
          vi: vi["1993"],
        },
      },
    },
    Empty001: {
      1994: {
        audio:
          "https://frdmqigbelepsdgiecdr.supabase.co/storage/v1/object/public/world1%20assets/audio/JFC_VO_W1_MS4.mp3?t=2023-12-01T02%3A42%3A37.009Z",
        bg: "https://frdmqigbelepsdgiecdr.supabase.co/storage/v1/object/public/world1%20assets/popups/1994-MAIN.webm?t=2023-12-01T06%3A54%3A13.728Z",
        bgPoster:
          "https://frdmqigbelepsdgiecdr.supabase.co/storage/v1/object/public/world1%20assets/popups/1994.png",
        year: "https://frdmqigbelepsdgiecdr.supabase.co/storage/v1/object/public/world1%20assets/popup%20years/1994-YEAR.webm?t=2023-12-01T06%3A54%3A23.018Z",
        yearPoster:
          "https://frdmqigbelepsdgiecdr.supabase.co/storage/v1/object/public/world1%20assets/popup%20years/1994_YEAR.png",
        photos: [
          "https://frdmqigbelepsdgiecdr.supabase.co/storage/v1/object/public/world1%20assets/popup%20assets/1994/1994.png?t=2023-12-01T06%3A54%3A32.093Z",
        ],
        contents: {
          en: en["1994"],
          ch: ch["1994"],
          vi: vi["1994"],
        },
        icons: ["/assets/logos/world1/jollibee.png", "greenwich.png"],
      },
      1998: {
        audio:
          "https://frdmqigbelepsdgiecdr.supabase.co/storage/v1/object/public/world1%20assets/audio/JFC_VO_W1_MS4B.mp3?t=2023-12-01T02%3A42%3A53.870Z",
        bg: "https://frdmqigbelepsdgiecdr.supabase.co/storage/v1/object/public/world1%20assets/popups/1998-MAIN.webm?t=2023-12-01T06%3A54%3A44.667Z",
        bgPoster:
          "https://frdmqigbelepsdgiecdr.supabase.co/storage/v1/object/public/world1%20assets/popups/1998.png",
        year: "https://frdmqigbelepsdgiecdr.supabase.co/storage/v1/object/public/world1%20assets/popup%20years/1998-YEAR.webm?t=2023-12-01T06%3A55%3A28.541Z",
        yearPoster:
          "https://frdmqigbelepsdgiecdr.supabase.co/storage/v1/object/public/world1%20assets/popup%20years/1998_YEAR.png",
        photos: [
          "https://frdmqigbelepsdgiecdr.supabase.co/storage/v1/object/public/world1%20assets/popup%20assets/1998/1998.png",
        ],
        contents: {
          en: en["1998"],
          ch: ch["1998"],
          vi: vi["1998"],
        },
      },
    },
    Empty002: {
      2000: {
        audio:
          "https://frdmqigbelepsdgiecdr.supabase.co/storage/v1/object/public/world1%20assets/audio/JFC_VO_W1_MS5.mp3?t=2023-12-01T02%3A42%3A59.299Z",
        bg: "https://frdmqigbelepsdgiecdr.supabase.co/storage/v1/object/public/world1%20assets/popups/2000-MAIN.webm?t=2023-12-01T06%3A54%3A58.570Z",
        bgPoster:
          "https://frdmqigbelepsdgiecdr.supabase.co/storage/v1/object/public/world1%20assets/popups/2000.png",
        year: "https://frdmqigbelepsdgiecdr.supabase.co/storage/v1/object/public/world1%20assets/popup%20years/2000-YEAR.webm?t=2023-12-01T06%3A55%3A36.457Z",
        yearPoster:
          "https://frdmqigbelepsdgiecdr.supabase.co/storage/v1/object/public/world1%20assets/popup%20years/2000_YEAR.png",
        photos: [
          "https://frdmqigbelepsdgiecdr.supabase.co/storage/v1/object/public/world1%20assets/popup%20assets/2000/2000.png?t=2023-12-01T06%3A56%3A12.001Z",
        ],
        contents: {
          en: en["2000"],
          ch: ch["2000"],
          vi: vi["2000"],
        },
        icons: [
          "/assets/logos/world1/jollibee.png",
          "greenwich.png",
          "chowking.png",
        ],
      },
      2001: {
        audio:
          "https://frdmqigbelepsdgiecdr.supabase.co/storage/v1/object/public/world1%20assets/audio/JFC_VO_W1_MS5B.mp3?t=2023-12-01T02%3A43%3A05.270Z",
        bg: "https://frdmqigbelepsdgiecdr.supabase.co/storage/v1/object/public/world1%20assets/popups/2001-MAIN.webm?t=2023-12-01T06%3A55%3A06.666Z",
        bgPoster:
          "https://frdmqigbelepsdgiecdr.supabase.co/storage/v1/object/public/world1%20assets/popups/2001.png",
        year: "https://frdmqigbelepsdgiecdr.supabase.co/storage/v1/object/public/world1%20assets/popup%20years/2001-YEAR.webm?t=2023-12-01T06%3A55%3A43.016Z",
        yearPoster:
          "https://frdmqigbelepsdgiecdr.supabase.co/storage/v1/object/public/world1%20assets/popup%20years/2001_YEAR.png",
        photos: [
          "https://frdmqigbelepsdgiecdr.supabase.co/storage/v1/object/public/world1%20assets/popup%20assets/2001/2001.png?t=2023-12-01T06%3A56%3A26.240Z",
        ],
        contents: {
          en: en["2001"],
          ch: ch["2001"],
          vi: vi["2001"],
        },
      },
    },
  };

  return (
    <World
      lang={lang}
      world={1}
      audioEnding={
        "https://frdmqigbelepsdgiecdr.supabase.co/storage/v1/object/public/world1%20assets/audio/JFC_VO_W1_GAME1.mp3?t=2023-12-01T02%3A42%3A02.021Z"
      }
      title='Humble Beginnings'
      subtitle='JFC UNIVERSE:'
      year='1978-2003'
      model='https://frdmqigbelepsdgiecdr.supabase.co/storage/v1/object/public/Worlds/world1.glb'
      background='https://frdmqigbelepsdgiecdr.supabase.co/storage/v1/object/public/world1%20assets/GLOWING%20BACKGROUND.webm'
      backgroundPoster='https://frdmqigbelepsdgiecdr.supabase.co/storage/v1/object/public/world1%20assets/WORLD1_BG%20copy.png'
      flats={{
        logo: "/assets/world1/elements/logo.png",
        chapter: "/assets/world1/elements/chapter.svg",
        iconSet: [
          null,
          "https://frdmqigbelepsdgiecdr.supabase.co/storage/v1/object/public/world1%20assets/assets/jfc.webp?t=2023-12-01T02%3A40%3A17.669Z",
          "https://frdmqigbelepsdgiecdr.supabase.co/storage/v1/object/public/world1%20assets/assets/jfc-gw.webp?t=2023-12-01T02%3A40%3A23.731Z",
          "https://frdmqigbelepsdgiecdr.supabase.co/storage/v1/object/public/world1%20assets/assets/jfc-gw-ck.webp?t=2023-12-01T02%3A40%3A28.903Z",
        ],
      }}
      iconSet
      contents={contents}
      flow={flow}
    />
  );
};

export default World1;
