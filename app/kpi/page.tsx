"use client"

export default function KPI() {
  return (
    <div className="min-h-screen bg-[#020617] text-white p-6">

      {/* HEADER */}
      <div className="mb-6">
        <div className="text-[26px] font-bold tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300 drop-shadow-[0_0_10px_rgba(59,130,246,0.8)]">
          ARISS — Command Intelligence
        </div>
        <div className="text-sm text-gray-400">
          Análise em tempo real e preditiva
        </div>
      </div>

      {/* GRID PRINCIPAL */}
      <div className="grid grid-cols-12 gap-6">

        {/* 🔵 ESQUERDA */}
        <div className="col-span-3 flex flex-col gap-6">

          {/* RISCO */}
          <div className="bg-[#0f172a] p-6 rounded-xl border border-red-500/30 shadow-[0_0_60px_rgba(239,68,68,0.25)]">
            <div className="text-red-400 font-bold">RISCO: ALTO</div>
            <div className="text-5xl text-yellow-400 font-bold mt-2">72%</div>

            <ul className="text-sm text-gray-400 mt-4 space-y-1">
              <li>• Turno noturno</li>
              <li>• Estresse ocupacional</li>
              <li>• Equipe nova</li>
            </ul>
          </div>

          {/* FADIGA */}
          <div className="bg-[#0f172a] p-4 rounded-xl border border-orange-400/20">
            <div className="text-sm text-orange-400">Alerta de Fadiga</div>

            <div className="flex items-end gap-2 h-24 mt-3">
              {[20, 30, 50, 70, 60, 80].map((v, i) => (
                <div
                  key={i}
                  className="w-4 rounded bg-gradient-to-t from-orange-500 to-yellow-300"
                  style={{ height: `${v}%` }}
                />
              ))}
            </div>
          </div>

          {/* SENSORES */}
          <div className="bg-[#0f172a] p-4 rounded-xl border border-cyan-400/20 text-sm space-y-2">
            <div>🌡 Temperatura: <span className="text-yellow-400">31°C</span></div>
            <div>🔊 Ruído: <span className="text-red-400">92 dB</span></div>
            <div>🫁 CO2: <span className="text-orange-400">840 ppm</span></div>
          </div>

        </div>

        {/* 🟣 CENTRO */}
        <div className="col-span-6 flex flex-col gap-6">

          {/* KPIs */}
          <div className="grid grid-cols-4 gap-4">
            {[
              { label: "ALERTAS", value: "128" },
              { label: "DIAS INCIDENTE", value: "48" },
              { label: "FADIGA", value: "69%" },
              { label: "DENÚNCIAS", value: "120" }
            ].map((kpi, i) => (
              <div
                key={i}
                className="bg-[#0f172a] p-4 rounded-lg border border-blue-500/20 text-center shadow-[0_0_20px_rgba(59,130,246,0.15)]"
              >
                <div className="text-xs text-gray-400">{kpi.label}</div>
                <div className="text-2xl text-blue-400 font-bold">{kpi.value}</div>
              </div>
            ))}
          </div>

          {/* EVOLUÇÃO */}
          <div className="bg-[#0f172a] p-6 rounded-xl border border-blue-500/20">
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
          <div className="bg-[#0f172a] p-6 rounded-xl border border-yellow-500/20">
            <div className="font-semibold mb-4">Top 5 Riscos Operacionais</div>

            <ul className="space-y-2 text-sm">
              <li>⚠️ Trabalho em altura</li>
              <li>⚠️ Ruído elevado</li>
              <li>⚠️ Bloqueio inconsistente</li>
              <li>⚠️ Sobrecarga ergonômica</li>
              <li>⚠️ Falta de sinalização</li>
            </ul>
          </div>

        </div>

        {/* 🟢 DIREITA */}
        <div className="col-span-3 flex flex-col gap-6">

          {/* PREDITIVO */}
          <div className="bg-[#0f172a] p-4 rounded-xl border border-purple-400/20">
            <div className="font-semibold mb-2">Análise Preditiva</div>
            <div>72h: <span className="text-yellow-400">68%</span></div>
            <div>Manutenção: <span className="text-orange-400">42%</span></div>
            <div>Fadiga: <span className="text-red-400">32%</span></div>
          </div>

          {/* IA */}
          <div className="bg-[#0f172a] p-4 rounded-xl border border-cyan-400/20 shadow-[0_0_25px_rgba(34,211,238,0.15)]">
            <div className="font-semibold mb-2">Recomendações Inteligentes</div>

            <ul className="text-sm space-y-2">
              <li>✔ Ajustar escala da equipe</li>
              <li>✔ Executar DDS focado</li>
              <li>✔ Reforçar uso de EPI</li>
            </ul>
          </div>

          {/* INCIDENTE */}
          <div className="bg-[#0f172a] p-6 rounded-xl border border-red-500/30 text-center shadow-[0_0_40px_rgba(239,68,68,0.3)]">
            <div className="text-sm text-gray-400">Incidente previsto em</div>
            <div className="text-4xl text-red-400 font-bold">48H</div>
          </div>

        </div>

      </div>

    </div>
  )
}