"use client"

import { useEffect, useState } from "react"

export default function KPI() {

  const [iaInsight, setIaInsight] = useState("")

  useEffect(() => {
    // 🔮 SIMULAÇÃO IA (depois conecta com backend)
    setIaInsight(
      "Alta concentração de riscos comportamentais na Unidade B. Recomenda-se reforço de supervisão, treinamento imediato e campanha de cultura de segurança."
    )
  }, [])

  return (
    <div className="min-h-screen bg-[#020617] text-white p-6">

      {/* HEADER */}
      <div className="mb-6">
        <h1 className="text-2xl font-bold">ARISS — Command Intelligence</h1>
        <p className="text-gray-400 text-sm">
          Análise em tempo real e preditiva
        </p>
      </div>

      {/* GRID PRINCIPAL */}
      <div className="grid grid-cols-12 gap-6">

        {/* 🔥 RISCO PRINCIPAL */}
        <div className="col-span-4 bg-[#0f172a] p-6 rounded-xl border border-red-500/30 shadow-[0_0_30px_rgba(239,68,68,0.2)]">

          <div className="text-red-400 font-bold text-lg">RISCO: ALTO</div>

          <div className="text-4xl font-bold text-yellow-400 mt-2">
            72%
          </div>

          <div className="mt-4 text-sm text-gray-400">
            Fatores:
            <ul className="list-disc ml-4 mt-2">
              <li>Turno noturno</li>
              <li>Estresse ocupacional</li>
              <li>Equipe nova</li>
            </ul>
          </div>

        </div>

        {/* 📊 MINI KPIs */}
        <div className="col-span-8 grid grid-cols-4 gap-4">

          {[
            { label: "ALERTAS", value: "128" },
            { label: "DIAS INCIDENTE", value: "48" },
            { label: "FADIGA", value: "69%" },
            { label: "DENÚNCIAS", value: "120" }
          ].map((kpi, i) => (
            <div key={i} className="bg-[#0f172a] p-4 rounded-lg border border-blue-500/20 text-center">
              <div className="text-xs text-gray-400">{kpi.label}</div>
              <div className="text-2xl font-bold text-blue-400">{kpi.value}</div>
            </div>
          ))}

        </div>

        {/* 📈 GRÁFICO SIMULADO */}
        <div className="col-span-8 bg-[#0f172a] p-6 rounded-xl border border-blue-500/20">

          <div className="mb-4 font-semibold">Evolução de Risco</div>

          <div className="flex items-end gap-2 h-40">
            {[20, 40, 60, 80, 50, 70, 90].map((v, i) => (
              <div
                key={i}
                className="bg-gradient-to-t from-blue-500 to-cyan-300 w-6 rounded"
                style={{ height: `${v}%` }}
              />
            ))}
          </div>

        </div>

        {/* ⚠️ TOP RISCOS */}
        <div className="col-span-4 bg-[#0f172a] p-6 rounded-xl border border-yellow-500/20">

          <div className="font-semibold mb-4">Top Riscos</div>

          <ul className="space-y-3 text-sm">
            <li>⚠️ Estresse ocupacional</li>
            <li>⚠️ Ruído elevado</li>
            <li>⚠️ Postura inadequada</li>
            <li>⚠️ Falta de sinalização</li>
          </ul>

        </div>

        {/* 🔮 PREDITIVO */}
        <div className="col-span-4 bg-[#0f172a] p-6 rounded-xl border border-purple-500/20">

          <div className="font-semibold mb-4">Análise Preditiva</div>

          <div className="space-y-2 text-sm">
            <div>Risco em 72h: <span className="text-yellow-400">68%</span></div>
            <div>Manutenção: <span className="text-orange-400">42%</span></div>
            <div>Fadiga: <span className="text-red-400">32%</span></div>
          </div>

        </div>

        {/* 💡 IA */}
        <div className="col-span-8 bg-[#0f172a] p-6 rounded-xl border border-cyan-500/20">

          <div className="font-semibold mb-4">Recomendação Inteligente</div>

          <p className="text-sm text-gray-300 leading-relaxed">
            {iaInsight}
          </p>

        </div>

        {/* 📋 PLANO DE AÇÃO AVANÇADO */}
        <div className="col-span-12 bg-[#0f172a] p-6 rounded-xl border border-blue-500/20">

          <div className="font-semibold mb-4">Plano de Ação</div>

          <div className="grid grid-cols-3 gap-6 text-sm">

            {/* STATUS */}
            <div>
              <div className="text-gray-400 mb-2">Status</div>
              <div className="text-green-400">✔ 5 tratadas</div>
              <div className="text-yellow-400">🟡 4 andamento</div>
              <div className="text-red-400">❌ 3 atraso</div>
            </div>

            {/* POR UNIDADE */}
            <div>
              <div className="text-gray-400 mb-2">Por Unidade</div>
              <div>Unidade A: 3</div>
              <div>Unidade B: 6</div>
              <div>Unidade C: 3</div>
            </div>

            {/* POR TIPO */}
            <div>
              <div className="text-gray-400 mb-2">Por Tipo</div>
              <div>Ambiente: 4</div>
              <div>Máquinas: 3</div>
              <div>Pessoas: 5</div>
            </div>

          </div>

        </div>

      </div>

    </div>
  )
}