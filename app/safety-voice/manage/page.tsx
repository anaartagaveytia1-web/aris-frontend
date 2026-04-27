"use client"

import { useState, useEffect } from "react"
import { supabase } from "@/lib/supabase"

export default function SafetyVoiceManage() {

const [filtro, setFiltro] = useState({
  empresa: "",
  unidade: "",
  status: "",
  turno: "",
  dataInicio: "",
  dataFim: ""
})

  const [relatos, setRelatos] = useState<any[]>([])

  // 🔥 BUSCAR DO BANCO
 useEffect(() => {
  fetchRelatos()
}, [filtro])

  async function fetchRelatos() {

  let query = supabase
    .from("eventos_risco")
    .select("*")
    .order("created_at", { ascending: false })

  if (filtro.empresa) {
    query = query.ilike("cliente", `%${filtro.empresa}%`)
  }

  if (filtro.unidade) {
    query = query.eq("unidade", filtro.unidade)
  }

  if (filtro.status) {
    query = query.eq("status", filtro.status)
  }

  if (filtro.turno) {
    query = query.eq("turno", filtro.turno)
  }

  if (filtro.dataInicio) {
    query = query.gte("created_at", filtro.dataInicio)
  }

  if (filtro.dataFim) {
    query = query.lte("created_at", filtro.dataFim)
  }

  const { data, error } = await query

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
  function getPrioridade(relato: any) {
  if (relato.risco === "alto") return 3
  if (relato.risco === "medio") return 2
  return 1
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
       <div className="grid grid-cols-6 gap-3 mb-6">

  {/* EMPRESA */}
  <input
    placeholder="Empresa"
    className="p-2 rounded bg-[#0f172a] border border-gray-700"
    onChange={e => setFiltro({ ...filtro, empresa: e.target.value })}
  />

  {/* UNIDADE */}
  <select
    className="p-2 rounded bg-[#0f172a] border border-gray-700"
    onChange={e => setFiltro({ ...filtro, unidade: e.target.value })}
  >
    <option value="">Unidade</option>
    <option>Unidade A</option>
    <option>Unidade B</option>
  </select>

  {/* STATUS */}
  <select
    className="p-2 rounded bg-[#0f172a] border border-gray-700"
    onChange={e => setFiltro({ ...filtro, status: e.target.value })}
  >
    <option value="">Status</option>
    <option value="novo">Novo</option>
    <option value="em_analise">Em análise</option>
    <option value="andamento">Andamento</option>
    <option value="tratado">Tratado</option>
  </select>

  {/* TURNO */}
  <select
    className="p-2 rounded bg-[#0f172a] border border-gray-700"
    onChange={e => setFiltro({ ...filtro, turno: e.target.value })}
  >
    <option value="">Turno</option>
    <option>Manhã</option>
    <option>Tarde</option>
    <option>Noite</option>
  </select>

  {/* DATA INÍCIO */}
  <input
    type="date"
    className="p-2 rounded bg-[#0f172a] border border-gray-700"
    onChange={e => setFiltro({ ...filtro, dataInicio: e.target.value })}
  />

  {/* DATA FIM */}
  <input
    type="date"
    className="p-2 rounded bg-[#0f172a] border border-gray-700"
    onChange={e => setFiltro({ ...filtro, dataFim: e.target.value })}
  />

</div>
{/* FILTROS */}
<div>...filtros...</div>

{/* 🔥 CONTADOR AQUI */}
<div className="flex gap-4 mb-4 text-sm">

  <div className="text-red-400">
    Novos: {relatos.filter(r => r.status === "novo").length}
  </div>

  <div className="text-yellow-400">
    Em análise: {relatos.filter(r => r.status === "em_analise").length}
  </div>

  <div className="text-green-400">
    Tratados: {relatos.filter(r => r.status === "tratado").length}
  </div>

</div>

{/* LISTA */}
<div className="space-y-3">

</div>
      {/* LISTA */}
      <div className="space-y-3">

        {[...relatos]
  .sort((a, b) => {
    const prioridade =
      (b.risco === "alto" ? 3 : b.risco === "medio" ? 2 : 1) -
      (a.risco === "alto" ? 3 : a.risco === "medio" ? 2 : 1)

    if (prioridade !== 0) return prioridade

    return new Date(b.created_at).getTime() - new Date(a.created_at).getTime()
  })
  .map(relato => (
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
              <div className={`font-semibold ${
  relato.risco === "alto" ? "text-red-400" :
  relato.risco === "medio" ? "text-yellow-400" :
  "text-green-400"
}`}>
  {relato.descricao}
</div>
              <div className="text-xs text-gray-400">
                {relato.unidade} • {new Date(relato.created_at).toLocaleDateString()}
              </div>
              <div className={`text-xs mt-1 ${
  relato.status === "novo" ? "text-red-400" :
  relato.status === "em_analise" ? "text-yellow-400" :
  relato.status === "andamento" ? "text-orange-400" :
  "text-green-400"
}`}>
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
             <button
  onClick={() =>
    setFiltro({
      empresa: "",
      unidade: "",
      status: "",
      turno: "",
      dataInicio: "",
      dataFim: ""
    })
  }
  className="bg-gray-700 px-4 py-2 rounded-lg"
>
  Limpar filtros
</button>
            </div>

          </div>
        ))}

      </div>

    </div>
  )
}