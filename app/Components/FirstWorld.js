"use client"

import { useEffect, useState } from "react"
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { gsap, Bounce, Power3 } from 'gsap';
import {OrbitControls} from "three/examples/jsm/controls/OrbitControls"
import Buttons from "./Buttons/Buttons"
import Clouds from "./Clouds/Clouds"

let hovered = null; 
let timer = null;
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
            const renderer         = new THREE.WebGLRenderer();
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
            components.renderer.setClearColor(0x57D7FC);
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

            for( const obj of model3d.children.filter(obj => Object.keys(contents).indexOf(obj.name) > -1) ) {
                obj.position.y += 5;
                obj.visible = false;
            }
        }
    }, [model3d]);

    /* Initial animate */
    useEffect(() => {
        if(initialAnimate) {
            gsap.timeline().to(components.camera.position, 2, { y: 3, ease: Power3.easeInOut, delay: 2});

            setTimeout(() => {
                setFinishAnimate(true);
            }, 2000);

            setTimeout(() => {
                for( const obj of model3d.children.filter(obj => Object.keys(contents).indexOf(obj.name) > -1) ) {
                    obj.visible = true;
                    gsap.timeline().to(obj.position, 1, { y: obj.position.y - 5, ease: Bounce.easeOut });
                }
            }, 4000);
        }
    }, [initialAnimate])

    /* Finish animate */
    useEffect(() => {
        if(finishAnimate) {
            document.addEventListener( 'pointermove', onPointerMove );
            document.addEventListener("click", onClickObject);
        }
    }, [finishAnimate])

    const onLoad = () => {
        const assetLoader  = new GLTFLoader();

        assetLoader.load(`${ process.env.NEXT_PUBLIC_WORLD_ASSETS }/world_war_one.glb`, async function(gltf) {
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
                if( hovered !== null && hovered !== object.name ) {
                    hovered = null;
                }

                if( hovered === null ) {
                    let step = .3;
                    let speed = 0.1;
                    step += speed
    
                    hovered = object.name;

                    const position = object.position;

                    gsap.timeline()
                    .to(object.position, 0.3, {y: position.y + 1, ease: Power3.easeOut })
                    .to(object.position, 0.6, {y: position.y, ease: Bounce.easeOut });
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
            x: components.camera.rotation.x,
            y: components.camera.rotation.y
        };

        let to = {
            x: components.camera.rotation.x + components.pointer.y * 0.5,
            y: components.camera.rotation.y - components.pointer.x * 0.5
        };

        if( to.x > -0.020 ) {
            to.x = -0.020;
        }

        if( to.x < -0.15 ) {
            to.x = -0.15;
        }

        if( to.y > 0.05 ) {
            to.y = 0.05;
        }

        if( to.y < -0.05 ) {
            to.y = -0.05;
        }

        console.log( to.y  )

        gsap
        .timeline()
        .fromTo(
            components.camera.rotation, 
            2,
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
        <>  
            <Buttons onAnimate={() => setInitialAnimate(true)} />
            <Clouds animate={ initialAnimate } delay={.5} />
            <div className={`${ model3d ? "!opacity-0 !pointer-events-none" : "" } opacity-100 fixed top-0 left-0 right-0 bottom-0 bg-white flex items-center justify-center transition-all duration-[1s] ease-in-out z-[10]`}>
                <div className="loader"></div>
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
                
        </>
    );
}

export default FirstWorld