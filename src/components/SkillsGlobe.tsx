"use client";

import React, { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import { SVGLoader } from "three/examples/jsm/Addons.js";
import { useTheme } from "next-themes";

interface Skill {
  name: string;
  color: string;
  svgString?: string;
}

interface SkillsGlobeProps {
  skills?: Skill[];
  className?: string;
}

const SkillsGlobe: React.FC<SkillsGlobeProps> = ({
  skills = [],
  className = "",
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const sceneRef = useRef<THREE.Scene | null>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);
  const skillGroupRef = useRef<THREE.Group | null>(null);
  const animationIdRef = useRef<number>(0);
  const [isLoading, setIsLoading] = useState(true);
  const { theme: currTheme } = useTheme();

  const mouseRef = useRef({ x: 0, y: 0 });
  const isMouseDownRef = useRef(false);
  const rotationSpeedRef = useRef({ x: 0, y: 0 });

  const tiltAxisRef = useRef<THREE.Vector3>(
    new THREE.Vector3(
      Math.random() * 2 - 1,
      Math.random() * 0.5,
      Math.random() * 2 - 1
    ).normalize()
  );

  const createSkillIcon = async (skill: Skill): Promise<THREE.Group> => {
    return new Promise((resolve) => {
      const svgString =
        skill.svgString ||
        `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
          <circle fill="${skill.color}" cx="50" cy="50" r="40"/>
        </svg>`;

      const loader = new SVGLoader();
      const svgData = loader.parse(svgString);
      const group = new THREE.Group();

      svgData.paths.forEach((path) => {
        const material = new THREE.MeshBasicMaterial({
          color: new THREE.Color(currTheme === "dark" ? "white" : "black"),
          side: THREE.DoubleSide,
          depthWrite: false,
        });

        const shapes = SVGLoader.createShapes(path);
        shapes.forEach((shape) => {
          const geometry = new THREE.ShapeGeometry(shape);
          const mesh = new THREE.Mesh(geometry, material);
          group.add(mesh);
        });
      });

      const box = new THREE.Box3().setFromObject(group);
      const size = new THREE.Vector3();
      box.getSize(size);
      const maxDimension = Math.max(size.x, size.y);
      const targetSize = 25;
      const scaleFactor = targetSize / maxDimension;

      group.scale.setScalar(scaleFactor * 0.015);
      group.scale.y *= -1;
      group.position.sub(box.getCenter(new THREE.Vector3()));
      resolve(group);
    });
  };

  const createSkillIcons = React.useCallback(async () => {
    if (!skillGroupRef.current) return;

    try {
      const radius = 1.8;

      for (let i = 0; i < skills.length; i++) {
        const skill = skills[i];
        const iconGroup = await createSkillIcon(skill);

        const phi = Math.acos(-1 + (2 * i + 1) / skills.length);
        const theta = Math.PI * (1 + Math.sqrt(5)) * i;

        const x = radius * Math.cos(theta) * Math.sin(phi);
        const y = radius * Math.sin(theta) * Math.sin(phi);
        const z = radius * Math.cos(phi);

        iconGroup.position.set(x, y, z);
        skillGroupRef.current.add(iconGroup);
      }

      setIsLoading(false);
    } catch (err) {
      console.error("SVG icon load failed", err);
      setIsLoading(false);
    }
  }, [skills, currTheme, createSkillIcon]);

  const animate = React.useCallback(() => {
    if (!sceneRef.current || !rendererRef.current || !cameraRef.current) return;

    if (skillGroupRef.current) {
      if (!isMouseDownRef.current) {
        skillGroupRef.current.rotateOnAxis(tiltAxisRef.current, 0.005);
      }

      skillGroupRef.current.rotation.x += rotationSpeedRef.current.x;
      skillGroupRef.current.rotation.y += rotationSpeedRef.current.y;

      rotationSpeedRef.current.x *= 0.95;
      rotationSpeedRef.current.y *= 0.95;

      skillGroupRef.current.children.forEach((child) => {
        child.lookAt(cameraRef.current!.position);
      });
    }

    rendererRef.current.render(sceneRef.current, cameraRef.current);
    animationIdRef.current = requestAnimationFrame(animate);
  }, []);

  const handleMouseDown = (event: MouseEvent) => {
    isMouseDownRef.current = true;
    mouseRef.current = { x: event.clientX, y: event.clientY };
  };

  const handleMouseMove = (event: MouseEvent) => {
    if (isMouseDownRef.current) {
      const deltaX = event.clientX - mouseRef.current.x;
      const deltaY = event.clientY - mouseRef.current.y;
      rotationSpeedRef.current = { x: deltaY * 0.01, y: deltaX * 0.01 };
      mouseRef.current = { x: event.clientX, y: event.clientY };
    }
  };

  const handleMouseUp = () => {
    isMouseDownRef.current = false;
  };

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, 1, 0.1, 1000);
    camera.position.z = 5;

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setClearColor(0x000000, 0);
    container.appendChild(renderer.domElement);

    const resize = () => {
      const width = container.clientWidth;
      const height = container.clientHeight;
      renderer.setSize(width, height);
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
    };

    resize();
    const resizeObserver = new ResizeObserver(resize);
    resizeObserver.observe(container);

    const group = new THREE.Group();
    scene.add(group);
    const light = new THREE.AmbientLight(0xffffff, 1);
    scene.add(light);

    sceneRef.current = scene;
    cameraRef.current = camera;
    rendererRef.current = renderer;
    skillGroupRef.current = group;

    createSkillIcons();
    renderer.domElement.addEventListener("mousedown", handleMouseDown);
    renderer.domElement.addEventListener("mousemove", handleMouseMove);
    renderer.domElement.addEventListener("mouseup", handleMouseUp);

    animate();

    return () => {
      cancelAnimationFrame(animationIdRef.current);
      renderer.domElement.removeEventListener("mousedown", handleMouseDown);
      renderer.domElement.removeEventListener("mousemove", handleMouseMove);
      renderer.domElement.removeEventListener("mouseup", handleMouseUp);
      resizeObserver.disconnect();
      container.removeChild(renderer.domElement);
      renderer.dispose();
    };
  }, [skills, currTheme, createSkillIcons, animate]);

  return (
    <div className={`relative ${className}`}>
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center bg-white dark:bg-black bg-opacity-60 z-10">
          <div className="text-black dark:text-white text-lg font-semibold">
            Loading skills...
          </div>
        </div>
      )}
      <div ref={containerRef} className="w-full h-full" />
    </div>
  );
};

export default SkillsGlobe;
