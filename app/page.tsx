"use client"

import { useRouter } from "next/navigation"
import { useState } from "react"
import { Shield, Activity, BarChart3, Brain } from "lucide-react"
import { supabase } from "@/lib/supabase"

export default function Home() {
  const router = useRouter()
  const [showLead, setShowLead] = useState(false)
  const [planoSelecionado, setPlanoSelecionado] = useState("")

  const [lead, setLead] = useState({
    nome: "",
    empresa: "",
    whatsapp: ""
  })
  const planos = [
    {
      title: "Gestão SST Essencial",
      color: "#3b82f6",
      icon: <Shield size={18} />,
      items: ["PGR", "PCMSO", "Controle de ASO", "Documentos Legais"]
    },
    {
      title: "ARISS Operacional",
      color: "#22c55e",
      icon: <Activity size={18} />,
      items: ["Safety Voice", "Risco Psicossocial", "Ergonomia", "Análise Operacional"]
    },
    {
      title: "ARISS Gestão",
      color: "#eab308",
      icon: <BarChart3 size={18} />,
      items: ["Risk X-Ray", "Controle de Riscos", "Treinamentos", "Gestão CIPA"]
    },
    {
      title: "ARISS Inteligência",
      color: "#a855f7",
      icon: <Brain size={18} />,
      items: ["Dashboard Executivo", "Indicadores", "Cultura", "Análise Estratégica"]
    }
  ]

  return (
    <div
      className="min-h-screen text-white flex flex-col"
      style={{
        background: `
          radial-gradient(circle at top, rgba(59,130,246,0.15), transparent 40%),
          #020617
        `
      }}
    >

      {/* HEADER */}
<div className="relative w-full flex items-center justify-center pt-10 pb-6">

  {/* LOGO CENTRAL */}
<h1 className="text-5xl font-bold tracking-tight flex items-center">

  {/* A AJUSTADO */}
  <span className="text-white font-bold -mr-[0.5px]">
  A
</span>

  {/* RISS */}
  <span
    className="bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-500 
    bg-clip-text text-transparent"
  >
    RISS
  </span>

  {/* COMMAND HUB */}
  <span className="text-gray-400 text-xl font-medium tracking-wider ml-3">
    Command Hub
  </span>

</h1>

  {/* BOTÃO DIREITA */}
  <button
    onClick={() => router.push("/login")}
    className="absolute right-10 px-5 py-2 rounded-lg border border-green-400 text-green-400 
    hover:bg-green-400 hover:text-black transition-all duration-300
    shadow-[0_0_12px_rgba(74,222,128,0.4)]"
  >
    Acesso Cliente
  </button>

</div>

      {/* CONTAINER CENTRAL */}
      <div className="max-w-6xl w-full mx-auto">

        {/* TÍTULO */}
        <div className="text-center mt-12 mb-12">
          <h2 className="text-3xl font-semibold tracking-wide text-white/90">
            Escolha o Nível Ideal para sua Empresa
          </h2>
        </div>

        {/* CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 px-4">

          {planos.map((card, i) => (
           <div
  key={i}
  className={`relative flex flex-col p-6 rounded-xl backdrop-blur-md border border-white/10
  hover:scale-105 transition-all duration-300
  ${
    card.color === "#3b82f6" &&
    "bg-gradient-to-b from-blue-500/10 to-[#0b1220]"
  }
  ${
    card.color === "#22c55e" &&
    "bg-gradient-to-b from-green-500/10 to-[#0b1220]"
  }
  ${
    card.color === "#eab308" &&
    "bg-gradient-to-b from-yellow-500/10 to-[#0b1220]"
  }
  ${
    card.color === "#a855f7" &&
    "bg-gradient-to-b from-purple-500/10 to-[#0b1220]"
  }
  `}
  style={{
    boxShadow: `
      0 0 20px rgba(0,0,0,0.6),
      0 0 12px ${card.color}
    `
  }}
>

              {/* LINHA NEON */}
              <div
                className="absolute top-0 left-0 w-full h-[3px] rounded-t-xl"
                style={{
                  background: `linear-gradient(to right, transparent, ${card.color}, transparent)`
                }}
              />

              {/* TÍTULO */}
              <div className="flex items-center gap-2 mb-4">
                <div style={{ color: card.color }}>{card.icon}</div>
                <h3 className="text-lg font-semibold text-white/90 whitespace-nowrap">
  {card.title}
</h3>
              </div>
              <div
  className="h-[1px] w-full mb-4 mt-2"
  style={{
    background: `linear-gradient(to right, transparent, ${card.color}, transparent)`
  }}
/>
              {/* LISTA */}
              <ul className="text-gray-400 space-y-2 text-sm mb-6">
                {card.items.map((item, idx) => (
                  <li key={idx} className="flex items-center gap-2">
                    <span
                      className="w-1.5 h-1.5 rounded-full"
                      style={{ background: card.color }}
                    />
                    {item}
                  </li>
                ))}
              </ul>

              {/* BOTÃO */}
             <button
  onClick={() => {
    setPlanoSelecionado(card.title)
    setShowLead(true)
  }}
  className={`mt-auto pt-6 w-full py-1.5 rounded-lg text-sm font-semibold
  border transition-all duration-300
  ${
    card.color === "#3b82f6" &&
    "bg-blue-500/20 text-blue-300 border-blue-400 shadow-[0_0_15px_rgba(59,130,246,0.7)]"
  }
  ${
    card.color === "#22c55e" &&
    "bg-green-500/20 text-green-300 border-green-400 shadow-[0_0_15px_rgba(34,197,94,0.7)]"
  }
  ${
    card.color === "#eab308" &&
    "bg-yellow-500/20 text-yellow-300 border-yellow-400 shadow-[0_0_15px_rgba(234,179,8,0.7)]"
  }
  ${
    card.color === "#a855f7" &&
    "bg-purple-500/20 text-purple-300 border-purple-400 shadow-[0_0_15px_rgba(168,85,247,0.7)]"
  }
  hover:brightness-125 hover:scale-[1.02]`}
>
  Atualize
</button>

            </div>
          ))}

        </div>

       {/* PREMIUM */}
