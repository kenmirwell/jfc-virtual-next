import World from "../World/World";

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
            joy: "Joy-Pointing003",
            light: "Light-Rays-Jollibee",
            prompt: "<p>Let's go to the<br /><strong>Jollibee Building</strong></p>",
            end: "EXIT",
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
            light: "Light-Rays-Transparent002",
            prompt: "<p>Let's go to the<br /><strong>Jollibee Mascot</strong></p>",
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
            target: "BananaLeaf",
            joy: "Joy-Pointing004",
            light: "Light-Rays-Transparent004",
            prompt: "<p>Let's check out the<br /><strong>Open Sign</strong></p>",
            end: "EXIT"
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
            target: "Burger001",
            joy: "Joy-Pointing001",
            light: "Light-Rays-Transparent001",
            prompt: "<p>Let's go to the<br /><strong>Greenwich Building</strong></p>",
            end: "EXIT",
            zoomOffset: {
                y: -0.5
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
            target: "OnionLeaves",
            joy: "Joy-Pointing",
            light: "Light-Rays-Transparent",
            prompt: "<p>Let's go to the<br /><strong>Chowking Building</strong></p>",
            end: "EXIT",
            zoomOffset: {
                y: -0.5
            }
        },
        {
            step: 10,
            action: "END",
            prompt: "<p>Now that we're done,<br />it's time to test<br />your knowledge"
        }
    ];

    let contents = {
        "FlagMain": {
            year: [
                "2004"
            ],
            title: [
                "Jolibee Food Corporation is born", 
                "Beginning of Jollibee’s Franchising Journey"
            ],
            description: [
                `<p><strong>Jolibee Foods Corporation</strong> (also known as Jolibee Group) is born with a single brand: Jolibee. The first-ever Jolibee store is located in Quezon, Cubao.</p>`,
                `<p>Jollibee begins its franchising Journey, opening its <strong>first official franchised store</strong> with Jollibee EDSA Central. Today, more than half of all JFC Brands&apos; stores globally are franchise-owned: a testament to the enduring partnership between JFC and its franchisees around the globe.</p>`
            ],
            audio: [
                
            ],
            popup: [
                "/assets/world2/popup/2004-MAIN.webm"
            ],
            popupYears: [
                "/assets/world2/popup-years/2004-YEAR.webm"
            ],
            photos: [
                "/assets/world1/popup-photos/1978/1978_1.png"
            ],
            textPost: [
                "left-[11%]", 
                "left-[24%]"
            ],
            post: [
                "left-[13%]", 
                "left-[25%]"
            ],
            
        },
        "CakeBldg001": {
            year: [
                "2005", "2006"
            ],
            title: [
                "Introducing The Face Of Jollibee"
            ],
            description: [
                `<p>The iconic Jollibee mascot, then named “Jolly Bee” is introduced for the first time at the Virra Mall store opening. The second Jollibee mascot, Mr. YUM, would be introduced next year.</p>`
            ],
            popup: [
                "/assets/world1/popup/2005-MAIN.webm",
                "/assets/world1/popup/2006-MAIN.webm",
            ],
            popupYears: [
                "/assets/world1/popup-years/2005-YEAR.webm",
                "/assets/world1/popup-years/2006-YEAR.webm",
            ],
            photos: [
                "/assets/world1/popup-photos/1980/1980.png",
            ],
            textPost: [
                "left-[15%]"
            ],
            post: [
                "left-[17%]"
            ]
        },
        "BananaLeaf": {
            year: [
                "2008"
            ],
            title: [
                "Reaching International Markets", 
                "Celebrating 100 Stores", 
                "Going Public"
            ],
            description: [
                `<p>Jollibee Group opens its first international Jollibee store in Singapore. Although not successful at the time, Jollibee eventually re-entered the market in 2013 to huge fanfare. Jollibee now has over 15 stores in Singapore, and over 350 stores outside the Philippines.</p>`, 
                `<p>Jollibee opens its 100th store in Davao, Philippines.</p>`,
                `<p>Jollibee Group lists on the Philippine Stock Exchange, with an initial offering of PHP 9/share.</p>`
            ],
            popup: [
                "/assets/world2/popup/2008-MAIN.webm", 
            ],
            popupYears: [
                "/assets/world2/popup-years/2008-YEAR.webm", 
            ],
            photos: [
                "/assets/world2/popup-photos/1984/1984.png", 
            ],
            textPost: [
                "left-[6%]", 
                "left-[16%]", 
                "left-[25%]"
            ],
            post: [
                "left-[8%]", 
                "left-[18%]", 
                "left-[27%]"
            ]
        },
        "Burger001": {
            year: [
                "2010", "2011"
            ],
            title: [
                "Greenwich: The Philippines’ #1 Pizza Chain", 
                "Entering North America Markets and More"
            ],
            description: [
                `<p>Jollibee Group makes its first acquisition with Greenwich. It is now the Philippines’ #1 Pizza Chain in terms of store network and market share.</p>`,
                `<p>Jollibee Group opens its first-ever store in North America with Jollibee Daly City in California, USA. Jollibee Group&apos;s North America presence is now composed of six brands (Jollibee, Chowking, Red Ribbon, Smashburger, and The Coffee Bean and Tea Leaf) with over 550 stores.</p>`
            ],
            popup: [
                "/assets/world2/popup/2010-MAIN.webm", 
                "/assets/world2/popup/2011A-MAIN.webm"
            ],
            popupYears: [
                "/assets/world2/popup-years/2010-YEAR.webm", 
                "/assets/world2/popup-years/2011A-YEAR.webm"
            ],
            photos: [
                "/assets/world1/popup-photos/1994/1994.png", 
                "/assets/world1/popup-photos/1998/1998.png"
            ],
            textPost: [
                "left-[11%]", 
                "left-[24%]"
            ],
            post: [
                "left-[13%]", 
                "left-[25%]"
            ],
        },
        "OnionLeaves": {
            year: [
                "2011", "2012"
            ],
            title: [
                "Chowking: The Philippines’ Chinese Quick Serving Restaurant", 
                "Welcome to the Jollibee Plaza"
            ],
            description: [
                `<p>Chowking joins the Jollibee Group. It is now the Philippines&apos; leading Chinese Quick Service Restaurant, with over 560 stores nationwide.</p>`, 
                `<p>Jollibee Group moves to Jollibee Plaza, initially operating with 8 floors in the building.</p>`
            ],
            popup: [
                "/assets/world2/popup/2011B-MAIN.webm", 
                "/assets/world2/popup/2012-MAIN.webm"
            ],
            popupYears: [
                "/assets/world2/popup-years/2011B-YEAR.webm", 
                "/assets/world2/popup-years/2012-YEAR.webm"
            ],
            photos: [
                "/assets/world1/popup-photos/2000/2000.png", 
                "/assets/world1/popup-photos/2001/2001.png"
            ],
            textPost: [
                "left-[11%]", 
                "left-[24%]"
            ],
            post: [
                "left-[13%]", 
                "left-[25%]"
            ],
        }
    };

    return (
        <World 
            world={2}
            title="Dreaming Bigger"
            year="2004-2012"
            color="#c79c1e"
            model="https://frdmqigbelepsdgiecdr.supabase.co/storage/v1/object/public/Worlds/World2-Complete-NoLights-Car%20(3).glb?t=2023-11-28T03%3A33%3A12.361Z"
            background="/assets/world2/bg.mp4"
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

export default World2;