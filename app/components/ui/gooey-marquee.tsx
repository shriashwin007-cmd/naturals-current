"use client"

interface GooeyMarqueeProps {
  text: string
  className?: string
  speed?: number
  variant?: "dark" | "light"
}

export function GooeyMarquee({ text, className = "", speed = 20, variant = "dark" }: GooeyMarqueeProps) {
  const isDark = variant === "dark"

  return (
    <div className={`relative w-full h-28 text-7xl flex items-center justify-center overflow-hidden ${className}`}>
      {/* Gooey blur layer */}
      <div
        className="absolute inset-0 flex items-center justify-center"
        style={{
          backgroundColor: isDark ? "#000" : "#fff",
          backgroundImage: isDark
            ? "linear-gradient(to right, #000, 2rem, transparent 40%), linear-gradient(to left, #000, 2rem, transparent 40%)"
            : "linear-gradient(to right, #fff, 2rem, transparent 40%), linear-gradient(to left, #fff, 2rem, transparent 40%)",
          filter: "contrast(14)",
        }}
      >
        <p
          className="absolute min-w-full whitespace-nowrap font-bold tracking-wider"
          style={{
            color: isDark ? "#fff" : "#000",
            filter: "blur(0.08em)",
            animation: `gooeyMarquee ${speed}s infinite linear`,
          }}
        >
          {text}
        </p>
      </div>

      {/* Crisp text layer */}
      <div className="absolute inset-0 flex items-center justify-center">
        <p
          className="absolute min-w-full whitespace-nowrap font-bold tracking-wider"
          style={{
            color: isDark ? "#fff" : "#000",
            animation: `gooeyMarquee ${speed}s infinite linear`,
          }}
        >
          {text}
        </p>
      </div>
    </div>
  )
}
