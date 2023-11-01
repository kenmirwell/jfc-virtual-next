/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.14 ./public/assets/world_war_one.glb 
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function WorldOne(props) {
  const { nodes, materials } = useGLTF('./assets/world1.glb');
  
  return (
    <group {...props} dispose={null}>
      <group position={[1.66, 2.055, 2.692]} rotation={[0.069, -0.342, -0.029]} scale={[0.559, 1.221, 0.914]}>
        <group position={[-0.014, 0, 0]} scale={[0.821, 0.376, 0.503]}>
          <mesh geometry={nodes.Cube001_1.geometry} material={materials['Wall-Red']} />
          <mesh geometry={nodes.Cube001_2.geometry} material={materials['Wall-OffWhite']} />
          <mesh geometry={nodes.Cube001_3.geometry} material={materials.Glass} />
          <mesh geometry={nodes.Cube001_4.geometry} material={materials.Green} />
        </group>
        <mesh geometry={nodes.Pepperoni.geometry} material={materials.Pepperoni} position={[-0.038, 0.615, 0.625]} rotation={[1.029, 1.136, -0.253]} scale={[0.082, 0.118, 0.125]} />
        <mesh geometry={nodes.Pepperoni001.geometry} material={materials.Pepperoni} position={[0.167, 0.649, 0.582]} rotation={[-2.516, 1.013, -2.92]} scale={[0.068, 0.09, 0.089]} />
        <mesh geometry={nodes.Pepperoni002.geometry} material={materials.Pepperoni} position={[0.332, 0.575, 0.637]} rotation={[1.697, 1.506, -0.546]} scale={[0.049, 0.093, 0.099]} />
        <mesh geometry={nodes['Pizza-Crust'].geometry} material={materials.Bread} position={[0.151, 0.589, 0.575]} rotation={[0.698, 0.903, 0.045]} scale={[0.318, 0.02, 0.363]}>
          <mesh geometry={nodes['Pizza-Toppings001'].geometry} material={materials.Cheese} position={[0, 1.905, 0.035]} rotation={[0.328, 0, 0]} scale={[1.056, 0.998, 1.338]} />
        </mesh>
      </group>
      <group position={[2.963, 1.256, 2.887]} rotation={[-0.042, -0.154, -0.047]} scale={[0.559, 1.221, 0.914]}>
        <group scale={[0.821, 0.376, 0.503]}>
          <mesh geometry={nodes.Cube005.geometry} material={materials['Wall-Red']} />
          <mesh geometry={nodes.Cube005_1.geometry} material={materials['Wall-OffWhite']} />
          <mesh geometry={nodes.Cube005_2.geometry} material={materials.Glass} />
          <mesh geometry={nodes.Cube005_3.geometry} material={materials.Gray} />
        </group>
        <mesh geometry={nodes['Siopao-Dot'].geometry} material={materials['Pepperoni.001']} position={[-0.063, 0.675, 0.64]} rotation={[0.985, -0.641, 0.487]} scale={[0.016, 0.003, 0.014]} />
        <mesh geometry={nodes['Siopao-Main'].geometry} material={materials['Siopao-Base']} position={[-0.007, 0.601, 0.526]} rotation={[0.985, -0.641, 0.487]} scale={[0.312, 0.116, 0.268]} />
      </group>
      <group position={[-2.715, 1.447, 3.248]} rotation={[0.05, 0.597, 0.039]} scale={[0.559, 1.221, 0.914]}>
        <group position={[-0.29, 0, 0]} scale={[0.821, 0.376, 0.503]}>
          <mesh geometry={nodes.Cube006.geometry} material={materials['Wall-OffWhite']} />
          <mesh geometry={nodes.Cube006_1.geometry} material={materials.Glass} />
          <mesh geometry={nodes.Cube006_2.geometry} material={materials['Siopao-Base']} />
          <mesh geometry={nodes.Cube006_3.geometry} material={materials['Wall-OffWhite.001']} />
        </group>
        <mesh geometry={nodes.Cube001.geometry} material={materials['CubaoSign-Texture']} position={[-0.309, 0.634, 0.576]} scale={[0.821, 0.376, 0.503]} />
        <mesh geometry={nodes.Cube002.geometry} material={materials['Wall-OffWhite.002']} position={[-0.84, 0.271, 0.484]} scale={[0.821, 0.376, 0.503]} />
        <mesh geometry={nodes.Cube003.geometry} material={materials['Wall-OffWhite.002']} position={[-1.339, 0.271, 0.005]} rotation={[0, 1.571, 0]} scale={[0.503, 0.376, 0.821]} />
        <mesh geometry={nodes.Cube004.geometry} material={materials.Wood} position={[-1.314, 0, 0.637]} scale={[0.794, 0.484, 0.487]}>
          <mesh geometry={nodes.Cube005_4.geometry} material={materials['Wall-Red']} position={[0.003, 0.475, 0.083]} scale={[0.733, 0.71, 0.84]} />
          <mesh geometry={nodes.Cube006_4.geometry} material={materials['Jolli-White']} position={[-0.007, 0.475, 0.11]} scale={[0.58, 0.48, 0.651]} />
        </mesh>
        <mesh geometry={nodes.Cylinder.geometry} material={materials.Cone} position={[1.241, 0.268, -0.104]} scale={[0.682, 0.313, 0.418]} />
        <mesh geometry={nodes.Cylinder001.geometry} material={materials.IceCreamSundae} position={[1.241, 0.897, -0.104]} scale={[0.554, 0.204, 0.339]} />
        <mesh geometry={nodes.Text001.geometry} material={materials['Jolli-Red']} position={[-1.315, 0.214, 0.703]} rotation={[Math.PI / 2, 0, 0]} scale={[0.129, 0.079, 0.059]} />
      </group>
      <group position={[0.794, 1.213, 3.785]} rotation={[0.22, 0.285, -0.061]} scale={[0.457, 0.998, 0.747]}>
        <group position={[0.027, 0.698, 0]} rotation={[Math.PI, 0, Math.PI]} scale={[0.517, 0.258, 0.345]}>
          <mesh geometry={nodes.Cube013.geometry} material={materials['Wood.001']} />
          <mesh geometry={nodes.Cube013_1.geometry} material={materials['Green.001']} />
        </group>
        <mesh geometry={nodes.Text.geometry} material={materials['Jolli-White.001']} position={[0.029, 0.462, 0.172]} rotation={[1.268, 0, 0]} scale={[0.291, 0.175, 0.137]} />
      </group>
      <group position={[-0.148, 2.742, 1.334]} rotation={[0.331, 0, 0]} scale={[0.559, 1.221, 0.914]}>
        <group position={[-0.325, 0.109, -0.304]} rotation={[Math.PI / 2, 0, 0]} scale={[0.011, 0.007, 0.005]}>
          <mesh geometry={nodes._Jollibee_welcome_1.geometry} material={materials['Jolli-Yellow']} />
          <mesh geometry={nodes._Jollibee_welcome_2.geometry} material={materials['Jolli-Red.001']} />
          <mesh geometry={nodes._Jollibee_welcome_3.geometry} material={materials['Jolli-White']} />
          <mesh geometry={nodes._Jollibee_welcome_4.geometry} material={materials['Jolli-Black']} />
          <mesh geometry={nodes._Jollibee_welcome_5.geometry} material={materials['Jolli-Skin']} />
        </group>
        <mesh geometry={nodes.Cylinder002.geometry} material={materials['Wall-OffWhite.003']} position={[-0.017, 0, 0]} scale={[0.599, 0.055, 0.367]} />
      </group>
      <group position={[-1.23, 1.65, 2.974]} rotation={[0.427, 0, 0]} scale={0.331}>
        <mesh geometry={nodes.Cylinder003.geometry} material={materials['Tree.Red']} position={[-0.068, 0.63, -0.04]} scale={[0.101, 0.611, 0.101]} />
        <mesh geometry={nodes.Cylinder004.geometry} material={materials['Tree.Red']} position={[0.013, 1.086, -0.299]} rotation={[-0.613, -0.082, -0.417]} scale={[0.04, 0.244, 0.04]} />
        <mesh geometry={nodes.Cylinder005.geometry} material={materials['Tree.Red']} position={[-0.253, 1.015, -0.092]} rotation={[-2.339, 0.784, 2.15]} scale={[0.048, 0.294, 0.048]} />
        <mesh geometry={nodes.Cylinder006.geometry} material={materials['Tree.Red']} position={[-0.11, 0.977, 0.114]} rotation={[1.199, -0.972, 0.514]} scale={[0.06, 0.364, 0.06]} />
        <mesh geometry={nodes.Sphere.geometry} material={materials['Tree.Red']} position={[-0.083, 1.601, -0.142]} scale={0.517} />
        <mesh geometry={nodes.Sphere001.geometry} material={materials['Tree.Red']} position={[-0.189, 1.421, 0.407]} scale={0.293} />
        <mesh geometry={nodes.Sphere002.geometry} material={materials['Tree.Red']} position={[-0.559, 1.421, -0.039]} scale={0.319} />
        <mesh geometry={nodes.Sphere003.geometry} material={materials['Tree.Red']} position={[-0.366, 1.643, 0.202]} scale={0.319} />
        <mesh geometry={nodes.Sphere004.geometry} material={materials['Tree.Red']} position={[0.126, 1.342, -0.542]} scale={0.244} />
      </group>
      <group position={[4.52, -0.92, 1.055]} rotation={[-1.239, 1.024, 1.318]}>
        <group position={[-1.23, 5.982, -3.591]} rotation={[0.427, 0, 0]} scale={0.331}>
          <mesh geometry={nodes.Cylinder007.geometry} material={materials['Tree.Red']} position={[-0.068, 0.63, -0.04]} scale={[0.101, 0.611, 0.101]} />
          <mesh geometry={nodes.Cylinder008.geometry} material={materials['Tree.Red']} position={[0.013, 1.086, -0.299]} rotation={[-0.613, -0.082, -0.417]} scale={[0.04, 0.244, 0.04]} />
          <mesh geometry={nodes.Cylinder009.geometry} material={materials['Tree.Red']} position={[-0.253, 1.015, -0.092]} rotation={[-2.339, 0.784, 2.15]} scale={[0.048, 0.294, 0.048]} />
          <mesh geometry={nodes.Cylinder010.geometry} material={materials['Tree.Red']} position={[-0.11, 0.977, 0.114]} rotation={[1.199, -0.972, 0.514]} scale={[0.06, 0.364, 0.06]} />
          <mesh geometry={nodes.Sphere005.geometry} material={materials['Tree.Red']} position={[-0.083, 1.601, -0.142]} scale={0.517} />
          <mesh geometry={nodes.Sphere006.geometry} material={materials['Tree.Red']} position={[-0.189, 1.421, 0.407]} scale={0.293} />
          <mesh geometry={nodes.Sphere007.geometry} material={materials['Tree.Red']} position={[-0.559, 1.421, -0.039]} scale={0.319} />
          <mesh geometry={nodes.Sphere008.geometry} material={materials['Tree.Red']} position={[-0.366, 1.643, 0.202]} scale={0.319} />
          <mesh geometry={nodes.Sphere009.geometry} material={materials['Tree.Red']} position={[0.126, 1.342, -0.542]} scale={0.244} />
        </group>
      </group>
      <group position={[-2.729, -5.515, 4.254]} rotation={[0.496, -0.698, 0.468]}>
        <group position={[-1.23, 5.982, -3.591]} rotation={[0.427, 0, 0]} scale={0.331}>
          <mesh geometry={nodes.Cylinder011.geometry} material={materials['Tree.Red']} position={[-0.068, 0.63, -0.04]} scale={[0.101, 0.611, 0.101]} />
          <mesh geometry={nodes.Cylinder012.geometry} material={materials['Tree.Red']} position={[0.013, 1.086, -0.299]} rotation={[-0.613, -0.082, -0.417]} scale={[0.04, 0.244, 0.04]} />
          <mesh geometry={nodes.Cylinder013.geometry} material={materials['Tree.Red']} position={[-0.253, 1.015, -0.092]} rotation={[-2.339, 0.784, 2.15]} scale={[0.048, 0.294, 0.048]} />
          <mesh geometry={nodes.Cylinder014.geometry} material={materials['Tree.Red']} position={[-0.11, 0.977, 0.114]} rotation={[1.199, -0.972, 0.514]} scale={[0.06, 0.364, 0.06]} />
          <mesh geometry={nodes.Sphere010.geometry} material={materials['Tree.Red']} position={[-0.083, 1.601, -0.142]} scale={0.517} />
          <mesh geometry={nodes.Sphere011.geometry} material={materials['Tree.Red']} position={[-0.189, 1.421, 0.407]} scale={0.293} />
          <mesh geometry={nodes.Sphere012.geometry} material={materials['Tree.Red']} position={[-0.559, 1.421, -0.039]} scale={0.319} />
          <mesh geometry={nodes.Sphere013.geometry} material={materials['Tree.Red']} position={[-0.366, 1.643, 0.202]} scale={0.319} />
          <mesh geometry={nodes.Sphere014.geometry} material={materials['Tree.Red']} position={[0.126, 1.342, -0.542]} scale={0.244} />
        </group>
      </group>
      <group position={[3.203, 0.004, -4.047]} rotation={[-2.378, 0.536, 2.528]}>
        <group position={[-1.23, 5.982, -3.591]} rotation={[0.427, 0, 0]} scale={0.331}>
          <mesh geometry={nodes.Cylinder015.geometry} material={materials['Tree.Red']} position={[-0.068, 0.63, -0.04]} scale={[0.101, 0.611, 0.101]} />
          <mesh geometry={nodes.Cylinder016.geometry} material={materials['Tree.Red']} position={[0.013, 1.086, -0.299]} rotation={[-0.613, -0.082, -0.417]} scale={[0.04, 0.244, 0.04]} />
          <mesh geometry={nodes.Cylinder017.geometry} material={materials['Tree.Red']} position={[-0.253, 1.015, -0.092]} rotation={[-2.339, 0.784, 2.15]} scale={[0.048, 0.294, 0.048]} />
          <mesh geometry={nodes.Cylinder018.geometry} material={materials['Tree.Red']} position={[-0.11, 0.977, 0.114]} rotation={[1.199, -0.972, 0.514]} scale={[0.06, 0.364, 0.06]} />
          <mesh geometry={nodes.Sphere015.geometry} material={materials['Tree.Red']} position={[-0.083, 1.601, -0.142]} scale={0.517} />
          <mesh geometry={nodes.Sphere016.geometry} material={materials['Tree.Red']} position={[-0.189, 1.421, 0.407]} scale={0.293} />
          <mesh geometry={nodes.Sphere017.geometry} material={materials['Tree.Red']} position={[-0.559, 1.421, -0.039]} scale={0.319} />
          <mesh geometry={nodes.Sphere018.geometry} material={materials['Tree.Red']} position={[-0.366, 1.643, 0.202]} scale={0.319} />
          <mesh geometry={nodes.Sphere019.geometry} material={materials['Tree.Red']} position={[0.126, 1.342, -0.542]} scale={0.244} />
        </group>
      </group>
      <group position={[-0.973, -1.75, 5.637]} rotation={[-0.299, -0.07, -0.394]}>
        <group position={[-1.23, 5.982, -3.591]} rotation={[0.427, 0, 0]} scale={0.331}>
          <mesh geometry={nodes.Cylinder019.geometry} material={materials['Tree.Red']} position={[-0.068, 0.63, -0.04]} scale={[0.101, 0.611, 0.101]} />
          <mesh geometry={nodes.Cylinder020.geometry} material={materials['Tree.Red']} position={[0.013, 1.086, -0.299]} rotation={[-0.613, -0.082, -0.417]} scale={[0.04, 0.244, 0.04]} />
          <mesh geometry={nodes.Cylinder021.geometry} material={materials['Tree.Red']} position={[-0.253, 1.015, -0.092]} rotation={[-2.339, 0.784, 2.15]} scale={[0.048, 0.294, 0.048]} />
          <mesh geometry={nodes.Cylinder022.geometry} material={materials['Tree.Red']} position={[-0.11, 0.977, 0.114]} rotation={[1.199, -0.972, 0.514]} scale={[0.06, 0.364, 0.06]} />
          <mesh geometry={nodes.Sphere020.geometry} material={materials['Tree.Red']} position={[-0.083, 1.601, -0.142]} scale={0.517} />
          <mesh geometry={nodes.Sphere021.geometry} material={materials['Tree.Red']} position={[-0.189, 1.421, 0.407]} scale={0.293} />
          <mesh geometry={nodes.Sphere022.geometry} material={materials['Tree.Red']} position={[-0.559, 1.421, -0.039]} scale={0.319} />
          <mesh geometry={nodes.Sphere023.geometry} material={materials['Tree.Red']} position={[-0.366, 1.643, 0.202]} scale={0.319} />
          <mesh geometry={nodes.Sphere024.geometry} material={materials['Tree.Red']} position={[0.126, 1.342, -0.542]} scale={0.244} />
        </group>
      </group>
      <group position={[2.75, -1.349, 1.402]} rotation={[2.266, 1.462, -2.665]} scale={0.669}>
        <group position={[-1.23, 5.982, -3.591]} rotation={[0.427, 0, 0]} scale={0.331}>
          <mesh geometry={nodes.Cylinder023.geometry} material={materials['Tree.Red']} position={[-0.068, 0.63, -0.04]} scale={[0.101, 0.611, 0.101]} />
          <mesh geometry={nodes.Cylinder024.geometry} material={materials['Tree.Red']} position={[0.013, 1.086, -0.299]} rotation={[-0.613, -0.082, -0.417]} scale={[0.04, 0.244, 0.04]} />
          <mesh geometry={nodes.Cylinder025.geometry} material={materials['Tree.Red']} position={[-0.253, 1.015, -0.092]} rotation={[-2.339, 0.784, 2.15]} scale={[0.048, 0.294, 0.048]} />
          <mesh geometry={nodes.Cylinder026.geometry} material={materials['Tree.Red']} position={[-0.11, 0.977, 0.114]} rotation={[1.199, -0.972, 0.514]} scale={[0.06, 0.364, 0.06]} />
          <mesh geometry={nodes.Sphere025.geometry} material={materials['Tree.Red']} position={[-0.083, 1.601, -0.142]} scale={0.517} />
          <mesh geometry={nodes.Sphere026.geometry} material={materials['Tree.Red']} position={[-0.189, 1.421, 0.407]} scale={0.293} />
          <mesh geometry={nodes.Sphere027.geometry} material={materials['Tree.Red']} position={[-0.559, 1.421, -0.039]} scale={0.319} />
          <mesh geometry={nodes.Sphere028.geometry} material={materials['Tree.Red']} position={[-0.366, 1.643, 0.202]} scale={0.319} />
          <mesh geometry={nodes.Sphere029.geometry} material={materials['Tree.Red']} position={[0.126, 1.342, -0.542]} scale={0.244} />
        </group>
      </group>
      <group position={[4.181, -4.339, 5.824]} rotation={[-0.031, 0.867, -0.415]} scale={1.098}>
        <group position={[-1.23, 5.982, -3.591]} rotation={[0.427, 0, 0]} scale={0.331}>
          <mesh geometry={nodes.Cylinder027.geometry} material={materials['Tree.Red']} position={[-0.068, 0.63, -0.04]} scale={[0.101, 0.611, 0.101]} />
          <mesh geometry={nodes.Cylinder028.geometry} material={materials['Tree.Red']} position={[0.013, 1.086, -0.299]} rotation={[-0.613, -0.082, -0.417]} scale={[0.04, 0.244, 0.04]} />
          <mesh geometry={nodes.Cylinder029.geometry} material={materials['Tree.Red']} position={[-0.253, 1.015, -0.092]} rotation={[-2.339, 0.784, 2.15]} scale={[0.048, 0.294, 0.048]} />
          <mesh geometry={nodes.Cylinder030.geometry} material={materials['Tree.Red']} position={[-0.11, 0.977, 0.114]} rotation={[1.199, -0.972, 0.514]} scale={[0.06, 0.364, 0.06]} />
          <mesh geometry={nodes.Sphere030.geometry} material={materials['Tree.Red']} position={[-0.083, 1.601, -0.142]} scale={0.517} />
          <mesh geometry={nodes.Sphere031.geometry} material={materials['Tree.Red']} position={[-0.189, 1.421, 0.407]} scale={0.293} />
          <mesh geometry={nodes.Sphere032.geometry} material={materials['Tree.Red']} position={[-0.559, 1.421, -0.039]} scale={0.319} />
          <mesh geometry={nodes.Sphere033.geometry} material={materials['Tree.Red']} position={[-0.366, 1.643, 0.202]} scale={0.319} />
          <mesh geometry={nodes.Sphere034.geometry} material={materials['Tree.Red']} position={[0.126, 1.342, -0.542]} scale={0.244} />
        </group>
      </group>
      <group position={[4.257, -0.835, 2.49]} rotation={[-1.319, 1.172, 1.335]} scale={0.669}>
        <group position={[-1.23, 5.982, -3.591]} rotation={[0.427, 0, 0]} scale={0.331}>
          <mesh geometry={nodes.Cylinder031.geometry} material={materials['Tree.Red']} position={[-0.068, 0.63, -0.04]} scale={[0.101, 0.611, 0.101]} />
          <mesh geometry={nodes.Cylinder032.geometry} material={materials['Tree.Red']} position={[0.013, 1.086, -0.299]} rotation={[-0.613, -0.082, -0.417]} scale={[0.04, 0.244, 0.04]} />
          <mesh geometry={nodes.Cylinder033.geometry} material={materials['Tree.Red']} position={[-0.253, 1.015, -0.092]} rotation={[-2.339, 0.784, 2.15]} scale={[0.048, 0.294, 0.048]} />
          <mesh geometry={nodes.Cylinder034.geometry} material={materials['Tree.Red']} position={[-0.11, 0.977, 0.114]} rotation={[1.199, -0.972, 0.514]} scale={[0.06, 0.364, 0.06]} />
          <mesh geometry={nodes.Sphere035.geometry} material={materials['Tree.Red']} position={[-0.083, 1.601, -0.142]} scale={0.517} />
          <mesh geometry={nodes.Sphere036.geometry} material={materials['Tree.Red']} position={[-0.189, 1.421, 0.407]} scale={0.293} />
          <mesh geometry={nodes.Sphere037.geometry} material={materials['Tree.Red']} position={[-0.559, 1.421, -0.039]} scale={0.319} />
          <mesh geometry={nodes.Sphere038.geometry} material={materials['Tree.Red']} position={[-0.366, 1.643, 0.202]} scale={0.319} />
          <mesh geometry={nodes.Sphere039.geometry} material={materials['Tree.Red']} position={[0.126, 1.342, -0.542]} scale={0.244} />
        </group>
      </group>
      <group position={[4.274, -6.937, -1.36]} rotation={[2.336, 1.117, -2.215]} scale={1.29}>
        <group position={[-1.23, 5.982, -3.591]} rotation={[0.427, 0, 0]} scale={0.331}>
          <mesh geometry={nodes.Cylinder035.geometry} material={materials['Tree.Red']} position={[-0.068, 0.63, -0.04]} scale={[0.101, 0.611, 0.101]} />
          <mesh geometry={nodes.Cylinder036.geometry} material={materials['Tree.Red']} position={[0.013, 1.086, -0.299]} rotation={[-0.613, -0.082, -0.417]} scale={[0.04, 0.244, 0.04]} />
          <mesh geometry={nodes.Cylinder037.geometry} material={materials['Tree.Red']} position={[-0.253, 1.015, -0.092]} rotation={[-2.339, 0.784, 2.15]} scale={[0.048, 0.294, 0.048]} />
          <mesh geometry={nodes.Cylinder038.geometry} material={materials['Tree.Red']} position={[-0.11, 0.977, 0.114]} rotation={[1.199, -0.972, 0.514]} scale={[0.06, 0.364, 0.06]} />
          <mesh geometry={nodes.Sphere040.geometry} material={materials['Tree.Red']} position={[-0.083, 1.601, -0.142]} scale={0.517} />
          <mesh geometry={nodes.Sphere041.geometry} material={materials['Tree.Red']} position={[-0.189, 1.421, 0.407]} scale={0.293} />
          <mesh geometry={nodes.Sphere042.geometry} material={materials['Tree.Red']} position={[-0.559, 1.421, -0.039]} scale={0.319} />
          <mesh geometry={nodes.Sphere043.geometry} material={materials['Tree.Red']} position={[-0.366, 1.643, 0.202]} scale={0.319} />
          <mesh geometry={nodes.Sphere044.geometry} material={materials['Tree.Red']} position={[0.126, 1.342, -0.542]} scale={0.244} />
        </group>
      </group>
      <group position={[2.514, -1.303, -0.09]} rotation={[-2.757, 0.91, -3.027]} scale={0.669}>
        <group position={[-1.23, 5.982, -3.591]} rotation={[0.427, 0, 0]} scale={0.331}>
          <mesh geometry={nodes.Cylinder039.geometry} material={materials['Tree.Red']} position={[-0.068, 0.63, -0.04]} scale={[0.101, 0.611, 0.101]} />
          <mesh geometry={nodes.Cylinder040.geometry} material={materials['Tree.Red']} position={[0.013, 1.086, -0.299]} rotation={[-0.613, -0.082, -0.417]} scale={[0.04, 0.244, 0.04]} />
          <mesh geometry={nodes.Cylinder041.geometry} material={materials['Tree.Red']} position={[-0.253, 1.015, -0.092]} rotation={[-2.339, 0.784, 2.15]} scale={[0.048, 0.294, 0.048]} />
          <mesh geometry={nodes.Cylinder042.geometry} material={materials['Tree.Red']} position={[-0.11, 0.977, 0.114]} rotation={[1.199, -0.972, 0.514]} scale={[0.06, 0.364, 0.06]} />
          <mesh geometry={nodes.Sphere045.geometry} material={materials['Tree.Red']} position={[-0.083, 1.601, -0.142]} scale={0.517} />
          <mesh geometry={nodes.Sphere046.geometry} material={materials['Tree.Red']} position={[-0.189, 1.421, 0.407]} scale={0.293} />
          <mesh geometry={nodes.Sphere047.geometry} material={materials['Tree.Red']} position={[-0.559, 1.421, -0.039]} scale={0.319} />
          <mesh geometry={nodes.Sphere048.geometry} material={materials['Tree.Red']} position={[-0.366, 1.643, 0.202]} scale={0.319} />
          <mesh geometry={nodes.Sphere049.geometry} material={materials['Tree.Red']} position={[0.126, 1.342, -0.542]} scale={0.244} />
        </group>
      </group>
      <mesh geometry={nodes.PlanetBase.geometry} material={materials['Planet.Red']} position={[0, -0.406, -0.568]} rotation={[0, Math.PI / 2, 0]} scale={[4.995, 3.197, 4.995]} />
      <group position={[-0.313, 1.362, 0.132]} rotation={[0.036, Math.PI / 2, 0]} scale={0.832}>
        <mesh geometry={nodes.Circle002.geometry} material={materials['Wall-OffWhite']} />
        <mesh geometry={nodes.Circle002_1.geometry} material={materials['Jolli-White']} />
      </group>
      <mesh geometry={nodes.Island001.geometry} material={materials['Planet.Red']} position={[-0.219, 3.313, 0.452]} rotation={[0.331, Math.PI / 2, 0]} scale={[1.458, 0.176, 1.458]} />
      <mesh geometry={nodes.Island002.geometry} material={materials['Planet.Red']} position={[-2.616, 1.272, 1.867]} rotation={[-2.162, 0.353, 2.554]} scale={[1.458, 0.176, 1.458]} />
      <mesh geometry={nodes.Island003.geometry} material={materials['Planet.Red']} position={[2.098, 1.34, 2.323]} rotation={[1.241, 0.641, -0.629]} scale={[1.458, 0.176, 1.458]} />
      <mesh geometry={nodes.Cube008.geometry} material={materials['Planet.Red']} position={[-2.691, 0.581, 2.905]} rotation={[-0.019, 0.591, 0.011]} scale={[1.218, 1, 1]} />
      <mesh geometry={nodes.Cube009.geometry} material={materials['Planet.Red']} position={[1.66, 1.202, 2.601]} rotation={[0.078, -0.354, 0.001]} scale={0.875} />
      <mesh geometry={nodes.Cube010.geometry} material={materials['Planet.Red.001']} position={[2.925, 0.573, 2.991]} rotation={[0.074, -0.148, -0.016]} scale={0.733} />
      <mesh geometry={nodes.Mball014.geometry} material={materials['Cloud.World1']} position={[3.173, 0.014, 4.141]} rotation={[0.512, -1.276, 1.256]} scale={0.511} />
      <mesh geometry={nodes.Mball001.geometry} material={materials['Cloud.World1']} position={[-2.481, -0.037, 5.135]} rotation={[2.56, 1.049, -2.186]} scale={0.511} />
      <mesh geometry={nodes.Mball002.geometry} material={materials['Cloud.World1']} position={[5.583, 0.14, -2.467]} rotation={[-0.03, -0.43, 0.698]} scale={0.823} />
      <mesh geometry={nodes.Mball003.geometry} material={materials['Cloud.World1']} position={[-4.882, -0.503, -0.264]} rotation={[0.167, 0.768, 0.323]} scale={0.823} />
      <mesh geometry={nodes.Mball004.geometry} material={materials['Cloud.World1']} position={[-0.233, -0.154, 5.018]} rotation={[2.909, 1.102, -2.36]} scale={0.511} />
      <mesh geometry={nodes.Path001.geometry} material={materials['Tree.Red.001']} position={[1.811, 1.131, 3.271]} rotation={[0.956, -0.151, -0.26]} scale={0.112} />
      <mesh geometry={nodes.Path002.geometry} material={materials['Tree.Red.001']} position={[0, -4.333, 6.565]} />
      <mesh geometry={nodes.Path003.geometry} material={materials['Tree.Red.001']} position={[-1.968, 1.119, 3.145]} rotation={[-2.728, -1.084, 2.452]} scale={0.112} />
    </group>
  )
}

useGLTF.preload('./assets/world_war_one.glb')