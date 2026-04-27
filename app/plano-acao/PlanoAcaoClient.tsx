"use client"

import { useEffect, useState } from "react"
import { useSearchParams } from "next/navigation"
import { supabase } from "@/lib/supabase"

export default function PlanoAcaoClient() {

  const searchParams = useSearchParams()
  const relatoId = searchParams.get("relatoId")

  const [acoes, setAcoes] = useState<any[]>([])
  const [relato, setRelato] = useState<any>(null)

  const [form, setForm] = useState({
    empresa: "",
    unidade: "",
    turno: "",
    area: "",
    local: "",
    descricao: "",
    urgencia: "",
    responsavel: "",
    email: "",
    prazo: ""
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
    const { data, error } = await supabase
      .from("safety_voice_actions")
      .select("*")
      .order("created_at", { ascending: false })

    if (error) {
      console.error(error)
      return
    }

    setAcoes(data || [])
  }

  // 🔥 CRIAR AÇÃO
  async function criarAcao() {

    if (
      !form.empresa ||
      !form.unidade ||
      !form.descricao ||
      !form.responsavel ||
      !form.prazo
    ) {
      alert("Preencha os campos obrigatórios")
      return
    }

    const { error } = await supabase
      .from("safety_voice_actions")
      .insert([
        {
          empresa: form.empresa,
          unidade: form.unidade,
          turno: form.turno,
          area: form.area,
          local: form.local,
          descricao: form.descricao,
          urgencia: form.urgencia,
          responsavel: form.responsavel,
          email_responsavel: form.email,
          prazo: form.prazo,
          status: "pendente"
        }
      ])

   if (error) {
  console.error("ERRO REAL:", error)
  alert(error.message)
  return
}

    alert("Plano criado com sucesso!")

    setForm({
      empresa: "",
      unidade: "",
      turno: "",
      area: "",
      local: "",
      descricao: "",
      urgencia: "",
      responsavel: "",
      email: "",
      prazo: ""
    })

    fetchAcoes()
  }

  // 🔥 CONCLUIR
  async function concluirAcao(id: string) {
    await supabase
      .from("safety_voice_actions")
      .update({ status: "concluido" })
      .eq("id", id)

    fetchAcoes()
  }

  return (
    <div className="min-h-screen bg-[#020617] text-white p-6">

      <h1 className="text-2xl font-bold mb-6">
        Plano de Ação
      </h1>

      {/* 🔵 RELATO (OPCIONAL) */}
      {relato && (
        <div className="bg-[#0f172a] p-4 rounded-xl mb-6 border border-purple-500/30">
          <div className="text-purple-400 text-sm">
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

      {/* 🟣 FORM */}
      <div className="bg-[#0f172a] p-4 rounded-xl mb-6 border border-gray-700">

        <div className="grid grid-cols-3 gap-3">

          <input
            placeholder="Empresa"
            value={form.empresa}
            onChange={e => setForm({ ...form, empresa: e.target.value })}
            className="p-2 rounded bg-[#020617]"
          />

          <input
            placeholder="Unidade"
            value={form.unidade}
            onChange={e => setForm({ ...form, unidade: e.target.value })}
            className="p-2 rounded bg-[#020617]"
          />

          <select
            value={form.turno}
            onChange={e => setForm({ ...form, turno: e.target.value })}
            className="p-2 rounded bg-[#020617]"
          >
            <option value="">Turno</option>
            <option>Manhã</option>
            <option>Tarde</option>
            <option>Noite</option>
          </select>

          <input
            placeholder="Área (CIPA, TST...)"
            value={form.area}
            onChange={e => setForm({ ...form, area: e.target.value })}
            className="p-2 rounded bg-[#020617]"
          />

          <input
            placeholder="Local (máquina, piso...)"
            value={form.local}
            onChange={e => setForm({ ...form, local: e.target.value })}
            className="p-2 rounded bg-[#020617]"
          />

          <select
            value={form.urgencia}
            onChange={e => setForm({ ...form, urgencia: e.target.value })}
            className="p-2 rounded bg-[#020617]"
          >
            <option value="">Urgência</option>
            <option value="baixa">Baixa</option>
            <option value="media">Média</option>
            <option value="alta">Alta</option>
            <option value="critica">Crítica</option>
          </select>

          <textarea
            placeholder="Descrição do problema"
            value={form.descricao}
            onChange={e => setForm({ ...form, descricao: e.target.value })}
            className="col-span-3 p-2 rounded bg-[#020617]"
          />

          <input
            placeholder="Responsável"
            value={form.responsavel}
            onChange={e => setForm({ ...form, responsavel: e.target.value })}
            className="p-2 rounded bg-[#020617]"
          />

          <input
            placeholder="Email do responsável"
            value={form.email}
            onChange={e => setForm({ ...form, email: e.target.value })}
            className="p-2 rounded bg-[#020617]"
          />

          <input
            type="date"
            value={form.prazo}
            onChange={e => setForm({ ...form, prazo: e.target.value })}
            className="p-2 rounded bg-[#020617]"
          />

        </div>

        <div className="mt-4">
          <button
            onClick={criarAcao}
            className="bg-purple-600 px-4 py-2 rounded-lg hover:bg-purple-500"
          >
            Criar plano de ação
          </button>
        </div>

      </div>

      {/* 📋 LISTA */}
      <div className="space-y-3">

        {acoes.map(acao => {

          const hoje = new Date()
          const prazo = new Date(acao.prazo)

          const atrasado =
            acao.status !== "concluido" && prazo < hoje

          return (
            <div
              key={acao.id}
              className="bg-[#0f172a] p-4 rounded-xl border border-gray-700"
            >

              <div className="flex justify-between">

                <div>

                  <div className="font-semibold">
                    {acao.descricao}
                  </div>

                  <div className="text-xs text-gray-400">
                    {acao.responsavel} • {acao.prazo}
                  </div>

                  <div className="text-xs text-blue-400 mt-1">
                    {acao.unidade} • {acao.area}
                  </div>

                  <div className="text-xs text-purple-400 mt-1">
                    Urgência: {acao.urgencia}
                  </div>

                </div>

                {acao.status !== "concluido" && (
                  <button
                    onClick={() => concluirAcao(acao.id)}
                    className="bg-green-600 px-3 py-2 rounded-lg text-sm"
                  >
                    Concluir
                  </button>
                )}

              </div>

              <div className={`text-xs mt-2 ${
                acao.status === "concluido"
                  ? "text-green-400"
                  : atrasado
                  ? "text-red-500"
                  : "text-yellow-400"
              }`}>
                {acao.status === "concluido"
                  ? "concluído"
                  : atrasado
                  ? "atrasado"
                  : "pendente"}
              </div>

            </div>
          )
        })}

      </div>

    </div>
  )
}