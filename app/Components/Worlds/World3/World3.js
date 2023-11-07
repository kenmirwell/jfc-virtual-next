import World from "../World/World";

const World3 = () => {
    let contents = {
        "Empty001": {
            year: ["1978", "1979"],
            title: ["Jolibee Food Corporation is born", "Beginning of Jollibee’s Franchising Journey"],
            description: [
                `<p><strong>Jolibee Foods Corporation</strong> (also known as Jolibee Group) is born with a single brand:<br />Jolibee. The first-ever Jolibee store was located in Quezon, Cubao.</p>`,
                `<p>Jollibee begins its franchising Journey, opening its <strong>first official franchised store</strong> with Jollibee EDSA Central. Today, more than half of all JFC Brands&apos; stores globally are franchise-owned: a testament to the enduring partnership between JFC and its franchisees around the globe.</p>`
            ],
            popup: ["/assets/world1/popup/1978.webm", "/assets/world1/popup/1979.webm"],
            post: ["left-[105px]", "left-[200px]"],
    
        },
        "Empty002": {
            year: ["1980"],
            title: ["Introducing The Face Of Jollibee"],
            description: [
                `<p><strong>Jolibee Foods Corporation</strong> (also known as Jolibee Group) is born with a single brand:<br />Jolibee. The first-ever Jolibee store was located in Quezon, Cubao.</p>`
            ],
            popup: ["/assets/world1/popup/1980.webm"],
            post: ["left-[105px]"]
        },
        "Empty003": {
            year: ["1984", "1990", "1993"],
            title: ["Reaching International Markets", "Celebrating 100 Stores", "Going Public"],
            description: [
                `<p>Jollibee Group opens its first international Jollibee store in Singapore. Although not successful at the time, Jollibee eventually re-entered the market in 2013 to huge fanfare. Jollibee now has over 15 stores in Singapore, and over 350 stores outside the Philippines.</p>`, 
                `<p>Jollibee opens its 100th store in Davao, Philippines.</p>`,
                `<p>Jollibee Group lists on the Philippine Stock Exchange, with an initial offering of PHP 9/share.</p>`
            ],
            popup: ["/assets/world1/popup/1984.webm", "/assets/world1/popup/1990.webm", "/assets/world1/popup/1993.webm"],
            post: ["left-[105px]", "left-[200px]", "20px"]
        },
        "Empty004": {
            year: ["1994", "1998"],
            title: ["Greenwich: The Philippines’ #1 Pizza Chain", "Entering North America Markets and More"],
            description: [
                `<p>Jollibee Group makes its first acquisition with Greenwich. It is now the Philippines’ #1 Pizza Chain in terms of store network and market share.</p>`,
                `<p>Jollibee Group opens its first-ever store in North America with Jollibee Daly City in California, USA. Jollibee Group&apos;s North America presence is now composed of six brands (Jollibee, Chowking, Red Ribbon, Smashburger, and The Coffee Bean and Tea Leaf) with over 550 stores.</p>`
            ],
            popup: ["/assets/world1/popup/1994.webm", "/assets/world1/popup/1998.webm"],
            post: ["left-[105px]", "left-[200px]"]
        },
        "Empty005": {
            year: ["2000", "2001"],
            title: ["Chowking: The Philippines’ Chinese Quick Serving Restaurant", "Welcome to the Jollibee Plaza"],
            description: [
                `<p>Chowking joins the Jollibee Group. It is now the Philippines&apos; leading Chinese Quick Service Restaurant, with over 560 stores nationwide.</p>`, 
                `<p>Jollibee Group moves to Jollibee Plaza, initially operating with 8 floors in the building.</p>`
            ],
            popup: ["/assets/world1/popup/2000.webm", "/assets/world1/popup/2001.webm"],
            post: ["left-[105px]", "left-[200px]"]
        }
    };

    return (
        <World 
            title="Going Global"
            year="2013-2020"
            color="#06abcb"
            model="/assets/world3/world.glb"
            background="/assets/world3/bg.mp4"
            flats={{
                logo: "/assets/world1/elements/logo.png",
                chapter: "/assets/world1/elements/chapter.svg",
                icons: "/assets/world3/elements/icons.png"
            }}
            contents={ contents }
        />
    )
}

export default World3;