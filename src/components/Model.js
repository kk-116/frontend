import React, { useEffect, useRef } from 'react';
import { Canvas, useFrame } from 'react-three-fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import '../styles/Model.css'
import { Euler } from 'three';
const Model = () => {
    const group = useRef();
    const clock = useRef();
    const initialRotation = new Euler(0, Math.PI / 4, 0, 'XYZ');

    useEffect(() => {
      const loader = new GLTFLoader();
      loader.load('going_merry.glb', (gltf) => {
        group.current.add(gltf.scene);
        group.current.rotation.copy(initialRotation);
      });
    }, []);
    
    
    useFrame(({ clock }) => {
      const elapsedTime = clock.getElapsedTime();
      const radius = 15;
      const speed = 0.5;
      const angle = elapsedTime * speed;
  
      const x = Math.cos(angle) * radius;
      const z = Math.sin(angle) * radius;
  
      group.current.position.x = x;
      group.current.position.z = z;
      group.current.rotation.y = angle + Math.PI/2;
    });
  
    return (
      <group ref={group} />
    );
  };

export default Model;