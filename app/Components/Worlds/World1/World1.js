"use client"

import React from "react";
import { useEffect, useState, useRef } from "react"
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { gsap, Bounce, Power3, Expo } from 'gsap';
import {OrbitControls} from "three/examples/jsm/controls/OrbitControls"
import Buttons from "./Buttons/Buttons"
import Clouds from "./Clouds/Clouds";
import { constants } from "buffer";

let hovered = null; 
let popupVideo = null;
let activeVideo = null;
let disableFunctionality = false;
let active = 0;
let button = 0;

let contents = {
    "Empty001": {
        year: ["1978", "1979"],
        title: ["Jolibee Food Corporation is born", "Beginning of Jollibee’s Franchising Journey"],
        description: [
            <p><strong>Jolibee Foods Corporation</strong> (also known as Jolibee Group) is born with a single brand:<br />Jolibee. The first-ever Jolibee store was located in Quezon, Cubao.</p>,
            <p>Jollibee begins its franchising Journey, opening its <strong>first official franchised store</strong> with Jollibee
            EDSA Central. Today, more than half of all JFC Brands' stores globally are franchise-owned: a
            testament to the enduring partnership between JFC and its franchisees around the globe.</p>
        ],
        popup: ["/assets/world1/popup/1978.webm", "/assets/world1/popup/1979.webm"],
        post: ["left-[105px]", "left-[200px]"],

    },
    "Empty002": {
        year: ["1980"],
        title: ["Introducing The Face Of Jollibee"],
        description: [
            <p><strong>Jolibee Foods Corporation</strong> (also known as Jolibee Group) is born with a single brand:<br />Jolibee. The first-ever Jolibee store was located in Quezon, Cubao.</p>
        ],
        popup: ["/assets/world1/popup/1980.webm"],
        post: ["left-[105px]"]
    },
    "Empty003": {
        year: ["1984", "1990", "1993"],
        title: ["Reaching International Markets", "Celebrating 100 Stores", "Going Public"],
        description: [
            <p>Jollibee Group opens its first international Jollibee store in Singapore. Although not successful
            at the time, Jollibee eventually re-entered the market in 2013 to huge fanfare. Jollibee now has
            over 15 stores in Singapore, and over 350 stores outside the Philippines.</p>, 
            <p>Jollibee opens its 100th store in Davao, Philippines.</p>,
            <p>Jollibee Group lists on the Philippine Stock Exchange, with an initial offering of
            PHP 9/share.</p>],
        popup: ["/assets/world1/popup/1984.webm", "/assets/world1/popup/1990.webm", "/assets/world1/popup/1993.webm"],
        post: ["left-[105px]", "left-[200px]", "20px"]
    },
    "Empty004": {
        year: ["1994", "1998"],
        title: ["Greenwich: The Philippines’ #1 Pizza Chain", "Entering North America Markets and More"],
        description: [
            <p>Jollibee Group makes its first acquisition with Greenwich. It is now the Philippines’ #1 Pizza
            Chain in terms of store network and market share.</p>,
            <p>Jollibee Group opens its first-ever store in North America with Jollibee Daly City in California,
            USA. Jollibee Group's North America presence is now composed of six brands (Jollibee,
            Chowking, Red Ribbon, Smashburger, and The Coffee Bean and Tea Leaf) with over 550
            stores.</p>
        ],
        popup: ["/assets/world1/popup/1994.webm", "/assets/world1/popup/1998.webm"],
        post: ["left-[105px]", "left-[200px]"]
    },
    "Empty005": {
        year: ["2000", "2001"],
        title: ["Chowking: The Philippines’ Chinese Quick Serving Restaurant", "Welcome to the Jollibee Plaza"],
        description: [
            <p>Chowking joins the Jollibee Group. It is now the Philippines' leading Chinese Quick Service
            Restaurant, with over 560 stores nationwide.</p>, 
            <p>Jollibee Group moves to Jollibee Plaza, initially operating with 8 floors in the building.</p>],
        popup: ["/assets/world1/popup/2000.webm", "/assets/world1/popup/2001.webm"],
        post: ["left-[105px]", "left-[200px]"]
    }
};


