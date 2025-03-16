import { Heart } from "lucide-react"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="py-6 border-t">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">© {currentYear} Alejandro Fernández Valdivia. Todos los derechos reservados.</p>

          <p className="text-sm text-muted-foreground flex items-center">
            {/* Hecho con <Heart className="h-4 w-4 mx-1 text-red-500 fill-red-500" /> usando Next.js y Tailwind CSS */}
            <Heart className="h-4 w-4 mx-1 text-red-500 fill-red-500" />
          </p>
        </div>
      </div>
    </footer>
  )
}