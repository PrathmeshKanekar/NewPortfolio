"use client";

import React, { useEffect, useRef, useCallback } from "react";
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
  refresh = false,
}: ParticlesProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const canvasContainerRef = useRef<HTMLDivElement>(null);
  const context = useRef<CanvasRenderingContext2D | null>(null);
  const circles = useRef<any[]>([]);
  const size = useRef<{ w: number; h: number }>({ w: 0, h: 0 });
  const animFrameId = useRef<number | null>(null);
  const dpr = typeof window !== "undefined" ? window.devicePixelRatio || 1 : 1;
  const { theme } = useTheme();

  const resizeCanvas = useCallback(() => {
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
  }, [dpr]);

  const circleParams = useCallback(() => {
    const x = Math.floor(Math.random() * size.current.w);
    const y = Math.floor(Math.random() * size.current.h);
    const pSize = Math.floor(Math.random() * 2) + 1;
    const alpha = 0;
    const targetAlpha = parseFloat((Math.random() * 0.6 + 0.1).toFixed(1));
    const dx = (Math.random() - 0.5) * 0.2;
    const dy = (Math.random() - 0.5) * 0.2;
    return {
      x,
      y,
      translateX: 0,
      translateY: 0,
      size: pSize,
      alpha,
      targetAlpha,
      dx,
      dy,
    };
  }, []);

  const drawCircle = useCallback(
    (circle: any, update = false) => {
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
    },
    [dpr, theme]
  );

  const clearCanvas = useCallback(() => {
    context.current?.clearRect(0, 0, size.current.w, size.current.h);
  }, []);

  const drawParticles = useCallback(() => {
    clearCanvas();
    for (let i = 0; i < quantity; i++) {
      const circle = circleParams();
      drawCircle(circle);
    }
  }, [clearCanvas, circleParams, drawCircle, quantity]);

  const initCanvas = useCallback(() => {
    resizeCanvas();
    drawParticles();
  }, [resizeCanvas, drawParticles]);

  useEffect(() => {
    if (canvasRef.current) {
      context.current = canvasRef.current.getContext("2d");
    }
    initCanvas();

    let isVisible = true;
    const observer = new IntersectionObserver(
      ([entry]) => {
        isVisible = entry.isIntersecting;
      },
      { threshold: 0 }
    );

    if (canvasContainerRef.current) {
      observer.observe(canvasContainerRef.current);
    }

    const loop = () => {
      if (isVisible) {
        clearCanvas();
        circles.current.forEach((circle: any) => {
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

          if (circle.alpha < circle.targetAlpha) {
            circle.alpha += 0.01;
          }

          drawCircle(circle, true);
        });
      }
      animFrameId.current = window.requestAnimationFrame(loop);
    };

    animFrameId.current = window.requestAnimationFrame(loop);
    window.addEventListener("resize", initCanvas);

    return () => {
      observer.disconnect();
      window.removeEventListener("resize", initCanvas);
      if (animFrameId.current) {
        window.cancelAnimationFrame(animFrameId.current);
      }
    };
  }, [initCanvas, clearCanvas, drawCircle]);

  useEffect(() => {
    initCanvas();
  }, [refresh, initCanvas]);

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
