"use client"

import React from "react"
import * as THREE from "three";
import {GLTFLoader} from "three/examples/jsm/loaders/GLTFLoader";

const FirstWorld = () => {
    React.useEffect(() => {
        let hovered;

        const renderer = new THREE.WebGLRenderer();
        renderer.setSize(window.innerWidth, window.innerHeight);
        renderer.setClearColor(0x57D7FC)
        
        const camera = new THREE.PerspectiveCamera(
            75,
            window.innerWidth / window.innerHeight,
            0.1,
            1000
        );
        
        const assetLoader  = new GLTFLoader();
        const scene        = new THREE.Scene();
        const pointer      = new THREE.Vector2();
        const raycaster    = new THREE.Raycaster();
        const axesHelper   = new THREE.AxesHelper(5);
        const ambientLight = new THREE.AmbientLight(0xffffff);
        const directionalLight = new THREE.DirectionalLight( 0xffffff, 3 );
        const dLightHelper     = new THREE.DirectionalLightHelper(directionalLight, 5)
        
        scene.add( dLightHelper );
        scene.add( directionalLight );
        scene.add(axesHelper);
        scene.add(ambientLight);
        camera.position.set(0, 2, 10);
        directionalLight.position.set(0, 10, 10);

        const onPointerMove = ( event ) => {
            pointer.x = ( event.clientX / window.innerWidth ) * 2 - 1;
            pointer.y = - ( event.clientY / window.innerHeight ) * 2 + 1;
        };

        const onHover = () => {

        };

        assetLoader.load("https://muonvwkrrtayxmtyxvpm.supabase.co/storage/v1/object/public/swimmingpoolrepublic/randjae/world1.glb?t=2023-11-01T16%3A04%3A24.622Z", async function(gltf) {
            const model3d = gltf.scene;
            scene.add(model3d);
            window.requestAnimationFrame(animate);
            console.log(model3d)
        }, undefined, function(error) {
            console.log(error)
        });

        const animate = () => {
            onHover();
            renderer.render(scene, camera);
            window.requestAnimationFrame(animate);   
        }

        document.body.appendChild( renderer.domElement );
        document.addEventListener( 'pointermove', onPointerMove );
        document.addEventListener("click", () => {
            if( hovered ) {
                alert(`Year: ${ contents[hovered].year }, Title: ${ contents[hovered].title }, Description: ${ contents[hovered].description }, `);
            }
        });
    }, [])

    return null;
}

export default FirstWorld