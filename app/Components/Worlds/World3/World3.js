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
            audio: "https://frdmqigbelepsdgiecdr.supabase.co/storage/v1/object/public/world3%20assets/MP3/JFC_VO_W3_MS1.mp3?t=2023-11-30T22%3A26%3A01.034Z",
            "2013": {
                "bg": "https://frdmqigbelepsdgiecdr.supabase.co/storage/v1/object/public/world3%20assets/popups/2013%20MAIN.webm?t=2023-11-30T22%3A37%3A32.851Z",
                "year": "https://frdmqigbelepsdgiecdr.supabase.co/storage/v1/object/public/world3%20assets/popups/2013%20YEAR.webm?t=2023-11-30T22%3A37%3A41.545Z",
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
            audio: "https://frdmqigbelepsdgiecdr.supabase.co/storage/v1/object/public/world3%20assets/MP3/JFC_VO_W3_MS2.mp3?t=2023-11-30T22%3A26%3A30.142Z",
            "2014": {
                    "bg": "https://frdmqigbelepsdgiecdr.supabase.co/storage/v1/object/public/world3%20assets/popups/2014%20MAIN.webm?t=2023-11-30T22%3A37%3A51.629Z",
                    "year": "https://frdmqigbelepsdgiecdr.supabase.co/storage/v1/object/public/world3%20assets/popups/2014%20YEAR.webm?t=2023-11-30T22%3A38%3A01.699Z",
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
            audio: "https://frdmqigbelepsdgiecdr.supabase.co/storage/v1/object/public/world3%20assets/MP3/JFC_VO_W3_MS3.mp3?t=2023-11-30T22%3A26%3A51.824Z",
            "2015": {
                "bg": "https://frdmqigbelepsdgiecdr.supabase.co/storage/v1/object/public/world3%20assets/popups/2015%20MAIN.webm?t=2023-11-30T22%3A38%3A10.179Z",
                "year": "https://frdmqigbelepsdgiecdr.supabase.co/storage/v1/object/public/world3%20assets/popups/2015%20YEAR.webm?t=2023-11-30T22%3A38%3A18.789Z",
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
                "bg": "https://frdmqigbelepsdgiecdr.supabase.co/storage/v1/object/public/world3%20assets/popups/2017%20MAIN.webm?t=2023-11-30T22%3A38%3A29.231Z",
                "year": "https://frdmqigbelepsdgiecdr.supabase.co/storage/v1/object/public/world3%20assets/popups/2017%20YEAR.webm?t=2023-11-30T22%3A38%3A37.729Z",
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
            audio: "https://frdmqigbelepsdgiecdr.supabase.co/storage/v1/object/public/world3%20assets/MP3/JFC_VO_W3_MS4.mp3?t=2023-11-30T22%3A27%3A38.258Z",
            "2018": {
                "bg": "https://frdmqigbelepsdgiecdr.supabase.co/storage/v1/object/public/world3%20assets/popups/2018%20MAIN.webm?t=2023-11-30T22%3A38%3A59.735Z",
                "year": "https://frdmqigbelepsdgiecdr.supabase.co/storage/v1/object/public/world3%20assets/popups/2018%20YEAR.webm?t=2023-11-30T22%3A39%3A14.744Z",
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
            audio: "https://frdmqigbelepsdgiecdr.supabase.co/storage/v1/object/public/world3%20assets/MP3/JFC_VO_W3_MS5.mp3?t=2023-11-30T22%3A37%3A02.260Z",
            "2019": {
                "bg": "https://frdmqigbelepsdgiecdr.supabase.co/storage/v1/object/public/world3%20assets/popups/2019%20MAIN.webm?t=2023-11-30T22%3A39%3A26.233Z",
                "year": "https://frdmqigbelepsdgiecdr.supabase.co/storage/v1/object/public/world3%20assets/popups/2019%20YEAR.webm?t=2023-11-30T22%3A39%3A33.435Z",
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
                "bg": "https://frdmqigbelepsdgiecdr.supabase.co/storage/v1/object/public/world3%20assets/popups/2020%20MAIN.webm?t=2023-11-30T22%3A39%3A49.424Z",
                "year": "https://frdmqigbelepsdgiecdr.supabase.co/storage/v1/object/public/world3%20assets/popups/2020%20YEAR.webm?t=2023-11-30T22%3A39%3A59.937Z",
                "photos": [
                    "/assets/world3/popup-photos/2020A/2020A.png"
                ],
                "contents": {
                    "en": en["2020A"],
                    "ch": ch["2020A"],
                    "vi": vi["2020A"]
                  }
            }
        }
                
    };

    return (
        <World 
            world={3}
            audioEnding={'https://frdmqigbelepsdgiecdr.supabase.co/storage/v1/object/public/world4%20assets/MP3/JFC_VO_W4_END.mp3?t=2023-11-30T22%3A42%3A18.247Z'}
            title="Going Global"
            year="2013-2020"
            color="#06abcb"
            model="https://frdmqigbelepsdgiecdr.supabase.co/storage/v1/object/public/Worlds/World3-Complete-NoLights-Plane%20(3).glb?t=2023-11-30T22%3A41%3A03.625Z"
            // model="https://frdmqigbelepsdgiecdr.supabase.co/storage/v1/object/public/Worlds/World3-Complete-NoLights-Plane%20(3).glb?t=2023-11-28T03%3A34%3A11.957Z"
            background="https://frdmqigbelepsdgiecdr.supabase.co/storage/v1/object/public/world3%20assets/GLOWING%20BACKGROUND%203.webm"
            flats={{
                logo: "https://frdmqigbelepsdgiecdr.supabase.co/storage/v1/object/public/world3%20assets/assets/JFC_Chapters_Logo.webp",
                chapter: "/assets/world2/elements/chapter.svg",
                icons: "https://frdmqigbelepsdgiecdr.supabase.co/storage/v1/object/public/world3%20assets/assets/JFC_WCHAPTER_3_LOGO_14.webp"
            }}
            contents={ contents }
            flow={ flow }
            zoomMultiplier={ 0.4 }
        />
    )
}

export default World3;