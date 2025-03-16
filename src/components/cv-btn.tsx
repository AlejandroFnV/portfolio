import { Download } from "lucide-react";
import { Button } from "./ui/button";

interface CvBtnProps {
  size?: "default" | "sm" | "lg" | "icon"
  className?: string
  text?: string
}

export default function CvBtn({ size = "default", className, text = "Descargar CV" }: CvBtnProps) {
  return (
    <Button size={size} className={`cursor-pointer ${className}`} onClick={() => window.open('/curriculum.pdf')}>
      <Download className="h-4 w-4 animate-pulse" />
      {text}
    </Button>
  )
}