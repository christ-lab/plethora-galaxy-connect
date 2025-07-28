import { ReactNode } from "react"
import { cn } from "@/lib/utils"

interface GlowCardProps {
  children: ReactNode
  className?: string
  hover?: boolean
}

const GlowCard = ({ children, className, hover = true }: GlowCardProps) => {
  return (
    <div 
      className={cn(
        "glow-card p-6",
        hover && "hover:scale-105",
        className
      )}
    >
      {children}
    </div>
  )
}

export default GlowCard