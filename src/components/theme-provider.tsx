"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { ThemeProvider as NextThemesProvider } from "next-themes"

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [mounted, setMounted] = useState(false)

  // Efecto para manejar el montaje del componente
  useEffect(() => {
    setMounted(true)
  }, [])

  // Renderizar un div vacío con la misma estructura de clases
  // para evitar cambios de layout durante la hidratación
  if (!mounted) {
    // Devolvemos los children directamente sin aplicar tema
    // para que coincida con lo que renderizó el servidor
    return <>{children}</>
  }

  return (
    <NextThemesProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
      {children}
    </NextThemesProvider>
  )
}

