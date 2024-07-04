import React, { useRef, useEffect } from 'react';
import { OrbitControls} from '@react-three/drei';
import { BoxGeometry, MeshStandardMaterial, Mesh, Scene, PerspectiveCamera, WebGLRenderer } from 'three';
import { useFrame } from '@react-three/fiber';
import { Box } from '@react-three/drei';

const Test1_Scene = ({ color }) => {

//   return (
//     <>
//     <ambientLight/>
//     <pointLight/>
//     <OrbitControls/>
//         <mesh>
//             <boxGeometry/>
//             {/* <MeshStandardMaterial/> */}
//         </mesh>
      
//     </>
//   );

const meshRef = React.useRef();

//   useFrame(() => {
//     if (meshRef.current) {
//       meshRef.current.rotation.x += 0.01;
//       meshRef.current.rotation.y += 0.01;
//     }
//   });

  return (
    <Box ref={meshRef}>
    <ambientLight/>
    <pointLight/>
    <OrbitControls/>
      <meshStandardMaterial attach="material" color={color} />
    </Box>
  );
}

export default Test1_Scene;
