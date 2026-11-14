import { useEffect, useRef, useState, useCallback } from 'react';
import * as THREE from 'three';
import {
  Compass,
  RotateCw,
  ZoomIn,
  ZoomOut,
  Target,
  MapPin,
  Sparkles,
  RefreshCcw,
  Rocket,
  Layers,
  Building,
  Cpu,
  BookOpen,
  CheckCircle2,
  ExternalLink,
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface InteractiveGlobeProps {
  className?: string;
}

// Exact geographical coordinates for NSIT Bihta, Patna, India
const NSIT_COORDS = {
  lat: 25.5684,
  lon: 84.8872,
  name: 'NSIT Bihta, Patna',
  fullAddress: 'Amhara, Bihta, Patna, Bihar – 801106, India',
  highway: 'NH-922 Patna–Buxar Expressway',
  elevation: '52 m above sea level',
};

// Precise mathematical rotation angles to bring coordinates dead-center to camera (0, 0, +Z)
// Using Euler rotation with order 'YXZ':
const TARGET_ROTATION_INDIA = {
  x: -(NSIT_COORDS.lat * Math.PI) / 180, // -0.44625 rad (-25.57° tilt)
  y: -((NSIT_COORDS.lon * Math.PI) / 180) - Math.PI / 2, // -3.0523 rad
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

// 7 Verified Street-Level Campus Hotspots with Authentic Photographic Evidence
const STREET_LEVEL_HOTSPOTS = [
  {
    id: 'facade',
    name: 'Main Academic Building & Fountain Plaza',
    role: 'Central Academic Block',
    coordinates: '25.5684° N, 84.8872° E',
    image: '/assets/nsit-campus.jpg',
    description:
      'Iconic multi-storey academic complex with central fountain court, administrative offices, and conference registration desk along NH-922.',
    icon: Building,
  },
  {
    id: 'auditorium',
    name: 'Central Plenary Seminar Auditorium',
    role: 'Keynote & Presentation Stage',
    coordinates: 'Academic Wing Floor 1',
    image: '/assets/nsit-classroom.png',
    description:
      'Air-conditioned tiered plenary hall equipped with digital projection systems, surround sound acoustic panels, and presentation podium.',
    icon: Layers,
  },
  {
    id: 'computing',
    name: 'High-Tech Computing Laboratory',
    role: 'Technical Demonstrations',
    coordinates: 'IT Wing Floor 1',
    image: '/assets/nsit-computing.jpg',
    description:
      'Centralized computer terminal facility running high-speed campus LAN network for live coding demonstrations and algorithm tracks.',
    icon: Cpu,
  },
  {
    id: 'library',
    name: 'Central Institutional Library',
    role: 'Academic Research Stacks',
    coordinates: 'Central Floor',
    image: '/assets/nsit-library.png',
    description:
      'Engineering textbook stacks, academic periodicals, and quiet reading desks for visiting delegates and faculty scholars.',
    icon: BookOpen,
  },
  {
    id: 'sports',
    name: '11-Acre Athletic Grounds & Fleet',
    role: 'Sports Complex & Parking',
    coordinates: 'Open Campus Quadrangle',
    image: '/assets/nsit-sports-grounds.jpg',
    description:
      'Sprawling outdoor sports fields, cricket pitch, open-air networking plazas, and institutional bus fleet connecting Patna.',
    icon: Building,
  },
];

export default function InteractiveGlobe({ className = '' }: InteractiveGlobeProps) {
  const mountRef = useRef<HTMLDivElement>(null);
  const [autoRotate, setAutoRotate] = useState(false);
  const [isZoomedIn, setIsZoomedIn] = useState(false);
  const [isFlying, setIsFlying] = useState(false);
  const [flightTelemetry, setFlightTelemetry] = useState<{
    stage: string;
    altitude: string;
    velocity: string;
  } | null>(null);

  // Street-level campus view modal state
  const [showStreetLevel, setShowStreetLevel] = useState(false);
  const [activeHotspotId, setActiveHotspotId] = useState<string>('facade');

  // Three.js instances
  const sceneRef = useRef<THREE.Scene | null>(null);
  const globeGroupRef = useRef<THREE.Group | null>(null);
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const cloudsMeshRef = useRef<THREE.Mesh | null>(null);
  const starFieldRef = useRef<THREE.Points | null>(null);

  // Interaction & smooth flight animation refs
  const isDraggingRef = useRef(false);
  const previousMousePos = useRef({ x: 0, y: 0 });

  // Camera zoom targets (4.8 = Orbit View, 1.48 = Street Level Approach right over surface 1.35)
  const targetCameraZ = useRef(4.8);
  const currentCameraZ = useRef(4.8);

  // Rotation targets
  const targetRotation = useRef({ ...TARGET_ROTATION_INDIA });
  const currentRotation = useRef({ ...TARGET_ROTATION_INDIA });

  // Cinematic Full Fly-To Zoom Animation to Street-Level
  const locateAndZoomToNSIT = useCallback(() => {
    setIsFlying(true);
    setAutoRotate(false);
    setShowStreetLevel(false);

    // 1. Orient the globe directly to NSIT Bihta, Patna
    targetRotation.current = {
      x: TARGET_ROTATION_INDIA.x,
      y: TARGET_ROTATION_INDIA.y,
    };

    // 2. High-speed cinematic dive towards surface
    targetCameraZ.current = 1.48;
    setIsZoomedIn(true);

    // Dynamic Telemetry Readout simulation
    setFlightTelemetry({
      stage: 'ORBITAL DESCENT TRAJECTORY LOCKED',
      altitude: '35,786 KM (GEOSTATIONARY ORBIT)',
      velocity: '7.8 KM/S',
    });

    const t1 = setTimeout(() => {
      setFlightTelemetry({
        stage: 'ATMOSPHERIC ENTRY // NORTHERN INDIA VECTOR',
        altitude: '1,200 KM (LOW EARTH ORBIT)',
        velocity: 'MACH 22',
      });
    }, 600);

    const t2 = setTimeout(() => {
      setFlightTelemetry({
        stage: 'APPROACHING PATNA–BIHTA AIRSPACE',
        altitude: '45 KM (STRATOSPHERE)',
        velocity: '850 KM/H',
      });
    }, 1200);

    const t3 = setTimeout(() => {
      setFlightTelemetry({
        stage: 'FINAL DESCENT // NSIT BIHTA CORRIDOR',
        altitude: '500 M (GROUND APPROACH)',
        velocity: '120 KM/H',
      });
    }, 1800);

    const t4 = setTimeout(() => {
      setFlightTelemetry({
        stage: 'TOUCHDOWN // NSIT BIHTA CAMPUS SURFACE',
        altitude: '52 M (GROUND LEVEL)',
        velocity: '0 KM/H',
      });
      setIsFlying(false);
      setShowStreetLevel(true);
    }, 2400);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
      clearTimeout(t4);
    };
  }, []);

  // Reset View to Full Space Orbit
  const resetOrbitView = useCallback(() => {
    targetCameraZ.current = 4.8;
    setIsZoomedIn(false);
    setShowStreetLevel(false);
    setIsFlying(false);
    setFlightTelemetry(null);

    targetRotation.current = {
      x: 0.15,
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

    // 2. 3D Deep Space Starfield (2,800 Multi-Colored Twinkling Stars in Orbit)
    const starCount = 2800;
    const starGeometry = new THREE.BufferGeometry();
    const starPositions = new Float32Array(starCount * 3);
    const starColors = new Float32Array(starCount * 3);

    const starColorWhite = new THREE.Color(0xffffff);
    const starColorCyan = new THREE.Color(0x38bdf8);
    const starColorGold = new THREE.Color(0xfde047);
    const starColorBlue = new THREE.Color(0x93c5fd);

    for (let i = 0; i < starCount; i++) {
      // Spherical shell distribution (radius 35 to 90)
      const r = 35 + Math.random() * 55;
      const phi = Math.acos(2 * Math.random() - 1);
      const theta = 2 * Math.PI * Math.random();

      starPositions[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      starPositions[i * 3 + 1] = r * Math.cos(phi);
      starPositions[i * 3 + 2] = r * Math.sin(phi) * Math.sin(theta);

      const rand = Math.random();
      const col =
        rand > 0.75
          ? starColorCyan
          : rand > 0.5
          ? starColorBlue
          : rand > 0.3
          ? starColorGold
          : starColorWhite;

      starColors[i * 3] = col.r;
      starColors[i * 3 + 1] = col.g;
      starColors[i * 3 + 2] = col.b;
    }

    starGeometry.setAttribute('position', new THREE.BufferAttribute(starPositions, 3));
    starGeometry.setAttribute('color', new THREE.BufferAttribute(starColors, 3));

    // Star particle texture with soft radial glow
    const starCanvas = document.createElement('canvas');
    starCanvas.width = 32;
    starCanvas.height = 32;
    const starCtx = starCanvas.getContext('2d')!;
    const grad = starCtx.createRadialGradient(16, 16, 0, 16, 16, 16);
    grad.addColorStop(0, 'rgba(255, 255, 255, 1)');
    grad.addColorStop(0.2, 'rgba(224, 242, 254, 0.9)');
    grad.addColorStop(0.5, 'rgba(56, 189, 248, 0.3)');
    grad.addColorStop(1, 'rgba(0, 0, 0, 0)');
    starCtx.fillStyle = grad;
    starCtx.fillRect(0, 0, 32, 32);
    const starTexture = new THREE.CanvasTexture(starCanvas);

    const starMaterial = new THREE.PointsMaterial({
      size: 1.4,
      vertexColors: true,
      map: starTexture,
      transparent: true,
      opacity: 0.95,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    });

    const starField = new THREE.Points(starGeometry, starMaterial);
    scene.add(starField);
    starFieldRef.current = starField;

    // 3. Globe Group (Rotates in 3D space with verified 'YXZ' Euler order)
    const globeGroup = new THREE.Group();
    globeGroup.rotation.order = 'YXZ';
    globeGroupRef.current = globeGroup;
    scene.add(globeGroup);

    globeGroup.rotation.x = currentRotation.current.x;
    globeGroup.rotation.y = currentRotation.current.y;

    const earthRadius = 1.35;
    const textureLoader = new THREE.TextureLoader();

    // 4. Real NASA Blue Marble High-Resolution Earth Map
    const earthDayTexture = textureLoader.load('/assets/earth_daymap.jpg', () => {
      renderer.render(scene, camera);
    });
    earthDayTexture.colorSpace = THREE.SRGBColorSpace;

    const earthGeometry = new THREE.SphereGeometry(earthRadius, 64, 64);
    const earthMaterial = new THREE.MeshPhongMaterial({
      map: earthDayTexture,
      shininess: 22,
      specular: new THREE.Color(0x38bdf8),
      emissive: new THREE.Color(0x030816),
      emissiveIntensity: 0.25,
    });

    const earthMesh = new THREE.Mesh(earthGeometry, earthMaterial);
    globeGroup.add(earthMesh);

    // 5. Photorealistic Cloud Mesh Layer
    const cloudsTexture = textureLoader.load('/assets/earth_clouds.png');
    const cloudsGeometry = new THREE.SphereGeometry(earthRadius * 1.012, 64, 64);
    const cloudsMaterial = new THREE.MeshPhongMaterial({
      map: cloudsTexture,
      transparent: true,
      opacity: 0.4,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    });
    const cloudsMesh = new THREE.Mesh(cloudsGeometry, cloudsMaterial);
    cloudsMeshRef.current = cloudsMesh;
    globeGroup.add(cloudsMesh);

    // 6. Atmospheric Scattering Outer Glow Layer (Fresnel Halo)
    const atmosphereGeometry = new THREE.SphereGeometry(earthRadius * 1.055, 64, 64);
    const atmosphereMaterial = new THREE.MeshBasicMaterial({
      color: 0x38bdf8,
      transparent: true,
      opacity: 0.16,
      side: THREE.BackSide,
      blending: THREE.AdditiveBlending,
    });
    const atmosphereMesh = new THREE.Mesh(atmosphereGeometry, atmosphereMaterial);
    scene.add(atmosphereMesh);

    // 7. Precise 3D Location Beacon at NSIT Bihta, Patna, India (25.5684° N, 84.8872° E)
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

    // 8. Concentric Hairline Orbital Trajectory Rings
    const createOrbitRing = (radius: number, tiltX: number, tiltY: number, color = 0x38bdf8, opacity = 0.22) => {
      const ringGeom = new THREE.BufferGeometry();
      const points: THREE.Vector3[] = [];
      const segments = 128;
      for (let i = 0; i <= segments; i++) {
        const th = (i / segments) * Math.PI * 2;
        points.push(new THREE.Vector3(Math.cos(th) * radius, 0, Math.sin(th) * radius));
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

    // 9. Balanced Cinematic Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.9);
    scene.add(ambientLight);

    const sunLight = new THREE.DirectionalLight(0xffffff, 1.9);
    sunLight.position.set(6, 4, 5);
    scene.add(sunLight);

    const rimLight = new THREE.DirectionalLight(0x38bdf8, 1.4);
    rimLight.position.set(-6, -2, -4);
    scene.add(rimLight);

    // 10. Interactive Mouse & Touch Drag Handlers (Smooth & Mobile-Friendly)
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

    // Touch controls for phones (Single-touch rotate with touch-action: none)
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
    domElement.style.touchAction = 'none'; // Critical for phones: prevents page bounce while dragging globe
    domElement.addEventListener('mousedown', onMouseDown);
    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mouseup', onMouseUp);

    domElement.addEventListener('touchstart', onTouchStart, { passive: true });
    window.addEventListener('touchmove', onTouchMove, { passive: true });
    window.addEventListener('touchend', onTouchEnd);

    // 11. Resize handler
    const handleResize = () => {
      if (!container || !renderer || !camera) return;
      const newWidth = container.clientWidth || 700;
      const newHeight = container.clientHeight || 560;

      camera.aspect = newWidth / newHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(newWidth, newHeight);
    };

    window.addEventListener('resize', handleResize);

    // 12. Render Loop with Smooth Camera Fly-To & Zoom Interpolation
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

      // Gently rotate starfield in space
      if (starFieldRef.current) {
        starFieldRef.current.rotation.y += 0.0001;
        starFieldRef.current.rotation.x += 0.00005;
      }

      // Smooth rotation damping (order 'YXZ')
      currentRotation.current.x += (targetRotation.current.x - currentRotation.current.x) * 0.08;
      currentRotation.current.y += (targetRotation.current.y - currentRotation.current.y) * 0.08;

      if (globeGroup) {
        globeGroup.rotation.order = 'YXZ';
        globeGroup.rotation.x = currentRotation.current.x;
        globeGroup.rotation.y = currentRotation.current.y;
      }

      // Smooth camera zoom flight animation (fly-to zoom effect!)
      currentCameraZ.current += (targetCameraZ.current - currentCameraZ.current) * 0.07;
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
      starGeometry.dispose();
      starMaterial.dispose();
      starTexture.dispose();
      renderer.dispose();
    };
  }, [autoRotate]);

  // Manual zoom buttons (+ / -)
  const handleZoom = (delta: number) => {
    targetCameraZ.current = Math.max(1.48, Math.min(6.5, targetCameraZ.current + delta));
    setIsZoomedIn(targetCameraZ.current < 3.2);
    if (targetCameraZ.current <= 1.6) {
      setShowStreetLevel(true);
    } else {
      setShowStreetLevel(false);
    }
  };

  const selectedHotspot =
    STREET_LEVEL_HOTSPOTS.find((h) => h.id === activeHotspotId) || STREET_LEVEL_HOTSPOTS[0];

  return (
    <div
      className={`relative w-full rounded-3xl border border-white/10 overflow-hidden shadow-2xl bg-gradient-to-b from-[#020409] via-[#050b14] to-[#020409] ${className}`}
    >
      {/* 3D WebGL Canvas Viewport */}
      <div
        ref={mountRef}
        className="relative h-[400px] sm:h-[480px] md:h-[580px] w-full cursor-grab active:cursor-grabbing select-none"
      />

      {/* Target Pin HUD Card (Bottom Left) — Compact & Responsive on Mobile */}
      {!showStreetLevel && (
        <div className="absolute bottom-3 left-3 right-3 sm:right-auto sm:max-w-sm pointer-events-auto z-10">
          <div className="rounded-2xl border border-cyan-400/40 bg-zinc-950/90 p-3 sm:p-4 backdrop-blur-xl shadow-2xl">
            <div className="flex items-center justify-between gap-2 border-b border-white/10 pb-2 mb-2">
              <div className="flex items-center gap-1.5 text-cyan-400 font-mono text-[10px] font-bold uppercase tracking-wider">
                <MapPin className="h-3.5 w-3.5 text-cyan-400 animate-bounce shrink-0" />
                <span className="truncate">OFFICIAL SUMMIT VENUE PIN</span>
              </div>
              <span className="font-mono text-[9px] text-emerald-400 bg-emerald-500/10 border border-emerald-500/30 px-2 py-0.5 rounded-full font-bold shrink-0">
                VERIFIED
              </span>
            </div>

            <div className="flex items-start justify-between gap-2">
              <div className="min-w-0">
                <h4 className="font-heading text-sm sm:text-base font-bold text-white truncate">
                  {NSIT_COORDS.name}
                </h4>
                <p className="text-[11px] sm:text-xs text-zinc-300 mt-0.5 font-mono truncate">
                  {NSIT_COORDS.fullAddress}
                </p>
              </div>

              {/* Quick Street Level Trigger */}
              <button
                type="button"
                onClick={locateAndZoomToNSIT}
                className="rounded-lg bg-cyan-400/20 border border-cyan-400/40 px-2.5 py-1 text-[10px] font-mono font-bold text-cyan-300 hover:bg-cyan-400 hover:text-black transition-all shrink-0 cursor-pointer"
              >
                Inspect
              </button>
            </div>

            <div className="mt-2 flex items-center justify-between font-mono text-[10px] text-zinc-400 pt-1.5 border-t border-white/5">
              <span>SATELLITE COORDINATES:</span>
              <span className="text-cyan-300 font-bold">25.5684° N, 84.8872° E</span>
            </div>
          </div>
        </div>
      )}

      {/* Flight Telemetry HUD Toast (During Fly-To Zoom Descent) */}
      <AnimatePresence>
        {isFlying && flightTelemetry && (
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10 }}
            className="absolute top-16 left-3 right-3 sm:left-1/2 sm:-translate-x-1/2 sm:w-auto pointer-events-none z-30"
          >
            <div className="rounded-2xl bg-cyan-950/95 border border-cyan-400/80 p-3.5 sm:px-6 sm:py-3 text-xs font-mono text-cyan-300 backdrop-blur-2xl shadow-[0_0_35px_rgba(34,211,238,0.7)] flex flex-col sm:flex-row items-center gap-3">
              <div className="flex items-center gap-2">
                <Sparkles className="h-4 w-4 text-cyan-300 animate-spin-slow shrink-0" />
                <span className="font-bold tracking-wider uppercase text-[11px] sm:text-xs">
                  {flightTelemetry.stage}
                </span>
              </div>
              <div className="flex items-center gap-3 text-[10px] sm:text-[11px] text-zinc-300 border-t sm:border-t-0 sm:border-l border-white/15 pt-1.5 sm:pt-0 sm:pl-3">
                <span>
                  ALT: <strong className="text-white">{flightTelemetry.altitude}</strong>
                </span>
                <span>
                  VEL: <strong className="text-cyan-400">{flightTelemetry.velocity}</strong>
                </span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Interactive Controls Overlay (Top Right) — Clean & Responsive on Phones */}
      <div className="absolute top-3 right-3 flex items-center gap-1.5 sm:gap-2 z-20">
        {/* Fly-to Zoom Button: "Locate NSIT Bihta" */}
        <button
          type="button"
          onClick={locateAndZoomToNSIT}
          title="Fly & Zoom camera directly into NSIT Bihta at street level"
          className="inline-flex items-center gap-1 sm:gap-1.5 rounded-xl bg-gradient-to-r from-cyan-400 via-sky-400 to-blue-500 px-3 sm:px-4 py-1.5 sm:py-2 text-[11px] sm:text-xs font-bold text-black shadow-[0_0_20px_rgba(34,211,238,0.5)] hover:brightness-110 active:scale-95 transition-all cursor-pointer shrink-0"
        >
          <Target className="h-3.5 w-3.5 text-black animate-pulse shrink-0" />
          <span className="hidden xs:inline">Zoom to NSIT</span>
          <span className="xs:hidden">Zoom</span>
        </button>

        {/* Reset / Space Orbit Button */}
        {isZoomedIn && (
          <button
            type="button"
            onClick={resetOrbitView}
            title="Reset to Full Orbit View"
            className="inline-flex items-center gap-1 rounded-xl border border-white/20 bg-zinc-900/90 px-2.5 sm:px-3 py-1.5 sm:py-2 text-[11px] sm:text-xs font-mono text-zinc-300 hover:text-white hover:border-cyan-400 transition-all cursor-pointer shrink-0"
          >
            <RefreshCcw className="h-3.5 w-3.5 shrink-0" />
            <span className="hidden sm:inline">Orbit View</span>
          </button>
        )}

        {/* Auto Rotate Toggle */}
        <button
          type="button"
          onClick={() => setAutoRotate(!autoRotate)}
          title="Toggle Auto Rotation"
          className={`flex h-8 w-8 sm:h-9 sm:w-9 items-center justify-center rounded-xl border transition-all cursor-pointer ${
            autoRotate
              ? 'border-cyan-400 bg-cyan-950/80 text-cyan-400 shadow-sm'
              : 'border-white/15 bg-black/70 text-zinc-400 hover:text-white'
          }`}
        >
          <RotateCw className={`h-3.5 w-3.5 ${autoRotate ? 'animate-spin-slow' : ''}`} />
        </button>

        {/* Zoom In */}
        <button
          type="button"
          onClick={() => handleZoom(-0.7)}
          title="Zoom In"
          className="hidden xs:flex h-8 w-8 sm:h-9 sm:w-9 items-center justify-center rounded-xl border border-white/15 bg-black/70 text-zinc-300 hover:text-white hover:border-white/30 transition-all cursor-pointer"
        >
          <ZoomIn className="h-3.5 w-3.5" />
        </button>

        {/* Zoom Out */}
        <button
          type="button"
          onClick={() => handleZoom(0.7)}
          title="Zoom Out"
          className="hidden xs:flex h-8 w-8 sm:h-9 sm:w-9 items-center justify-center rounded-xl border border-white/15 bg-black/70 text-zinc-300 hover:text-white hover:border-white/30 transition-all cursor-pointer"
        >
          <ZoomOut className="h-3.5 w-3.5" />
        </button>
      </div>

      {/* Top Left Hint */}
      <div className="absolute top-3 left-3 hidden md:flex items-center gap-2 rounded-full border border-white/10 bg-black/70 px-3.5 py-1.5 font-mono text-[10px] text-zinc-300 backdrop-blur-md pointer-events-none z-10">
        <Compass className="h-3.5 w-3.5 text-cyan-400" />
        <span>3D EARTH SPHERE • TWINKLING STARFIELD • CLICK ZOOM TO LAND AT CAMPUS</span>
      </div>

      {/* STREET-LEVEL CAMPUS VIEW (Smoothly Unlocks When Zoom Reaches Surface) */}
      <AnimatePresence>
        {showStreetLevel && (
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.98 }}
            transition={{ duration: 0.35, ease: 'easeOut' }}
            className="absolute inset-0 z-30 bg-black/92 backdrop-blur-2xl p-3 sm:p-6 flex flex-col justify-between overflow-y-auto"
          >
            {/* Header: Street Level Status Bar */}
            <div className="flex items-center justify-between gap-3 border-b border-white/10 pb-3">
              <div className="flex items-center gap-2 sm:gap-3 min-w-0">
                <span className="flex h-3 w-3 rounded-full bg-emerald-400 animate-pulse shrink-0 shadow-[0_0_8px_#34d399]" />
                <div className="min-w-0">
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-[10px] font-bold uppercase tracking-wider text-cyan-400">
                      TOUCHDOWN ACQUIRED // STREET LEVEL VIEW
                    </span>
                    <span className="rounded bg-emerald-500/10 border border-emerald-500/30 px-1.5 py-0.2 font-mono text-[9px] text-emerald-400 font-bold">
                      GROUND ELEVATION 52M
                    </span>
                  </div>
                  <h3 className="font-heading text-sm sm:text-lg font-black text-white truncate">
                    NSIT Bihta Academic Campus & Spatial Grounds
                  </h3>
                </div>
              </div>

              {/* Close / Return to Orbit Button */}
              <button
                type="button"
                onClick={resetOrbitView}
                className="inline-flex items-center gap-1.5 rounded-xl bg-gradient-to-r from-cyan-400 to-blue-500 px-3 py-1.5 text-xs font-bold text-black shadow-lg hover:brightness-110 active:scale-95 transition-all cursor-pointer shrink-0"
              >
                <Rocket className="h-3.5 w-3.5 text-black" />
                <span>Return to Space Orbit</span>
              </button>
            </div>

            {/* Main Stage: Photo & Hotspots Selector */}
            <div className="my-3 grid gap-4 lg:grid-cols-12 items-center flex-1 min-h-0">
              {/* Left Column: Authentic Photographic Street View */}
              <div className="lg:col-span-7 flex flex-col h-full min-h-[220px] sm:min-h-[280px]">
                <div className="relative flex-1 w-full rounded-2xl overflow-hidden border border-cyan-400/30 bg-zinc-950 shadow-2xl">
                  <img
                    src={selectedHotspot.image}
                    alt={selectedHotspot.name}
                    className="h-full w-full object-cover object-center"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent pointer-events-none" />

                  <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-xs font-mono text-zinc-300">
                    <div className="min-w-0 pr-2">
                      <span className="text-[10px] text-cyan-400 uppercase font-bold block">
                        {selectedHotspot.role}
                      </span>
                      <h4 className="font-heading text-sm sm:text-base font-bold text-white truncate">
                        {selectedHotspot.name}
                      </h4>
                    </div>
                    <span className="rounded bg-black/80 border border-white/20 px-2 py-1 text-[10px] text-cyan-300 shrink-0 font-bold">
                      {selectedHotspot.coordinates}
                    </span>
                  </div>
                </div>
              </div>

              {/* Right Column: Campus Hotspots Interactive List */}
              <div className="lg:col-span-5 flex flex-col gap-2 overflow-y-auto max-h-[280px] sm:max-h-[340px] pr-1">
                <span className="font-mono text-[10px] uppercase text-zinc-400 tracking-wider">
                  SELECT CAMPUS HOTSPOT // STREET-LEVEL INSPECTION:
                </span>
                {STREET_LEVEL_HOTSPOTS.map((spot) => {
                  const isSel = spot.id === activeHotspotId;
                  const Icon = spot.icon;
                  return (
                    <button
                      key={spot.id}
                      type="button"
                      onClick={() => setActiveHotspotId(spot.id)}
                      className={`group flex items-center justify-between gap-2.5 rounded-xl p-2 sm:p-2.5 text-left border transition-all cursor-pointer ${
                        isSel
                          ? 'border-cyan-400 bg-cyan-950/80 text-white shadow-md ring-1 ring-cyan-400/80'
                          : 'border-white/10 bg-zinc-950 text-zinc-300 hover:border-white/30 hover:bg-zinc-900'
                      }`}
                    >
                      <div className="flex items-center gap-2 min-w-0">
                        <div
                          className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-lg ${
                            isSel ? 'bg-cyan-400 text-black' : 'bg-white/5 text-zinc-400'
                          }`}
                        >
                          <Icon className="h-3.5 w-3.5" />
                        </div>
                        <div className="min-w-0">
                          <p className="font-heading text-xs font-bold truncate">
                            {spot.name}
                          </p>
                          <span className="font-mono text-[10px] text-zinc-400 block truncate">
                            {spot.role}
                          </span>
                        </div>
                      </div>

                      {isSel && <CheckCircle2 className="h-3.5 w-3.5 text-cyan-400 shrink-0" />}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Bottom Footer Bar: Coordinates & Google Maps Direct Link */}
            <div className="flex flex-wrap items-center justify-between gap-2 border-t border-white/10 pt-2.5 text-[11px] font-mono text-zinc-400">
              <div className="flex items-center gap-3">
                <span>GPS: <strong className="text-cyan-300 font-bold">25.5684° N, 84.8872° E</strong></span>
                <span className="hidden sm:inline">HIGHWAY: <strong className="text-white">NH-922 Corridor</strong></span>
              </div>
              <a
                href="https://maps.google.com/?q=Netaji+Subhas+Institute+of+Technology+Bihta+Patna"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-cyan-400 hover:underline"
              >
                <span>Open in Satellite Maps</span>
                <ExternalLink className="h-3 w-3" />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
