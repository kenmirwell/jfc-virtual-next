import World from "../World/World";
import { en } from "./en";
import { vi } from "./vi";
import { ch } from "./ch";

const World1 = () => {
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
        "Empty005": {
            "1978": {
                "bg": "/assets/world1/popup/1978-MAIN.webm",
                "year": "/assets/world1/popup-years/1978-YEAR.webm",
                "photos": [
                    "/assets/world1/popup-photos/1978/1978_1.png"
                ],
                "contents": {
                    "en": en["1978"],
                    "ch": ch["1978"],
                    "vi": vi["1978"]
                }
            },
            "1979": {
                "bg": "/assets/world1/popup/1979-MAIN.webm",
                "year": "/assets/world1/popup-years/1979-YEAR.webm",
                "photos": [
                    "/assets/world1/popup-photos/1979/1979.png"
                ],
                "contents": {
                    "en": en["1979"],
                    "ch": ch["1979"],
                    "vi": vi["1979"]
                }
            }
        },
        "Empty004": {
            "1980": {
                "bg": "/assets/world1/popup/1980-MAIN.webm",
                "year": "/assets/world1/popup-years/1980-YEAR.webm",
                "photos": [
                    "/assets/world1/popup-photos/1980/1980.png"
                ],
                "contents": {
                    "en": en["1980"],
                    "ch": ch["1980"],
                    "vi": vi["1980"]
                }
            }
        },
        "Empty003": {
            "1984": {
                "bg": "/assets/world1/popup/1984-MAIN.webm",
                "year": "/assets/world1/popup-years/1984-YEAR.webm",
                "photos": [
                    "/assets/world1/popup-photos/1984/1984.png"
                ],
                "contents": {
                    "en": en["1984"],
                    "ch": ch["1984"],
                    "vi": vi["1984"]
                }
            },
            "1990": {
                "bg": "/assets/world1/popup/1990-MAIN.webm",
                "year": "/assets/world1/popup-years/1990-YEAR.webm",
                "photos": [
                    "/assets/world1/popup-photos/1990/1990.png"
                ],
                "contents": {
                    "en": en["1990"],
                    "ch": ch["1990"],
                    "vi": vi["1990"]
                }
            },
            "1993": {
                "bg": "/assets/world1/popup/1993-MAIN.webm",
                "year": "/assets/world1/popup-years/1993-YEAR.webm",
                "photos": [
                    "/assets/world1/popup-photos/1993/1993.png"
                ],
                "contents": {
                    "en": en["1993"],
                    "ch": ch["1993"],
                    "vi": vi["1993"]
                }
            }
        },
        "Empty001": {
            "1994": {
                "bg": "/assets/world1/popup/1994-MAIN.webm",
                "year": "/assets/world1/popup-years/1994-YEAR.webm",
                "photos": [
                    "/assets/world1/popup-photos/1994/1994.png"
                ],
                "contents": {
                    "en": en["1994"],
                    "ch": ch["1994"],
                    "vi": vi["1994"]
                }
            },
            "1998": {
                "bg": "/assets/world1/popup/1998-MAIN.webm",
                "year": "/assets/world1/popup-years/1998-YEAR.webm",
                "photos": [
                    "/assets/world1/popup-photos/1998/1998.png"
                ],
                "contents": {
                    "en": en["1998"],
                    "ch": ch["1998"],
                    "vi": vi["1998"]
                }
            },
        },
        "Empty002": {
            "2000": {
                "bg": "/assets/world1/popup/2000-MAIN.webm",
                "year": "/assets/world1/popup-years/2000-YEAR.webm",
                "photos": [
                    "/assets/world1/popup-photos/2000/2000.png"
                ],
                "contents": {
                    "en": en["2000"],
                    "ch": ch["2000"],
                    "vi": vi["2000"]
                }
            },
            "2001": {
                "bg": "/assets/world1/popup/2001-MAIN.webm",
                "year": "/assets/world1/popup-years/2001-YEAR.webm",
                "photos": [
                    "/assets/world1/popup-photos/2001/2001.png"
                ],
                "contents": {
                    "en": en["2001"],
                    "ch": ch["2001"],
                    "vi": vi["2001"]
                }
            },
        }
    }

    // Empty005: {
    //   textPost: ["left-[11%]", "left-[24%]"],
    //   post: ["left-[13%]", "left-[25%]"],
    // },

    // Empty004: {
    //   textPost: ["left-[15%]"],
    //   post: ["left-[17%]"],
    // },
    
    // Empty003: {
    //   textPost: ["left-[6%]", "left-[16%]", "left-[25%]"],
    //   post: ["left-[8%]", "left-[18%]", "left-[27%]"],
    // },

    // Empty001: {
    //   textPost: ["left-[11%]", "left-[24%]"],
    //   post: ["left-[13%]", "left-[25%]"],
    // },

    // Empty002: {
    //   textPost: ["left-[11%]", "left-[24%]"],
    //   post: ["left-[13%]", "left-[25%]"],
    // },
//   };

    return (
        <World
            world={1}
            audioEnding={'/assets/world1/audio/JFC_VO_W1_GAME1.wav'}
            title='Humble Beginnings'
            year='1978-2003'
            model="/assets/world1/world.glb"
            background='/assets/world1/bg.mp4'
            flats={{
                logo: "/assets/world1/elements/logo.png",
                chapter: "/assets/world1/elements/chapter.svg",
                icons: "/assets/world1/elements/icons.png",
            }}
            contents={contents}
            flow={flow}
        />
    );
};

export default World1;
