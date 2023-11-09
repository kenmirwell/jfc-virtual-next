"use client"

import React from "react";
import { useEffect, useState, useRef } from "react"
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { gsap, Bounce, Power3, Expo } from 'gsap';
import Clouds from "./Clouds/Clouds";
import Flats from "./Flats/Flats";
import Background from "./Background/Background";
import Loader from "./Loader/Loader";
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import Prompt from "./Prompt/Prompt";
import { DRACOLoader } from "three/examples/jsm/loaders/DRACOLoader";
import Joy from "./Joy/Joy";

let hovered = null; 
let disableFunctionality = false;

const World = ({
    title,
    year,
    color,
    contents,
    flats,
    model,
    background,
    objects = {},
    flow
}) => {
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

    const [loaded, setLoaded] = useState(false);
    const [model3d, setModel3d] = useState(null);
    const [objSelected, setObjSelected] = useState(null)
    const [initialAnimate, setInitialAnimate] = useState(false);
    const [finishAnimate, setFinishAnimate] = useState(false);
    const [audio, setAudio] = useState(false);
    const [activeVideo, setActiveVideo] = useState(0);
    const [currentFlow, setCurrentFlow] = useState({});
    const [showJoy, setShowJoy] = useState(false);
    
    const ref = useRef(false);
    
    /* Load all components */
    useEffect(() => {
        if( !loaded ) {
            const renderer = new THREE.WebGLRenderer({ alpha: false, antialias: true });
            renderer.shadows = true;
            renderer.shadowType = 1;
            renderer.shadowMap.enabled = true;
            renderer.toneMapping = 0;
            renderer.toneMappingExposure = 1;
            renderer.toneMapping = THREE.NoToneMapping;
            renderer.setClearColor(0xffffff, 0);
            renderer.outputColorSpace = THREE.SRGBColorSpace;
            renderer.useLegacyLights = false;

            const scene            = new THREE.Scene();
            const pointer          = new THREE.Vector2();
            const raycaster        = new THREE.Raycaster();
            const axesHelper       = new THREE.AxesHelper(5);
            const ambientLight     = new THREE.AmbientLight(0xBEBEBE);
            const directionalLight = new THREE.DirectionalLight( 0xBEBEBE, 10 );
            const dLightHelper     = new THREE.DirectionalLightHelper(directionalLight, 3);
            const aspect = window.innerWidth / window.innerHeight;
            const camera = new THREE.PerspectiveCamera( 22, aspect, 1, 2000 );

            const orbit = new OrbitControls( camera, renderer.domElement );
            orbit.enableRotate = false;
            orbit.enableZoom = false;
            orbit.enablePan = false;
            orbit.update();

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
            components.camera.position.set(0, 10, 20);
            components.lights.directional.position.set(0, 10, 10);
                
            onLoad();

            document.getElementById("world1").appendChild( components.renderer.domElement );
            window.addEventListener( 'resize', onWindowResize, false );
        }
    }, [model3d, loaded]);

    /* Setup scene */
    useEffect(() => {
        if( model3d ) {
            setInitialAnimate(true);

            window.requestAnimationFrame(animate);

            const interactables = model3d.children.filter(obj => Object.keys(contents).indexOf(obj.name) > -1);
            const trees  = model3d.children.filter(obj => obj.name.indexOf( objects.tree ? objects.tree : "Tree" ) > -1 );
            const joys   = model3d.children.filter(obj => obj.name.indexOf( objects.joy ? objects.joy : "Joys" ) > -1 );
            const lights = model3d.children.filter(obj => obj.name.indexOf( objects.light ? objects.light : "Light-Rays" ) > -1 );

            for( const obj of interactables ) {
                obj.position.y += 5;
                obj.visible = false;
            }

            for( const obj of joys ) {
                obj.visible = false;
            }
            
            for( const obj of lights ) {
                obj.scale.x = 0;
                obj.scale.y = 0;
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
        if(model3d && initialAnimate) {
            const interactables = model3d.children.filter(obj => Object.keys(contents).indexOf(obj.name) > -1);
            const trees = model3d.children.filter(obj => obj.name.indexOf( objects.tree ? objects.tree : "Tree" ) > -1);

            gsap.timeline().to(components.camera.position, 2, { 
                y: 3, 
                ease: Power3.easeInOut, 
                delay: 2
            });

            gsap.timeline().to("#clogo", .5, { 
                y: 0, 
                ease: Power3.easeInOut, 
                delay: 3.5 
            });

            gsap.timeline().to("#cicons", .5, { 
                y: 0, 
                ease: Power3.easeInOut, 
                delay: 3.5 
            });

            gsap.timeline().to("#cchapter", .5, { 
                x: 0, 
                ease: Power3.easeInOut, 
                delay: 3.5 
            });

            gsap.timeline().to("#cheader", .5, { 
                opacity: 1, 
                ease: Power3.easeInOut, 
                delay: 3.5 
            });
            
            for( const [i, obj] of trees.entries() ) {
                gsap.timeline().to(obj.rotation, 3, { 
                    z: obj.rotation.z + 0.3, 
                    ease: Power3.easeInOut, 
                    delay: 3.5 + (i * 0.5), 
                    repeat: -1, 
                    yoyo: true 
                });

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
    }, [model3d, initialAnimate])

    /* Finish animate */
    useEffect(() => {
        if(finishAnimate) {
            document.addEventListener( 'pointermove', onPointerMove, false );

            if( flow && flow.length > 0 && !currentFlow.action ) {
                setShowJoy(true);

                setTimeout(() => {
                    setCurrentFlow( flow[0] );
                }, 700);
            }
        }
    }, [finishAnimate, disableFunctionality]);

    /* Apply click animation */
    useEffect(() => {
        if( currentFlow.action === "GOTO" ) {
            document.addEventListener( 'click', onClickObject );

            const light = model3d.children.find(c => c.name === currentFlow.light );

            if( light ) {
                gsap.timeline().to(light.scale, .5, { 
                    x: 10, 
                    y: 10, 
                    z: 10,
                    ease: Power3.easeInOut
                });
            }
        }
    }, [currentFlow]);

    const onLoad = () => {
        const assetLoader  = new GLTFLoader();
        const dLoader      = new DRACOLoader();        
        dLoader.setDecoderPath("https://www.gstatic.com/draco/versioned/decoders/1.5.6/")
        dLoader.setDecoderConfig({type: "js"})
        assetLoader.setDRACOLoader(dLoader)

        assetLoader.load(model, async function(gltf) {
            setModel3d(gltf.scene);

            gltf.scene.overrideMaterial = new THREE.MeshBasicMaterial({ color: "green" });
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
        setActiveVideo(index);
    }

    const onClickObject = (action) => {
        if( !disableFunctionality ) {
            if( model3d ) {
                components.raycaster.setFromCamera( components.pointer, components.camera );

                const target  = model3d.children.find(c => c.name === currentFlow.target);
                const joy     = model3d.children.find(c => c.name === currentFlow.joy);
                const objects = components.raycaster.intersectObjects(model3d.children);

                const onSelect = () => {
                    disableFunctionality = true;

                    document.removeEventListener( 'click', onClickObject );

                    components.orbit.target.x = 0;
                    components.orbit.target.y = 3;
                    components.orbit.target.z = target.position.z;
                    
                    gsap.timeline().to(components.orbit.target, 1, { 
                        x: target.position.x, 
                        y: target.position.y + 1.2, 
                        z: target.position.z, 
                        onUpdate: function () {
                            components.orbit.update();
                        }, 
                        ease: Power3.easeInOut 
                    });

                    gsap.timeline().to(components.camera, 1, { 
                        zoom: 1.7, 
                        onUpdate: function () {
                            components.camera.updateProjectionMatrix();

                            setActiveVideo(0)
                            setAudio(true)

                            if(ref.current) {
                                ref.current.play()
                            }
                        }, 
                        ease: Power3.easeInOut 
                    });
                    
                    setTimeout(() => {
                        if( joy ) {
                            joy.visible = true;
                        }
                    }, 1000);

                    setTimeout(() => {
                        setObjSelected(target.name);
                    }, 1500);
                }

                if( action === "BUTTON" ) {
                    onSelect( target );
                }

                if( objects.length < 11 ) {
                    for ( let i = 0; i < objects.length; i ++ ) {
                        if( objects[i].object.name === currentFlow.target ) {
                            onSelect()
                        } else if( objects[i].object.parent && objects[i].object.parent.name === currentFlow.target ) {
                            onSelect()
                        } else if( objects[i].object.parent.parent && objects[i].object.parent.parent.name === currentFlow.target ) {
                            onSelect()
                        } else if( objects[i].object.parent.parent.parent && objects[i].object.parent.parent.parent.name === currentFlow.target ) {
                            onSelect()
                        }
                    }
                }
            }
        }
    };

    const onDeselect = () => {
        disableFunctionality = false;

        const joys = model3d.children.filter(obj => obj.name.indexOf( objects.joy ? objects.joy : "Joys" ) > -1 );
        for( const obj of joys ) {
            obj.visible = false;
        }

        const light = model3d.children.find(c => c.name === currentFlow.light );
        if( light ) {
            light.visible = false;
        }

        setObjSelected(null);
        setCurrentFlow(flow.find(f => f.step === currentFlow.step + 1));

        gsap.timeline().to(components.orbit.target, 0.7, { 
            x: 0, 
            y: 3, 
            onUpdate: function () {
                components.orbit.update();
            }, 
            ease: Power3.easeInOut 
        });

        gsap.timeline().to(components.camera, 0.7, { 
            zoom: 1, 
            onUpdate: function () {
                components.camera.updateProjectionMatrix();

                if(audio) {
                    if(ref.current) {
                        ref.current.pause()
                        ref.current.currentTime = 0
                    }
                }
            }, 
            ease: Power3.easeInOut
        });
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
                x: 0.5 * ( components.pointer.y * 0.2 ),
                y: 0.5 * ( components.pointer.x * 0.2 )
            };

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

    const onNext = (popupCount) => {
        console.log("activeVideo", activeVideo)
        if(activeVideo < popupCount - 1) {
            setActiveVideo(activeVideo + 1)
        } else {
            return null
        }
    }

    const onPrev = () => {
        if(activeVideo > 0) {
            setActiveVideo(activeVideo - 1)
        } else {
            return null
        }
    }

    return (
        <div>
            <div id="world1" className={`overflow-hidden w-full h-[100vh] transition-all duration-[0.5s] ease-out ${ objSelected ? "blur-[50px]" : "" }`}>  
                <Clouds title={ title } animate={ initialAnimate } delay={.5} color={ color } />
                <Loader model3d={ model3d } />
                <Background background={ background } />
                <Flats flats={ flats } title={ title } year={ year } color={ color } />
                <Prompt 
                    showJoy={ showJoy }
                    flow={ flow } 
                    currentFlow={{ get: currentFlow, set: setCurrentFlow }} 
                    onClickInteractables={ onClickObject }
                />
                <Joy />
                <audio className="hidden" controls autoplay ref={ref}> 
                    <source src={"/assets/world1/popup-audio.mp3"} />
                </audio>
            </div>
            <div className={`details-modal-container opacity-0 transition-all duration-[0.5s] ease-in-out ${ objSelected ? "!opacity-100" : "pointer-events-none" }`}>
                <div className={`details-modal`}>
                    <div className="details-modal-content">
                        <div className="text-container absolute top-[200px] right-[136px]">
                            {objSelected && contents[objSelected].title.filter((title, i) => activeVideo === i).map((title, i) => (
                                <div className={"title-container top-[170px] right-[245px]"} key={`title-${i}`}>
                                    <h4>{title}</h4>
                                </div>
                            ))}
                            
                            {objSelected && contents[objSelected].description.filter((desc, i) => activeVideo === i).map((desc, i) => (
                                <div className="desc-container top-[200px] right-[245px]" key={`desc-${i}`} dangerouslySetInnerHTML={{ __html: desc }} />
                            ))}

                            <div className="popup-image-container">
                                {objSelected && contents[objSelected].photos && contents[objSelected].photos.map((image, i) => (
                                    activeVideo !== i && 
                                        <div className="popup-image-single top-[200px] right-[0px]" key={`desc-${i}`}>
                                            <img src={image}/>
                                        </div>
                                    ))
                                }
                            </div>
                        </div>
                        <div className="webm-container">
                            <button className="exit-button absolute" onClick={ onDeselect }>
                                <img src="/assets/world1/popup-icons/exit.svg" width="50" />
                            </button>
                            
                            {objSelected && 
                                <button className={`arrow-left absolute ${activeVideo > 0 ? "" : "opacity-50"}`} onClick={ onPrev }>
                                    <img src="/assets/world1/popup-icons/arrow-left.svg" width="50" />
                                </button>
                            }

                            {objSelected && 
                                <button className={`arrow-right absolute ${activeVideo < (contents[objSelected].year.length - 1) ? "" : "opacity-50"}`} onClick={ () => onNext(contents[objSelected].year.length) }>
                                    <img src="/assets/world1/popup-icons/arrow-right.svg" width="50" />
                                </button>
                            }
                            
                            {audio ?
                                <button className="audio-button absolute" onClick={ audioClick }>
                                    <img src="/assets/world1/popup-icons/audio-icon.svg" width="100" />
                                </button> :
                                <button className="audio-button absolute" onClick={ audioClick }>
                                    <img src="/assets/world1/popup-icons/audio-mute.svg" width="100" />
                                </button>
                            }

                            {objSelected && contents[objSelected].year.map((p, i) => (
                                <div key={`year-text-${i}`} className={`year-container absolute bottom-[100px] ${contents[objSelected].post[i]}`}>
                                    <p className={`${activeVideo === i ? "active year-text" : "year-text"}`}>{p}</p>
                                </div>
                            ))}

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
                                <>
                                    <video key={`video-${i}`} autoPlay loop muted className={`${activeVideo !== i ? "video hidden" : "video"}`}>
                                        <source src={p} type="video/webm"/>
                                    </video>
                                </>
                            ))}
                        </div>
                    </div>
                </div>                
                <div onClick={ onDeselect } className={`details-modal-overlay ${ objSelected ? "" : "pointer-events-none" }`} />
            </div>
        </div>
    );
}

export default World;