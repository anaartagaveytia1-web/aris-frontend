"use client"

import { useState } from "react"

export default function SafetyVoice() {

  const [registros, setRegistros] = useState<any[]>([])

  const [form, setForm] = useState({
    unidade: "",
    turno: "",
    tipo: "denuncia",
    categoria: "pessoas",
    descricao: "",
    risco: "medio"
  })

  function handleSubmit() {

    if (!form.unidade || !form.turno || !form.descricao) {
      alert("Preencha os campos obrigatórios")
      return
    }

    const novo = {
      ...form,
      id: Date.now(),
      status: "nao_tratado",
      data: new Date().toISOString()
    }

    setRegistros([novo, ...registros])

    setForm({
      unidade: "",
      turno: "",
      tipo: "denuncia",
      categoria: "pessoas",
      descricao: "",
      risco: "medio"
    })
  }

  function atualizarStatus(id: number, status: string) {
    setRegistros(registros.map(r =>
      r.id === id ? { ...r, status } : r
    ))
  }

  return (
    <div className="min-h-screen bg-[#020617] text-white p-6">

      {/* HEADER */}
      <h1 className="text-2xl font-bold mb-6">
        Safety Voice (Anônimo)
      </h1>

      {/* FORMULÁRIO */}
      <div className="bg-[#0f172a] p-6 rounded-xl mb-6 space-y-4 border border-blue-500/20">

        {/* UNIDADE */}
        <select
          value={form.unidade}
          onChange={e => setForm({ ...form, unidade: e.target.value })}
          className="w-full p-2 bg-[#020617] border border-[#1f2a44] rounded"
        >
          <option value="">Selecione a Unidade</option>
          <option>Unidade A</option>
          <option>Unidade B</option>
          <option>Unidade C</option>
        </select>

        {/* TURNO */}
        <select
          value={form.turno}
          onChange={e => setForm({ ...form, turno: e.target.value })}
          className="w-full p-2 bg-[#020617] border border-[#1f2a44] rounded"
        >
          <option value="">Selecione o Turno</option>
          <option>Manhã</option>
          <option>Tarde</option>
          <option>Noite</option>
          <option>Administrativo</option>
        </select>

        {/* TIPO */}
        <select
          value={form.tipo}
          onChange={e => setForm({ ...form, tipo: e.target.value })}
          className="w-full p-2 bg-[#020617] border border-[#1f2a44] rounded"
        >
          <option value="denuncia">Denúncia</option>
          <option value="risco">Risco Observado</option>
          <option value="sugestao">Sugestão</option>
          <option value="elogio">Elogio</option>
        </select>

        {/* CATEGORIA */}
        <select
          value={form.categoria}
          onChange={e => setForm({ ...form, categoria: e.target.value })}
          className="w-full p-2 bg-[#020617] border border-[#1f2a44] rounded"
        >
          <option value="pessoas">Pessoas / Comportamento</option>
          <option value="maquinas">Máquinas</option>
          <option value="ambiente">Ambiente</option>
          <option value="processo">Processo</option>
        </select>

        {/* DESCRIÇÃO */}
        <textarea
          placeholder="Descreva o que está acontecendo..."
          value={form.descricao}
          onChange={e => setForm({ ...form, descricao: e.target.value })}
          className="w-full p-3 bg-[#020617] border border-[#1f2a44] rounded"
        />

        {/* RISCO */}
        <select
          value={form.risco}
          onChange={e => setForm({ ...form, risco: e.target.value })}
          className="w-full p-2 bg-[#020617] border border-[#1f2a44] rounded"
        >
          <option value="baixo">Baixo</option>
          <option value="medio">Médio</option>
          <option value="alto">Alto</option>
          <option value="critico">Crítico</option>
        </select>

        {/* BOTÃO */}
        <button
          onClick={handleSubmit}
          className="bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded shadow-[0_0_15px_rgba(59,130,246,0.6)] transition"
        >
          Enviar Relato
        </button>

      </div>

      {/* LISTA */}
      <div className="space-y-4">

        {registros.map(r => (
          <div key={r.id} className="bg-[#0f172a] p-4 rounded-xl border border-[#1f2a44]">

            <div className="flex justify-between text-sm">
              <span className="text-blue-400">{r.tipo}</span>
              <span className="text-gray-400">{r.unidade} • {r.turno}</span>
            </div>

            <div className="text-xs text-gray-500 mt-1">
              {new Date(r.data).toLocaleString()}
            </div>

            <div className="mt-3 text-sm">{r.descricao}</div>

            <div className="mt-3 text-xs">
              Categoria: {r.categoria} • Risco: {r.risco}
            </div>

            {/* STATUS */}
            <div className="mt-3 flex gap-3 text-xs">

              <button onClick={() => atualizarStatus(r.id, "tratado")} className="text-green-400">
                ✔ Tratado
              </button>

              <button onClick={() => atualizarStatus(r.id, "andamento")} className="text-yellow-400">
                🟡 Andamento
              </button>

              <button onClick={() => atualizarStatus(r.id, "nao_tratado")} className="text-red-400">
                ❌ Não tratado
              </button>

            </div>

          </div>
        ))}

      </div>

    </div>
  )
}