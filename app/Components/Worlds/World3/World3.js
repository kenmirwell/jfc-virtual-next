import World from "../World/World";
import { en } from "./en";
import { vi } from "./vi";
import { ch } from "./ch";

const World3 = () => {
    let flow = [
        {
            step: 0,
            action: "START",
            prompt: "<p>This is JOY, she will be your guide as  you explore the <strong>JFC Universe</strong></p>",
            end: 1
        },
        {
            step: 1,
            action: "GOTO",
            target: "HandBulb",
            joy: "Joy-Pointing001",
            light: "Light-Rays-Transparent003",
            prompt: "<p>Let's check out the<br /><strong>Hologram</strong></p>",
            end: "EXIT",
            zoomOffset: {
                y: 2
            },
            width: 370,
            zoom: 3
        },
        {
            step: 2,
            action: "WAIT",
            prompt: "<p>Now that we're done continue to the next landmark</p>",
            end: 2
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
                y: 2.5
            },
            width: 370
        },
        {
            step: 4,
            action: "WAIT",
            prompt: "<p>Now that we're done continue to the next landmark</p>",
            end: 2
        },
        {
            step: 5,
            action: "GOTO",
            target: "Burger",
            joy: "Joy-Pointing",
            light: "Light-Rays-Transparent004",
            prompt: "<p>Let's go to the<br /><strong>Smashburger Building</strong></p>",
            end: "EXIT",
            zoomOffset: {
                y: -0.5
            }
        },
        {
            step: 6,
            action: "WAIT",
            prompt: "<p>Now that we're done continue to the next landmark</p>",
            end: 2
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
                y: 2
            }
        },
        {
            step: 8,
            action: "WAIT",
            prompt: "<p>Now that we're done continue to the next landmark</p>",
            end: 2
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
                y: -1
            }
        },
        {
            step: 10,
            action: "END",
            prompt: "<p>Now that we're done,<br />it's time to test<br />your knowledge"
        }
    ];

    let contents = {
        "HandBulb": {
            audio: "JFC_VO_W3_MS1",
            "2013": {
                "bg": "/assets/world3/popup/2013-MAIN.webm",
                "year": "/assets/world3/popup-years/2013-YEAR.webm",
                "photos": [
                  "/assets/world3/popup-photos/2013/2013.png"
                ],
                "contents": {
                  "en": en["2013"],
                  "ch": ch["2013"],
                  "vi": vi["2013"]
                }
            }
        },

        "JFCGold": {
            audio: "JFC_VO_W3_MS2",
            "2014": {
                "bg": "/assets/world3/popup/2014-MAIN.webm",
                "year": "/assets/world3/popup-years/2014-YEAR.webm",
                "photos": [
                  "/assets/world3/popup-photos/2014/2014.png"
                ],
                "contents": {
                  "en": en["2014"],
                  "ch": ch["2014"],
                  "vi": vi["2014"]
                }
            }
        },
        
        "Burger": {
            audio: "JFC_VO_W3_MS3",
            "2015": {
                "bg": "/assets/world3/popup/2015-MAIN.webm",
                "year": "/assets/world3/popup-years/2015-YEAR.webm",
                "photos": [
                  "/assets/world3/popup-photos/2015/2015.png"
                ],
                "contents": {
                  "en": en["2015"],
                  "ch": ch["2015"],
                  "vi": vi["2015"]
                }
            },
            "2017": {
                "bg": "/assets/world3/popup/2017-MAIN.webm",
                "year": "/assets/world3/popup-years/2017-YEAR.webm",
                "photos": [
                  "/assets/world3/popup-photos/2017/2017.png"
                ],
                "contents": {
                  "en": en["2017"],
                  "ch": ch["2017"],
                  "vi": vi["2017"]
                }
            }
        },
        
        "Dumplings": {
            audio: "JFC_VO_W3_MS4",
            "2018": {
                "bg": "/assets/world3/popup/2018-MAIN.webm",
                "year": "/assets/world3/popup-years/2018-YEAR.webm",
                "photos": [
                  "/assets/world3/popup-photos/2018/2018_1.png",
                  "/assets/world3/popup-photos/2018/2018_2.png"
                ],
                "contents": {
                  "en": en["2018"],
                  "ch": ch["2018"],
                  "vi": vi["2018"]
                }
            }
        },

        "CoffeeBeans": {
            audio: "JFC_VO_W3_MS5",
            "2019": {
                "bg": "/assets/world3/popup/2019-MAIN.webm",
                "year": "/assets/world3/popup-years/2019-YEAR.webm",
                "photos": [
                  "/assets/world3/popup-photos/2019/2019.png"
                ],
                "contents": {
                  "en": en["2019"],
                  "ch": ch["2019"],
                  "vi": vi["2019"]
                }
            },
            "2020A": {
                "bg": "/assets/world3/popup/2020A-MAIN.webm",
                "year": "/assets/world3/popup-years/2020A-YEAR.webm",
                "photos": [
                  "/assets/world3/popup-photos/2020A/2020A.png"
                ],
                "contents": {
                  "en": en["2020A"],
                  "ch": ch["2020A"],
                  "vi": vi["2020A"]
                }
            }
        },
    };

    return (
        <World 
            world={3}
            title="Going Global"
            year="2013-2020"
            color="#06abcb"
            model="/assets/world3/world.glb"
            // model="https://frdmqigbelepsdgiecdr.supabase.co/storage/v1/object/public/Worlds/World3-Complete-NoLights-Plane%20(3).glb?t=2023-11-28T03%3A34%3A11.957Z"
            background="/assets/world3/bg.mp4"
            flats={{
                logo: "/assets/world1/elements/logo.png",
                chapter: "/assets/world2/elements/chapter.svg",
                icons: "/assets/world2/elements/icons.png"
            }}
            contents={ contents }
            flow={ flow }
            zoomMultiplier={ 0.4 }
        />
    )
}

export default World3;