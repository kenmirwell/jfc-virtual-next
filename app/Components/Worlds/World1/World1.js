"use client"

import { useEffect, useState } from "react"
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { gsap, Bounce, Power3, Expo } from 'gsap';
import {OrbitControls} from "three/examples/jsm/controls/OrbitControls"
import Buttons from "./Buttons/Buttons"
import Clouds from "./Clouds/Clouds";

let hovered = null; 
let contents = {
    "Empty001": {
        year: "1978",
        title: "Jolibee Food Corporation is born",
        description: (
            `<strong>Jolibee Foods Corporation</strong> (also known as Jolibee Group) is born with a single brand:<br />Jolibee. The first-ever Jolibee store was located in Quezon, Cubao.`
        )
    },
    "Empty002": {
        year: "1979",
        title: "Jolibee Food Corporation is born",
        description: (
            `<strong>Jolibee Foods Corporation</strong> (also known as Jolibee Group) is born with a single brand:<br />Jolibee. The first-ever Jolibee store was located in Quezon, Cubao.`
        )
    },
    "Empty003": {
        year: "1979",
        title: "Jolibee Food Corporation is born",
        description: (
            `<strong>Jolibee Foods Corporation</strong> (also known as Jolibee Group) is born with a single brand:<br />Jolibee. The first-ever Jolibee store was located in Quezon, Cubao.`
        )
    },
    "Empty004": {
        year: "1982",
        title: "Jolibee Food Corporation is born",
        description: (
            `<strong>Jolibee Foods Corporation</strong> (also known as Jolibee Group) is born with a single brand:<br />Jolibee. The first-ever Jolibee store was located in Quezon, Cubao.`
        )
    },
    "Empty005": {
        year: "1990",
        title: "Jolibee Food Corporation is born",
        description: (
            `<strong>Jolibee Foods Corporation</strong> (also known as Jolibee Group) is born with a single brand:<br />Jolibee. The first-ever Jolibee store was located in Quezon, Cubao.`
        )
    }
};


const FirstWorld = () => {
    const [loaded, setLoaded] = useState(false);
    const [model3d, setModel3d] = useState(null);
    const [selected, setSelected] = useState(null);
    const [initialAnimate, setInitialAnimate] = useState(false);
    const [finishAnimate, setFinishAnimate] = useState(false);
    
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
            // components.renderer.setClearColor(0x57D7FC);
            components.scene.add(components.lights.directional);
            components.scene.add(components.lights.ambient);
            components.camera.position.set(0, 10, 10);
            components.lights.directional.position.set(0, 10, 10);
                
            onLoad();

            document.body.appendChild( components.renderer.domElement );
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
            window.requestAnimationFrame(animate);
            document.addEventListener( 'pointermove', onPointerMove );
            document.addEventListener("click", onClickObject);
        }
    }, [finishAnimate])

    const onLoad = () => {
        const assetLoader  = new GLTFLoader();

        assetLoader.load(`assets/world1/world.glb`, async function(gltf) {
            setModel3d(gltf.scene);

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

    const onClickObject = () => {
        if( model3d ) {
            components.raycaster.setFromCamera( components.pointer, components.camera );
            
            const objects = components.raycaster.intersectObjects(model3d.children);
            const raycasted = Object.keys(contents); 

            if( objects.length < 11 ) {
                for ( let i = 0; i < objects.length; i ++ ) {
                    if( raycasted.indexOf(objects[i].object.name) > -1 ) {
                        setSelected(i)
                    } else if( objects[i].object.parent && raycasted.indexOf(objects[i].object.parent.name) > -1 ) {
                        setSelected(i)
                    } else if( objects[i].object.parent.parent && raycasted.indexOf(objects[i].object.parent.parent.name) > -1 ) {
                        setSelected(i)
                    } else if( objects[i].object.parent.parent.parent && raycasted.indexOf(objects[i].object.parent.parent.parent.name) > -1 ) {
                        setSelected(i)
                    }
                }
            }
        }
    }

    const onPointerMove = ( event ) => {
        components.pointer.x = ( event.clientX / window.innerWidth ) * 2 - 1;
        components.pointer.y = - ( event.clientY / window.innerHeight ) * 2 + 1;

        const from = {
            x: model3d.rotation.x,
            y: model3d.rotation.y
        };

        let to = {
            x: model3d.rotation.x + components.pointer.y * 0.5,
            y: model3d.rotation.y - components.pointer.x * 0.5
        };

        // if( to.x > -0.01 ) {
        //     to.x = -0.01;
        // }

        // if( to.x < -0.2 ) {
        //     to.x = -0.2;
        // }

        console.log(to.x)

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
    };

    const onWindowResize = () => {
        components.camera.aspect = window.innerWidth / window.innerHeight;
        components.camera.updateProjectionMatrix();
        components.renderer.setSize( window.innerWidth, window.innerHeight );
    }

    return (
        <div className="overflow-hidden">  
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
            { selected && (
                <div>
                    <div className="details-modal">
                        <video autoPlay loop muted>
                            <source src={"/assets/1979.webm"} type="video/webm"></source>
                        </video>
                    </div>
                    <div onClick={() => setSelected(null)} className="details-modal-overlay"/>
                </div>
            )}
                
        </div>
    );
}

export default FirstWorld