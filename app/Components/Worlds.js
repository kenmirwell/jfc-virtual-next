"use client"
import { OrbitControls } from "@react-three/drei"
import {WorldOne} from "./WorldOne"

export function Worlds() {
    return (
        <>
            <OrbitControls/>
            {/* <mesh>
                <boxGeometry/>
                <meshNormalMaterial/>
            </mesh> */}
            <ambientLight/>
            <WorldOne/>
        </>
    )
}
