import World from "../World/World";
import { en } from "./en";
import { vi } from "./vi";
import { ch } from "./ch";

const World3 = () => {
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
      target: "HandBulb",
      joy: "Joy-Pointing001",
      light: "Light-Rays-Transparent003",
      prompt: "<p>Let's check out the<br /><strong>Hologram</strong></p>",
      end: "EXIT",
      zoomOffset: {
        y: 2,
      },
      width: 370,
      zoom: 3,
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
      target: "JFCGold",
      joy: "Joy-Pointing002",
      light: "Light-Rays-Transparent002",
      prompt: "<p>Let's go to the<br /><strong>JFC Building</strong></p>",
      end: "EXIT",
      zoomOffset: {
        y: 2.5,
      },
      width: 370,
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
      target: "Burger",
      joy: "Joy-Pointing",
      light: "Light-Rays-Transparent004",
      prompt:
        "<p>Let's go to the<br /><strong>Smashburger Building</strong></p>",
      end: "EXIT",
      zoomOffset: {
        y: -0.5,
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
      target: "Dumplings",
      joy: "Joy-Pointing003",
      light: "Light-Rays-Transparent001",
      prompt: "<p>Let's go to the<br /><strong>Dumplings</strong></p>",
      end: "EXIT",
      zoomOffset: {
        y: 2,
      },
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
      target: "CoffeeBeans",
      joy: "Joy-Pointing004",
      light: "Light-Rays-Transparent",
      prompt: "<p>Let's go to the<br /><strong>Coffee Beans</strong></p>",
      end: "EXIT",
      zoomOffset: {
        y: -1,
      },
    },
    {
      step: 10,
      action: "END",
      prompt:
        "<p>Now that we're done,<br />it's time to test<br />your knowledge",
    },
  ];

  let contents = {
    HandBulb: {
      2013: {
        audio:
          "https://frdmqigbelepsdgiecdr.supabase.co/storage/v1/object/public/world3%20assets/MP3/JFC_VO_W3_MS1.mp3?t=2023-12-03T02%3A27%3A42.995Z",
        bg: "https://frdmqigbelepsdgiecdr.supabase.co/storage/v1/object/public/world3%20assets/popups/2013%20MAIN.webm?t=2023-12-03T02%3A36%3A00.370Z",
        year: "https://frdmqigbelepsdgiecdr.supabase.co/storage/v1/object/public/world3%20assets/popups/2013%20YEAR.webm?t=2023-12-03T02%3A37%3A22.691Z",
        photos: ["/assets/world3/popup-photos/2013/2013.png"],
        contents: {
          en: en["2013"],
          ch: ch["2013"],
          vi: vi["2013"],
        },
      },
    },

    JFCGold: {
      2014: {
        audio:
          "https://frdmqigbelepsdgiecdr.supabase.co/storage/v1/object/public/world3%20assets/MP3/JFC_VO_W3_MS2.mp3?t=2023-12-03T02%3A27%3A53.455Z",
        bg: "https://frdmqigbelepsdgiecdr.supabase.co/storage/v1/object/public/world3%20assets/popups/2014%20MAIN.webm?t=2023-12-03T02%3A36%3A07.649Z",
        year: "https://frdmqigbelepsdgiecdr.supabase.co/storage/v1/object/public/world3%20assets/popups/2014%20YEAR.webm?t=2023-12-03T02%3A37%3A29.870Z",
        photos: ["/assets/world3/popup-photos/2014/2014.png"],
        contents: {
          en: en["2014"],
          ch: ch["2014"],
          vi: vi["2014"],
        },
      },
    },

    Burger: {
      2015: {
        audio:
          "https://frdmqigbelepsdgiecdr.supabase.co/storage/v1/object/public/world3%20assets/MP3/JFC_VO_W3_MS3.mp3?t=2023-12-03T02%3A28%3A04.381Z",
        bg: "https://frdmqigbelepsdgiecdr.supabase.co/storage/v1/object/public/world3%20assets/popups/2015%20MAIN.webm?t=2023-12-03T02%3A36%3A22.103Z",
        year: "https://frdmqigbelepsdgiecdr.supabase.co/storage/v1/object/public/world3%20assets/popups/2015%20YEAR.webm?t=2023-12-03T02%3A37%3A35.375Z",
        photos: ["/assets/world3/popup-photos/2015/2015.png"],
        contents: {
          en: en["2015"],
          ch: ch["2015"],
          vi: vi["2015"],
        },
      },
      2017: {
        audio:
          "https://frdmqigbelepsdgiecdr.supabase.co/storage/v1/object/public/world3%20assets/MP3/JFC_VO_W3_MS3B.mp3?t=2023-12-03T02%3A28%3A10.908Z",
        bg: "https://frdmqigbelepsdgiecdr.supabase.co/storage/v1/object/public/world3%20assets/popups/2017%20MAIN.webm?t=2023-12-03T02%3A36%3A30.036Z",
        year: "https://frdmqigbelepsdgiecdr.supabase.co/storage/v1/object/public/world3%20assets/popups/2017%20YEAR.webm?t=2023-12-03T02%3A37%3A43.146Z",
        photos: ["/assets/world3/popup-photos/2017/2017.png"],
        contents: {
          en: en["2017"],
          ch: ch["2017"],
          vi: vi["2017"],
        },
      },
    },

    Dumplings: {
      2018: {
        audio:
          "https://frdmqigbelepsdgiecdr.supabase.co/storage/v1/object/public/world3%20assets/MP3/JFC_VO_W3_MS4.mp3?t=2023-12-03T02%3A28%3A17.898Z",
        bg: "https://frdmqigbelepsdgiecdr.supabase.co/storage/v1/object/public/world3%20assets/popups/2018%20MAIN.webm?t=2023-12-03T02%3A36%3A38.183Z",
        year: "https://frdmqigbelepsdgiecdr.supabase.co/storage/v1/object/public/world3%20assets/popups/2018%20YEAR.webm?t=2023-12-03T02%3A37%3A48.890Z",
        photos: [
          "/assets/world3/popup-photos/2018/2018_1.png",
          "/assets/world3/popup-photos/2018/2018_2.png",
        ],
        contents: {
          en: en["2018"],
          ch: ch["2018"],
          vi: vi["2018"],
        },
      },
    },

    CoffeeBeans: {
      2019: {
        audio:
          "https://frdmqigbelepsdgiecdr.supabase.co/storage/v1/object/public/world3%20assets/MP3/JFC_VO_W3_MS5.mp3?t=2023-12-03T02%3A28%3A25.172Z",
        bg: "https://frdmqigbelepsdgiecdr.supabase.co/storage/v1/object/public/world3%20assets/popups/2019%20MAIN.webm?t=2023-12-03T02%3A36%3A46.519Z",
        year: "https://frdmqigbelepsdgiecdr.supabase.co/storage/v1/object/public/world3%20assets/popups/2019%20YEAR.webm?t=2023-12-03T02%3A37%3A54.950Z",
        photos: ["/assets/world3/popup-photos/2019/2019.png"],
        contents: {
          en: en["2019"],
          ch: ch["2019"],
          vi: vi["2019"],
        },
      },
      2020: {
        audio:
          "https://frdmqigbelepsdgiecdr.supabase.co/storage/v1/object/public/world3%20assets/MP3/JFC_VO_W3_MS5B.mp3?t=2023-12-03T02%3A31%3A12.955Zwav",
        bg: "https://frdmqigbelepsdgiecdr.supabase.co/storage/v1/object/public/world3%20assets/popups/2020%20MAIN.webm?t=2023-12-03T02%3A36%3A55.629Z",
        year: "https://frdmqigbelepsdgiecdr.supabase.co/storage/v1/object/public/world3%20assets/popups/2020%20YEAR.webm?t=2023-12-03T02%3A37%3A12.453Z",
        photos: ["/assets/world3/popup-photos/2020A/2020A.png"],
        contents: {
          en: en["2020A"],
          ch: ch["2020A"],
          vi: vi["2020A"],
        },
      },
    },
  };

  return (
    <World
      world={3}
      audioEnding={
        "https://frdmqigbelepsdgiecdr.supabase.co/storage/v1/object/public/world3%20assets/MP3/JFC_VO_W3_GAME3.mp3?t=2023-12-03T02%3A31%3A25.721Z"
      }
      title='Going Global'
      year='2013-2020'
      color='#06abcb'
      model='https://frdmqigbelepsdgiecdr.supabase.co/storage/v1/object/public/Worlds/World3-Complete-NoJoy.glb?t=2023-12-03T19%3A45%3A24.538Z'
      background='https://frdmqigbelepsdgiecdr.supabase.co/storage/v1/object/public/world3%20assets/GLOWING%20BACKGROUND%203.webm'
      flats={{
        logo: "/assets/world1/elements/logo.png",
        chapter: "/assets/world3/elements/chapter.svg",
        // icons: "/assets/world2/elements/icons.png",
        iconSet: [
          "https://frdmqigbelepsdgiecdr.supabase.co/storage/v1/object/public/world2%20assets/assets/JFC_WCHAPTER_2_LOGO_9.webp",
          "https://frdmqigbelepsdgiecdr.supabase.co/storage/v1/object/public/world3%20assets/assets/JFC_WCHAPTER_3_LOGO_10.webp",
          "https://frdmqigbelepsdgiecdr.supabase.co/storage/v1/object/public/world3%20assets/assets/JFC_WCHAPTER_3_LOGO_12.webp",
          "https://frdmqigbelepsdgiecdr.supabase.co/storage/v1/object/public/world3%20assets/assets/JFC_WCHAPTER_3_LOGO_14.webp",
        ],
      }}
      contents={contents}
      flow={flow}
      zoomMultiplier={0.4}
    />
  );
};

export default World3;