<div className="mt-16 px-4">
  <div
    className="relative bg-[#0b1220]/80 backdrop-blur-md border border-cyan-400/20 rounded-2xl p-8 text-center
    transition-all duration-300 hover:scale-[1.02]"
    style={{
      boxShadow: `
        0 0 40px rgba(0,0,0,0.6),
        0 0 30px rgba(34,211,238,0.2)
      `
    }}
    onMouseEnter={(e) => {
      e.currentTarget.style.boxShadow = `
        0 0 60px rgba(0,0,0,0.8),
        0 0 50px rgba(34,211,238,0.45)
      `
    }}
    onMouseLeave={(e) => {
      e.currentTarget.style.boxShadow = `
        0 0 40px rgba(0,0,0,0.6),
        0 0 30px rgba(34,211,238,0.2)
      `
    }}
  >

            {/* LINHA NEON */}
            <div
              className="absolute top-0 left-0 w-full h-[3px] rounded-t-2xl"
              style={{
                background: "linear-gradient(to right, transparent, #22d3ee, transparent)"
              }}
            />

           {/* TÍTULO */}
<h3 className="text-xl font-semibold mb-2">

  <span className="text-cyan-400 font-bold tracking-wide">
    Premium
  </span>

  <span className="text-gray-500 mx-2">—</span>

  <span className="text-gray-300">
    <span className="text-white font-bold -mr-[0.5px]">A</span>
    RISS + Safety Mind Framework
  </span>

</h3>

{/* LINHA */}
<div
  className="h-[1px] w-full mb-6"
  style={{
    background: "linear-gradient(to right, transparent, #22d3ee, transparent)"
  }}
