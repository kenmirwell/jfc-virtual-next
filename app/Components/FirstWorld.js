import React from "react"
import * as THREE from "three";
import {OrbitControls} from "three/examples/jsm/controls/OrbitControls"
import {GLTFLoader} from "three/examples/jsm/loaders/GLTFLoader"
import { useGLTF } from '@react-three/drei'

const FirstWorld = () => {
    const [model, setModel] = React.useState(null)

    React.useEffect(() => {
        const glbmodel = new URL("../../public/assets/world_war_one.glb", import.meta.url);
        const assetLoader = new GLTFLoader();
        assetLoader.load(glbmodel.href, async function(gltf) {
            const model3d = gltf.scene
            setModel(model3d)
        }, undefined, function(error) {
            console.log(error)
        })
    }, [])

    return (
        <>
            {model && <primitive  object={model} name={"world_war_one"}/>}
        </>
    )
}

export default FirstWorld