"use client"

export default function KPI() {
  return (
    <div className="min-h-screen bg-[#020617] text-white p-6 relative overflow-hidden">

      {/* FUNDO TECNOLÓGICO */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#0b1220,#020617)]" />
      <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />

      {/* HEADER */}
      <div className="mb-6 relative z-10 flex justify-between items-center">

        <div className="text-[26px] font-bold tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300 drop-shadow-[0_0_10px_rgba(59,130,246,0.8)]">
          ARISS — Command Intelligence
        </div>

        <div className="text-sm text-gray-400">
          Unidade B
        </div>

      </div>

      {/* GRID PRINCIPAL */}
      <div className="grid grid-cols-12 gap-6 relative z-10">

        {/* RISCO */}
        <div className="col-span-3 bg-[#0f172a] p-6 rounded-xl border border-red-500/30 shadow-[0_0_60px_rgba(239,68,68,0.3)] relative">

          <div className="absolute inset-0 bg-gradient-to-br from-red-500/10 to-transparent" />

          <div className="relative">
            <div className="text-red-400 font-bold text-lg">RISCO: ALTO</div>

            <div className="text-5xl font-bold text-yellow-400 mt-2">
              72%
            </div>

            <div className="mt-4 text-sm text-gray-400">
              <ul className="list-disc ml-4 space-y-1">
                <li>Turno noturno</li>
                <li>Estresse ocupacional</li>
                <li>Equipe nova</li>
              </ul>
            </div>
          </div>

        </div>

        {/* KPIs */}
        <div className="col-span-9 grid grid-cols-4 gap-4">

          {[
            { label: "ALERTAS", value: "128" },
            { label: "DIAS INCIDENTE", value: "48" },
            { label: "FADIGA", value: "69%" },
            { label: "DENÚNCIAS", value: "120" }
          ].map((kpi, i) => (
            <div
              key={i}
              className="bg-[#0f172a] p-4 rounded-lg border border-blue-500/20 shadow-[0_0_25px_rgba(59,130,246,0.2)] text-center"
            >
              <div className="text-xs text-gray-400">{kpi.label}</div>
              <div className="text-2xl font-bold text-blue-400">{kpi.value}</div>
            </div>
          ))}

        </div>

        {/* GRÁFICO */}
        <div className="col-span-8 bg-[#0f172a] p-6 rounded-xl border border-blue-500/20 shadow-[0_0_30px_rgba(59,130,246,0.15)]">

          <div className="mb-4 font-semibold">Evolução de Risco</div>

          <div className="flex items-end gap-2 h-40">
            {[20, 40, 60, 80, 50, 70, 90].map((v, i) => (
              <div
                key={i}
                className="w-6 rounded bg-gradient-to-t from-blue-600 via-cyan-400 to-blue-200 shadow-[0_0_10px_rgba(56,189,248,0.8)]"
                style={{ height: `${v}%` }}
              />
            ))}
          </div>

        </div>

        {/* TOP RISCOS */}
        <div className="col-span-4 bg-[#0f172a] p-6 rounded-xl border border-yellow-500/20">

          <div className="font-semibold mb-4">Top Riscos</div>

          <ul className="space-y-3 text-sm">
            <li>⚠️ Estresse ocupacional</li>
            <li>⚠️ Ruído elevado</li>
            <li>⚠️ Postura inadequada</li>
            <li>⚠️ Falta de sinalização</li>
          </ul>

        </div>

        {/* PREDITIVO */}
        <div className="col-span-4 bg-[#0f172a] p-6 rounded-xl border border-purple-500/20">

          <div className="font-semibold mb-4">Análise Preditiva</div>

          <div className="space-y-2 text-sm">
            <div>Risco em 72h: <span className="text-yellow-400">68%</span></div>
            <div>Manutenção: <span className="text-orange-400">42%</span></div>
            <div>Fadiga: <span className="text-red-400">32%</span></div>
          </div>

        </div>

        {/* IA */}
        <div className="col-span-8 bg-[#0f172a] p-6 rounded-xl border border-cyan-400/30 shadow-[0_0_40px_rgba(34,211,238,0.2)]">

          <div className="font-semibold mb-4">Recomendação Inteligente</div>

          <p className="text-sm text-gray-300">
            Alta concentração de riscos comportamentais na Unidade B.
            Recomenda-se reforço de supervisão, treinamento imediato e campanha de cultura de segurança.
          </p>

        </div>

        {/* PLANO DE AÇÃO */}
        <div className="col-span-12 bg-[#0f172a] p-6 rounded-xl border border-blue-500/20">

          <div className="font-semibold mb-4">Plano de Ação</div>

          <div className="grid grid-cols-3 gap-6 text-sm">

            <div>
              <div className="text-gray-400 mb-2">Status</div>
              <div className="text-green-400">✔ 5 tratadas</div>
              <div className="text-yellow-400">🟡 4 andamento</div>
              <div className="text-red-400">❌ 3 atraso</div>
            </div>

            <div>
              <div className="text-gray-400 mb-2">Por Unidade</div>
              <div>Unidade A: 3</div>
              <div>Unidade B: 6</div>
              <div>Unidade C: 3</div>
            </div>

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