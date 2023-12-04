import World from "../World/World";
import { en } from "./en";
import { vi } from "./vi";
import { ch } from "./ch";

const World2 = () => {
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
        y: 1.7,
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

  let contents = {
    FlagMain: {
      2004: {
        audio:
          "https://frdmqigbelepsdgiecdr.supabase.co/storage/v1/object/public/world2%20assets/MP3/JFC_VO_W2_MS1.mp3?t=2023-12-01T06%3A35%3A58.803Z",
        bg: "https://frdmqigbelepsdgiecdr.supabase.co/storage/v1/object/public/world2%20assets/popups/2004%20MAIN.webm?t=2023-12-01T07%3A02%3A13.339Z",
        bgPoster: "https://frdmqigbelepsdgiecdr.supabase.co/storage/v1/object/public/world2%20assets/popups/2004.png",
        year: "https://frdmqigbelepsdgiecdr.supabase.co/storage/v1/object/public/world2%20assets/popups/2004%20YEAR.webm?t=2023-12-02T09%3A55%3A56.876Z",
        yearPoster: "https://frdmqigbelepsdgiecdr.supabase.co/storage/v1/object/public/world2%20assets/popups/2004_YEAR.png",
        photos: [
          "https://frdmqigbelepsdgiecdr.supabase.co/storage/v1/object/public/world2%20assets/popup%20assets/2004/Layer%201636.jpg",
          "https://frdmqigbelepsdgiecdr.supabase.co/storage/v1/object/public/world2%20assets/popup%20assets/2004/2004%20-%20JGF%20logo.jpg",
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
        bg: "https://frdmqigbelepsdgiecdr.supabase.co/storage/v1/object/public/world2%20assets/popups/2005%20MAIN.webm?t=2023-12-01T07%3A02%3A22.214Z",
        bgPoster: "https://frdmqigbelepsdgiecdr.supabase.co/storage/v1/object/public/world2%20assets/popups/2005.png",
        year: "https://frdmqigbelepsdgiecdr.supabase.co/storage/v1/object/public/world2%20assets/popups/2005%20YEAR.webm?t=2023-12-02T09%3A58%3A18.370Z",
        yearPoster: "https://frdmqigbelepsdgiecdr.supabase.co/storage/v1/object/public/world2%20assets/popups/2005_YEAR.png",
        photos: [
          "https://frdmqigbelepsdgiecdr.supabase.co/storage/v1/object/public/world2%20assets/popup%20assets/2005/Screen%20Shot%202023-09-01%20at%205.48.59%20PM.jpg",
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
        bg: "https://frdmqigbelepsdgiecdr.supabase.co/storage/v1/object/public/world2%20assets/popups/2006%20MAIN.webm?t=2023-12-01T07%3A02%3A28.934Z",
        bgPoster: "https://frdmqigbelepsdgiecdr.supabase.co/storage/v1/object/public/world2%20assets/popups/2006.png",
        year: "https://frdmqigbelepsdgiecdr.supabase.co/storage/v1/object/public/world2%20assets/popups/2006%20YEAR.webm?t=2023-12-02T09%3A58%3A25.804Z",
        yearPoster: "https://frdmqigbelepsdgiecdr.supabase.co/storage/v1/object/public/world2%20assets/popups/2006_YEAR.png",
        photos: [
          "https://frdmqigbelepsdgiecdr.supabase.co/storage/v1/object/public/world2%20assets/popup%20assets/2006/JWS.jpg?t=2023-12-04T00%3A29%3A46.492Z",
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
        bg: "https://frdmqigbelepsdgiecdr.supabase.co/storage/v1/object/public/world2%20assets/popups/2010%20MAIN.webm?t=2023-12-01T07%3A02%3A36.323Z",
        bgPoster: "https://frdmqigbelepsdgiecdr.supabase.co/storage/v1/object/public/world2%20assets/popups/2010.png",
        year: "https://frdmqigbelepsdgiecdr.supabase.co/storage/v1/object/public/world2%20assets/popups/2010%20YEAR.webm?t=2023-12-02T09%3A58%3A35.386Z",
        yearPoster: "https://frdmqigbelepsdgiecdr.supabase.co/storage/v1/object/public/world2%20assets/popups/2010_YEAR.png",
        photos: [
          "https://frdmqigbelepsdgiecdr.supabase.co/storage/v1/object/public/world2%20assets/popup%20assets/2010/Layer%202048.jpg?t=2023-12-04T00%3A30%3A07.302Z",
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
        bg: "https://frdmqigbelepsdgiecdr.supabase.co/storage/v1/object/public/world2%20assets/popups/2011A%20MAIN.webm?t=2023-12-01T07%3A02%3A44.325Z",
        bgPoster: "https://frdmqigbelepsdgiecdr.supabase.co/storage/v1/object/public/world2%20assets/popups/2011A.png",
        year: "https://frdmqigbelepsdgiecdr.supabase.co/storage/v1/object/public/world2%20assets/popups/2011%20YEAR.webm?t=2023-12-02T09%3A59%3A23.813Z",
        yearPoster: "https://frdmqigbelepsdgiecdr.supabase.co/storage/v1/object/public/world2%20assets/popups/2011_YEAR.png",
        photos: [
          "https://frdmqigbelepsdgiecdr.supabase.co/storage/v1/object/public/world2%20assets/popup%20assets/2011/happy%20bee%20foods.jpg",
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
        bg: "https://frdmqigbelepsdgiecdr.supabase.co/storage/v1/object/public/world2%20assets/popups/2011B%20MAIN.webm?t=2023-12-01T07%3A02%3A51.275Z",
        bgPoster: "https://frdmqigbelepsdgiecdr.supabase.co/storage/v1/object/public/world2%20assets/popups/2011B.png",
        year: "https://frdmqigbelepsdgiecdr.supabase.co/storage/v1/object/public/world2%20assets/popups/2011%20YEAR.webm?t=2023-12-02T09%3A59%3A23.813Z",
        yearPoster: "https://frdmqigbelepsdgiecdr.supabase.co/storage/v1/object/public/world2%20assets/popups/2011_YEAR.png",
        photos: [
          "https://frdmqigbelepsdgiecdr.supabase.co/storage/v1/object/public/world2%20assets/popup%20assets/2011/2011B/Screen%20Shot%202023-09-01%20at%206.58.47%20PM.jpg?t=2023-12-04T00%3A31%3A40.843Z",
        ],
        contents: {
          en: en["2011B"],
          ch: ch["2011B"],
          vi: vi["2011B"],
        },
      },
      2012: {
        bg: "https://frdmqigbelepsdgiecdr.supabase.co/storage/v1/object/public/world2%20assets/popups/2012%20MAIN.webm?t=2023-12-01T07%3A02%3A58.807Z",
        bgPoster: "https://frdmqigbelepsdgiecdr.supabase.co/storage/v1/object/public/world2%20assets/popups/2012.png",
        year: "https://frdmqigbelepsdgiecdr.supabase.co/storage/v1/object/public/world2%20assets/popups/2012%20YEAR.webm?t=2023-12-02T10%3A00%3A32.628Z",
        yearPoster: "https://frdmqigbelepsdgiecdr.supabase.co/storage/v1/object/public/world2%20assets/popups/2012_YEAR.png",
        photos: [
          "https://frdmqigbelepsdgiecdr.supabase.co/storage/v1/object/public/world2%20assets/popup%20assets/2012/Layer%201598.jpg?t=2023-12-04T00%3A31%3A52.644Z",
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
        bg: "https://frdmqigbelepsdgiecdr.supabase.co/storage/v1/object/public/world2%20assets/popups/2008%20MAIN.webm?t=2023-12-01T07%3A03%3A08.493Z",
        bgPoster: "https://frdmqigbelepsdgiecdr.supabase.co/storage/v1/object/public/world2%20assets/popups/2008.png",
        year: "https://frdmqigbelepsdgiecdr.supabase.co/storage/v1/object/public/world2%20assets/popups/2008%20YEAR.webm?t=2023-12-02T10%3A00%3A47.016Z",
        yearPoster: "https://frdmqigbelepsdgiecdr.supabase.co/storage/v1/object/public/world2%20assets/popups/2008_YEAR.png",
        photos: [
          "",
        ],
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
      world={2}
      audioEnding={
        "https://frdmqigbelepsdgiecdr.supabase.co/storage/v1/object/public/world2%20assets/MP3/JFC_VO_W2_GAME2.mp3?t=2023-12-01T06%3A37%3A15.663Z"
      }
      title='Dreaming Bigger'
      year='2004-2012'
      color='#c79c1e'
      model='https://frdmqigbelepsdgiecdr.supabase.co/storage/v1/object/public/Worlds/World2-Complete-NoJoy.glb?t=2023-12-01T09%3A47%3A40.553Z'
      background='https://frdmqigbelepsdgiecdr.supabase.co/storage/v1/object/public/world2%20assets/GLOWING%20BACKGROUND%202.webm'
      backgroundPoster='https://frdmqigbelepsdgiecdr.supabase.co/storage/v1/object/public/world2%20assets/WORLD2_BG%20copy.png'
      flats={{
        logo: "/assets/world1/elements/logo.png",
        chapter: "/assets/world2/elements/chapter.svg",
        // icons: "/assets/world2/elements/icons.png",
        iconSet: [
          "https://frdmqigbelepsdgiecdr.supabase.co/storage/v1/object/public/world1%20assets/assets/jfc-gw-ck.webp?t=2023-12-01T02%3A40%3A28.903Z",
          "https://frdmqigbelepsdgiecdr.supabase.co/storage/v1/object/public/world2%20assets/assets/JFC_WCHAPTER_2_LOGO_4.webp",
          "https://frdmqigbelepsdgiecdr.supabase.co/storage/v1/object/public/world2%20assets/assets/JFC_WCHAPTER_2_LOGO_5.webp",
          "https://frdmqigbelepsdgiecdr.supabase.co/storage/v1/object/public/world2%20assets/assets/JFC_WCHAPTER_2_LOGO_5.webp",
          "https://frdmqigbelepsdgiecdr.supabase.co/storage/v1/object/public/world2%20assets/assets/JFC_WCHAPTER_2_LOGO_6.webp",
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
