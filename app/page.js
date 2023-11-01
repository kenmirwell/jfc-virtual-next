"use client"

import Image from 'next/image'
import { Canvas } from '@react-three/fiber'
import { Worlds } from './Components/Worlds'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Canvas>
        <Worlds/>
      </Canvas>
    </main>
  )
}
