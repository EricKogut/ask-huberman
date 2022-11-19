import { CheckCircleIcon, LinkIcon } from '@chakra-ui/icons';
import { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import React, { useRef } from 'react';
import * as THREE from 'three';

import { Model } from '../Model';
import { time } from 'console';

export function ModelCanvas(props) {
  const offset = new THREE.Vector3();
  const distance = 1;

  return (
    <Suspense fallback={'loading'}>
      <Canvas
        camera={{ position: [4, 0, 4.25], fov: 15 }}
        style={{
          width: '50vw',
          height: '50vh',
        }}
      >
        <ambientLight intensity={1.25} />
        <ambientLight intensity={0.1} />
        <directionalLight intensity={0.4} />
        <Suspense fallback={null}>
          <Model position={[0.0, -1.5, 0]} /> /* highlight-line */
        </Suspense>
        <OrbitControls autoRotate={true} enabled={true} />
      </Canvas>
    </Suspense>
  );
}
