"use client"

import { useCallback, useEffect, useMemo, useRef } from "react"
import { useTheme } from "next-themes"
import { cn } from "@/lib/utils"

export interface DotPatternProps {
  className?: string
  children?: React.ReactNode
  /** Dot diameter in pixels */
  dotSize?: number
  /** Gap between dots in pixels */
  gap?: number
  /** Base dot color for light theme (hex) */
  lightBaseColor?: string
  /** Base dot color for dark theme (hex) */
  darkBaseColor?: string
  /** Glow color for light theme (hex) */
  lightGlowColor?: string
  /** Glow color for dark theme (hex) */
  darkGlowColor?: string
  /** Mouse proximity radius for highlighting (in pixels) */
  proximity?: number
  /** Glow intensity multiplier (0 to 1) */
  glowIntensity?: number
  /** Minimum dot opacity (0 to 1) */
  minOpacity?: number
  /** Wave animation speed (0 to disable) */
  waveSpeed?: number
}

function hexToRgb(hex: string): { r: number; g: number; b: number } {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex)
  return result
    ? {
      r: Number.parseInt(result[1], 16),
      g: Number.parseInt(result[2], 16),
      b: Number.parseInt(result[3], 16),
    }
    : { r: 0, g: 0, b: 0 }
}

interface Dot {
  x: number
  y: number
  baseOpacity: number
}

