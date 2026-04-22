"use client"

export default function KPI() {

  function go(page: string) {
    window.location.href = page
  }

  return (
    <div className="min-h-screen bg-[#020617] text-white p-10">

      {/* HEADER */}
      <div className="mb-10">
        <h1 className="text-3xl font-bold">
          ARISS Operacional — KPI Dashboard
        </h1>
        <p className="text-gray-400">
          Visão geral de riscos, comportamento e ações
        </p>
      </div>

      {/* SCORE PRINCIPAL */}
      <div className="bg-[#0f172a] p-8 rounded-2xl mb-10 border border-yellow-400/30 shadow-[0_0_40px_rgba(250,204,21,0.15)]">

        <div className="text-sm text-gray-400">Score ARIS</div>

        <div className="text-5xl font-bold text-yellow-400">
          72%
        </div>

        <div className="mt-2 text-yellow-300">
          🟡 Atenção
        </div>

        <div className="mt-2 text-gray-400 text-sm">
          Unidade com maior risco: Produção
        </div>

      </div>

      {/* KPIs PRINCIPAIS */}
      <div className="grid grid-cols-4 gap-6 mb-10">

        {/* SAFETY VOICE */}
        <div
          onClick={() => go("/safety-voice")}
          className="bg-[#0f172a] p-6 rounded-xl cursor-pointer hover:scale-[1.02] transition border border-[#1f2a44] hover:border-blue-400"
        >
          <h3 className="mb-2 font-semibold">Safety Voice</h3>

          <p className="text-sm text-gray-400">
            51% positivo / 49% negativo
          </p>

          <p className="text-sm text-gray-400">
            120 participações
          </p>

          <div className="mt-3 text-xs space-y-1">
            <div className="text-green-400">✔ 40 tratados</div>
            <div className="text-yellow-400">🟡 20 em andamento</div>
            <div className="text-red-400">❌ 10 não tratados</div>
          </div>
        </div>

        {/* PSICOSSOCIAL */}
        <div
          onClick={() => go("/psicossocial")}
          className="bg-[#0f172a] p-6 rounded-xl cursor-pointer hover:scale-[1.02] transition border border-[#1f2a44] hover:border-purple-400"
        >
          <h3 className="mb-2 font-semibold">Psicossocial</h3>

          <p className="text-sm text-gray-400">
            Score: 8.1
          </p>

          <p className="text-sm text-yellow-400 mt-2">
            ⚠️ Maior risco:
          </p>

          <p className="text-sm">
            Estresse ocupacional
          </p>

          <p className="text-sm text-blue-400 mt-2">
            📋 5 planos de ação abertos
          </p>
        </div>

        {/* ERGONOMIA */}
        <div
          onClick={() => go("/ergonomia")}
          className="bg-[#0f172a] p-6 rounded-xl cursor-pointer hover:scale-[1.02] transition border border-[#1f2a44] hover:border-yellow-400"
        >
          <h3 className="mb-2 font-semibold">Ergonomia</h3>

          <p className="text-sm text-gray-400">
            3 riscos ativos
          </p>

          <p className="text-sm text-yellow-400 mt-2">
            Postura inadequada
          </p>
        </div>

        {/* AMBIENTE */}
        <div
          onClick={() => go("/ambiente")}
          className="bg-[#0f172a] p-6 rounded-xl cursor-pointer hover:scale-[1.02] transition border border-[#1f2a44] hover:border-cyan-400"
        >
          <h3 className="mb-2 font-semibold">Ambiente</h3>

          <p className="text-sm text-gray-400">
            1 não conformidade
          </p>

          <p className="text-sm text-red-400 mt-2">
            Falta de sinalização
          </p>
        </div>

      </div>

      {/* COMPARAÇÃO POR UNIDADE */}
      <div className="bg-[#0f172a] p-6 rounded-2xl mb-10 border border-[#1f2a44]">

        <h2 className="mb-4 font-semibold">Comparação por Unidade</h2>

        <div className="space-y-2 text-sm">

          <div className="flex justify-between">
            <span>Unidade A</span>
            <span className="text-green-400">80%</span>
          </div>

          <div className="flex justify-between">
            <span>Unidade B</span>
            <span className="text-yellow-400">65%</span>
          </div>

          <div className="flex justify-between">
            <span>Unidade C</span>
            <span className="text-red-400">40%</span>
          </div>

        </div>
      </div>

      {/* PLANO DE AÇÃO */}
      <div
        onClick={() => go("/action-plans")}
        className="bg-[#0f172a] p-6 rounded-2xl cursor-pointer border border-blue-500/30 hover:border-blue-400 hover:shadow-[0_0_30px_rgba(59,130,246,0.3)] transition"
      >
        <h2 className="mb-3 font-semibold">Plano de Ação</h2>

        <p className="text-sm text-gray-400">
          5 ações abertas
        </p>

        <p className="text-sm text-yellow-400 mt-2">
          2 atrasadas
        </p>

        <p className="text-sm text-green-400 mt-1">
          3 em andamento
        </p>

      </div>

    </div>
  )
}