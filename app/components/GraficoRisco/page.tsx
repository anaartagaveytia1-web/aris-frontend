"use client"

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid
} from "recharts"

const data = [
  { dia: "12/05", valor: 20 },
  { dia: "13/05", valor: 50 },
  { dia: "14/05", valor: 60 },
  { dia: "15/05", valor: 80 },
  { dia: "16/05", valor: 55 },
  { dia: "17/05", valor: 75 },
  { dia: "18/05", valor: 72 },
]

export default function GraficoRisco() {
  return (
    <div className="
      relative
      bg-[#020617]
      p-6
      border border-blue-500/30
      rounded-lg
      shadow-[0_0_40px_rgba(59,130,246,0.15)]
    ">

      {/* título */}
      <div className="text-blue-400 mb-4 font-semibold">
        Evolução de Risco
      </div>

      {/* gráfico */}
      <div className="h-64">

        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data}>

            {/* grid */}
            <CartesianGrid
              stroke="#0f172a"
              strokeDasharray="3 3"
            />

            {/* eixo X */}
            <XAxis
              dataKey="dia"
              stroke="#64748b"
              tick={{ fill: "#64748b", fontSize: 12 }}
            />

            {/* eixo Y */}
            <YAxis
              stroke="#64748b"
              tick={{ fill: "#64748b", fontSize: 12 }}
            />

            {/* tooltip */}
            <Tooltip
              contentStyle={{
                backgroundColor: "#020617",
                border: "1px solid #38bdf8",
                color: "#fff"
              }}
            />

            {/* linha com glow */}
            <Line
              type="monotone"
              dataKey="valor"
              stroke="#38bdf8"
              strokeWidth={3}

              style={{
                filter: "drop-shadow(0 0 8px #38bdf8)"
              }}

              dot={{
                r: 3,
                stroke: "#38bdf8",
                strokeWidth: 2,
                fill: "#020617"
              }}

              activeDot={{
                r: 6,
                fill: "#38bdf8"
              }}
            />

          </LineChart>
        </ResponsiveContainer>

      </div>

      {/* valor final (72%) estilo HUD */}
      <div className="
        absolute
        top-4
        right-4
        text-blue-400
        font-bold
        bg-[#020617]
        px-3 py-1
        border border-blue-500/30
        rounded
        shadow-[0_0_10px_rgba(56,189,248,0.6)]
      ">
        72%
      </div>

    </div>
  )
}