"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

const PALETTES = {
  hero: ["#9B7EDE", "#F28C8C", "#D8C8F2"],
  cta: ["#F28C8C", "#9B7EDE", "#4A2E32"],
};

function useIsSmallScreen() {
  const [isSmall, setIsSmall] = useState(false);
  useEffect(() => {
    const check = () => setIsSmall(window.innerWidth < 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);
  return isSmall;
}

function useGlowTexture() {
  return useMemo(() => {
    const size = 64;
    const canvas = document.createElement("canvas");
    canvas.width = size;
    canvas.height = size;
    const ctx = canvas.getContext("2d");
    const gradient = ctx.createRadialGradient(
      size / 2,
      size / 2,
      0,
      size / 2,
      size / 2,
      size / 2
    );
    gradient.addColorStop(0, "rgba(255,255,255,1)");
    gradient.addColorStop(0.4, "rgba(255,255,255,0.6)");
    gradient.addColorStop(1, "rgba(255,255,255,0)");
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, size, size);

    const texture = new THREE.CanvasTexture(canvas);
    texture.needsUpdate = true;
    return texture;
  }, []);
}

function ParticleField({ colors, count }) {
  const pointsRef = useRef(null);
  const elapsedRef = useRef(0);
  const glowTexture = useGlowTexture();

  const { positions, colorAttr } = useMemo(() => {
    const positions = new Float32Array(count * 3);
    const colorAttr = new Float32Array(count * 3);
    const palette = colors.map((c) => new THREE.Color(c));

    for (let i = 0; i < count; i += 1) {
      positions[i * 3] = (Math.random() - 0.5) * 10;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 6;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 6;

      const color = palette[i % palette.length];
      colorAttr[i * 3] = color.r;
      colorAttr[i * 3 + 1] = color.g;
      colorAttr[i * 3 + 2] = color.b;
    }
    return { positions, colorAttr };
  }, [colors, count]);

  useFrame((_state, delta) => {
    if (!pointsRef.current) return;
    elapsedRef.current += delta;
    const t = elapsedRef.current;
    pointsRef.current.rotation.y = t * 0.02;
    pointsRef.current.rotation.x = Math.sin(t * 0.05) * 0.05;
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
        <bufferAttribute attach="attributes-color" args={[colorAttr, 3]} />
      </bufferGeometry>
      <pointsMaterial
        size={0.16}
        map={glowTexture}
        vertexColors
        transparent
        opacity={0.85}
        sizeAttenuation
        depthWrite={false}
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
}

export default function ThreeBackground({ variant = "hero" }) {
  const isSmall = useIsSmallScreen();
  const colors = PALETTES[variant] || PALETTES.hero;
  const count = isSmall ? 220 : 520;

  return (
    <div className="three-background" aria-hidden="true">
      <Canvas
        camera={{ position: [0, 0, 4], fov: 60 }}
        dpr={[1, 1.5]}
        gl={{ antialias: true, alpha: true }}
      >
        <ParticleField colors={colors} count={count} />
      </Canvas>
    </div>
  );
}
