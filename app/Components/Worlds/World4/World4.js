import World from "../World/World";
import { en } from "./en";
import { vi } from "./vi";
import { ch } from "./ch";

const World4 = () => {
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
            target: "ShieldController",
            joy: "Joy-Pointing001",
            light: "Light-Rays-Shield",
            prompt: "<p>Let's go to the<br /><strong>Health Icon</strong></p>",
            end: "EXIT",
            zoomOffset: {
                y: 0.5
            },
            width: 370
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
            target: "FoodBowlController",
            joy: "Joy-Pointing",
            light: "Light-Rays-Bowl",
            prompt: "<p>Let's go to the<br /><strong>Rice Bowl</strong></p>",
            end: "EXIT",
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
            target: "MilkteaBldgController",
            joy: "Joy-Pointing002",
            light: "Light-Rays-Milktea",
            prompt: "<p>Let's go to the<br /><strong>Milktea Shop</strong></p>",
            end: "EXIT",
            width: 370
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
            target: "TrophyController",
            joy: "Joy-Pointing004",
            light: "Light-Rays-Trophy",
            prompt: "<p>Let's go to the<br /><strong>Statue</strong></p>",
            end: "EXIT",
            width: 370
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
            target: "JoyForTomoController",
            joy: "Joy-Pointing003",
            light: "Light-Rays-JoyFor",
            prompt: "<p>Let's continue<br />our Journey</p>",
            end: "EXIT",
            width: 370
        },
        {
            step: 10,
            action: "END",
            prompt: "<p>Now that we're done,<br />it's time to test<br />your knowledge"
        }
    ];

    let contents = {
        "ShieldController": {
            audio: "JFC_VO_W4_MS1",
            "2020": {
                "bg": "/assets/world4/popup/2020B-MAIN.webm",
                "year": "/assets/world4/popup-years/2020B-YEAR.webm",
                "photos": [
                  "/assets/world4/popup-photos/2020B/2020B.png"
                ],
                "contents": {
                  "en": en["2020"],
                  "ch": ch["2020"],
                  "vi": vi["2020"]
                }
            }
        },

        "FoodBowlController": {
            audio: "JFC_VO_W4_MS2",
            "2021A": {
                "bg": "/assets/world4/popup/2021A-MAIN.webm",
                "year": "/assets/world4/popup-years/2021A-YEAR.webm",
                "photos": [
                  "/assets/world4/popup-photos/2021A/2021A.png"
                ],
                "contents": {
                  "en": en["2021A"],
                  "ch": ch["2021A"],
                  "vi": vi["2021A"]
                }
            }
        },
        
        "MilkteaBldgController": {
            audio: "JFC_VO_W4_MS3",
            "2021B": {
                "bg": "/assets/world4/popup/2021B-MAIN.webm",
                "year": "/assets/world4/popup-years/2021B-YEAR.webm",
                "photos": [
                  "/assets/world4/popup-photos/2021B/2021B.png"
                ],
                "contents": {
                  "en": en["2021B"],
                  "ch": ch["2021B"],
                  "vi": vi["2021B"]
                }
            }
        },
        
        "TrophyController": {
            audio: "JFC_VO_W4_MS4",
            "2022": {
                "bg": "/assets/world4/popup/2022-MAIN.webm",
                "year": "/assets/world4/popup-years/2022-YEAR.webm",
                "photos": [
                  "/assets/world4/popup-photos/2022/2022.png"
                ],
                "contents": {
                  "en": en["2022"],
                  "ch": ch["2022"],
                  "vi": vi["2022"]
                }
            }
        },

        "JoyForTomoController": {
            audio: "JFC_VO_W4_MS5",
            "2023A": {
                "bg": "/assets/world4/popup/2023A-MAIN.webm",
                "year": "/assets/world4/popup-years/2023A-YEAR.webm",
                "photos": [
                  "/assets/world4/popup-photos/2023A/2023A.png"
                ],
                "contents": {
                  "en": en["2023A"],
                  "ch": ch["2023A"],
                  "vi": vi["2023A"]
                }
            },
            "2023B": {
                "bg": "/assets/world4/popup/2023B-MAIN.webm",
                "year": "/assets/world4/popup-years/2023B-YEAR.webm",
                "photos": [
                  "/assets/world4/popup-photos/2023B/2023B_1.png",
                  "/assets/world4/popup-photos/2023B/2023B_2.png"
                ],
                "contents": {
                  "en": en["2023B"],
                  "ch": ch["2023B"],
                  "vi": vi["2023B"]
                }
            }
        },
    };

    return (
        <World 
            world={4}
            title="New Frontier"
            year="2021-2023"
            color="#df4637"
            model="/assets/world4/world.glb"
            // model="https://frdmqigbelepsdgiecdr.supabase.co/storage/v1/object/public/Worlds/World4-Complete-NoLights-Rocket%20(2).glb?t=2023-11-28T03%3A35%3A00.423Z"
            background="/assets/world4/bg.mp4"
            flats={{
                logo: "/assets/world1/elements/logo.png",
                chapter: "/assets/world1/elements/chapter.svg",
                icons: "/assets/world1/elements/icons.png"
            }}
            contents={ contents }
            flow={ flow }
            zoomMultiplier={ 0.4 }
        />
    )
}

export default World4;
