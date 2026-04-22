"use client"

export default function KPI() {
  return (
    <div className="min-h-screen bg-[#020617] text-white flex justify-center
bg-[radial-gradient(circle_at_center,rgba(0,200,255,0.08),transparent_70%)]">
  <div className="w-full max-w-[1600px] p-6 rounded-xl border border-cyan-500/20 shadow-[0_0_80px_rgba(0,200,255,0.15)]">

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
<div
  className="
  relative
  bg-[#020617]
  p-6
  transition-all duration-300

  border border-red-500/30

  [clip-path:polygon(0_10px,10px_0,calc(100%-10px)_0,100%_10px,100%_calc(100%-10px),calc(100%-10px)_100%,10px_100%,0_calc(100%-10px))]

  shadow-[0_0_25px_rgba(239,68,68,0.2)]
  hover:shadow-[0_0_60px_rgba(239,68,68,0.7)]
  hover:scale-[1.02]
  "
>

  {/* linha de energia */}
  <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-red-400 to-transparent" />

  <div className="relative">
    <div className="text-red-400 font-bold">RISCO: ALTO</div>

    <div className="text-5xl text-yellow-400 font-bold mt-2">
      72%
    </div>

    <ul className="text-sm text-gray-400 mt-4 space-y-1">
      <li>• Turno noturno</li>
      <li>• Estresse ocupacional</li>
      <li>• Equipe nova</li>
    </ul>
  </div>

</div>

          {/* FADIGA */}
<div
  className="
  relative
  bg-[#020617]
  p-4
  transition-all duration-300

  border border-orange-400/30

  [clip-path:polygon(0_10px,10px_0,calc(100%-10px)_0,100%_10px,100%_calc(100%-10px),calc(100%-10px)_100%,10px_100%,0_calc(100%-10px))]

  shadow-[0_0_20px_rgba(251,146,60,0.2)]
  hover:shadow-[0_0_40px_rgba(251,146,60,0.6)]
  hover:scale-[1.02]
  "
>

  {/* linha de energia */}
  <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-orange-400 to-transparent" />

  <div className="relative">

    <div className="text-sm text-orange-400">
      Alerta de Fadiga
    </div>

    <div className="flex items-end gap-2 h-24 mt-3">
      {[20, 30, 50, 70, 60, 80].map((v, i) => (
        <div
          key={i}
          className="
          w-4
          rounded
          bg-gradient-to-t from-orange-500 via-yellow-400 to-orange-200
          shadow-[0_0_8px_rgba(251,146,60,0.8)]
          "
          style={{ height: `${v}%` }}
        />
      ))}
    </div>

  </div>

</div>

        {/* SAFETY VOICE */}
<div
  className="
  relative
  bg-[#020617]
  p-4
  transition-all duration-300

  border border-cyan-400/30

  [clip-path:polygon(0_10px,10px_0,calc(100%-10px)_0,100%_10px,100%_calc(100%-10px),calc(100%-10px)_100%,10px_100%,0_calc(100%-10px))]

  shadow-[0_0_25px_rgba(34,211,238,0.2)]
  hover:shadow-[0_0_50px_rgba(34,211,238,0.7)]
  hover:scale-[1.02]
  "
>

  {/* linha de energia */}
  <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-cyan-400 to-transparent" />

  <div className="relative space-y-4 text-sm">

    <div className="text-cyan-400 font-semibold">
      Safety Voice
    </div>

    {/* TOTAL */}
    <div className="flex justify-between">
      <span>Total de relatos</span>
      <span className="text-blue-400 font-bold">120</span>
    </div>

    {/* POSITIVO */}
    <div>
      <div className="flex justify-between">
        <span>Positivo</span>
        <span className="text-green-400">51%</span>
      </div>

      <div className="h-2 bg-[#020617] rounded mt-1">
        <div className="h-2 bg-gradient-to-r from-green-400 to-emerald-500 rounded w-[51%] shadow-[0_0_8px_rgba(34,197,94,0.8)]" />
      </div>
    </div>

    {/* NEGATIVO */}
    <div>
      <div className="flex justify-between">
        <span>Negativo</span>
        <span className="text-red-400">49%</span>
      </div>

      <div className="h-2 bg-[#020617] rounded mt-1">
        <div className="h-2 bg-gradient-to-r from-red-400 to-orange-400 rounded w-[49%] shadow-[0_0_8px_rgba(239,68,68,0.8)]" />
      </div>
    </div>

    {/* STATUS DE TRATAMENTO */}
    <div className="pt-2 border-t border-cyan-400/20 text-xs space-y-1">

      <div className="flex justify-between">
        <span className="text-green-400">✔ Tratados</span>
        <span>40</span>
      </div>

      <div className="flex justify-between">
        <span className="text-yellow-400">⏳ Em andamento</span>
        <span>20</span>
      </div>

      <div className="flex justify-between">
        <span className="text-red-400">✖ Não tratados</span>
        <span>10</span>
      </div>

    </div>

  </div>

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
      className="
      relative
      bg-[#020617]
      p-4
      text-center
      transition-all duration-300

      border border-blue-500/30

      [clip-path:polygon(0_10px,10px_0,calc(100%-10px)_0,100%_10px,100%_calc(100%-10px),calc(100%-10px)_100%,10px_100%,0_calc(100%-10px))]

      shadow-[0_0_20px_rgba(59,130,246,0.2)]
      hover:shadow-[0_0_45px_rgba(59,130,246,0.7)]
      hover:scale-[1.03]
      "
    >

      {/* linha de energia */}
      <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-blue-400 to-transparent" />

      <div className="relative">
        <div className="text-xs text-gray-400 tracking-wide">
          {kpi.label}
        </div>

        <div className="text-2xl text-blue-400 font-bold mt-1">
          {kpi.value}
        </div>
      </div>

    </div>
  ))}
</div>

          {/* EVOLUÇÃO */}
<div
  className="
  relative
  bg-[#020617]
  p-6
  transition-all duration-300

  border border-blue-500/30

  [clip-path:polygon(0_12px,12px_0,calc(100%-12px)_0,100%_12px,100%_calc(100%-12px),calc(100%-12px)_100%,12px_100%,0_calc(100%-12px))]

  shadow-[0_0_25px_rgba(59,130,246,0.2)]
  hover:shadow-[0_0_60px_rgba(59,130,246,0.7)]
  hover:scale-[1.01]
  "
>

  {/* linha de energia */}
  <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-blue-400 to-transparent" />

  <div className="relative">

    <div className="mb-4 font-semibold text-blue-400">
      Evolução de Risco
    </div>

    {/* gráfico */}
    <div className="flex items-end gap-3 h-44">

      {[20, 40, 60, 80, 50, 70, 90].map((v, i) => (
        <div key={i} className="flex flex-col items-center gap-1">

          <div
            className="
            w-6
            rounded
            bg-gradient-to-t from-blue-600 via-cyan-400 to-blue-200

            shadow-[0_0_12px_rgba(56,189,248,0.9)]

            transition-all duration-500
            hover:scale-110
            "
            style={{ height: `${v}%` }}
          />

          {/* label pequeno */}
          <div className="text-[10px] text-gray-500">
            D{i + 1}
          </div>

        </div>
      ))}

    </div>

  </div>

</div>

         {/* TOP RISCOS */}
<div
  className="
  relative
  bg-[#020617]
  p-6
  transition-all duration-300

  border border-yellow-500/30

  [clip-path:polygon(0_12px,12px_0,calc(100%-12px)_0,100%_12px,100%_calc(100%-12px),calc(100%-12px)_100%,12px_100%,0_calc(100%-12px))]

  shadow-[0_0_25px_rgba(234,179,8,0.2)]
  hover:shadow-[0_0_50px_rgba(234,179,8,0.7)]
  hover:scale-[1.01]
  "
>

  {/* linha de energia */}
  <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-yellow-400 to-transparent" />

  <div className="relative">

    <div className="font-semibold mb-4 text-yellow-400">
      Top 5 Riscos Operacionais
    </div>

    <div className="space-y-4">

      {[
        "Trabalho em altura",
        "Ruído elevado",
        "Bloqueio inconsistente",
        "Sobrecarga ergonômica",
        "Falta de sinalização"
      ].map((risco, i) => (

        <div key={i} className="flex items-center gap-3">

          {/* ranking */}
          <div className="
            w-6 h-6 flex items-center justify-center
            text-xs font-bold
            bg-yellow-400 text-black
            rounded
            shadow-[0_0_8px_rgba(234,179,8,0.8)]
          ">
            {i + 1}
          </div>

          {/* barra */}
          <div className="flex-1">
            <div className="flex justify-between text-xs text-gray-300">
              <span>{risco}</span>
              <span>{90 - i * 10}%</span>
            </div>

            <div className="h-2 bg-[#020617] rounded mt-1">
              <div
                className="
                h-2 rounded
                bg-gradient-to-r from-yellow-400 to-orange-500
                shadow-[0_0_8px_rgba(234,179,8,0.8)]
                transition-all duration-500
                "
                style={{ width: `${90 - i * 10}%` }}
              />
            </div>
          </div>

        </div>

      ))}

    </div>

  </div>

</div>
</div>

        {/* 🟢 DIREITA */}
        <div className="col-span-3 flex flex-col gap-6">

         {/* PREDITIVO */}
<div
  className="
  relative
  bg-[#020617]
  p-4
  transition-all duration-300

  border border-purple-400/30

  [clip-path:polygon(0_10px,10px_0,calc(100%-10px)_0,100%_10px,100%_calc(100%-10px),calc(100%-10px)_100%,10px_100%,0_calc(100%-10px))]

  shadow-[0_0_25px_rgba(168,85,247,0.2)]
  hover:shadow-[0_0_50px_rgba(168,85,247,0.7)]
  hover:scale-[1.02]
  "
>

  {/* linha de energia */}
  <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-purple-400 to-transparent" />

  <div className="relative">

    <div className="font-semibold mb-3 text-purple-400">
      Análise Preditiva
    </div>

    <div className="space-y-3 text-sm">

      {[
        { label: "72h", valor: 68, cor: "from-yellow-400 to-orange-400" },
        { label: "Manutenção", valor: 42, cor: "from-orange-400 to-red-400" },
        { label: "Fadiga", valor: 32, cor: "from-red-400 to-pink-400" }
      ].map((item, i) => (
        <div key={i}>

          <div className="flex justify-between text-xs text-gray-300">
            <span>{item.label}</span>
            <span>{item.valor}%</span>
          </div>

          <div className="h-2 bg-[#020617] rounded mt-1">
            <div
              className={`
                h-2 rounded
                bg-gradient-to-r ${item.cor}
                shadow-[0_0_8px_rgba(168,85,247,0.6)]
                transition-all duration-500
              `}
              style={{ width: `${item.valor}%` }}
            />
          </div>

        </div>
      ))}

    </div>

  </div>

</div>

          {/* IA */}
<div
  className="
  relative
  bg-[#020617]
  p-4
  transition-all duration-300

  border border-cyan-400/30

  [clip-path:polygon(0_10px,10px_0,calc(100%-10px)_0,100%_10px,100%_calc(100%-10px),calc(100%-10px)_100%,10px_100%,0_calc(100%-10px))]

  shadow-[0_0_25px_rgba(34,211,238,0.2)]
  hover:shadow-[0_0_50px_rgba(34,211,238,0.7)]
  hover:scale-[1.02]
  "
>

  {/* linha de energia */}
  <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-cyan-400 to-transparent" />

  <div className="relative">

    <div className="font-semibold mb-3 text-cyan-400">
      Recomendações Inteligentes
    </div>

    <div className="space-y-3 text-sm">

      {[
        "Ajustar escala da equipe",
        "Executar DDS focado",
        "Reforçar uso de EPI"
      ].map((rec, i) => (
        <div
          key={i}
          className="
          flex items-center gap-2
          p-2
          rounded
          bg-[#020617]
          border border-cyan-400/10

          hover:bg-cyan-400/10
          transition
          "
        >
          <span className="text-cyan-400">✔</span>
          <span className="text-gray-300">{rec}</span>
        </div>
      ))}

    </div>

  </div>

</div>

          {/* INCIDENTE */}
<div
  className="
  relative
  bg-[#020617]
  p-6
  text-center
  transition-all duration-300

  border border-red-500/30

  [clip-path:polygon(0_12px,12px_0,calc(100%-12px)_0,100%_12px,100%_calc(100%-12px),calc(100%-12px)_100%,12px_100%,0_calc(100%-12px))]

  shadow-[0_0_40px_rgba(239,68,68,0.3)]
  hover:shadow-[0_0_70px_rgba(239,68,68,0.8)]
  hover:scale-[1.03]
  "
>

  {/* linha de energia */}
  <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-red-400 to-transparent" />

  <div className="relative">

    <div className="text-sm text-gray-400">
      Incidente previsto em
    </div>

    <div className="
      text-5xl
      text-red-400
      font-bold
      mt-2

      drop-shadow-[0_0_15px_rgba(239,68,68,0.9)]
      animate-pulse
    ">
      48H
    </div>

  </div>

</div>
</div>

{/* 🔥 PLANO DE AÇÃO AVANÇADO (FULL WIDTH) */}
<div
  className="
  col-span-12
  relative
  bg-[#020617]
  p-6
  transition-all duration-300

  border border-blue-500/30

  [clip-path:polygon(0_12px,12px_0,calc(100%-12px)_0,100%_12px,100%_calc(100%-12px),calc(100%-12px)_100%,12px_100%,0_calc(100%-12px))]

  shadow-[0_0_40px_rgba(59,130,246,0.2)]
  hover:shadow-[0_0_70px_rgba(59,130,246,0.6)]
  "
>

  {/* linha de energia */}
  <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-blue-400 to-transparent" />

  <div className="relative">

    <div className="text-lg font-semibold mb-6 text-blue-400">
      Plano de Ação
    </div>

    <div className="grid grid-cols-4 gap-6">

      {/* 🟢 STATUS GERAL */}
      <div className="flex flex-col items-center justify-center">

        <div className="
          w-24 h-24
          rounded-full
          border-4 border-green-400
          flex items-center justify-center
          text-xl font-bold

          shadow-[0_0_20px_rgba(34,197,94,0.6)]
        ">
          12
        </div>

        <div className="text-xs text-gray-400 mt-2">TOTAL</div>

        <div className="mt-4 text-xs space-y-1 text-center">
          <div className="text-green-400">● 5 Tratadas</div>
          <div className="text-yellow-400">● 4 Andamento</div>
          <div className="text-red-400">● 3 Atraso</div>
        </div>

      </div>

      {/* 🔵 POR UNIDADE */}
      <div>
        <div className="text-sm text-gray-400 mb-3">Por Unidade</div>

        {[
          { nome: "Unidade A", valor: 3 },
          { nome: "Unidade B", valor: 6 },
          { nome: "Unidade C", valor: 3 }
        ].map((u, i) => (
          <div key={i} className="mb-3">

            <div className="flex justify-between text-xs">
              <span>{u.nome}</span>
              <span>{u.valor}</span>
            </div>

            <div className="h-2 bg-[#020617] rounded mt-1">
              <div
                className="
                h-2
                bg-gradient-to-r from-blue-400 to-cyan-400
                rounded
                shadow-[0_0_8px_rgba(59,130,246,0.8)]
                transition-all duration-500
                "
                style={{ width: `${u.valor * 10}%` }}
              />
            </div>

          </div>
        ))}
      </div>

      {/* 🟣 POR TIPO */}
      <div>
        <div className="text-sm text-gray-400 mb-3">Por Tipo</div>

        {[
          { nome: "Ambiente", valor: 4, cor: "from-green-400 to-emerald-500" },
          { nome: "Máquinas", valor: 3, cor: "from-yellow-400 to-orange-400" },
          { nome: "Pessoas", valor: 5, cor: "from-red-400 to-pink-500" }
        ].map((t, i) => (
          <div key={i} className="mb-3">

            <div className="flex justify-between text-xs">
              <span>{t.nome}</span>
              <span>{t.valor}</span>
            </div>

            <div className="h-2 bg-[#020617] rounded mt-1">
              <div
                className={`
                h-2 rounded
                bg-gradient-to-r ${t.cor}
                shadow-[0_0_8px_rgba(255,255,255,0.2)]
                transition-all duration-500
                `}
                style={{ width: `${t.valor * 10}%` }}
              />
            </div>

          </div>
        ))}
      </div>

      {/* ⚡ AÇÕES RECENTES */}
      <div>
        <div className="text-sm text-gray-400 mb-3">Ações Recentes</div>

        <div className="space-y-2 text-xs">

          {[
            { nome: "Revisão sinalização", status: "andamento", cor: "text-yellow-400" },
            { nome: "Treinamento altura", status: "atrasada", cor: "text-red-400" },
            { nome: "Manutenção equipamento", status: "ok", cor: "text-green-400" },
            { nome: "Adequação ergonômica", status: "andamento", cor: "text-yellow-400" }
          ].map((a, i) => (
            <div
              key={i}
              className="
              flex justify-between
              p-2
              rounded
              border border-blue-500/10
              hover:bg-blue-500/10
              transition
              "
            >
              <span>{a.nome}</span>
              <span className={a.cor}>
                {a.status === "ok" ? "Concluída" :
                 a.status === "atrasada" ? "Atrasada" :
                 "Em andamento"}
              </span>
            </div>
          ))}

        </div>
      </div>

    </div>

  </div>
</div>
</div>
</div>
</div>
      )
}
