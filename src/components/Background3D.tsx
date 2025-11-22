"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { Suspense, useMemo, useRef, useState } from "react";

type Variant = "calm" | "neon" | "pastel";

const COLORS: Record<Variant, string[]> = {
  calm: ["#99e9f2", "#b2f2bb", "#d0ebff"],
  neon: ["#00f5d4", "#00bbf9", "#f15bb5"],
  pastel: ["#ffd6ff", "#caffbf", "#bde0fe"],
};

function rand(min: number, max: number) {
  return min + Math.random() * (max - min);
}
function pick<T>(arr: T[]) {
  return arr[Math.floor(Math.random() * arr.length)];
}

function Bubble({
  palette,
  radius,
}: {
  palette: string[];
  radius: number;
}) {
  const ref = useRef<THREE.Mesh>(null!);

  // Persistent motion parameters
  const speed = useMemo(() => rand(0.02, 0.08), []);
  const baseColor = useMemo(() => new THREE.Color(pick(palette)), [palette]);

  // Position kept in a ref so we can re-roll without re-render
  const pos = useRef(
    new THREE.Vector3(rand(-radius, radius), rand(-radius, radius), rand(-radius, radius))
  );

  // Visual state
  const [scale, setScale] = useState(1);
  const [opacity, setOpacity] = useState(0.32);
  const [color] = useState(() => baseColor.getHex());

  // Phase machine: "idle" → "popping" → "fading" → respawn → "idle"
  const phase = useRef<"idle" | "popping" | "fading">("idle");

  // Helper to respawn below and reset visuals
  const respawn = () => {
    pos.current.set(rand(-radius, radius), -radius, rand(-radius, radius));
    setScale(1);
    setOpacity(0.32);
    phase.current = "idle";
  };

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();

    // Float up and sway
    pos.current.y += speed * 0.03;
    if (pos.current.y > radius) pos.current.y = -radius;
    pos.current.x += Math.sin(t * 0.5 + pos.current.z) * 0.003;
    pos.current.z += Math.cos(t * 0.4 + pos.current.x) * 0.002;

    // Animate phases
    if (phase.current === "popping") {
      // quick expand
      setScale((s) => Math.min(2.8, s + 0.2));
      if (scale >= 2.6) phase.current = "fading";
    } else if (phase.current === "fading") {
      // shrink + fade out
      setScale((s) => Math.max(0.1, s - 0.12));
      setOpacity((o) => Math.max(0, o - 0.06));
      if (opacity <= 0.05) respawn();
    }

    // Apply transforms
    ref.current.position.copy(pos.current);
    ref.current.rotation.y = t * 0.2;
  });

  return (
    <mesh
      ref={ref}
      scale={scale}
      onClick={(e) => {
        e.stopPropagation();
        if (phase.current === "idle") {
          phase.current = "popping";
        }
      }}
    >
      <sphereGeometry args={[0.25, 16, 16]} />
      <meshStandardMaterial
        color={color}
        transparent
        opacity={opacity}
        roughness={0.25}
        metalness={0.1}
        emissive={color}
        emissiveIntensity={0.35}
        depthWrite={false}
        blending={THREE.AdditiveBlending}
      />
    </mesh>
  );
}

function BubbleField({ variant }: { variant: Variant }) {
  const radius = 6.5;
  const count = 60;
  const palette = COLORS[variant];

  // Stable list so React keys don’t churn
  const seeds = useMemo(() => Array.from({ length: count }, (_, i) => i), []);

  return (
    <>
      {seeds.map((i) => (
        <Bubble key={i} palette={palette} radius={radius} />
      ))}
    </>
  );
}

export default function Background3D({ variant = "calm" as Variant }) {
  return (
    // NOTE: allow pointer events so clicks reach the bubbles
    <div className="fixed inset-0 -z-50">
      <Canvas
        camera={{ position: [0, 0, 6], fov: 60 }}
        gl={{ alpha: true }}
        onCreated={({ gl }) => gl.setClearColor(0x000000, 0)}
      >
        <Suspense fallback={null}>
          <ambientLight intensity={0.9} />
          <directionalLight position={[2, 2, 2]} intensity={0.7} />
          <BubbleField variant={variant} />
        </Suspense>
      </Canvas>
    </div>
  );
}