export function DotPattern({
  className,
  children,
  dotSize = 1.5,
  gap = 24,
  lightBaseColor = "#6b7280",
  darkBaseColor = "#9ca3af",
  lightGlowColor = "#1e293b",
  darkGlowColor = "#e2e8f0",
  proximity = 120,
  glowIntensity = 0,
  minOpacity = 0.25,
  waveSpeed = 0.2,
}: DotPatternProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const dotsRef = useRef<Dot[]>([])
  const mouseRef = useRef({ x: -1000, y: -1000 })
  const animationRef = useRef<number | undefined>(undefined)
  const startTimeRef = useRef(Date.now())

  const { resolvedTheme } = useTheme()
  const isDark = resolvedTheme === "dark"

  // Use theme-aware colors
  const baseColor = isDark ? darkBaseColor : lightBaseColor
  const glowColor = isDark ? darkGlowColor : lightGlowColor

  const baseRgb = useMemo(() => hexToRgb(baseColor), [baseColor])
  const glowRgb = useMemo(() => hexToRgb(glowColor), [glowColor])

  const buildGrid = useCallback(() => {
    const canvas = canvasRef.current
    const container = containerRef.current
    if (!canvas || !container) return

    const rect = container.getBoundingClientRect()
    const dpr = window.devicePixelRatio || 1

    canvas.width = rect.width * dpr
    canvas.height = rect.height * dpr
    canvas.style.width = `${rect.width}px`
    canvas.style.height = `${rect.height}px`

    const ctx = canvas.getContext("2d")
    if (ctx) ctx.scale(dpr, dpr)

    const cellSize = dotSize + gap
    const cols = Math.ceil(rect.width / cellSize) + 1
    const rows = Math.ceil(rect.height / cellSize) + 1

    const offsetX = (rect.width - (cols - 1) * cellSize) / 2
    const offsetY = (rect.height - (rows - 1) * cellSize) / 2

    const dots: Dot[] = []
    for (let row = 0; row < rows; row++) {
      for (let col = 0; col < cols; col++) {
        dots.push({
          x: offsetX + col * cellSize,
          y: offsetY + row * cellSize,
          baseOpacity: minOpacity,
        })
      }
    }
    dotsRef.current = dots
  }, [dotSize, gap, minOpacity])

  const draw = useCallback(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const dpr = window.devicePixelRatio || 1
    ctx.clearRect(0, 0, canvas.width / dpr, canvas.height / dpr)

    const { x: mx, y: my } = mouseRef.current
    const proxSq = proximity * proximity

    for (const dot of dotsRef.current) {
      const dx = dot.x - mx
      const dy = dot.y - my
      const distSq = dx * dx + dy * dy

      let opacity = dot.baseOpacity
      let scale = 1
      let r = baseRgb.r
      let g = baseRgb.g
      let b = baseRgb.b
      let glow = 0

      // Mouse proximity effect
      if (distSq < proxSq && glowIntensity > 0) {
        const dist = Math.sqrt(distSq)
        const t = 1 - dist / proximity
        const easedT = t * t * (3 - 2 * t) // smoothstep

        // Interpolate color
        r = Math.round(baseRgb.r + (glowRgb.r - baseRgb.r) * easedT)
        g = Math.round(baseRgb.g + (glowRgb.g - baseRgb.g) * easedT)
        b = Math.round(baseRgb.b + (glowRgb.b - baseRgb.b) * easedT)

        opacity = Math.min(1, dot.baseOpacity + easedT * 0.7 * glowIntensity)
        scale = 1 + easedT * 0.8 * glowIntensity
        glow = easedT * glowIntensity
      }

      const radius = (dotSize / 2) * scale

      // Draw glow
      if (glow > 0) {
        const gradient = ctx.createRadialGradient(dot.x, dot.y, 0, dot.x, dot.y, radius * 4)
        gradient.addColorStop(0, `rgba(${glowRgb.r}, ${glowRgb.g}, ${glowRgb.b}, ${glow * 0.4})`)
        gradient.addColorStop(0.5, `rgba(${glowRgb.r}, ${glowRgb.g}, ${glowRgb.b}, ${glow * 0.1})`)
        gradient.addColorStop(1, `rgba(${glowRgb.r}, ${glowRgb.g}, ${glowRgb.b}, 0)`)
        ctx.beginPath()
        ctx.arc(dot.x, dot.y, radius * 4, 0, Math.PI * 2)
        ctx.fillStyle = gradient
        ctx.fill()
      }

      // Draw dot
      ctx.beginPath()
      ctx.arc(dot.x, dot.y, radius, 0, Math.PI * 2)
      ctx.fillStyle = `rgba(${r}, ${g}, ${b}, ${opacity})`
      ctx.fill()
    }

    animationRef.current = requestAnimationFrame(draw)
  }, [proximity, baseRgb, glowRgb, dotSize, glowIntensity, waveSpeed])

  useEffect(() => {
    buildGrid()

    const container = containerRef.current
    if (!container) return

    const ro = new ResizeObserver(buildGrid)
    ro.observe(container)

    return () => ro.disconnect()
  }, [buildGrid])

  useEffect(() => {
    animationRef.current = requestAnimationFrame(draw)
    return () => {
      if (animationRef.current) cancelAnimationFrame(animationRef.current)
    }
  }, [draw])

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const canvas = canvasRef.current
      if (!canvas) return
      const rect = canvas.getBoundingClientRect()
      mouseRef.current = {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      }
    }

    const handleMouseLeave = () => {
      mouseRef.current = { x: -1000, y: -1000 }
    }

    const container = containerRef.current
    if (container) {
      container.addEventListener("mousemove", handleMouseMove)
      container.addEventListener("mouseleave", handleMouseLeave)
    }

    return () => {
      if (container) {
        container.removeEventListener("mousemove", handleMouseMove)
        container.removeEventListener("mouseleave", handleMouseLeave)
      }
    }
  }, [])

  return (
    <div
      ref={containerRef}
      className={cn(
        "fixed inset-0 overflow-hidden transition-colors duration-300 -z-50",
        isDark ? "bg-neutral-950" : "bg-neutral-50",
        className
      )}
    >
      <canvas ref={canvasRef} className="absolute inset-0 h-full w-full" />

      {/* Side fade overlay - left */}
      <div
        className={cn(
          "pointer-events-none absolute inset-y-0 left-0 w-1/2",
          isDark
            ? "bg-linear-to-r from-neutral-950 to-transparent"
            : "bg-linear-to-r from-neutral-50 to-transparent"
        )}
      />

      {/* Side fade overlay - right */}
      <div
        className={cn(
          "pointer-events-none absolute inset-y-0 right-0 w-1/2",
          isDark
            ? "bg-linear-to-l from-neutral-950 to-transparent"
            : "bg-linear-to-l from-neutral-50 to-transparent"
        )}
      />

      {/* Content layer */}
      {children && <div className="relative h-full w-full">{children}</div>}
    </div>
  )
}

export default function DotPatternDemo() {
  return <DotPattern />
}
