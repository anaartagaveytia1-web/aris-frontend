"use client"
export const dynamic = "force-dynamic"

import { useEffect, useState } from "react"
import { supabase } from "@/lib/supabase"
import { useSearchParams } from "next/navigation"

export default function PlanoAcao() {

  const searchParams = useSearchParams()
  const relatoId = searchParams.get("relatoId")

  const [acoes, setAcoes] = useState<any[]>([])
  const [relato, setRelato] = useState<any>(null)

  const [form, setForm] = useState({
    acao: "",
    responsavel: "",
    prazo: ""
  })

  const [filtro, setFiltro] = useState({
    origem: "",
    unidade: "",
    status: ""
  })

  // 🔥 BUSCAR RELATO
  useEffect(() => {
    if (relatoId) fetchRelato()
    fetchAcoes()
  }, [])

  async function fetchRelato() {
    const { data } = await supabase
      .from("eventos_risco")
      .select("*")
      .eq("id", relatoId)
      .single()

    setRelato(data)
  }

  // 🔥 BUSCAR AÇÕES
  async function fetchAcoes() {

    let query = supabase
      .from("safety_voice_actions")
      .select(`
        *,
        eventos_risco (*)
      `)
      .order("created_at", { ascending: false })

    const { data, error } = await query

    if (error) {
      console.error(error)
      return
    }

    setAcoes(data || [])
  }

  // 🔥 CRIAR AÇÃO
  async function criarAcao() {

    if (!form.acao || !form.responsavel || !form.prazo) {
      alert("Preencha todos os campos")
      return
    }

    const { error } = await supabase
      .from("safety_voice_actions")
      .insert([
        {
          report_id: relatoId,
          acao: form.acao,
          responsavel: form.responsavel,
          prazo: form.prazo,
          status: "pendente"
        }
      ])

    if (error) {
      console.error(error)
      return
    }

    // 🔥 muda status do evento
    if (relatoId) {
      await supabase
        .from("eventos_risco")
        .update({ status: "andamento" })
        .eq("id", relatoId)
    }

    setForm({ acao: "", responsavel: "", prazo: "" })
    fetchAcoes()
  }

  // 🔥 CONCLUIR AÇÃO
  async function concluirAcao(id: string) {
    await supabase
      .from("safety_voice_actions")
      .update({ status: "concluido" })
      .eq("id", id)

    fetchAcoes()
  }

  // 🔍 FILTRO LOCAL
  const acoesFiltradas = acoes.filter(a => {

    if (filtro.origem && a.eventos_risco?.origem !== filtro.origem) return false
    if (filtro.unidade && a.eventos_risco?.unidade !== filtro.unidade) return false
    if (filtro.status && a.status !== filtro.status) return false

    return true
  })

  return (
    <div className="min-h-screen bg-[#020617] text-white p-6">

      <h1 className="text-2xl font-bold mb-6">
        Plano de Ação
      </h1>

      {/* 🔵 RELATO ORIGEM */}
      {relato && (
        <div className="bg-[#0f172a] p-4 rounded-xl mb-6 border border-purple-500/30">
          <div className="text-purple-400 text-sm mb-1">
            Origem: {relato.origem}
          </div>

          <div className="font-semibold">
            {relato.descricao}
          </div>

          <div className="text-xs text-gray-400">
            {relato.unidade} • {relato.turno}
          </div>
        </div>
      )}

      {/* 🔍 FILTROS */}
      <div className="grid grid-cols-3 gap-3 mb-6">

        <select
          className="p-2 rounded bg-[#0f172a]"
          onChange={e => setFiltro({ ...filtro, origem: e.target.value })}
        >
          <option value="">Origem</option>
          <option value="safety_voice">Safety Voice</option>
          <option value="psicossocial">Psicossocial</option>
          <option value="ambiente">Ambiente</option>
          <option value="lideranca">Liderança</option>
        </select>

        <input
          placeholder="Unidade"
          className="p-2 rounded bg-[#0f172a]"
          onChange={e => setFiltro({ ...filtro, unidade: e.target.value })}
        />

        <select
          className="p-2 rounded bg-[#0f172a]"
          onChange={e => setFiltro({ ...filtro, status: e.target.value })}
        >
          <option value="">Status</option>
          <option value="pendente">Pendente</option>
          <option value="concluido">Concluído</option>
        </select>

      </div>

      {/* 🟣 FORM */}
      <div className="grid grid-cols-3 gap-3 mb-6">

        <input
          placeholder="Ação"
          value={form.acao}
          onChange={e => setForm({ ...form, acao: e.target.value })}
          className="p-2 rounded bg-[#0f172a]"
        />

        <input
          placeholder="Responsável"
          value={form.responsavel}
          onChange={e => setForm({ ...form, responsavel: e.target.value })}
          className="p-2 rounded bg-[#0f172a]"
        />

        <input
          type="date"
          value={form.prazo}
          onChange={e => setForm({ ...form, prazo: e.target.value })}
          className="p-2 rounded bg-[#0f172a]"
        />

      </div>

      <button
        onClick={criarAcao}
        className="bg-purple-600 px-4 py-2 rounded-lg mb-6 hover:bg-purple-500"
      >
        Criar ação
      </button>

      {/* 📋 LISTA */}
      <div className="space-y-3">

        {acoesFiltradas.map(acao => (
          <div
            key={acao.id}
            className="bg-[#0f172a] p-4 rounded-xl border border-gray-700"
          >

            <div className="flex justify-between">

              <div>
                <div className="font-semibold">
                  {acao.acao}
                </div>

                <div className="text-xs text-gray-400">
                  {acao.responsavel} • {acao.prazo}
                </div>

                <div className="text-xs text-blue-400 mt-1">
                  {acao.eventos_risco?.unidade} • {acao.eventos_risco?.origem}
                </div>
              </div>

              <div className="flex gap-2">

                {acao.status !== "concluido" && (
                  <button
                    onClick={() => concluirAcao(acao.id)}
                    className="bg-green-600 px-3 py-2 rounded-lg text-sm"
                  >
                    Concluir
                  </button>
                )}

              </div>

            </div>

            <div className={`text-xs mt-2 ${
              acao.status === "concluido"
                ? "text-green-400"
                : "text-yellow-400"
            }`}>
              {acao.status}
            </div>

          </div>
        ))}

      </div>

    </div>
  )
}