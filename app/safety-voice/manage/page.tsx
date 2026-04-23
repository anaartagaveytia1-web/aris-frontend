"use client"

import { useState, useEffect } from "react"
import { supabase } from "@/lib/supabase"

export default function SafetyVoiceManage() {

  const [filtro, setFiltro] = useState({
    unidade: "",
    dataInicio: "",
    dataFim: ""
  })

  const [relatos, setRelatos] = useState<any[]>([])

  // 🔥 BUSCAR DO BANCO
  useEffect(() => {
    fetchRelatos()
  }, [])

  async function fetchRelatos() {
    const { data, error } = await supabase
      .from("safety_voice_reports")
      .select("*")
      .order("created_at", { ascending: false })

    if (error) {
      console.error(error)
      return
    }

    setRelatos(data || [])
  }

  // 🔵 TRATAR
  async function tratar(id: string) {
    const { error } = await supabase
      .from("safety_voice_reports")
      .update({ status: "em_analise" })
      .eq("id", id)

    if (error) {
      console.error(error)
      return
    }

    fetchRelatos()
  }

  // 🟣 CRIAR AÇÃO
  async function criarAcao(reportId: string) {
    const { error } = await supabase
      .from("safety_voice_actions")
      .insert([
        {
          report_id: reportId,
          acao: "Verificar situação no local",
          responsavel: "Supervisor",
          prazo: "2026-05-01"
        }
      ])

    if (error) {
      console.error(error)
      return
    }

    alert("Ação criada!")
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
          <div
            key={relato.id}
            className="
              bg-[#0f172a]
              border border-gray-700
              p-4
              rounded-xl
              flex justify-between items-center
            "
          >

            <div>
              <div className="font-semibold">{relato.descricao}</div>
              <div className="text-xs text-gray-400">
                {relato.unidade} • {new Date(relato.created_at).toLocaleDateString()}
              </div>
              <div className="text-xs mt-1">
                Status: {relato.status}
              </div>
            </div>

            <div className="flex gap-2">

              <button
                onClick={() => tratar(relato.id)}
                className="bg-blue-600 px-4 py-2 rounded-lg hover:bg-blue-500"
              >
                Tratar
              </button>

              <button
                onClick={() => criarAcao(relato.id)}
                className="bg-purple-600 px-3 py-2 rounded-lg text-sm hover:bg-purple-500"
              >
                Criar ação
              </button>

            </div>

          </div>
        ))}

      </div>

    </div>
  )
}