/>

{/* FEATURES COM ÍCONES */}
<div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm text-gray-300 mb-6">

  <div className="flex items-center gap-2">
    <span className="text-cyan-400">🤖</span>
    IA Preditiva com Antecipação de Riscos
  </div>

  <div className="flex items-center gap-2">
    <span className="text-cyan-400">📊</span>
    Metodologia Completa
  </div>

  <div className="flex items-center gap-2">
    <span className="text-cyan-400">🧠</span>
    Consultoria Estratégica
  </div>

  <div className="flex items-center gap-2">
    <span className="text-cyan-400">🏢</span>
    Empresa de Operação
  </div>

  <div className="flex items-center gap-2">
    <span className="text-cyan-400">⚡</span>
    Implementação e Suporte Contínuo
  </div>

</div>

            <button
  onClick={() => {
    setPlanoSelecionado("ARISS + Safety Mind Framework")
    setShowLead(true)
  }}
  className="px-6 py-2 rounded-lg font-semibold text-black
  bg-cyan-500 hover:brightness-110 transition-all
  shadow-[0_0_15px_rgba(34,211,238,0.5)]"
>
  Fale Conosco
</button>

          </div>
        </div>

      </div>
      {showLead && (
  <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50">

    <div className="bg-[#0b1220] p-6 rounded-xl w-full max-w-md border border-white/10 shadow-xl">

      <h2 className="text-lg font-semibold mb-2 text-white">
        Fale com um especialista
      </h2>

      <p className="text-gray-400 text-sm mb-4">
        Plano selecionado: <span className="text-white">{planoSelecionado}</span>
      </p>

      <input
        placeholder="Seu nome"
        className="w-full mb-3 p-2 rounded bg-gray-800 text-white outline-none"
        onChange={(e) => setLead({ ...lead, nome: e.target.value })}
      />

      <input
        placeholder="Empresa"
        className="w-full mb-3 p-2 rounded bg-gray-800 text-white outline-none"
        onChange={(e) => setLead({ ...lead, empresa: e.target.value })}
      />

      <input
        placeholder="WhatsApp"
        className="w-full mb-4 p-2 rounded bg-gray-800 text-white outline-none"
        onChange={(e) => setLead({ ...lead, whatsapp: e.target.value })}
      />

      <div className="flex gap-2">

        <button
          onClick={() => setShowLead(false)}
          className="w-1/2 bg-gray-700 py-2 rounded text-white"
        >
          Cancelar
        </button>

        <button
  onClick={async () => {

    console.log("SALVANDO LEAD", lead)

    const { error } = await supabase.from("leads").insert([
      {
        nome: lead.nome,
        empresa: lead.empresa,
        whatsapp: lead.whatsapp,
        plano: planoSelecionado
      }
    ])

    if (error) {
      console.error("ERRO AO SALVAR:", error)
      alert("Erro ao salvar lead")
      return
    }

    console.log("SALVO COM SUCESSO")

    const mensagem = `Olá, sou ${lead.nome} da empresa ${lead.empresa}. Quero atualizar para o plano ${planoSelecionado}.`

    window.open(
      `https://wa.me/5548988676921?text=${encodeURIComponent(mensagem)}`,
      "_blank"
    )

    setShowLead(false)
  }}
  className="w-1/2 bg-green-500 py-2 rounded text-black font-semibold"
>
  Continuar
</button>

      </div>

    </div>
  </div>
)}
{/* FOOTER */}
<div className="mt-16 py-6 text-center border-t border-white/10
shadow-[0_-10px_30px_rgba(0,0,0,0.3)]">

  <p className="text-gray-400 text-sm">
    © 2026 Safety Tech Engenharia de Segurança do Trabalho LTDA
  </p>

  <p className="text-gray-500 text-xs mt-1">
    CNPJ 64.939.203/0001-20 • Conformidade legal • Engenharia • Tecnologia
  </p>

</div>
    </div>
  )
}