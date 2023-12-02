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
            "2020B": {
                audio: "https://frdmqigbelepsdgiecdr.supabase.co/storage/v1/object/public/world4%20assets/MP3/JFC_VO_W4_MS1.mp3?t=2023-11-30T22%3A43%3A11.414Z",
                "bg": "https://frdmqigbelepsdgiecdr.supabase.co/storage/v1/object/public/world4%20assets/popups/2020%20MAIN.webm?t=2023-11-30T22%3A44%3A42.596Z",
                "year": "https://frdmqigbelepsdgiecdr.supabase.co/storage/v1/object/public/world4%20assets/popups/2020%20YEAR.webm?t=2023-11-30T22%3A44%3A53.634Z",
                "photos": [
                  "/assets/world4/popup-photos/2020B/2020B.png"
                ],
                "contents": {
                  "en": en["2020B"],
                //   "ch": ch["2020B"],
                //   "vi": vi["2020B"]
                }
            }
        },

        "FoodBowlController": {
            "2021A": {
                audio: "https://frdmqigbelepsdgiecdr.supabase.co/storage/v1/object/public/world4%20assets/MP3/JFC_VO_W4_MS2.mp3?t=2023-11-30T22%3A43%3A25.293Z",
                "bg": "https://frdmqigbelepsdgiecdr.supabase.co/storage/v1/object/public/world4%20assets/popups/2021A%20MAIN.webm?t=2023-11-30T22%3A45%3A12.827Z",
                "year": "https://frdmqigbelepsdgiecdr.supabase.co/storage/v1/object/public/world4%20assets/popups/2021%20YEAR.webm?t=2023-11-30T22%3A45%3A04.157Z",
                "photos": [
                  "/assets/world4/popup-photos/2021A/2021A.png"
                ],
                "contents": {
                  "en": en["2021A"],
                //   "ch": ch["2021A"],
                //   "vi": vi["2021A"]
                }
            }
        },
        
        "MilkteaBldgController": {
            "2021B": {
                audio: "https://frdmqigbelepsdgiecdr.supabase.co/storage/v1/object/public/world4%20assets/MP3/JFC_VO_W4_MS3.mp3",
                "bg": "https://frdmqigbelepsdgiecdr.supabase.co/storage/v1/object/public/world4%20assets/popups/2021B%20MAIN.webm?t=2023-11-30T22%3A45%3A36.068Z",
                "year": "https://frdmqigbelepsdgiecdr.supabase.co/storage/v1/object/public/world4%20assets/popups/2021%20YEAR.webm?t=2023-11-30T22%3A45%3A04.157Z",
                "photos": [
                  "/assets/world4/popup-photos/2021B/2021B.png"
                ],
                "contents": {
                  "en": en["2021B"],
                //   "ch": ch["2021B"],
                //   "vi": vi["2021B"]
                }
            }
        },
        
        "TrophyController": {
            "2022": {
                audio: "https://frdmqigbelepsdgiecdr.supabase.co/storage/v1/object/public/world4%20assets/MP3/JFC_VO_W4_MS4.mp3?t=2023-11-30T22%3A43%3A47.413Z",
                "bg": "https://frdmqigbelepsdgiecdr.supabase.co/storage/v1/object/public/world4%20assets/popups/2022%20MAIN.webm?t=2023-11-30T22%3A47%3A23.281Z",
                "year": "https://frdmqigbelepsdgiecdr.supabase.co/storage/v1/object/public/world4%20assets/popups/2022%20YEAR.webm?t=2023-11-30T22%3A48%3A11.375Z",
                "photos": [
                  "/assets/world4/popup-photos/2022/2022.png"
                ],
                "contents": {
                  "en": en["2022"],
                //   "ch": ch["2022"],
                //   "vi": vi["2022"]
                }
            }
        },

        "JoyForTomoController": {
            "2023A": {
                audio: "https://frdmqigbelepsdgiecdr.supabase.co/storage/v1/object/public/world4%20assets/MP3/JFC_VO_W4_MS5.mp3?t=2023-11-30T22%3A44%3A03.243Z",
                "bg": "https://frdmqigbelepsdgiecdr.supabase.co/storage/v1/object/public/world4%20assets/popups/2023A%20MAIN.webm?t=2023-11-30T22%3A49%3A04.573Z",
                "year": "https://frdmqigbelepsdgiecdr.supabase.co/storage/v1/object/public/world4%20assets/popups/2023%20YEAR.webm?t=2023-11-30T22%3A48%3A30.258Z",
                "photos": [
                  "/assets/world4/popup-photos/2023A/2023A.png"
                ],
                "contents": {
                  "en": en["2023A"],
                //   "ch": ch["2023A"],
                //   "vi": vi["2023A"]
                }
            },
            "2023B": {
                "bg": "https://frdmqigbelepsdgiecdr.supabase.co/storage/v1/object/public/world4%20assets/popups/2023B%20MAIN.webm?t=2023-11-30T22%3A49%3A31.949Z",
                "year": "https://frdmqigbelepsdgiecdr.supabase.co/storage/v1/object/public/world4%20assets/popups/2023%20YEAR.webm?t=2023-11-30T22%3A48%3A30.258Z",
                "photos": [
                  "/assets/world4/popup-photos/2023B/2023B.png"
                ],
                "contents": {
                  "en": en["2023B"],
                  "ch": ch["2023B"],
                //   "vi": vi["2023B"]
                }
            }
        },
    };

    return (
        <World 
            world={4}
            audioEnding={"https://frdmqigbelepsdgiecdr.supabase.co/storage/v1/object/public/world4%20assets/MP3/JFC_VO_W4_END.mp3?t=2023-11-30T22%3A42%3A18.247Z"}
            title="New Frontier"
            year="2021-2023"
            color="#df4637"
            model="https://frdmqigbelepsdgiecdr.supabase.co/storage/v1/object/public/Worlds/World4-Complete-NoJoy.glb?t=2023-12-01T11%3A57%3A52.582Z"
            background="https://frdmqigbelepsdgiecdr.supabase.co/storage/v1/object/public/world4%20assets/GLOWING%20BACKGROUND%204.webm"
            flats={{
                logo: "https://frdmqigbelepsdgiecdr.supabase.co/storage/v1/object/public/world4%20assets/assets/JFC_Chapters_Logo.webp?t=2023-11-30T22%3A50%3A50.067Z",
                chapter: "/assets/world1/elements/chapter.svg",
                icons: "https://frdmqigbelepsdgiecdr.supabase.co/storage/v1/object/public/world4%20assets/assets/JFC_WCHAPTER_4_LOGO_18.webp?t=2023-11-30T22%3A50%3A59.972Z"
            }}
            contents={ contents }
            flow={ flow }
            zoomMultiplier={ 0.4 }
        />
    )
}

export default World4;
