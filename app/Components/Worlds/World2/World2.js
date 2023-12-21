import World from "../World/World";
import { en } from "./en";
import { vi } from "./vi";
import { ch } from "./ch";
import config from "../../../utils";

const World2 = ({ lang }) => {
  let flow = [
    // {
    //   step: 0,
    //   action: "START",
    //   prompt:
    //     "<p>This is JOY, she will be your guide as  you explore the <strong>JFC Universe</strong></p>",
    //   end: 1,
    // },
    {
      step: 1,
      action: "GOTO",
      target: "FlagMain",
      joy: "Joy-Pointing001",
      light: "Light-Rays-Transparent004",
      prompt: "<p>Let's go to the<br /><strong>Flag</strong></p>",
      end: "EXIT",
      width: 370,
      zoomOffset: {
        y: 0.5,
      },
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
      target: "CakeControl001",
      joy: "Joy-Pointing002",
      light: "Light-Rays-Transparent003",
      prompt:
        "<p>Let's go to the<br /><strong>Red Ribbon Building</strong></p>",
      end: "EXIT",
      zoomOffset: {
        y: -1,
      },
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
      target: "CongeeBldgController001",
      joy: "Joy-Pointing",
      light: "Light-Rays-Transparent002",
      prompt:
        "<p>Let's check out the<br /><strong>Hong Zhuang Yuan Building</strong></p>",
      end: "EXIT",
      zoomOffset: {
        y: -0.9,
      },
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
      target: "Inasal",
      joy: "Joy-Pointing003",
      light: "Light-Rays-Transparent001",
      prompt: "<p>Let's continue<br />our Journey</p>",
      end: "EXIT",
      zoomOffset: {
        y: -0.5,
      },
      width: 370,
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
      target: "BurgerController001",
      joy: "Joy-Pointing004",
      light: "Light-Rays-Transparent",
      prompt: "<p>Let's continue<br />exploring</p>",
      end: "EXIT",
      zoomOffset: {
        y: -0.5,
      },
      width: 370,
    },
    {
      step: 10,
      action: "END",
      prompt:
        "<p>Now that we're done,<br />it's time to test<br />your knowledge",
    },
  ];

  const { apiURL } = config;
  const mainURLs = `${apiURL}/World2/popups`;
  const photosURL = `${apiURL}/World2/popup+assets`;

  let contents = {
    FlagMain: {
      2004: {
        audio:
          "https://frdmqigbelepsdgiecdr.supabase.co/storage/v1/object/public/world2%20assets/MP3/JFC_VO_W2_MS1.mp3?t=2023-12-01T06%3A35%3A58.803Z",
        bg: `${mainURLs}/2004+MAIN.webm`,
        bgPoster: `${mainURLs}/2004.png`,
        year: `${mainURLs}/2004+YEAR.webm`,
        // yearPoster:
        //   "https://frdmqigbelepsdgiecdr.supabase.co/storage/v1/object/public/world2%20assets/popups/2004_YEAR.png",
        yearPoster: `${mainURLs}/2004_YEAR.png`,
        photos: [
          `${photosURL}/2004/Layer+1636.jpg`,
          `${photosURL}/2004/2004+-+JGF+logo.jpg`,
        ],
        contents: {
          en: en["2004"],
          ch: ch["2004"],
          vi: vi["2004"],
        },
      },
    },

    CakeControl001: {
      2005: {
        audio:
          "https://frdmqigbelepsdgiecdr.supabase.co/storage/v1/object/public/world2%20assets/MP3/JFC_VO_W2_MS2.mp3?t=2023-12-01T06%3A36%3A08.967Z",
        bg: `${mainURLs}/2005+MAIN.webm`,
        bgPoster: `${mainURLs}/2005.png`,
        year: `${mainURLs}/2005+YEAR.webm`,
        yearPoster: `${mainURLs}/2005_YEAR.png`,
        photos: [
          "https://d1bh4bdsrj0ehq.cloudfront.net/World2/popup+assets/2005/Screen+Shot+2023-09-01+at+5.48.59+PM.jpg",
        ],
        contents: {
          en: en["2005"],
          ch: ch["2005"],
          vi: vi["2005"],
        },
      },
      2006: {
        audio:
          "https://frdmqigbelepsdgiecdr.supabase.co/storage/v1/object/public/world2%20assets/MP3/JFC_VO_W2_MS2B.mp3?t=2023-12-01T06%3A36%3A18.609Z",
        bg: `${mainURLs}/2006+MAIN.webm`,
        bgPoster: `${mainURLs}/2006.png`,
        year: `${mainURLs}/2006+YEAR.webm`,
        yearPoster: `${mainURLs}/2006_YEAR.png`,
        photos: [
          "https://d1bh4bdsrj0ehq.cloudfront.net/World2/popup+assets/2006/JWS.jpg",
        ],
        contents: {
          en: en["2006"],
          ch: ch["2006"],
          vi: vi["2006"],
        },
      },
    },

    Inasal: {
      2010: {
        audio:
          "https://frdmqigbelepsdgiecdr.supabase.co/storage/v1/object/public/world2%20assets/MP3/JFC_VO_W2_MS4.mp3?t=2023-12-01T06%3A36%3A31.438Z",
        bg: `${mainURLs}/2010+MAIN.webm`,
        bgPoster: `${mainURLs}/2010.png`,
        year: `${mainURLs}/2010+YEAR.webm`,
        yearPoster: `${mainURLs}/2010_YEAR.png`,
        photos: [
          "https://d1bh4bdsrj0ehq.cloudfront.net/World2/popup+assets/2010/Layer+2048.jpg",
        ],
        contents: {
          en: en["2010"],
          ch: ch["2010"],
          vi: vi["2010"],
        },
      },
      2011: {
        audio:
          "https://frdmqigbelepsdgiecdr.supabase.co/storage/v1/object/public/world2%20assets/MP3/JFC_VO_W2_MS4B.mp3?t=2023-12-01T06%3A36%3A43.474Z",
        bg: `${mainURLs}/2011A+MAIN.webm`,
        bgPoster: `${mainURLs}/2011A.png`,
        year: `${mainURLs}/2011+YEAR.webm`,
        yearPoster: `${mainURLs}/2011_YEAR.png`,
        photos: [
          "https://d1bh4bdsrj0ehq.cloudfront.net/World2/popup+assets/2011/happy+bee+foods.jpg",
        ],
        contents: {
          en: en["2011A"],
          ch: ch["2011A"],
          vi: vi["2011A"],
        },
      },
    },

    BurgerController001: {
      2011: {
        audio:
          "https://frdmqigbelepsdgiecdr.supabase.co/storage/v1/object/public/world2%20assets/MP3/JFC_VO_W2_MS5.mp3?t=2023-12-01T06%3A36%3A51.781Z",
        bg: `${mainURLs}/2011B+MAIN.webm`,
        bgPoster: `${mainURLs}/2011B.png`,
        year: `${mainURLs}/2011+YEAR.webm`,
        yearPoster: `${mainURLs}/2011_YEAR.png`,
        photos: [
          "https://d1bh4bdsrj0ehq.cloudfront.net/World2/popup+assets/2011/2011B/Screen+Shot+2023-09-01+at+6.58.47+PM.jpg",
        ],
        contents: {
          en: en["2011B"],
          ch: ch["2011B"],
          vi: vi["2011B"],
        },
      },
      2012: {
        bg: `${mainURLs}/2012+MAIN.webm`,
        bgPoster: `${mainURLs}/2012.png`,
        year: `${mainURLs}/2012+YEAR.webm`,
        yearPoster: `${mainURLs}/2012_YEAR.png`,
        photos: [
          "https://d1bh4bdsrj0ehq.cloudfront.net/World2/popup+assets/2012/Layer+1598.jpg",
        ],
        contents: {
          en: en["2012"],
          ch: ch["2012"],
          vi: vi["2012"],
        },
      },
    },

    CongeeBldgController001: {
      2008: {
        audio:
          "https://frdmqigbelepsdgiecdr.supabase.co/storage/v1/object/public/world2%20assets/MP3/JFC_VO_W2_MS3.mp3?t=2023-12-01T06%3A37%3A06.221Z",
        bg: `${mainURLs}/2008+MAIN.webm`,
        bgPoster: `${mainURLs}/2008.png`,
        year: `${mainURLs}/2008+YEAR.webm`,
        yearPoster: `${mainURLs}/2008_YEAR.png`,
        photos: [""],
        contents: {
          en: en["2008"],
          ch: ch["2008"],
          vi: vi["2008"],
        },
      },
    },
  };

  return (
    <World
      bgm={`${config.apiURL}/World2/WORLD2_BGM.mp3`}
      lang={lang}
      world={2}
      audioEnding={
        "https://d1bh4bdsrj0ehq.cloudfront.net/World2/MP3/JFC_VO_W2_GAME2.mp3"
      }
      title='Dreaming Bigger'
      year='2004-2012'
      color='#c79c1e'
      // model='https://frdmqigbelepsdgiecdr.supabase.co/storage/v1/object/public/Worlds/World2-Complete-NoJoy.glb?t=2023-12-01T09%3A47%3A40.553Z'
      model={`${config.apiURL}/Worlds/World2-Complete-NoJoy.glb`}
      background={`${config.apiURL}/World2/GLOWING+BACKGROUND+2.webm`}
      // background='https://frdmqigbelepsdgiecdr.supabase.co/storage/v1/object/public/world2%20assets/GLOWING%20BACKGROUND%202.webm'
      backgroundPoster={`${config.apiURL}/World2/WORLD2_BG copy.png`}
      flats={{
        logo: "/assets/world1/elements/logo.png",
        chapter: "/assets/world2/elements/chapter.svg",
        // icons: "/assets/world2/elements/icons.png",
        iconSet: [
          "https://frdmqigbelepsdgiecdr.supabase.co/storage/v1/object/public/world1%20assets/assets/jfc-gw-ck.webp?t=2023-12-01T02%3A40%3A28.903Z",
          "https://frdmqigbelepsdgiecdr.supabase.co/storage/v1/object/public/world2%20assets/assets/JFC_WCHAPTER_2_LOGO_4.webp",
          "https://frdmqigbelepsdgiecdr.supabase.co/storage/v1/object/public/world2%20assets/assets/JFC_WCHAPTER_2_LOGO_5.webp",
          "https://frdmqigbelepsdgiecdr.supabase.co/storage/v1/object/public/world2%20assets/assets/JFC_WCHAPTER_2_LOGO_6.webp",
          "https://frdmqigbelepsdgiecdr.supabase.co/storage/v1/object/public/world2%20assets/assets/JFC_WCHAPTER_2_LOGO_7.webp",
          "https://frdmqigbelepsdgiecdr.supabase.co/storage/v1/object/public/world2%20assets/assets/JFC_WCHAPTER_2_LOGO_9.webp",
        ],
      }}
      contents={contents}
      flow={flow}
      zoomMultiplier={0.4}
    />
  );
};

export default World2;
