"use client"

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
  Area
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
      p-0
      border border-blue-500/30
      rounded-lg
      shadow-[0_0_40px_rgba(59,130,246,0.15)]
    ">

      {/* título */}
      <div className="text-blue-400 mb-4 font-semibold">
        Evolução de Risco
      </div>

      <div className="h-64">

        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data}>

            {/* 🔥 GRADIENTE */}
            <defs>
              <linearGradient id="colorRisco" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#38bdf8" stopOpacity={0.6} />
                <stop offset="100%" stopColor="#38bdf8" stopOpacity={0} />
              </linearGradient>
            </defs>

            {/* GRID */}
            <CartesianGrid stroke="#0f172a" strokeDasharray="3 3" />

            {/* EIXOS */}
            <XAxis dataKey="dia" stroke="#64748b" />
            <YAxis
  stroke="#64748b"
  domain={[20, 100]}
/>

            {/* TOOLTIP */}
            <Tooltip
              contentStyle={{
                backgroundColor: "#020617",
                border: "1px solid #38bdf8",
                color: "#fff"
              }}
            />

            {/* 🔥 ÁREA (COLORIDO DO MEIO) */}
            <Area
  type="monotone"
  dataKey="valor"
  stroke="none"
  fill="url(#colorRisco)"
  fillOpacity={1}
/>

            {/* 🔥 LINHA */}
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

      {/* HUD */}
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