import World from "../World/World";

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
        "ShieldController": [
            {
                year: [
                    "1978",
                    "1979"
                ],
                title: {
                    en: [
                        "Jolibee Food Corporation is born", 
                        "Beginning of Jollibee’s Franchising Journey"
                    ],
                    ch: [
                        "快乐蜂食品公司于",
                        "第一次特许经营之旅"
                    ],
                    vi: [
                        "Tập đoàn Jollibee Foods Corporation ra",
                        "Hành trình nhượng quyền đầu tiên"
                    ]
                },
                description: {
                    en: [
                        `<p><strong>Jolibee Foods Corporation</strong> (also known as Jolibee Group) is born with a single brand: Jolibee. The first-ever Jolibee store is located in Quezon, Cubao.</p>`,
                        `<p>Jollibee begins its franchising Journey, opening its <strong>first official franchised store</strong> with Jollibee EDSA Central. Today, more than half of all JFC Brands&apos; stores globally are franchise-owned: a testament to the enduring partnership between JFC and its franchisees around the globe.</p>`        
                    ],
                    ch: [
                        `<p><strong>快乐蜂食品公司</strong> (也称为快乐蜂集团)创立之初为一个单一品牌:快乐蜂。第一家快乐蜂商店位于奎松市库宝区。</p>`,
                        `<p>快乐蜂开始了特许经营之旅,在快乐蜂EDSA Central开设了第一家官方特许经营店。如今,JFC品牌全球一半以上的商店都是特许经营店:这是JFC与其全球特许经营商之间持久合作关系的见证</p>`        
                    ],
                    vi: [
                        `<p>Tập đoàn <strong>Jollibee Foods Corporation</strong> ra đời từ năm 1978 (còn gọi là Tập đoàn Jollibee) ra đời với một thương hiệu duy nhất: Jollibee. Cửa hàng Jollibee đầu tiên được đặt tại Quezon, Cubao.</p>`,
                        `<p>Jollibee bắt đầu Hành trình nhượng quyền, mở cửa hàng nhượng quyền chính thức đầu tiên với Jollibee EDSA Central. Ngày nay, hơn một nửa số cửa hàng của JFC Brands trên toàn cầu đều thuộc sở hữu nhượng quyền: minh chứng cho mối quan hệ hợp tác lâu dài giữa JFC và các đại lý nhượng quyền trên toàn cầu.</p>` 
                    ]
                }
            }
        ],

        "ShieldController": {
            year: [
                "1978",
                "1979"
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
                "/assets/world1/popup/1978-MAIN.webm", 
                "/assets/world1/popup/1979-MAIN.webm",
            ],
            popupYears: [
                "/assets/world1/popup-years/1978-YEAR.webm", 
                "/assets/world1/popup-years/1979-YEAR.webm"
            ],
            photos: [
                "/assets/world1/popup-photos/1978/1978_1.png", 
                "/assets/world1/popup-photos/1979/1979.png"
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

        "FoodBowlController": [
            {
                year: [
                    "1980"
                ],
                title: {
                    en: [
                        "Introducing The Face Of Jollibee"
                    ],
                    ch: [
                        "快乐蜂的风貌",
                    ],
                    vi: [
                        "Mascot của Jollibee",
                    ],
                },
                description: {
                  en: [
                        `<p>The iconic Jollibee mascot, then named “Jolly Bee” is introduced for the first time at the Virra Mall store opening. The second Jollibee mascot, Mr. YUM, would be introduced next year.</p>`
                  ],
                  ch: [
                        `<p>快乐蜂开始了特许经营之旅,在快乐蜂EDSA Central开设了第一家官方特许经营店。如今,JFC品牌全球一半以上的商店都是特许经营店:这是JFC与其全球特许经营商之间持久合作关系的见证</p>`,
                  ],
                  vi: [
                        `<p>Jollibee Mascot mang tính biểu tượng, sau đó được đặt tên là “Jolly Bee” được giới thiệu lần đầu tiên tại buổi khai trương cửa hàng Vera Mall. Linh vật thứ hai của Jollibee, Mr. YUM, sẽ được giới thiệu vào năm tới.</p>`,
                  ]
                },
            }
        ],

        "FoodBowlController": {
            year: [
                "1980"
            ],
            title: [
                "Introducing The Face Of Jollibee"
            ],
            description: [
                `<p>The iconic Jollibee mascot, then named “Jolly Bee” is introduced for the first time at the Virra Mall store opening. The second Jollibee mascot, Mr. YUM, would be introduced next year.</p>`
            ],
            popup: [
                "/assets/world1/popup/1980-MAIN.webm"
            ],
            popupYears: [
                "/assets/world1/popup-years/1980-YEAR.webm"
            ],
            photos: [
                "/assets/world1/popup-photos/1980/1980.png"
            ],
            textPost: [
                "left-[15%]"
            ],
            post: [
                "left-[17%]"
            ]
        },
        
        "TrophyController": [
            {
                year: [
                    "1984", 
                    "1990", 
                    "1993"
                ],
                title: {
                    en: [
                        "Reaching International Markets", 
                        "Celebrating 100 Stores", 
                        "Going Public"
                    ],
                    ch: [
                        "进军国际市场",
                        "庆祝100家门店开设",
                        "快乐蜂成功IPO(首次公开募股)",
                    ],
                    vi: [
                        "Vươn tới thị trường quốc tế",
                        "Lễ kỷ niệm chào mừng 100 cửa hàng",
                        "Jollibee IPO thành công (Chào bán lần đầu trên thị trường)",
                    ],
                },
                description: {
                  en: [
                        `<p>Jollibee Group opens its first international Jollibee store in Singapore. Although not successful at the time, Jollibee eventually re-entered the market in 2013 to huge fanfare. Jollibee now has over 15 stores in Singapore, and over 350 stores outside the Philippines.</p>`, 
                        `<p>Jollibee opens its 100th store in Davao, Philippines.</p>`,
                        `<p>Jollibee Group lists on the Philippine Stock Exchange, with an initial offering of PHP 9/share.</p>`
                  ],
                  ch: [
                        `<p>快乐蜂集团在新加坡开设第一家国际快乐蜂商店。尽管在当时没有成功,快乐蜂最终于2013年重新大举进入该市场。快乐蜂目前在新加坡拥有超过15家店,在菲律宾以外拥有超过350家店。</p>`,
                        `<p>Jollibee在菲律宾达沃开设第100家店</p>`,
                        `<p>快乐蜂集团在菲律宾证券交易所上市,首次发行价为每股9菲律宾比索。</p>`,
                  ],
                  vi: [
                        `<p>Tập đoàn Jollibee mở cửa hàng Jollibee quốc tế đầu tiên tại Singapore. Mặc dù không thành công vào thời điểm đó nhưng cuối cùng Jollibee đã tái gia nhập thị trường vào năm 2013 với sự quảng bá rầm rộ. Jollibee hiện có hơn 15 cửa hàng ở Singapore và hơn 350 cửa hàng bên ngoài Philippines.</p>`,
                        `<p>Jollibee mở cửa hàng thứ 100 tại Davao, Philippines</p>`,
                        `<p>Tập đoàn Jollibee niêm yết trên Sở giao dịch chứng khoán Philippines, với giá chào bán ban đầu là 9 PHP/cổ phiếu.</p>`,
                  ]
                },
            }
        ],

        "TrophyController": {
            year: [
                "1984", 
                "1990", 
                "1993"
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
                "/assets/world1/popup/1984-MAIN.webm", 
                "/assets/world1/popup/1990-MAIN.webm", 
                "/assets/world1/popup/1993-MAIN.webm"
            ],
            popupYears: [
                "/assets/world1/popup-years/1984-YEAR.webm", 
                "/assets/world1/popup-years/1990-YEAR.webm", 
                "/assets/world1/popup-years/1993-YEAR.webm"
            ],
            photos: [
                "/assets/world1/popup-photos/1984/1984.png", 
                "/assets/world1/popup-photos/1990/1990.png", 
                "/assets/world1/popup-photos/1993/1993.png"
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

        "JoyForTomoController": [
            {
                year: [
                    "1994",
                    "1998"
                ],
                title: {
                    en: [
                        "Greenwich: The Philippines’ #1 Pizza Chain", 
                        "Entering North America Markets and More"
                    ],
                    ch: [
                        "格林威治:菲律宾排名第一的披萨连锁店",
                        "进入北美等地",
                    ],
                    vi: [
                        "Greenwich: Chuỗi Pizza số 1 Philippines",
                        "Tham gia thị trường Bắc Mỹ và các thị trường khác",
                    ],
                },
                description: {
                  en: [
                        `<p>Jollibee Group makes its first acquisition with Greenwich. It is now the Philippines’ #1 Pizza Chain in terms of store network and market share.</p>`,
                        `<p>Jollibee Group opens its first-ever store in North America with Jollibee Daly City in California, USA. Jollibee Group&apos;s North America presence is now composed of six brands (Jollibee, Chowking, Red Ribbon, Smashburger, and The Coffee Bean and Tea Leaf) with over 550 stores.</p>`
                    ],
                  ch: [
                        `<p>快乐蜂集团进行首次收购,对象是格林威治。就商店网络和市场份额而言,它现在是菲律宾排名第一的披萨连锁店。</p>`,
                        `<p>快乐蜂集团在美国加利福尼亚州开设了其在北美的第一家商店,戴利城快乐蜂店。快乐蜂集团在北美的业务目前由六个品牌组成(快乐蜂、超群、红丝带、Smashburger、咖啡豆和茶叶和迷客夏),拥有超过550 家门店。</p>`,
                  ],
                  vi: [
                        `<p>Tập đoàn Jollibee thực hiện thương vụ mua lại Greenwich đầu tiên. Hiện nay là Chuỗi Pizza số 1 Philippines về mạng lưới cửa hàng và thị phần.</p>`,
                        `<p>Tập đoàn Jollibee mở cửa hàng đầu tiên tại Bắc Mỹ với thành phố Jollibee Daly ở California, Hoa Kỳ. Sự hiện diện ở Bắc Mỹ của Tập đoàn Jollibee hiện bao gồm sáu thương hiệu (Jollibee, Chowking, Red Ribbon, Smashburger, The Coffee Bean and Tea Leaf và Milksha), với hơn 550 cửa hàng.</p>`,
                  ]
                },
            }
        ],

        "JoyForTomoController": {
            year: [
                "1994", "1998"
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
                "/assets/world1/popup/1994-MAIN.webm", 
                "/assets/world1/popup/1998-MAIN.webm"
            ],
            popupYears: [
                "/assets/world1/popup-years/1994-YEAR.webm", 
                "/assets/world1/popup-years/1998-YEAR.webm"
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
        
        "MilkteaBldgController": [
            {
                year: [
                    "2000", 
                    "2001"
                ],
                title: {
                    en: [
                        "Chowking: The Philippines’ Chinese Quick Serving Restaurant", 
                        "Welcome to the Jollibee Plaza"
                    ],
                    ch: [
                        "超群:全国领先的中式快餐店",
                        "迁至广场",
                    ],
                    vi: [
                        "Chowking: Nhà hàng phục vụ nhanh Trung Quốc thuộc top đầu cả nước",
                        "Bước tiến tới trung tâm thương mại lớn",
                    ],
                },
                description: {
                  en: [
                        `<p>Chowking joins the Jollibee Group. It is now the Philippines&apos; leading Chinese Quick Service Restaurant, with over 560 stores nationwide.</p>`, 
                        `<p>Jollibee Group moves to Jollibee Plaza, initially operating with 8 floors in the building.</p>`
                    ],
                  ch: [
                        `<p>超群加入快乐蜂集团。它现在是菲律宾领先的中式快餐店,在全国拥有超过560家门店。</p>`,
                        `<p>快乐蜂集团迁至快乐蜂广场,最初的运营覆盖大楼的8个楼层。</p>`,
                  ],
                  vi: [
                        `<p>Chowking gia nhập Tập đoàn Jollibee. Chowking hiện là Nhà hàng Dịch vụ nhanh Trung Quốc hàng đầu Philippines, với hơn 560 cửa hàng trên toàn quốc.</p>`,
                        `<p>Tập đoàn Jollibee chuyển đến Jollibee Plaza, ban đầu triển khai hoạt động tại 8 tầng trong tòa nhà trung tâm thương mại.</p>`,
                  ]
                },
            }
        ],

        "MilkteaBldgController": {
            year: [
                "2000", 
                "2001"
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
                "/assets/world1/popup/2000-MAIN.webm", 
                "/assets/world1/popup/2001-MAIN.webm"
            ],
            popupYears: [
                "/assets/world1/popup-years/2000-YEAR.webm", 
                "/assets/world1/popup-years/2001-YEAR.webm"
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