const FirstWorld = () => {
    const [loaded, setLoaded] = useState(false);
    const [model3d, setModel3d] = useState(null);
    const [selected, setSelected] = useState(null);
    const [objSelected, setObjSelected] = useState(null)
    const [initialAnimate, setInitialAnimate] = useState(false);
    const [finishAnimate, setFinishAnimate] = useState(false);
    const [audio, setAudio] = useState(false);
    const [activeVideo, setActiveVideo] = useState(0);
    const ref = useRef(false)
    
    const [components, setComponents] = useState({
        renderer: null,
        scene: null,
        pointer: null,
        raycaster: null,
        axesHelper: null,
        lights: {
            ambient: null,
            directional: null,
            directionalHelper: null
        },
        camera: null,
        orbit: null
    });

    /* Load all components */
    useEffect(() => {
        if( !loaded ) {
            const renderer         = new THREE.WebGLRenderer({ alpha: true });
            const scene            = new THREE.Scene();
            const pointer          = new THREE.Vector2();
            const raycaster        = new THREE.Raycaster();
            const axesHelper       = new THREE.AxesHelper(5);
            const ambientLight     = new THREE.AmbientLight(0xffffff);
            const directionalLight = new THREE.DirectionalLight( 0xffffff, 3 );
            const dLightHelper     = new THREE.DirectionalLightHelper(directionalLight, 5);
            const frustumSize = 6;
            const aspect = window.innerWidth / window.innerHeight;
            const camera = new THREE.OrthographicCamera( 
                frustumSize * aspect / - 2, 
                frustumSize * aspect / 2, 
                frustumSize / 2, 
                frustumSize / - 2, 
                0.1, 
                100 
            );

            const orbit = new OrbitControls(camera, renderer.domElement);

            setComponents({
                renderer,
                scene,
                pointer,
                raycaster,
                axesHelper,
                lights: {
                    ambient: ambientLight,
                    directional: directionalLight,
                    directionalHelper: dLightHelper
                },
                camera,
                orbit
            });

            setLoaded(true);
        }
    }, []);
    
    /* Initialize Scene */
    useEffect(() => {
        if( !model3d && loaded ) {
            components.renderer.setSize(window.innerWidth, window.innerHeight);
            components.scene.add(components.lights.directional);
            components.scene.add(components.lights.ambient);
            components.camera.position.set(0, 10, 10);
            components.lights.directional.position.set(0, 10, 10);
                
            onLoad();

            document.getElementById("world1").appendChild( components.renderer.domElement );
            window.addEventListener( 'resize', onWindowResize, false );
        }
    }, [model3d, loaded]);

    /* Setup scene */
    useEffect(() => {
        if( model3d ) {
            window.requestAnimationFrame(animate);

            const interactables = model3d.children.filter(obj => Object.keys(contents).indexOf(obj.name) > -1);
            const trees = model3d.children.filter(obj => obj.name.indexOf("Tree") > -1 || obj.name === "Empty");

            for( const obj of interactables ) {
                obj.position.y += 5;
                obj.visible = false;
            }

            for( const obj of trees ) {
                const scale = obj.scale.clone();
                obj.originalScale = scale;

                setTimeout(() => {
                    obj.scale.x = 0;
                    obj.scale.y = 0;
                }, 500);
            }
        }
    }, [model3d]);

    /* Initial animate */
    useEffect(() => {
        if(initialAnimate) {
            const interactables = model3d.children.filter(obj => Object.keys(contents).indexOf(obj.name) > -1);
            const trees = model3d.children.filter(obj => obj.name.indexOf("Tree") > -1 || obj.name === "Empty");

            gsap.timeline().to(components.camera.position, 2, { 
                y: 3, 
                ease: Power3.easeInOut, 
                delay: 2
            });
            
            for( const [i, obj] of trees.entries() ) {
                if( obj.name === "Empty" ) {
                    gsap.timeline().to(obj.rotation, 3, { 
                        x: obj.rotation.x + 0.3, 
                        ease: Power3.easeInOut, 
                        delay: 3.5 + (i * 0.5), 
                        repeat: -1, 
                        yoyo: true 
                    });
                } else {
                    gsap.timeline().to(obj.children[0].rotation, 3, { 
                        x: obj.children[0].rotation.x + 0.3, 
                        ease: Power3.easeInOut, 
                        delay: 3.5 + (i * 0.5), 
                        repeat: -1, 
                        yoyo: true 
                    });
                }

                gsap.timeline().to(obj.scale, .5, { 
                    x: obj.originalScale.x, 
                    y: obj.originalScale.y, 
                    ease: Power3.easeOut, 
                    delay: 4 + (i * 0.03) 
                });
            }

            setTimeout(() => {
                setFinishAnimate(true);
            }, 5500);

            setTimeout(() => {
                for( const [i, obj] of interactables.entries() ) {
                    obj.visible = true;
                    gsap.timeline().to(obj.position, 1, { 
                        y: obj.position.y - 5, 
                        ease: Bounce.easeOut, 
                        delay: i * 0.05 
                    });
                }
            }, 4500);
        }
    }, [initialAnimate])

    /* Finish animate */
    useEffect(() => {
        if(finishAnimate) {
            document.addEventListener( 'pointermove', onPointerMove, false );
            document.addEventListener( 'click', onClickObject, false );
        }
    }, [finishAnimate, disableFunctionality])

    const onLoad = () => {
        const assetLoader  = new GLTFLoader();

        assetLoader.load(`assets/world1/world.glb`, async function(gltf) {
            setModel3d(gltf.scene);

            gltf.scene.traverse(function (child) {
                if (child.isMesh) {
                    child.castShadow = true;
                }
            });

            components.scene.add(gltf.scene);
        }, undefined, function(error) {
            console.log(error)
        });
    };

    const animate = () => {
        onHover();
        components.renderer.render(components.scene, components.camera);
        window.requestAnimationFrame(animate);
    };

    const onHover = () => {
        if( model3d ) {
            components.raycaster.setFromCamera( components.pointer, components.camera );
            
            const objects = components.raycaster.intersectObjects(model3d.children);
            const raycasted = Object.keys(contents); 

            const setTransition = (object) => { 
                if( hovered === null ) {
                    let step = .3;
                    let speed = 0.1;
                    step += speed
    
                    hovered = object.name;

                    const position = object.position;

                    gsap.timeline()
                    .to(object.position, 0.3, {y: position.y + 1, ease: Power3.easeOut })
                    .to(object.position, 0.6, {y: position.y, ease: Bounce.easeOut });

                    setTimeout(() => {
                        hovered = null;
                    }, 1000);
                }
            };
            
            if( objects.length < 11 ) {
                for ( let i = 0; i < objects.length; i ++ ) {
                    if( raycasted.indexOf(objects[i].object.name) > -1 ) {
                        setTransition(objects[i].object);
                    } else if( objects[i].object.parent && raycasted.indexOf(objects[i].object.parent.name) > -1 ) {
                        setTransition(objects[i].object.parent);
                    } else if( objects[i].object.parent.parent && raycasted.indexOf(objects[i].object.parent.parent.name) > -1 ) {
                        setTransition(objects[i].object.parent.parent);
                    } else if( objects[i].object.parent.parent.parent && raycasted.indexOf(objects[i].object.parent.parent.parent.name) > -1 ) {
                        setTransition(objects[i].object.parent.parent.parent);
                    }
                }
            }
        }
    }

    const onClickwhiteButton = (index) => {
        // active = index;

        setActiveVideo(index);

        console.log("active", active)
    }

    const onClickObject = () => {
        if( !disableFunctionality ) {
            if( model3d ) {
                components.raycaster.setFromCamera( components.pointer, components.camera );
                
                const objects = components.raycaster.intersectObjects(model3d.children);
                const raycasted = Object.keys(contents); 


                const onSelect = (obj, i) => {
                    disableFunctionality = true;

                    gsap.timeline().to(components.camera, 1, { 
                        zoom: 10, 
                        onUpdate: function () {
                            components.camera.updateProjectionMatrix();

                            setAudio(true)

                            if(ref.current) {
                                ref.current.play()
                            }
                        }, 
                        ease: Power3.easeInOut 
                    });

                    setTimeout(() => {

                        setObjSelected(obj.name)
                        
                    }, 1000);

                    setTimeout(() => {
                        setSelected(i);
                    }, 1500);
                }

                if( objects.length < 11 ) {
                    for ( let i = 0; i < objects.length; i ++ ) {
                        if( raycasted.indexOf(objects[i].object.name) > -1 ) {
                            onSelect(objects[i].object, i)
                        } else if( objects[i].object.parent && raycasted.indexOf(objects[i].object.parent.name) > -1 ) {
                            onSelect(objects[i].object.parent, i)
                        } else if( objects[i].object.parent.parent && raycasted.indexOf(objects[i].object.parent.parent.name) > -1 ) {
                            onSelect(objects[i].object.parent.parent, i)
                        } else if( objects[i].object.parent.parent.parent && raycasted.indexOf(objects[i].object.parent.parent.parent.name) > -1 ) {
                            onSelect(objects[i].object.parent.parent.parent, i)
                        }
                    }
                }
            }
        }
    };

    const onDeselect = () => {
        disableFunctionality = false;
        setSelected(null);        

        gsap.timeline().to(components.camera, 0.7, { 
            zoom: 1, 
            onUpdate: function () {
                components.camera.updateProjectionMatrix();

                if(audio) {
                    if(ref.current) {
                        ref.current.pause()
                        ref.current.currentTime = 0

                        console.log(ref)
                    }
                }
            }, 
            ease: Power3.easeInOut
        })
    }

    const onPointerMove = ( event ) => {
        if( !disableFunctionality ) {
            components.pointer.x = ( event.clientX / window.innerWidth ) * 2 - 1;
            components.pointer.y = - ( event.clientY / window.innerHeight ) * 2 + 1;

            const from = {
                x: model3d.rotation.x,
                y: model3d.rotation.y
            };

            let to = {
                x: model3d.rotation.x + components.pointer.y * 0.5,
                y: model3d.rotation.y + components.pointer.x * 0.5
            };

            if( to.x > 0.12 ) {
                to.x = 0.12;
            }

            if( to.x < -0.02 ) {
                to.x = -0.02;
            }

            if( to.y > 0.1 ) {
                to.y = 0.1;
            }

            if( to.y < -0.1 ) {
                to.y = -0.1;
            }

            gsap
            .timeline()
            .fromTo(
                model3d.rotation, 
                1.5,
                { y: from.y, x: from.x }, 
                { y: to.y, x: to.x, ease: Power3.easeOut }
            );
        }
    };

    const onWindowResize = () => {
        components.camera.aspect = window.innerWidth / window.innerHeight;
        components.camera.updateProjectionMatrix();
        components.renderer.setSize( window.innerWidth, window.innerHeight );
    };

    const audioClick = () => {
        if(audio) {
            setAudio(false) 
            
            if(ref.current) {
                ref.current.pause()
            }
        } else {
            setAudio(true)

            if(ref.current) {
                ref.current.play()
            }
        }
    }

    return (
        <div>
            <div id="world1" className={`overflow-hidden w-full h-[100vh] transition-all duration-[0.5s] ease-out ${ selected ? "blur-[50px]" : "" }`}>  
                <Buttons onAnimate={() => setInitialAnimate(true)} />
                <Clouds animate={ initialAnimate } delay={.5} />
                <div className={`${ model3d ? "!opacity-0 !pointer-events-none" : "" } opacity-100 fixed top-0 left-0 right-0 bottom-0 bg-white flex items-center justify-center transition-all duration-[1s] ease-in-out z-[10]`}>
                    <div className="loader"></div>
                </div>
                <div className={`pointer-events-none z-[-1] overflow-hidden fixed top-0 left-0 right-0 bottom-0 bg-white flex items-center justify-center transition-all duration-[1s] ease-in-out`}>
                    <video autoPlay muted loop>
                        <source src="/assets/world1/bg.mp4" type="video/mp4" />
                    </video>
                </div>
                <div className={`pointer-events-none overflow-hidden z-[0] fixed top-0 left-0 right-0 bottom-0 flex items-center justify-center transition-all duration-[1s] ease-in-out`}>
                <div className="absolute top-0 left-[20px]">
                    <img src="/assets/world1/elements/logo.png" />
                    <div className="h-b text-center mx-auto text-white font-[700] absolute top-[130px] left-[95px]">
                        <h2 data-text={"Humble"} className="h2-a text-[60px] leading-none uppercase">Humble</h2>
                        <h2 data-text={"Beginnings"} className="h2-b text-[60px] leading-none uppercase">Beginnings</h2>
                        <p data-text={"1979-2003"} className="text-[40px]">1979-2003</p>
                    </div>
                    </div>
                    <div className="absolute bottom-[-70px] left-[-65px]">
                        <img src="/assets/world1/elements/icons.png" />
                    </div>
                    <div className="absolute top-[90px] right-[110px]">
                        <img src="/assets/world1/elements/chapter.svg" width="200" />
                    </div>
                </div>
                <audio className="hidden" controls autoplay ref={ref}> 
                    <source src={"/assets/world1/popup-audio.mp3"} />
                </audio>
            </div>
            <div className={`opacity-0 transition-all duration-[0.5s] ease-in-out ${ selected ? "!opacity-100" : "pointer-events-none" }`}>
                <div className={`details-modal`}>
                    <div className="details-modal-content">
                        <div className="text-container absolute top-[200px] right-[136px]">
                            {objSelected && contents[objSelected].title.map((title, i) => (
                                    activeVideo !== i && 
                                        <div className={"title-container top-[170px] right-[245px]"} key={`title-${i}`}>
                                            <h4>{title}</h4>
                                        </div>
                                    
                                ))
                            }

                            {objSelected && contents[objSelected].description.map((desc, i) => (
                                activeVideo !== i && 
                                    <div className="desc-container top-[200px] right-[245px]" key={`desc-${i}`}>
                                        {desc}
                                    </div>
                                ))
                            }
                        </div>
                        <div className="webm-container">
                            <button className="exit-button absolute" onClick={ onDeselect }>
                                <img src="/assets/world1/popup-icons/exit.svg" width="50" />
                            </button>
                            
                            <button className="arrow-right absolute" onClick={ "" }>
                                <img src="/assets/world1/popup-icons/arrow-right.svg" width="50" />
                            </button>
                            
                            {audio ?
                                <button className="audio-button absolute" onClick={ audioClick }>
                                    <img src="/assets/world1/popup-icons/audio-icon.svg" width="100" />
                                </button> :
                                <button className="audio-button absolute" onClick={ audioClick }>
                                    <img src="/assets/world1/popup-icons/audio-mute.svg" width="100" />
                                </button>
                            }

                            {objSelected && contents[objSelected].popup.map((p, i) => (
                                <button key={`red-white-${i}`} className={`red-white-container absolute bottom-[70px] ${contents[objSelected].post[i]}`} onClick={() => onClickwhiteButton(i)}>
                                    {activeVideo === i ? 
                                    <div className="red-button-container">
                                        <img src="/assets/world1/popup-icons/circle-red.svg" width="20" />
                                        <div className="red-button" />
                                    </div> :
                                    <div className="white-button-container">
                                        <img src="/assets/world1/popup-icons/circle-white.svg" width="20" />
                                    </div>}
                                </button>
                            ))}
                            {objSelected && contents[objSelected].popup.map((p, i) => (
                                <video key={`video-${i}`} autoPlay loop muted className={`${activeVideo !== i ? "video hidden" : "video"}`}>
                                    <source src={p} type="video/webm"/>
                                </video>
                            ))}
                        </div>
                    </div>
                </div>                
                <div className={`details-modal-overlay ${ selected ? "" : "pointer-events-none" }`} />
            </div>
        </div>
    );
}

export default FirstWorld