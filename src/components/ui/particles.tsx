"use client";

import React, { useEffect, useRef } from "react";
import { useTheme } from "next-themes";

interface ParticlesProps {
  className?: string;
  quantity?: number;
  staticity?: number;
  ease?: number;
  color?: string;
  refresh?: boolean;
}

export function Particles({
  className = "",
  quantity = 30,
  staticity = 50,
  ease = 50,
  refresh = false,
}: ParticlesProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const canvasContainerRef = useRef<HTMLDivElement>(null);
  const context = useRef<CanvasRenderingContext2D | null>(null);
  const circles = useRef<any[]>([]);
  const mouseSize = 100;
  const size = useRef<{ w: number; h: number }>({ w: 0, h: 0 });
  const dpr = typeof window !== "undefined" ? window.devicePixelRatio || 1 : 1;
  const { theme } = useTheme();

  useEffect(() => {
    if (canvasRef.current) {
      context.current = canvasRef.current.getContext("2d");
    }
    initCanvas();
    animate();
    window.addEventListener("resize", initCanvas);

    return () => {
      window.removeEventListener("resize", initCanvas);
    };
  }, [theme]);

  useEffect(() => {
    initCanvas();
  }, [refresh]);

  const initCanvas = () => {
    resizeCanvas();
    drawParticles();
  };

  const resizeCanvas = () => {
    if (canvasContainerRef.current && canvasRef.current && context.current) {
      circles.current = [];
      size.current.w = canvasContainerRef.current.offsetWidth;
      size.current.h = canvasContainerRef.current.offsetHeight;
      canvasRef.current.width = size.current.w * dpr;
      canvasRef.current.height = size.current.h * dpr;
      canvasRef.current.style.width = `${size.current.w}px`;
      canvasRef.current.style.height = `${size.current.h}px`;
      context.current.scale(dpr, dpr);
    }
  };

  const circleParams = () => {
    const x = Math.floor(Math.random() * size.current.w);
    const y = Math.floor(Math.random() * size.current.h);
    const translateX = 0;
    const translateY = 0;
    const pSize = Math.floor(Math.random() * 2) + 1;
    const alpha = 0;
    const targetAlpha = parseFloat((Math.random() * 0.6 + 0.1).toFixed(1));
    const dx = (Math.random() - 0.5) * 0.2;
    const dy = (Math.random() - 0.5) * 0.2;
    const magnetism = 0.1 + Math.random() * 4;
    return {
      x,
      y,
      translateX,
      translateY,
      size: pSize,
      alpha,
      targetAlpha,
      dx,
      dy,
      magnetism,
    };
  };

  const drawCircle = (circle: any, update = false) => {
    if (context.current) {
      const { x, y, translateX, translateY, size, alpha } = circle;
      context.current.translate(translateX, translateY);
      context.current.beginPath();
      context.current.arc(x, y, size, 0, 2 * Math.PI);
      const isDark = theme === "dark" || theme === undefined;
      context.current.fillStyle = isDark
        ? `rgba(124, 124, 255, ${alpha})`
        : `rgba(91, 91, 255, ${alpha})`;
      context.current.fill();
      context.current.setTransform(dpr, 0, 0, dpr, 0, 0);

      if (!update) {
        circles.current.push(circle);
      }
    }
  };

  const clearTimeout = () => {
    context.current?.clearRect(0, 0, size.current.w, size.current.h);
  };

  const drawParticles = () => {
    clearTimeout();
    const particleCount = quantity;
    for (let i = 0; i < particleCount; i++) {
      const circle = circleParams();
      drawCircle(circle);
    }
  };

  const animate = () => {
    clearTimeout();
    circles.current.forEach((circle: any, i: number) => {
      // Handle edge collision
      const edge = [
        circle.x + circle.translateX - circle.size < 0,
        circle.x + circle.translateX + circle.size > size.current.w,
        circle.y + circle.translateY - circle.size < 0,
        circle.y + circle.translateY + circle.size > size.current.h,
      ];
      if (edge[0] || edge[1]) circle.dx = -circle.dx;
      if (edge[2] || edge[3]) circle.dy = -circle.dy;

      circle.x += circle.dx;
      circle.y += circle.dy;

      // Alpha fade in/out
      if (circle.alpha < circle.targetAlpha) {
        circle.alpha += 0.01;
      }

      drawCircle(circle, true);
    });
    window.requestAnimationFrame(animate);
  };

  return (
    <div
      className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}
      ref={canvasContainerRef}
      aria-hidden="true"
    >
      <canvas ref={canvasRef} />
    </div>
  );
}
