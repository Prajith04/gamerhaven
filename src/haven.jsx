import React, { useRef, useEffect, useState } from 'react';
import * as THREE from 'three';
import { Canvas, useFrame } from '@react-three/fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

const GamingController = () => {
  const [model, setModel] = useState(null);
  const cameraRef = useRef();
  const [mouseX, setMouseX] = useState(0);
  const [mouseY, setMouseY] = useState(0);

  // Load the GLTF model
  useEffect(() => {
    const loader = new GLTFLoader();
    loader.load('/path/to/your/controller_model.glb', (gltf) => {
      setModel(gltf.scene);
    }, undefined, (error) => {
      console.error('Error loading model:', error);
    });
  }, []);

  // Handle mouse movement
  useEffect(() => {
    const handleMouseMove = (event) => {
      const canvas = event.target;
      const canvasRect = canvas.getBoundingClientRect();
      const canvasCenterX = canvasRect.left + canvasRect.width / 2;
      const canvasCenterY = canvasRect.top + canvasRect.height / 2;
      const xDiff = event.clientX - canvasCenterX;
      const yDiff = event.clientY - canvasCenterY;
      setMouseX(xDiff / 15);
      setMouseY(yDiff / 15);
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  // Update camera position
  useFrame(({ camera }) => {
    if (cameraRef.current) {
      cameraRef.current.position.x += (mouseX - cameraRef.current.position.x) * 0.05;
      cameraRef.current.position.y += (-mouseY - cameraRef.current.position.y) * 0.04;
      cameraRef.current.lookAt(new THREE.Vector3(0, 0, 0));
    }
  });

  return (
    <Canvas>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} intensity={2} />
      <perspectiveCamera
        ref={cameraRef}
        position={[0, 0, 35]}
        fov={45}
        aspect={window.innerWidth / window.innerHeight}
        near={1}
        far={100}
      />
      {model && <primitive object={model} position={[0, -5, 0]} />}
    </Canvas>
  );
};

export default GamingController;
