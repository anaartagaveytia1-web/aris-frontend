"use client"

import { Suspense } from "react"
import PlanoAcaoClient from "./PlanoAcaoClient"

export default function Page() {
  return (
    <Suspense fallback={<div className="p-6 text-white">Carregando...</div>}>
      <PlanoAcaoClient />
    </Suspense>
  )
}