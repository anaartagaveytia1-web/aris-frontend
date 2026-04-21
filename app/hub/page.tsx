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
    window.location.href = page
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0b1220] to-[#020617] text-white">

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

          <div className="flex items-center gap-4">
            <div>
              <div className="text-lg font-bold">{greeting()}</div>
              <div className="text-xs text-gray-400">
                {usuario.email || "ARIS User"}
              </div>
            </div>
          </div>

        </div>

        {/* GRID PRINCIPAL */}
        <div className="grid grid-cols-3 gap-5 max-md:grid-cols-2 max-sm:grid-cols-1">

          <div onClick={() => go("radar-ambiente.html")}
            className="bg-[#0f172a] border border-[#1f2a44] rounded-2xl p-5 cursor-pointer hover:-translate-y-1 transition">
            <h3 className="mb-2">Operational Environment</h3>
            <p className="text-sm text-gray-400">Infrastructure, inspections and safety conditions</p>
          </div>

          <div onClick={() => go("radar-psicossocial.html")}
            className="bg-[#0f172a] border border-[#1f2a44] rounded-2xl p-5 cursor-pointer hover:-translate-y-1 transition">
            <h3>Psychosocial Risk</h3>
            <p className="text-sm text-gray-400">NR-01 psychosocial risk assessment</p>
          </div>

          <div onClick={() => go("radar-lideranca.html")}
            className="bg-[#0f172a] border border-[#1f2a44] rounded-2xl p-5 cursor-pointer hover:-translate-y-1 transition">
            <h3>Leadership & Governance</h3>
            <p className="text-sm text-gray-400">Safety culture and leadership indicators</p>
          </div>

          <div onClick={() => go("radar-rh.html")}
            className="bg-[#0f172a] border border-[#1f2a44] rounded-2xl p-5 cursor-pointer hover:-translate-y-1 transition">
            <h3>Human Resources</h3>
            <p className="text-sm text-gray-400">Training, turnover and workforce indicators</p>
          </div>

          <div onClick={() => go("raiox_risco.html")}
            className="bg-[#0f172a] border border-[#1f2a44] rounded-2xl p-5 cursor-pointer hover:-translate-y-1 transition">
            <h3>Risk X-Ray</h3>
            <p className="text-sm text-gray-400">Risk mapping by function for the PGR</p>
          </div>

          <div onClick={() => go("radar-voice.html")}
            className="bg-[#0f172a] border border-[#1f2a44] rounded-2xl p-5 cursor-pointer hover:-translate-y-1 transition">
            <h3>Safety Voice</h3>
            <p className="text-sm text-gray-400">Anonymous reporting channel</p>
          </div>

          <div onClick={() => go("radar-acao.html")}
            className="bg-[#0f172a] border border-[#1f2a44] rounded-2xl p-5 cursor-pointer hover:-translate-y-1 transition">
            <h3>Action Plans</h3>
            <p className="text-sm text-gray-400">Corrective and preventive action tracking</p>
          </div>

          <div onClick={() => go("sesmt.html")}
            className="bg-[#0f172a] border border-[#1f2a44] rounded-2xl p-5 cursor-pointer hover:-translate-y-1 transition">
            <h3>PGR Smart</h3>
            <p className="text-sm text-gray-400">Documento completo</p>
          </div>

          <div onClick={() => go("aris-dashboard.html")}
            className="bg-[#0f172a] border border-[#1f2a44] rounded-2xl p-5 cursor-pointer hover:-translate-y-1 transition">
            <h3>KPI</h3>
            <p className="text-sm text-gray-400">Unified executive risk intelligence dashboard</p>
          </div>

          <div onClick={() => go("aris-ia.html")}
            className="bg-[#0f172a] border border-[#1f2a44] rounded-2xl p-5 cursor-pointer hover:-translate-y-1 transition">
            <h3>ARISS IA</h3>
            <p className="text-sm text-gray-400">Anticipatory Risk Intelligence Safety System</p>
          </div>

        </div>

        {/* LINHA TEC */}
        <div className="h-[2px] mt-10 mb-4 bg-gradient-to-r from-transparent via-blue-500 to-transparent animate-pulse"></div>

        {/* SMF */}
        <h2 className="text-lg mb-4 text-blue-200">Safety Mind Framework™</h2>

        <div className="grid grid-cols-3 gap-5 max-md:grid-cols-2 max-sm:grid-cols-1">

          <div onClick={() => go("fw/smf-diagnosis-manager.html")}
            className="bg-[#0f172a] border border-[#1f2a44] rounded-2xl p-5">
            <h3>Organizational Safety Diagnosis</h3>
            <p className="text-sm text-gray-400">Comprehensive organizational safety assessment</p>
          </div>

          <div onClick={() => go("arisscontrol/cadastro.html")}
            className="bg-[#0f172a] border border-[#1f2a44] rounded-2xl p-5">
            <h3>ARISS Control</h3>
            <p className="text-sm text-gray-400">Controle de ASO e Treinamento</p>
          </div>

          <div onClick={() => go("ana/empresas.html")}
            className="bg-[#0f172a] border border-[#1f2a44] rounded-2xl p-5">
            <h3>Área Restrita Ana</h3>
            <p className="text-sm text-gray-400">Área de cadastro de empresas</p>
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
        © 2025 Safety Tech SC Engenharia de Segurança Ltda. All rights reserved.
      </div>

    </div>
  )
}