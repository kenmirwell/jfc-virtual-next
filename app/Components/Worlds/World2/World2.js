import World from "../World/World";
import { en } from "./en";
import { vi } from "./vi";
import { ch } from "./ch";

const World2 = () => {
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
            target: "FlagMain",
            joy: "Joy-Pointing001",
            light: "Light-Rays-Transparent004",
            prompt: "<p>Let's go to the<br /><strong>Flag</strong></p>",
            end: "EXIT",
            width: 370,
            zoomOffset: {
                y: 0.5
            }
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
            target: "CakeBldg001",
            joy: "Joy-Pointing002",
            light: "Light-Rays-Transparent003",
            prompt: "<p>Let's go to the<br /><strong>Red Ribbon Building</strong></p>",
            end: "EXIT",
            zoomOffset: {
                y: 1.7
            }
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
            target: "OnionLeaves",
            joy: "Joy-Pointing",
            light: "Light-Rays-Transparent002",
            prompt: "<p>Let's check out the<br /><strong>Hong Zhuang Yuan Building</strong></p>",
            end: "EXIT",
            zoomOffset: {
                y: -0.9
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
            target: "BananaLeaf",
            joy: "Joy-Pointing003",
            light: "Light-Rays-Transparent001",
            prompt: "<p>Let's continue<br />our Journey</p>",
            end: "EXIT",
            zoomOffset: {
                y: -0.5
            },
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
            target: "Burger001",
            joy: "Joy-Pointing004",
            light: "Light-Rays-Transparent",
            prompt: "<p>Let's continue<br />exploring</p>",
            end: "EXIT",
            zoomOffset: {
                y: -0.5
            },
            width: 370
        },
        {
            step: 10,
            action: "END",
            prompt: "<p>Now that we're done,<br />it's time to test<br />your knowledge"
        }
    ];

    let contents = {
        "FlagMain": {
            "2004": {
                "audio": "https://frdmqigbelepsdgiecdr.supabase.co/storage/v1/object/public/world2%20assets/MP3/JFC_VO_W2_MS1.mp3?t=2023-11-30T22%3A10%3A11.836Z",
                "bg": "https://frdmqigbelepsdgiecdr.supabase.co/storage/v1/object/public/world2%20assets/popups/2004%20MAIN.webm",
                "year": "https://frdmqigbelepsdgiecdr.supabase.co/storage/v1/object/public/world2%20assets/popups/2004%20YEAR.webm",
                "photos": [
                  "/assets/world1/popup-photos/1978/1978_1.png"
                ],
                "contents": {
                  "en": en["2004"],
                  "ch": ch["2004"],
                  "vi": vi["2004"]
                }
            }
        },

        "CakeBldg001": {
            "2005": {
                "audio": "https://frdmqigbelepsdgiecdr.supabase.co/storage/v1/object/public/world2%20assets/MP3/JFC_VO_W2_MS2.mp3?t=2023-11-30T22%3A10%3A25.591Z",
                "bg": "https://frdmqigbelepsdgiecdr.supabase.co/storage/v1/object/public/world2%20assets/popups/2005%20MAIN.webm",
                "year": "https://frdmqigbelepsdgiecdr.supabase.co/storage/v1/object/public/world2%20assets/popups/2005%20YEAR.webm?t=2023-11-30T22%3A14%3A48.609Z",
                "photos": [
                    "/assets/world1/popup-photos/1978/1978_1.png"
                ],
                "contents": {
                    "en": en["2005"],
                    "ch": ch["2005"],
                    "vi": vi["2005"]
                }
            },
            "2006": {
                "audio": "https://frdmqigbelepsdgiecdr.supabase.co/storage/v1/object/public/world2%20assets/MP3/JFC_VO_W2_MS2B.mp3?t=2023-11-30T22%3A10%3A35.059Z",
                "bg": "https://frdmqigbelepsdgiecdr.supabase.co/storage/v1/object/public/world2%20assets/popups/2006%20MAIN.webm",
                "year": "https://frdmqigbelepsdgiecdr.supabase.co/storage/v1/object/public/world2%20assets/popups/2006%20YEAR.webm?t=2023-11-30T22%3A15%3A09.130Z",
                "photos": [
                    "/assets/world1/popup-photos/1978/1978_1.png"
                ],
                "contents": {
                    "en": en["2006"],
                    "ch": ch["2006"],
                    "vi": vi["2006"]
                }
            },
        },

        "BananaLeaf": {
            "2010": {
                "audio": "https://frdmqigbelepsdgiecdr.supabase.co/storage/v1/object/public/world2%20assets/MP3/JFC_VO_W2_MS3.mp3?t=2023-11-30T22%3A10%3A45.572Z",
                "bg": "https://frdmqigbelepsdgiecdr.supabase.co/storage/v1/object/public/world2%20assets/popups/2010%20MAIN.webm?t=2023-11-30T22%3A16%3A58.881Z",
                "year": "https://frdmqigbelepsdgiecdr.supabase.co/storage/v1/object/public/world2%20assets/popups/2010%20YEAR.webm",
                "photos": [
                    "/assets/world1/popup-photos/1978/1978_1.png"
                ],
                "contents": {
                    "en": en["2010"],
                    "ch": ch["2010"],
                    "vi": vi["2010"]
                }
            },
            "2011": {
                "audio": "https://frdmqigbelepsdgiecdr.supabase.co/storage/v1/object/public/world2%20assets/MP3/JFC_VO_W2_MS4.mp3?t=2023-11-30T22%3A11%3A07.675Z",
                "bg": "/assets/world2/popup/2011A-MAIN.webm",
                "year": "/assets/world2/popup-years/2011-YEAR.webm",
                "photos": [
                    "/assets/world1/popup-photos/1978/1978_1.png"
                ],
                "contents": {
                    "en": en["2011A"],
                    "ch": ch["2011A"],
                    "vi": vi["2011A"]
                }
            }
        },

        "Burger001": {
            "2011": {
                "audio": "https://frdmqigbelepsdgiecdr.supabase.co/storage/v1/object/public/world2%20assets/MP3/JFC_VO_W2_MS4B.mp3",
                "bg": "https://frdmqigbelepsdgiecdr.supabase.co/storage/v1/object/public/world2%20assets/popups/2011A%20MAIN.webm?t=2023-11-30T22%3A17%3A57.077Z",
                "year": "https://frdmqigbelepsdgiecdr.supabase.co/storage/v1/object/public/world2%20assets/popups/2011%20YEAR%20(1).webm?t=2023-11-30T22%3A17%3A27.892Z",
                "photos": [
                    "/assets/world1/popup-photos/1978/1978_1.png"
                ],
                "contents": {
                    "en": en["2011B"],
                    "ch": ch["2011B"],
                    "vi": vi["2011B"]
                }
            },
            "2012": {
                "bg": "https://frdmqigbelepsdgiecdr.supabase.co/storage/v1/object/public/world2%20assets/popups/2012%20MAIN.webm?t=2023-11-30T22%3A18%3A19.344Z",
                "year": "https://frdmqigbelepsdgiecdr.supabase.co/storage/v1/object/public/world2%20assets/popups/2012%20YEAR.webm?t=2023-11-30T22%3A18%3A38.624Z",
                "photos": [
                    "/assets/world1/popup-photos/1978/1978_1.png"
                ],
                "contents": {
                    "en": en["2012"],
                    "ch": ch["2012"],
                    "vi": vi["2012"]
                }
            }
        },
        
        "OnionLeaves": {
            "2008": {
                "audio": "https://frdmqigbelepsdgiecdr.supabase.co/storage/v1/object/public/world2%20assets/MP3/JFC_VO_W2_MS5.mp3?t=2023-11-30T22%3A11%3A30.058Z",
                "bg": "https://frdmqigbelepsdgiecdr.supabase.co/storage/v1/object/public/world2%20assets/popups/2008%20MAIN.webm?t=2023-11-30T22%3A15%3A26.269Z",
                "year": "https://frdmqigbelepsdgiecdr.supabase.co/storage/v1/object/public/world2%20assets/popups/2008%20YEAR.webm?t=2023-11-30T22%3A16%3A46.212Z",
                "photos": [
                    "/assets/world1/popup-photos/1978/1978_1.png"
                ],
                "contents": {
                    "en": en["2008"],
                    "ch": ch["2008"],
                    "vi": vi["2008"]
                }
            }
        },
    };

    return (
        <World 
            world={2}
            audioEnding={'https://frdmqigbelepsdgiecdr.supabase.co/storage/v1/object/public/world2%20assets/MP3/JFC_VO_W2_GAME2.mp3?t=2023-11-30T22%3A19%3A39.666Z'}
            title="Dreaming Bigger"
            year="2004-2012"
            color="#c79c1e"
            model="https://frdmqigbelepsdgiecdr.supabase.co/storage/v1/object/public/Worlds/World2-Complete-NoLights-Car%20(3).glb?t=2023-11-30T22%3A19%3A54.190Z"
            background="https://frdmqigbelepsdgiecdr.supabase.co/storage/v1/object/public/world2%20assets/GLOWING%20BACKGROUND%202.webm"
            flats={{
                logo: "https://frdmqigbelepsdgiecdr.supabase.co/storage/v1/object/public/world2%20assets/assets/JFC_Chapters_Logo.webp",
                chapter: "/assets/world2/elements/chapter.svg",
                icons: "https://frdmqigbelepsdgiecdr.supabase.co/storage/v1/object/public/world2%20assets/assets/JFC_WCHAPTER_2_LOGO_9.webp"
            }}
            contents={ contents }
            flow={ flow }
            zoomMultiplier={ 0.4 }
        />
    )
}

export default World2;