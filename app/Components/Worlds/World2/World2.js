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
        "FlagMain": [
            {
                year: [
                    "2004",
                ],
                title: {
                    en: [
                        "The Dream: Asia’s #1 Restaurant Company",
                    ],
                    ch: [
                        "梦想:亚洲排名第一的餐饮公司",
                    ],
                    vi: [
                        "The Dream: Công ty kinh doanh mảng nhà hàng số 1 Châu Á",
                    ]
                },
                description: {
                    en: [
                        `
                            <p>After achieving a strong foothold in the Philippines, the Jollibee Group sets its sights on becoming <strong>Asia’s #1 restaurant company.</strong></p></br >
                            <p>In line with its vision, Jollibee Group acquires its first international brand: Yonghe King. Today, the chain has over 420 stores in China, and is loved for its freshly ground soy milk and minced pork rice.</p></br >
                            <p>Jollibee Group opens <strong>Zenith Foods Corporation</strong> in Canlubang, Laguna. At the time, it was one of the largest commissaries in the Philippines and Asia.</p></br >
                            <p>Recognizing the responsibility to give back and help the communities it operates in, Jollibee Group establishes <strong>Jollibee Foundation</strong>, today known as the <strong>Jollibee Group Foundation (JGF).</strong></p>
                        `,
                    ],
                    ch: [
                        `
                            <p>在菲律宾站稳脚跟后,快乐蜂集团立志成为亚洲排名第一的餐饮公司。</p></br >
                            <p>根据愿景,快乐蜂集团收购了其第一个国际品牌:永和大王。如今,该连锁店在中国拥有超过420家门店,因现磨豆浆和卤肉饭而广受喜爱。</p></br >
                            <p>快乐蜂集团在拉古纳坎卢邦开设了Zenith食品公司。在当时是菲律宾和亚洲最大的小卖部之一。</p></br >
                            <p>快乐蜂集团认识到回馈和帮助所在社区的责任,成立了快乐蜂基金会,即今天的快乐蜂集团基金会(JGF)。</p>
                        `,   
                    ],
                    vi: [
                        `
                            <p>Sau khi có được chỗ đứng vững chắc tại Philippines, Tập đoàn Jollibee đặt mục tiêu trở thành Công ty kinh doanh mảng nhà hàng số 1 Châu Á.</p></br >
                            <p>Cùng với tầm nhìn của mình, Tập đoàn Jollibee mua lại thương hiệu quốc tế đầu tiên: Yonghe King. Ngày nay, chuỗi nhà hàng này có hơn 420 cửa hàng ở Trung Quốc và được yêu thích nhờ món đồ uống sữa đậu nành xay tươi ngon và cơm thịt lợn bằm.</p></br >
                            <p>Tập đoàn Jollibee mở Tập đoàn Thực phẩm Zenith ở Canlubang, Laguna. Vào thời điểm đó, đây là một trong những công ty lương thực lớn nhất ở Philippines và Châu Á.</p></br >
                            <p>Nhận thức được trách nhiệm cộng đồng, Tập đoàn Jollibee đã thành lập Quỹ Jollibee, ngày nay được gọi là Quỹ Tập đoàn Jollibee (JGF).</p>
                        `,
                    ]
                }
            }
        ],

        "FlagMain": { // Old
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

        "CakeBldg001": [
            {
                year: [
                    "2005",
                    "2006"
                ],
                title: {
                    en: [
                        "Red Ribbon: Delectable and Iconic Cakes",
                        "Serving The World"
                    ],
                    ch: [
                        "红丝带:标志性的美味蛋糕",
                        "服务世界"
                    ],
                    vi: [
                        "Red Ribbon: Những chiếc bánh thơm ngon và mang tính biểu tượng",
                        "Phục vụ thế giới"
                    ]
                },
                description: {
                    en: [
                        `<p><strong>Red Ribbon Bakeshop</strong> joins the Jollibee Group. Known for its delectable Black Forest and Dedication Cakes, Red Ribbon now has a store network of over 520 stores in the Philippines and US, and is the Philippines' market leader in cakes.</p>`,
                        `<p><strong>Jollibee Worldwide Services</strong> (JWS) is established. JWS is the shared services unit of the Jollibee Group, with over 400 team members servicing its business units globally.</p>`
                    ],
                    ch: [
                        `<p>红丝带面包店加入快乐蜂集团。红丝带以美味的黑森林蛋糕和奉献蛋糕而闻名,目前在菲律宾和美国拥有超过520家门店,是菲律宾蛋糕市场的领导者。</p>`,
                        `<p>快乐蜂全球服务(JWS)成立。JWS是快乐蜂集团的共享服务部门,拥有超过400名团队成员为其全球业务部门提供服务。</p>`
                    ],
                    vi: [
                        `<p><strong>Red Ribbon Bakeshop</strong> gia nhập Tập đoàn Jollibee. Nổi tiếng với các loại bánh kem Black Forest và Dedication thơm ngon, Red Ribbon hiện có mạng lưới cửa hàng gồm hơn 520 cửa hàng ở Philippines và Hoa Kỳ, đồng thời là công ty dẫn đầu thị trường bánh ngọt ở Philippines.</p>`,
                        `<p><strong>Jollibee Worldwide Services</strong> (JWS) được thành lập. JWS là đơn vị dịch vụ chung của Tập đoàn Jollibee, với hơn 400 thành viên trong nhóm phục vụ các đơn vị kinh doanh của tập đoàn trên toàn cầu.</p>`
                    ]
                }
            }
        ],

        "CakeBldg001": { // Old
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

        "BananaLeaf": [
            {
                year: [
                    "2008"
                ],
                title: {
                    en: [
                        "Growing Internationally and Supporting Locally"
                    ],
                    ch: [
                        "支持国际商业和农业"
                    ],
                    vi: [
                        "Hỗ trợ kinh doanh và nông nghiệp quốc tế"
                    ],
                },
                description: {
                  en: [
                        `
                            <p><strong>Hong Zhuang Yuan</strong> joins the Jollibee Group. The brand is known for its special selection of Chinese congee, and has over 50 stores in China.</p></br >
                            <p>Jollibee Group Foundation establishes the <strong>Farmer Entrepreneurship Program:</strong> which has helped transform hundreds of smallholder farmers into agro-entrepreneurs. To date, FEP Farmers have delivered over PHP 411M worth of produce, equivalent to 9.8m kilos of vegetables.</p>
                        `
                  ],
                  ch: [
                        `
                            <p>宏状元加入快乐蜂集团。该品牌以精选的中国粥品而闻名,在中国拥有超过50家门店。</p></br >
                            <p>快乐蜂集团基金会设立了农民创业计划:帮助数百名小农转变为农业企业家。迄今为止,农民创业计划已交付了价值超过4.11亿比索的农产品,相当于980万公斤蔬菜。</p>
                        `
                  ],
                  vi: [
                    `
                        <p>Hong Zhuang Yuan gia nhập Tập đoàn Jollibee. Thương hiệu này được biết đến với sự lựa chọn đặc biệt của món cháo Trung Quốc và có hơn 50 cửa hàng ở Trung Quốc.</p></br >
                        <p>Quỹ Tập đoàn Jollibee thành lập Chương trình Doanh nhân Nông dân: chương trình này đã giúp hàng trăm nông dân sản xuất nhỏ trở thành doanh nhân nông nghiệp. Cho đến nay, chương trình Nông dân FEP đã mang lại lượng nông sản trị giá hơn 411 triệu PHP, tương đương với 9,8 triệu kg rau.</p>
                    `
                  ]
                },
            }
        ],

        "BananaLeaf": { // Old
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

        "Burger001": [
            {
                year: [
                    "2010",
                    "2011"
                ],
                title: {
                    en: [
                        "Mang Inasal: The Philippines’ Grill Expert", 
                        "Establishing Happy Bee Foods"
                    ],
                    ch: [
                        "Mang Inasal:领先的菲律宾快餐餐厅", 
                        "创办快乐蜂食品"
                    ],
                    vi: [
                        "Mang Inasal: Nhà hàng phục vụ nhanh hàng đầu Philippines", 
                        "Thành lập Happy Bee Foods"
                    ],
                },
                description: {
                  en: [
                        `<p><strong>Mang Inasal</strong> joins the Jollibee Group. Today, it is the Philippines' leading Filipino QSR chain, with over 570 stores around the Philippines serving its signature, expertly grilled Chicken Inasal.</p>`,
                        `<p>Jollibee Group builds the <strong>Jollibee Foods Processing Facility (Happy Bee Foods)</strong> in China. The Happy Bee Foods Commissary serves Jollibee Group's brands in China.</p>`
                    ],
                  ch: [
                        `<p><strong>Mang Inasal</strong>加入快乐蜂集团。如今,它是菲律宾领先的菲律宾QSR连锁店,在菲律宾各地拥有逾570家店,供应招牌专业烤鸡Inasal。</p>`,
                        `<p>快乐蜂集团在中国建立快乐蜂食品加工厂(快乐蜂食品)。快乐蜂食品小卖部为快乐蜂集团在中国的品牌提供服务。</p>`
                  ],
                  vi: [
                        `<p><strong>Mang Inasal</strong> gia nhập Tập đoàn Jollibee. Ngày nay, đây là chuỗi QSR Filipino hàng đầu của Philippines, với hơn 570 cửa hàng trên khắp Philippines phục vụ món gà nướng Inasal chuyên nghiệp đặc trưng.</p>`,
                        `<p>Tập đoàn Jollibee xây dựng Cơ sở chế biến thực phẩm Jollibee (Happy Bee Foods) tại Trung Quốc. Cửa hàng Thực phẩm Happy Bee cung cấp sản phẩm đến từ các thương hiệu của Tập đoàn Jollibee tại Trung Quốc.</p>`
                  ]
                },
            }
        ],

        "Burger001": { // Old
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
        
        "OnionLeaves": [
            {
                year: [
                    "2012"
                ],
                title: {
                    en: [
                        ""
                    ],
                    ch: [
                        ""
                    ],
                    vi: [
                        ""
                    ],
                },
                description: {
                  en: [
                        `<p></p>`
                    ],
                  ch: [
                        `<p></p>`
                  ],
                  vi: [
                        `<p></p>`
                  ]
                },
            }
        ],

        "OnionLeaves": { // Old
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