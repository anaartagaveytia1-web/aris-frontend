"use client"

import { useState } from "react"

export default function SafetyVoiceManage() {

  const [filtro, setFiltro] = useState({
    unidade: "",
    dataInicio: "",
    dataFim: ""
  })

  // MOCK (depois vem do banco)
  const [relatos, setRelatos] = useState([
    {
      id: 1,
      unidade: "Unidade A",
      data: "2026-04-20",
      descricao: "Falta de EPI",
      status: "novo"
    },
    {
      id: 2,
      unidade: "Unidade B",
      data: "2026-04-18",
      descricao: "Excesso de carga de trabalho",
      status: "em_analise"
    }
  ])

  function tratar(id: number) {
    setRelatos(relatos.map(r =>
      r.id === id ? { ...r, status: "tratado" } : r
    ))
  }

  return (
    <div className="min-h-screen bg-[#020617] text-white p-6">

      <h1 className="text-2xl font-bold mb-6">
        Gestão Safety Voice
      </h1>

      {/* FILTROS */}
      <div className="grid grid-cols-3 gap-3 mb-6">

        <select
          className="p-2 rounded bg-[#0f172a] border border-gray-700"
          onChange={e => setFiltro({ ...filtro, unidade: e.target.value })}
        >
          <option value="">Todas unidades</option>
          <option>Unidade A</option>
          <option>Unidade B</option>
        </select>

        <input
          type="date"
          className="p-2 rounded bg-[#0f172a] border border-gray-700"
          onChange={e => setFiltro({ ...filtro, dataInicio: e.target.value })}
        />

        <input
          type="date"
          className="p-2 rounded bg-[#0f172a] border border-gray-700"
          onChange={e => setFiltro({ ...filtro, dataFim: e.target.value })}
        />

      </div>

      {/* LISTA */}
      <div className="space-y-3">

        {relatos.map(relato => (
          <div key={relato.id} className="
            bg-[#0f172a]
            border border-gray-700
            p-4
            rounded-xl
            flex justify-between items-center
          ">

            <div>
              <div className="font-semibold">{relato.descricao}</div>
              <div className="text-xs text-gray-400">
                {relato.unidade} • {relato.data}
              </div>
              <div className="text-xs mt-1">
                Status: {relato.status}
              </div>
            </div>

            <button
              onClick={() => tratar(relato.id)}
              className="
                bg-blue-600
                px-4 py-2
                rounded-lg
                hover:bg-blue-500
              "
            >
              Tratar
            </button>

          </div>
        ))}

      </div>

    </div>
  )
}