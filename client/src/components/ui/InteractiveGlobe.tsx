import { useEffect, useRef, useState, useCallback } from 'react';
import * as THREE from 'three';
import { Compass, RotateCw, ZoomIn, ZoomOut, Target, MapPin, Sparkles, RefreshCcw } from 'lucide-react';

interface InteractiveGlobeProps {
  className?: string;
}

// Exact geographical coordinates for NSIT Bihta, Patna, India
const NSIT_COORDS = {
  lat: 25.5684,
  lon: 84.8872,
  name: 'NSIT Bihta, Patna',
  details: 'Amhara, Bihta, Patna, Bihar – 801106, India',
};

// Convert Lat/Lon to 3D Cartesian coordinates on sphere of radius R
function latLonToVector3(lat: number, lon: number, radius: number): THREE.Vector3 {
  const phi = (90 - lat) * (Math.PI / 180);
  const theta = (lon + 180) * (Math.PI / 180);

  const x = -(radius * Math.sin(phi) * Math.cos(theta));
  const z = radius * Math.sin(phi) * Math.sin(theta);
  const y = radius * Math.cos(phi);

  return new THREE.Vector3(x, y, z);
}

export default function InteractiveGlobe({ className = '' }: InteractiveGlobeProps) {
  const mountRef = useRef<HTMLDivElement>(null);
  const [autoRotate, setAutoRotate] = useState(false);
  const [isZoomedIn, setIsZoomedIn] = useState(false);
  const [targetNotice, setTargetNotice] = useState<string | null>(null);

  // Three.js instances
  const sceneRef = useRef<THREE.Scene | null>(null);
  const globeGroupRef = useRef<THREE.Group | null>(null);
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const cloudsMeshRef = useRef<THREE.Mesh | null>(null);

  // Interaction & smooth flight animation refs
  const isDraggingRef = useRef(false);
  const previousMousePos = useRef({ x: 0, y: 0 });

  // Camera zoom targets (5.0 = Orbit View, 2.3 = Close Fly-In View)
  const targetCameraZ = useRef(5.0);
  const currentCameraZ = useRef(5.0);

  // Rotation target (aimed toward India by default)
  // For longitude 84.89° E and latitude 25.57° N:
  const indiaRotation = { x: 0.22, y: -1.48 };
  const targetRotation = useRef({ ...indiaRotation });
  const currentRotation = useRef({ ...indiaRotation });

  // Fly-To & Zoom Effect on "Locate NSIT Bihta"
  const locateAndZoomToNSIT = useCallback(() => {
    // 1. Smoothly rotate globe toward Patna, India
    targetRotation.current = {
      x: indiaRotation.x,
      y: indiaRotation.y,
    };
    // 2. Smoothly zoom camera close in toward the campus location
    targetCameraZ.current = 2.4;
    setIsZoomedIn(true);
    setAutoRotate(false);

    setTargetNotice('TARGET ACQUIRED: Zooming to NSIT Bihta, Patna (25.57° N, 84.89° E)');
    setTimeout(() => setTargetNotice(null), 4000);
  }, [indiaRotation.x, indiaRotation.y]);

  // Reset View to Full Orbit
  const resetOrbitView = useCallback(() => {
    targetCameraZ.current = 5.0;
    setIsZoomedIn(false);
    targetRotation.current = {
      x: 0.2,
      y: -2.3,
    };
    setAutoRotate(true);
  }, []);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    const width = container.clientWidth || 700;
    const height = container.clientHeight || 560;

    // 1. Scene & Camera Setup
    const scene = new THREE.Scene();
    sceneRef.current = scene;

    const camera = new THREE.PerspectiveCamera(40, width / height, 0.1, 1000);
    camera.position.z = currentCameraZ.current;
    cameraRef.current = camera;

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    container.innerHTML = '';
    container.appendChild(renderer.domElement);
    rendererRef.current = renderer;

    // 2. Globe Group (Rotates in 3D space)
    const globeGroup = new THREE.Group();
    globeGroupRef.current = globeGroup;
    scene.add(globeGroup);

    globeGroup.rotation.x = currentRotation.current.x;
    globeGroup.rotation.y = currentRotation.current.y;

    const earthRadius = 1.35;
    const textureLoader = new THREE.TextureLoader();

    // 3. Real NASA Blue Marble High-Resolution Earth Map
    const earthDayTexture = textureLoader.load('/assets/earth_daymap.jpg', () => {
      renderer.render(scene, camera);
    });
    earthDayTexture.colorSpace = THREE.SRGBColorSpace;

    const earthGeometry = new THREE.SphereGeometry(earthRadius, 64, 64);
    const earthMaterial = new THREE.MeshPhongMaterial({
      map: earthDayTexture,
      shininess: 18,
      specular: new THREE.Color(0x38bdf8),
      emissive: new THREE.Color(0x020713),
      emissiveIntensity: 0.2,
    });

    const earthMesh = new THREE.Mesh(earthGeometry, earthMaterial);
    globeGroup.add(earthMesh);

    // 4. Photorealistic Cloud Mesh Layer
    const cloudsTexture = textureLoader.load('/assets/earth_clouds.png');
    const cloudsGeometry = new THREE.SphereGeometry(earthRadius * 1.012, 64, 64);
    const cloudsMaterial = new THREE.MeshPhongMaterial({
      map: cloudsTexture,
      transparent: true,
      opacity: 0.38,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    });
    const cloudsMesh = new THREE.Mesh(cloudsGeometry, cloudsMaterial);
    cloudsMeshRef.current = cloudsMesh;
    globeGroup.add(cloudsMesh);

    // 5. Atmospheric Scattering Outer Glow Layer (Fresnel Halo)
    const atmosphereGeometry = new THREE.SphereGeometry(earthRadius * 1.05, 64, 64);
    const atmosphereMaterial = new THREE.MeshBasicMaterial({
      color: 0x38bdf8,
      transparent: true,
      opacity: 0.15,
      side: THREE.BackSide,
      blending: THREE.AdditiveBlending,
    });
    const atmosphereMesh = new THREE.Mesh(atmosphereGeometry, atmosphereMaterial);
    scene.add(atmosphereMesh);

    // 6. Precise 3D Location Beacon at NSIT Bihta, Patna, India (25.5684° N, 84.8872° E)
    const pinPos = latLonToVector3(NSIT_COORDS.lat, NSIT_COORDS.lon, earthRadius * 1.015);

    // Glowing Cyan Beacon Core
    const pinGeometry = new THREE.SphereGeometry(0.038, 16, 16);
    const pinMaterial = new THREE.MeshBasicMaterial({ color: 0x22d3ee });
    const pinMesh = new THREE.Mesh(pinGeometry, pinMaterial);
    pinMesh.position.copy(pinPos);
    globeGroup.add(pinMesh);

    // Vertical Beacon Ray to Surface
    const rayGeometry = new THREE.CylinderGeometry(0.006, 0.006, 0.12, 8);
    const rayMaterial = new THREE.MeshBasicMaterial({ color: 0x38bdf8 });
    const rayMesh = new THREE.Mesh(rayGeometry, rayMaterial);
    rayMesh.position.copy(pinPos.clone().multiplyScalar(1.025));
    rayMesh.quaternion.setFromUnitVectors(new THREE.Vector3(0, 1, 0), pinPos.clone().normalize());
    globeGroup.add(rayMesh);

    // Expanding Pulse Ring on Earth Surface
    const ringGeometry = new THREE.RingGeometry(0.03, 0.08, 32);
    const ringMaterial = new THREE.MeshBasicMaterial({
      color: 0x22d3ee,
      side: THREE.DoubleSide,
      transparent: true,
      opacity: 0.85,
    });
    const ringMesh = new THREE.Mesh(ringGeometry, ringMaterial);
    ringMesh.position.copy(pinPos.clone().multiplyScalar(1.008));
    ringMesh.lookAt(pinPos.clone().multiplyScalar(2));
    globeGroup.add(ringMesh);

    // 7. Concentric Hairline Orbital Trajectory Rings
    const createOrbitRing = (radius: number, tiltX: number, tiltY: number, color = 0x38bdf8, opacity = 0.22) => {
      const ringGeom = new THREE.BufferGeometry();
      const points: THREE.Vector3[] = [];
      const segments = 128;
      for (let i = 0; i <= segments; i++) {
        const theta = (i / segments) * Math.PI * 2;
        points.push(new THREE.Vector3(Math.cos(theta) * radius, 0, Math.sin(theta) * radius));
      }
      ringGeom.setFromPoints(points);

      const ringMat = new THREE.LineBasicMaterial({
        color,
        transparent: true,
        opacity,
      });

      const line = new THREE.Line(ringGeom, ringMat);
      line.rotation.x = tiltX;
      line.rotation.y = tiltY;
      return line;
    };

    const orbit1 = createOrbitRing(1.85, 0.35, 0.25, 0x38bdf8, 0.28);
    const orbit2 = createOrbitRing(2.15, -0.4, 0.5, 0x22d3ee, 0.22);
    const orbit3 = createOrbitRing(2.45, 0.6, -0.3, 0xffffff, 0.16);
    globeGroup.add(orbit1);
    globeGroup.add(orbit2);
    globeGroup.add(orbit3);

    // 8. Balanced Cinematic Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.85);
    scene.add(ambientLight);

    const sunLight = new THREE.DirectionalLight(0xffffff, 1.8);
    sunLight.position.set(6, 4, 5);
    scene.add(sunLight);

    const rimLight = new THREE.DirectionalLight(0x38bdf8, 1.4);
    rimLight.position.set(-6, -2, -4);
    scene.add(rimLight);

    // 9. Interactive Mouse & Touch Drag Handlers
    const onMouseDown = (e: MouseEvent) => {
      isDraggingRef.current = true;
      previousMousePos.current = { x: e.clientX, y: e.clientY };
      setAutoRotate(false);
    };

    const onMouseMove = (e: MouseEvent) => {
      if (!isDraggingRef.current) return;
      const deltaX = e.clientX - previousMousePos.current.x;
      const deltaY = e.clientY - previousMousePos.current.y;

      targetRotation.current.y += deltaX * 0.005;
      targetRotation.current.x += deltaY * 0.005;

      // Limit pitch to prevent upside down flips
      targetRotation.current.x = Math.max(-Math.PI / 2.2, Math.min(Math.PI / 2.2, targetRotation.current.x));

      previousMousePos.current = { x: e.clientX, y: e.clientY };
    };

    const onMouseUp = () => {
      isDraggingRef.current = false;
    };

    // Touch controls for mobile
    const onTouchStart = (e: TouchEvent) => {
      if (e.touches.length === 1) {
        isDraggingRef.current = true;
        previousMousePos.current = { x: e.touches[0].clientX, y: e.touches[0].clientY };
        setAutoRotate(false);
      }
    };

    const onTouchMove = (e: TouchEvent) => {
      if (!isDraggingRef.current || e.touches.length !== 1) return;
      const deltaX = e.touches[0].clientX - previousMousePos.current.x;
      const deltaY = e.touches[0].clientY - previousMousePos.current.y;

      targetRotation.current.y += deltaX * 0.006;
      targetRotation.current.x += deltaY * 0.006;
      targetRotation.current.x = Math.max(-Math.PI / 2.2, Math.min(Math.PI / 2.2, targetRotation.current.x));

      previousMousePos.current = { x: e.touches[0].clientX, y: e.touches[0].clientY };
    };

    const onTouchEnd = () => {
      isDraggingRef.current = false;
    };

    const domElement = renderer.domElement;
    domElement.addEventListener('mousedown', onMouseDown);
    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mouseup', onMouseUp);

    domElement.addEventListener('touchstart', onTouchStart, { passive: true });
    window.addEventListener('touchmove', onTouchMove, { passive: true });
    window.addEventListener('touchend', onTouchEnd);

    // 10. Resize handler
    const handleResize = () => {
      if (!container || !renderer || !camera) return;
      const newWidth = container.clientWidth || 700;
      const newHeight = container.clientHeight || 560;

      camera.aspect = newWidth / newHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(newWidth, newHeight);
    };

    window.addEventListener('resize', handleResize);

    // 11. Render Loop with Smooth Camera Fly-To & Zoom Interpolation
    let animationFrameId: number;
    const clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);

      const elapsedTime = clock.getElapsedTime();

      // Gentle auto rotation when enabled
      if (autoRotate && !isDraggingRef.current) {
        targetRotation.current.y += 0.0016;
      }

      // Slowly drift clouds independently for realism
      if (cloudsMeshRef.current) {
        cloudsMeshRef.current.rotation.y += 0.0003;
      }

      // Smooth rotation damping (slerp-like feel)
      currentRotation.current.x += (targetRotation.current.x - currentRotation.current.x) * 0.07;
      currentRotation.current.y += (targetRotation.current.y - currentRotation.current.y) * 0.07;

      if (globeGroup) {
        globeGroup.rotation.x = currentRotation.current.x;
        globeGroup.rotation.y = currentRotation.current.y;
      }

      // Smooth camera zoom flight animation (fly-to zoom effect!)
      currentCameraZ.current += (targetCameraZ.current - currentCameraZ.current) * 0.06;
      if (camera) {
        camera.position.z = currentCameraZ.current;
      }

      // Pulse ring animation over Patna, India
      const pulse = 1 + Math.sin(elapsedTime * 4.5) * 0.35;
      ringMesh.scale.set(pulse, pulse, pulse);
      ringMaterial.opacity = 0.4 + Math.sin(elapsedTime * 4.5) * 0.45;

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseup', onMouseUp);
      window.removeEventListener('touchmove', onTouchMove);
      window.removeEventListener('touchend', onTouchEnd);

      domElement.removeEventListener('mousedown', onMouseDown);
      domElement.removeEventListener('touchstart', onTouchStart);

      earthGeometry.dispose();
      earthMaterial.dispose();
      earthDayTexture.dispose();
      cloudsGeometry.dispose();
      cloudsMaterial.dispose();
      cloudsTexture.dispose();
      renderer.dispose();
    };
  }, [autoRotate]);

  // Manual zoom buttons (+ / -)
  const handleZoom = (delta: number) => {
    targetCameraZ.current = Math.max(2.1, Math.min(6.5, targetCameraZ.current + delta));
    setIsZoomedIn(targetCameraZ.current < 3.2);
  };

  return (
    <div className={`relative w-full rounded-3xl border border-white/10 bg-black overflow-hidden shadow-2xl ${className}`}>
      {/* 3D WebGL Canvas Viewport */}
      <div
        ref={mountRef}
        className="relative h-[480px] sm:h-[540px] md:h-[600px] w-full cursor-grab active:cursor-grabbing select-none"
      />

      {/* Target Pin HUD Card (Bottom Left) */}
      <div className="absolute bottom-4 left-4 right-4 sm:right-auto sm:max-w-md pointer-events-auto">
        <div className="rounded-2xl border border-cyan-400/40 bg-zinc-950/90 p-4 backdrop-blur-xl shadow-2xl">
          <div className="flex items-center justify-between gap-3 border-b border-white/10 pb-2 mb-2">
            <div className="flex items-center gap-1.5 text-cyan-400 font-mono text-[10px] font-bold uppercase tracking-wider">
              <MapPin className="h-3.5 w-3.5 text-cyan-400 animate-bounce" />
              <span>OFFICIAL SUMMIT VENUE LOCATION</span>
            </div>
            <span className="font-mono text-[9px] text-emerald-400 bg-emerald-500/10 border border-emerald-500/30 px-2 py-0.5 rounded-full font-bold">
              VERIFIED
            </span>
          </div>

          <h4 className="font-heading text-base font-bold text-white">
            {NSIT_COORDS.name}
          </h4>
          <p className="text-xs text-zinc-300 mt-0.5 font-mono">
            {NSIT_COORDS.details}
          </p>
          <div className="mt-2 flex items-center justify-between font-mono text-[10px] text-zinc-400 pt-1.5 border-t border-white/5">
            <span>SATELLITE COORDINATES:</span>
            <span className="text-cyan-300 font-bold">25.5684° N, 84.8872° E</span>
          </div>
        </div>
      </div>

      {/* Target Notification Toast (Fires on Zoom-in to NSIT Bihta) */}
      {targetNotice && (
        <div className="absolute top-16 left-1/2 -translate-x-1/2 pointer-events-none z-20">
          <div className="rounded-full bg-cyan-950/90 border border-cyan-400 px-5 py-2 text-xs font-mono text-cyan-300 backdrop-blur-xl shadow-[0_0_25px_rgba(34,211,238,0.6)] flex items-center gap-2 animate-pulse">
            <Sparkles className="h-4 w-4 text-cyan-300" />
            <span className="font-bold tracking-wide">{targetNotice}</span>
          </div>
        </div>
      )}

      {/* Interactive Controls Overlay (Top Right) */}
      <div className="absolute top-4 right-4 flex items-center gap-2 z-10">
        {/* Fly-to Zoom Button: "Locate NSIT Bihta" */}
        <button
          type="button"
          onClick={locateAndZoomToNSIT}
          title="Fly & Zoom camera directly into NSIT Bihta, Patna, India"
          className="inline-flex items-center gap-1.5 rounded-xl bg-gradient-to-r from-cyan-400 via-sky-400 to-blue-500 px-4 py-2 text-xs font-bold text-black shadow-[0_0_20px_rgba(34,211,238,0.5)] hover:brightness-110 active:scale-95 transition-all cursor-pointer"
        >
          <Target className="h-4 w-4 text-black animate-pulse" />
          <span>Locate & Zoom to NSIT</span>
        </button>

        {/* Reset View Button */}
        {isZoomedIn && (
          <button
            type="button"
            onClick={resetOrbitView}
            title="Reset to Full Orbit View"
            className="inline-flex items-center gap-1 rounded-xl border border-white/20 bg-zinc-900/90 px-3 py-2 text-xs font-mono text-zinc-300 hover:text-white hover:border-cyan-400 transition-all cursor-pointer"
          >
            <RefreshCcw className="h-3.5 w-3.5" />
            <span>Reset View</span>
          </button>
        )}

        {/* Auto Rotate Toggle */}
        <button
          type="button"
          onClick={() => setAutoRotate(!autoRotate)}
          title="Toggle Auto Rotation"
          className={`flex h-9 w-9 items-center justify-center rounded-xl border transition-all cursor-pointer ${
            autoRotate
              ? 'border-cyan-400 bg-cyan-950/80 text-cyan-400 shadow-sm'
              : 'border-white/15 bg-black/70 text-zinc-400 hover:text-white'
          }`}
        >
          <RotateCw className={`h-4 w-4 ${autoRotate ? 'animate-spin-slow' : ''}`} />
        </button>

        {/* Zoom In */}
        <button
          type="button"
          onClick={() => handleZoom(-0.7)}
          title="Zoom In"
          className="flex h-9 w-9 items-center justify-center rounded-xl border border-white/15 bg-black/70 text-zinc-300 hover:text-white hover:border-white/30 transition-all cursor-pointer"
        >
          <ZoomIn className="h-4 w-4" />
        </button>

        {/* Zoom Out */}
        <button
          type="button"
          onClick={() => handleZoom(0.7)}
          title="Zoom Out"
          className="flex h-9 w-9 items-center justify-center rounded-xl border border-white/15 bg-black/70 text-zinc-300 hover:text-white hover:border-white/30 transition-all cursor-pointer"
        >
          <ZoomOut className="h-4 w-4" />
        </button>
      </div>

      {/* Top Left Hint */}
      <div className="absolute top-4 left-4 hidden sm:flex items-center gap-2 rounded-full border border-white/10 bg-black/70 px-3.5 py-1.5 font-mono text-[10px] text-zinc-300 backdrop-blur-md pointer-events-none">
        <Compass className="h-3.5 w-3.5 text-cyan-400" />
        <span>DRAG TO ROTATE 3D GLOBE • CLICK BUTTON TO FLY & ZOOM</span>
      </div>
    </div>
  );
}
