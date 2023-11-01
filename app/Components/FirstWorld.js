"use client"

import { useEffect, useState } from "react"
import * as THREE from "three";
import {GLTFLoader} from "three/examples/jsm/loaders/GLTFLoader";

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
    const [hovered, setHovered] = useState(null);
    const [model3d, setModel3d] = useState(null);
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
        camera: null
    });

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
            
            const objects = components.raycaster.intersectObjects(model3d.children, true);
            const raycasted = Object.keys(contents); 
            console.log(objects);
            
            const setTransition = (object) => {
                if( hovered === null ) {
                    let step = .3;
                    let speed = 0.1;
                    step += speed
    
                    setHovered( object.name );
                
                    // const tl = new TimelineMax().delay(.1);
                    // const scale = object.scale;
                    // const position = object.position;
                    // tl.to(scale, 0.2, {x: 2, y: 2, ease: Expo.easeOut})
                    // .to(scale, 1, {x: scale.x, y: scale.y, ease: Expo.easeOut, delay: 0.2});
                    // object.scale.x = 2;
                    // tl.to(position, 0.2, {y: position.y + 2 * Math.abs(Math.sin(step)), ease: Expo.easeOut})
                    // .to(position, 1, {y: position.y, ease: Expo.easeOut, delay: 0.2});
    
                    setTimeout(() => {
                        setHovered( null );
                    }, 1200)
                }
            };
    
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

    const onPointerMove = ( event ) => {
        components.pointer.x = ( event.clientX / window.innerWidth ) * 2 - 1;
        components.pointer.y = - ( event.clientY / window.innerHeight ) * 2 + 1;
    };

    const onWindowResize = () => {
        components.camera.aspect = window.innerWidth / window.innerHeight;
        components.camera.updateProjectionMatrix();
        components.renderer.setSize( window.innerWidth, window.innerHeight );
    }

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
            const camera           = new THREE.PerspectiveCamera(
                75,
                window.innerWidth / window.innerHeight,
                0.1,
                1000
            );

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
                camera
            });

            setLoaded(true);
        }
    }, []);
    
    /* Initialize Scene */
    useEffect(() => {
        if( loaded ) {
            components.renderer.setSize(window.innerWidth, window.innerHeight);
            components.renderer.setClearColor(0x57D7FC);
            components.scene.add(components.lights.directionalHelper);
            components.scene.add(components.lights.directional);
            components.scene.add(components.lights.ambient);
            components.camera.position.set(0, 2, 10);
            components.lights.directional.position.set(0, 10, 10);
                
            onLoad();

            document.body.appendChild( components.renderer.domElement );
            document.addEventListener( 'pointermove', onPointerMove );
            document.addEventListener("click", () => {
                if( hovered ) {
                    alert(`Year: ${ contents[hovered].year }, Title: ${ contents[hovered].title }, Description: ${ contents[hovered].description }, `);
                }
            });

            window.addEventListener( 'resize', onWindowResize, false );
        }
    }, [loaded]);

    /* Setup scene */
    useEffect(() => {
        if( model3d ) {
            window.requestAnimationFrame(animate);
        }
    }, [model3d]);

    return (
        <div className={`${ model3d ? "!opacity-0 !pointer-events-none" : "" } opacity-100 fixed top-0 left-0 right-0 bottom-0 bg-white flex items-center justify-center transition-all duration-[1s] ease-in-out z-[10]`}>
            <div className="loader"></div>
        </div>
    );
}

export default FirstWorld