"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"

export default function Hub() {

  const router = useRouter()

  const [usuario, setUsuario] = useState<any>({})
  const [lang, setLang] = useState("en")

  useEffect(() => {
    const token = localStorage.getItem("token")

    if (!token) {
      router.push("/login")
      return
    }

    const user = JSON.parse(localStorage.getItem("usuario") || "{}")
    setUsuario(user)

    const savedLang = localStorage.getItem("aris_lang") || "en"
    setLang(savedLang)

  }, [])

  function greeting() {
    if (lang === "pt") return "Bem-vindo"
    if (lang === "es") return "Bienvenido"
    return "Welcome"
  }

  function logout() {
    localStorage.removeItem("token")
    localStorage.removeItem("usuario")
    router.push("/login")
  }

  function go(page: string) {
  router.push(page)
}
  function changeLang(newLang: string) {
  localStorage.setItem("aris_lang", newLang)
  setLang(newLang)
}

  // 🔥 BASE DOS CARDS
  const cardBase = `
  relative bg-[#0f172a] 
  border border-[#1f2a44] 
  rounded-2xl p-5 cursor-pointer 
  transition-all duration-300
  hover:-translate-y-1 hover:scale-[1.02]
  overflow-hidden

  shadow-[0_10px_40px_rgba(0,0,0,0.6)]

  before:absolute before:top-0 before:left-0
  before:w-full before:h-[4px]
  before:rounded-t-2xl

  after:absolute after:inset-0
  after:bg-gradient-to-br
  after:from-white/5 after:to-transparent
  after:opacity-0 hover:after:opacity-100
  after:transition
  `

  return (
    <div className="min-h-screen text-white bg-[#020617] bg-[radial-gradient(circle_at_top,#0b1220,#020617)]">

      <div className="max-w-[1100px] mx-auto p-10">

        {/* HEADER */}
<div className="flex justify-between items-center mb-20 flex-wrap gap-3">

  <div>
    <div className="flex items-center gap-3">
      <div className="text-[42px] font-black tracking-[2px] text-gray-200">
        A<span className="text-blue-500 drop-shadow-[0_0_12px_rgba(59,130,246,0.9)]">RISS</span>
      </div>
      <div className="text-lg text-gray-400">Command Hub</div>
    </div>

    <div className="h-[2px] mt-6 bg-gradient-to-r from-transparent via-blue-500 to-transparent animate-pulse"></div>
  </div>

  {/* DIREITA */}
  <div className="flex items-center gap-4">

    {/* USER */}
    <div className="text-right">
      <div className="text-lg font-bold">{greeting()}</div>
      <div className="text-xs text-gray-400">
        {usuario.email || "ARIS User"}
      </div>
    </div>

    {/* IDIOMA */}
    <div className="flex gap-2">

  <button
    onClick={() => changeLang("pt")}
    className={`p-1 rounded-md border transition hover:scale-110
    ${lang === "pt"
      ? "bg-blue-500/20 border-blue-500 shadow-[0_0_10px_rgba(59,130,246,0.6)]"
      : "border-[#1f2a44] hover:border-blue-400"}`}
  >
    <img src="https://flagcdn.com/w20/br.png" alt="pt" className="w-5 h-5" />
  </button>

  <button
    onClick={() => changeLang("en")}
    className={`p-1 rounded-md border transition hover:scale-110
    ${lang === "en"
      ? "bg-blue-500/20 border-blue-500 shadow-[0_0_10px_rgba(59,130,246,0.6)]"
      : "border-[#1f2a44] hover:border-blue-400"}`}
  >
    <img src="https://flagcdn.com/w20/us.png" alt="en" className="w-5 h-5" />
  </button>

  <button
    onClick={() => changeLang("es")}
    className={`p-1 rounded-md border transition hover:scale-110
    ${lang === "es"
      ? "bg-blue-500/20 border-blue-500 shadow-[0_0_10px_rgba(59,130,246,0.6)]"
      : "border-[#1f2a44] hover:border-blue-400"}`}
  >
    <img src="https://flagcdn.com/w20/es.png" alt="es" className="w-5 h-5" />
  </button>

</div>

  </div>

</div>
        {/* GRID */}
        <div className="grid grid-cols-3 gap-5 max-md:grid-cols-2 max-sm:grid-cols-1">

          <div onClick={() => go("radar-ambiente.html")}
            className={`${cardBase}
            before:bg-[#00d4b4]
            hover:border-[#00d4b4]
            hover:shadow-[0_0_35px_rgba(0,212,180,0.35)]`}>
            <h3 className="mb-1 font-semibold">Operational Environment</h3>
            <p className="text-xs text-gray-400">Infrastructure, inspections and safety conditions</p>
          </div>

          <div onClick={() => go("radar-psicossocial.html")}
            className={`${cardBase}
            before:bg-[#a855f7]
            hover:border-[#a855f7]
            hover:shadow-[0_0_35px_rgba(168,85,247,0.35)]`}>
            <h3>Psychosocial Risk</h3>
            <p className="text-xs text-gray-400">NR-01 psychosocial risk assessment</p>
          </div>

          <div onClick={() => go("radar-lideranca.html")}
            className={`${cardBase}
            before:bg-[#facc15]
            hover:border-[#facc15]
            hover:shadow-[0_0_35px_rgba(250,204,21,0.35)]`}>
            <h3>Leadership & Governance</h3>
            <p className="text-xs text-gray-400">Safety culture and leadership indicators</p>
          </div>

          <div onClick={() => go("radar-rh.html")}
            className={`${cardBase}
            before:bg-[#38bdf8]
            hover:border-[#38bdf8]
            hover:shadow-[0_0_35px_rgba(56,189,248,0.35)]`}>
            <h3>Human Resources</h3>
            <p className="text-xs text-gray-400">Training, turnover and workforce indicators</p>
          </div>

          <div onClick={() => go("raiox_risco.html")}
            className={`${cardBase}
            before:bg-[#fb7185]
            hover:border-[#fb7185]
            hover:shadow-[0_0_35px_rgba(251,113,133,0.35)]`}>
            <h3>Risk X-Ray</h3>
            <p className="text-xs text-gray-400">Risk mapping by function for the PGR</p>
          </div>

          <div onClick={() => router.push("/safety-voice")}
            className={`${cardBase}
            before:bg-[#ec4899]
            hover:border-[#ec4899]
            hover:shadow-[0_0_35px_rgba(236,72,153,0.35)]`}>
            <h3>Safety Voice</h3>
            <p className="text-xs text-gray-400">Anonymous reporting channel</p>
          </div>

          <div onClick={() => go("radar-acao.html")}
            className={`${cardBase}
            before:bg-[#5aa0ff]
            hover:border-[#5aa0ff]
            hover:shadow-[0_0_35px_rgba(90,160,255,0.35)]`}>
            <h3>Action Plans</h3>
            <p className="text-xs text-gray-400">Corrective and preventive action tracking</p>
          </div>

          <div onClick={() => go("sesmt.html")}
            className={`${cardBase}
            before:bg-[#5aa0ff]
            hover:border-[#5aa0ff]
            hover:shadow-[0_0_35px_rgba(90,160,255,0.35)]`}>
            <h3>PGR Smart</h3>
            <p className="text-xs text-gray-400">Documento completo</p>
          </div>

         <div 
  onClick={() => router.push("/kpi")}
  className={`${cardBase}
    before:bg-[#5aa0ff]
    hover:border-[#5aa0ff]
    hover:shadow-[0_0_35px_rgba(90,160,255,0.35)]`}
>
  <h3>KPI</h3>
  <p className="text-xs text-gray-400">
    Unified executive risk intelligence dashboard
  </p>
</div>

          <div onClick={() => go("aris-ia.html")}
            className={`${cardBase}
            before:bg-[#5aa0ff]
            hover:border-[#5aa0ff]
            hover:shadow-[0_0_35px_rgba(90,160,255,0.35)]`}>
            <h3>ARISS IA</h3>
            <p className="text-xs text-gray-400">Anticipatory Risk Intelligence Safety System</p>
          </div>

        </div>

        {/* LOGOUT */}
        <div onClick={logout}
          className="mt-10 text-sm text-gray-400 cursor-pointer hover:text-red-500">
          Logout
        </div>

      </div>

      {/* FOOTER */}
      <div className="fixed bottom-2 left-0 w-full text-center text-xs text-gray-500 pointer-events-none">
        ARIS — Anticipatory Risk Intelligence System
        <br />
        © 2025 Safety Tech SC Engenharia de Segurança Ltda.
      </div>

    </div>
  )
}