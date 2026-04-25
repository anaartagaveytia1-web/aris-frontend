"use client"

import { useRouter } from "next/navigation"

export default function AppHome() {
  const router = useRouter()

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#020617] text-white relative overflow-hidden">

      {/* FUNDO */}
      <div className="absolute w-[500px] h-[500px] bg-cyan-500/10 blur-[120px] rounded-full" />

      <div className="relative z-10 text-center space-y-8 w-full max-w-sm">

        {/* LOGO */}
        <img
          src="/logo-aris.png"
          className="h-24 mx-auto drop-shadow-[0_0_30px_rgba(0,200,255,0.7)]"
        />

        {/* TEXTO */}
        <div>
          <h1 className="text-2xl font-bold text-cyan-400">
            Bem-vindo ao ARISS
          </h1>

          <p className="text-gray-400 text-sm mt-2">
            Inteligência preditiva de riscos
          </p>
        </div>

        {/* AÇÕES */}
        <div className="flex flex-col gap-4">

          <button
            onClick={() => router.push("/safety-voice")}
            className="
              bg-cyan-500
              text-black
              font-bold
              py-4
              rounded-xl
              shadow-[0_0_20px_rgba(0,200,255,0.6)]
              hover:scale-105
              transition
            "
          >
            🚀 Registrar ocorrência
          </button>

          <button
            onClick={() => router.push("/login")}
            className="
              border border-cyan-400
              text-cyan-400
              font-bold
              py-4
              rounded-xl
              hover:bg-cyan-400/10
              transition
            "
          >
            🔐 Já sou cliente
          </button>

        </div>

      </div>

    </div>
  )
}