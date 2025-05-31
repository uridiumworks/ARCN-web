"use client"

import { GlobalClientProvider } from "@/contexts/GlobalClientContext"
import type React from "react"

interface ProvidersProps {
  children: React.ReactNode
}

export function Providers({ children }: ProvidersProps) {
  return <GlobalClientProvider>{children}</GlobalClientProvider>
}