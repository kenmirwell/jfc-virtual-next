"use client"
import { OrbitControls } from "@react-three/drei"
import {WorldOne} from "./WorldOne"
import FirstWorld from "./FirstWorld"

export function Worlds() {
    return (
        <>
            <OrbitControls/>
            {/* <mesh>
                <boxGeometry/>
                <meshNormalMaterial/>
            </mesh> */}
            <ambientLight/>
            <FirstWorld/>
            {/* <WorldOne/> */}
        </>
    )
}
