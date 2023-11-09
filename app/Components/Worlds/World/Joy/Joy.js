"use client"

import { useEffect, useState } from "react"
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { DRACOLoader } from "three/examples/jsm/loaders/DRACOLoader";

const Joy = () => {
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

            document.getElementById("prompt").appendChild( components.renderer.domElement );
        }
    }, [model3d, loaded]);

    /* Setup scene */
    useEffect(() => {
        if( model3d ) {
            window.requestAnimationFrame(animate);
        }
    }, [model3d]);

    const onLoad = () => {
        const assetLoader  = new GLTFLoader();
        const dLoader      = new DRACOLoader();        
        dLoader.setDecoderPath("https://www.gstatic.com/draco/versioned/decoders/1.5.6/")
        dLoader.setDecoderConfig({type: "js"})
        assetLoader.setDRACOLoader(dLoader)

        assetLoader.load("/assets/joy.glb", async function(gltf) {
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
        components.renderer.render(components.scene, components.camera);
        window.requestAnimationFrame(animate);
    };

    return null;
}

export default Joy;