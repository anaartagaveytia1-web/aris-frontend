"use client"

import { useEffect } from "react"
import { useRouter } from "next/navigation"
import { useMobile } from "@/app/hooks/useMobile"

export default function Home() {
  const router = useRouter()
  const isMobile = useMobile()

  useEffect(() => {
    if (isMobile && window.location.pathname === "/") {
      router.replace("/app-home")
    } else if (!isMobile && window.location.pathname === "/") {
      router.replace("/planos")
    }
  }, [isMobile])

  return null
}