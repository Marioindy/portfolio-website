'use client';

import { useEffect, useRef } from 'react';
import * as THREE from 'three';

/**
 * ThreeBackground - 3D geometric background using Three.js
 * Renders floating geometric shapes with perspective and rotation
 * Creates depth and futuristic atmosphere
 */
export function ThreeBackground() {
  const containerRef = useRef<HTMLDivElement>(null);
  const sceneRef = useRef<THREE.Scene | null>(null);
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const geometriesRef = useRef<THREE.Mesh[]>([]);

  useEffect(() => {
    if (!containerRef.current) return;

    // Scene setup
    const scene = new THREE.Scene();
    sceneRef.current = scene;

    // Camera setup with perspective
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.z = 30;
    cameraRef.current = camera;

    // Renderer setup
    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
    });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setClearColor(0x000000, 0);
    rendererRef.current = renderer;

    containerRef.current.appendChild(renderer.domElement);

    // Create geometric shapes with neon materials
    const geometries: THREE.Mesh[] = [];

    // Purple neon material
    const purpleMaterial = new THREE.MeshStandardMaterial({
      color: 0x9333ea,
      emissive: 0x9333ea,
      emissiveIntensity: 0.5,
      metalness: 0.8,
      roughness: 0.2,
      transparent: true,
      opacity: 0.6,
    });

    // Cyan neon material
    const cyanMaterial = new THREE.MeshStandardMaterial({
      color: 0x06b6d4,
      emissive: 0x06b6d4,
      emissiveIntensity: 0.4,
      metalness: 0.8,
      roughness: 0.2,
      transparent: true,
      opacity: 0.5,
    });

    // Create multiple geometric shapes
    const shapes = [
      { geometry: new THREE.OctahedronGeometry(3, 0), material: purpleMaterial, pos: [-15, 10, -10] },
      { geometry: new THREE.IcosahedronGeometry(2.5, 0), material: cyanMaterial, pos: [15, -8, -15] },
      { geometry: new THREE.TetrahedronGeometry(3.5, 0), material: purpleMaterial, pos: [-20, -12, -20] },
      { geometry: new THREE.BoxGeometry(4, 4, 4), material: cyanMaterial, pos: [18, 8, -12] },
      { geometry: new THREE.OctahedronGeometry(2, 0), material: purpleMaterial, pos: [0, 15, -25] },
      { geometry: new THREE.DodecahedronGeometry(2.5, 0), material: cyanMaterial, pos: [-12, -15, -18] },
    ];

    shapes.forEach(({ geometry, material, pos }) => {
      const mesh = new THREE.Mesh(geometry, material);
      mesh.position.set(pos[0], pos[1], pos[2]);
      scene.add(mesh);
      geometries.push(mesh);
    });

    geometriesRef.current = geometries;

    // Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.3);
    scene.add(ambientLight);

    const pointLight1 = new THREE.PointLight(0x9333ea, 2, 100);
    pointLight1.position.set(-10, 10, 10);
    scene.add(pointLight1);

    const pointLight2 = new THREE.PointLight(0x06b6d4, 2, 100);
    pointLight2.position.set(10, -10, 10);
    scene.add(pointLight2);

    // Animation loop
    let animationFrameId: number;
    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);

      // Rotate geometries
      geometries.forEach((mesh, index) => {
        mesh.rotation.x += 0.001 + index * 0.0001;
        mesh.rotation.y += 0.002 + index * 0.0001;

        // Gentle floating animation
        mesh.position.y += Math.sin(Date.now() * 0.001 + index) * 0.01;
      });

      renderer.render(scene, camera);
    };

    animate();

    // Handle window resize
    const handleResize = () => {
      if (!camera || !renderer) return;

      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener('resize', handleResize);

    // Mouse interaction
    const handleMouseMove = (event: MouseEvent) => {
      if (!camera) return;

      const mouseX = (event.clientX / window.innerWidth) * 2 - 1;
      const mouseY = -(event.clientY / window.innerHeight) * 2 + 1;

      camera.position.x = mouseX * 5;
      camera.position.y = mouseY * 5;
      camera.lookAt(scene.position);
    };

    window.addEventListener('mousemove', handleMouseMove);

    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrameId);

      if (containerRef.current && renderer.domElement) {
        containerRef.current.removeChild(renderer.domElement);
      }

      geometries.forEach((mesh) => {
        mesh.geometry.dispose();
        if (Array.isArray(mesh.material)) {
          mesh.material.forEach((mat) => mat.dispose());
        } else {
          mesh.material.dispose();
        }
      });

      renderer.dispose();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 z-0 opacity-40"
      style={{ pointerEvents: 'none' }}
    />
  );
}
