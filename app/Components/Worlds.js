"use client"
import { OrbitControls } from "@react-three/drei"

export function Worlds() {
    return (
        <>
            <OrbitControls/>
            <mesh>
                <boxGeometry/>
                <meshNormalMaterial/>
            </mesh>
        </>
    )
}