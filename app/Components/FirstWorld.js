"use client"

import { useEffect, useState } from "react"
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { gsap, Bounce, Power3 } from 'gsap';

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

    const onPointerMove = ( event ) => {
        components.pointer.x = ( event.clientX / window.innerWidth ) * 2 - 1;
        components.pointer.y = - ( event.clientY / window.innerHeight ) * 2 + 1;

        const from = {
            x: components.camera.rotation.x,
            y: components.camera.rotation.y
        };

        const to = {
            x: components.camera.rotation.x + components.pointer.y * 0.5,
            y: components.camera.rotation.y - components.pointer.x * 0.5
        };

        gsap
        .timeline()
        .fromTo(
            components.camera.rotation, 
            2,
            { y: from.y, x: from.x }, 
            { y: to.y, x: to.x, ease: Power3.easeOut }
        );
        // components.camera.rotation.y -= components.pointer.x * 0.001;
        // components.camera.rotation.x += components.pointer.y * 0.001;
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
            const frustumSize = 10;
            const aspect = window.innerWidth / window.innerHeight;
            const camera = new THREE.OrthographicCamera( 
                frustumSize * aspect / - 2, 
                frustumSize * aspect / 2, 
                frustumSize / 2, 
                frustumSize / - 2, 
                0.1, 
                100 
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
        if( !model3d && loaded ) {
            components.renderer.setSize(window.innerWidth, window.innerHeight);
            components.renderer.setClearColor(0x57D7FC);
            components.scene.add(components.lights.directionalHelper);
            components.scene.add(components.lights.directional);
            components.scene.add(components.lights.ambient);
            components.camera.position.set(0, 3, 10);
            components.camera.rotation.x = -0.14;
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
    }, [model3d, loaded]);

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