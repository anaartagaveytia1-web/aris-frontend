"use client"

import { useState } from "react"

export default function SafetyVoice() {

  const [step, setStep] = useState(1)
  const [enviado, setEnviado] = useState(false)

  const [form, setForm] = useState({
    unidade: "",
    turno: "",
    tipo: "denuncia",
    categoria: "pessoas",
    descricao: "",
    risco: "medio"
  })

  function next() {
    setStep(step + 1)
  }

  function back() {
    setStep(step - 1)
  }

  function enviar() {
    setEnviado(true)
  }

  return (
    <div className="min-h-screen bg-[#020617] text-white p-6 flex items-center justify-center">

      <div className="w-full max-w-[420px]">

        {/* SUCESSO */}
        {enviado && (
          <div className="
          bg-[#030b1a]
          border border-green-400/30
          p-6
          rounded-xl
          text-center
          shadow-[0_0_30px_rgba(34,197,94,0.3)]
          animate-fade-in
          ">
            <div className="text-green-400 text-xl font-bold mb-2">
              ✔ Enviado com sucesso
            </div>
            <div className="text-sm text-gray-300">
              Obrigado por contribuir com a segurança.
            </div>
          </div>
        )}

        {!enviado && (
          <div className="
          bg-[#030b1a]
          border border-blue-500/10
          p-6
          rounded-xl
          shadow-[0_0_20px_rgba(59,130,246,0.1)]
          transition-all
          ">

            {/* HEADER */}
            <div className="mb-6 text-center">
              <div className="text-xl font-bold">
                Safety Voice
              </div>
              <div className="text-xs text-gray-400">
                100% anônimo
              </div>
            </div>

            {/* STEP 1 */}
            {step === 1 && (
              <div className="space-y-4 animate-fade-in">

                <select
                  value={form.unidade}
                  onChange={e => setForm({ ...form, unidade: e.target.value })}
                  className="w-full p-3 bg-[#020617] border border-[#1f2a44] rounded"
                >
                  <option value="">Unidade</option>
                  <option>Unidade A</option>
                  <option>Unidade B</option>
                </select>

                <select
                  value={form.turno}
                  onChange={e => setForm({ ...form, turno: e.target.value })}
                  className="w-full p-3 bg-[#020617] border border-[#1f2a44] rounded"
                >
                  <option value="">Turno</option>
                  <option>Manhã</option>
                  <option>Noite</option>
                </select>

                <button onClick={next} className="btn">
                  Próximo
                </button>

              </div>
            )}

            {/* STEP 2 */}
            {step === 2 && (
              <div className="space-y-4 animate-fade-in">

                <select
                  value={form.tipo}
                  onChange={e => setForm({ ...form, tipo: e.target.value })}
                  className="w-full p-3 bg-[#020617] border border-[#1f2a44] rounded"
                >
                  <option value="denuncia">Denúncia</option>
                  <option value="risco">Risco</option>
                  <option value="sugestao">Sugestão</option>
                </select>

                <select
                  value={form.categoria}
                  onChange={e => setForm({ ...form, categoria: e.target.value })}
                  className="w-full p-3 bg-[#020617] border border-[#1f2a44] rounded"
                >
                  <option value="pessoas">Pessoas</option>
                  <option value="ambiente">Ambiente</option>
                </select>

                <div className="flex gap-2">
                  <button onClick={back} className="btn-secondary">Voltar</button>
                  <button onClick={next} className="btn">Próximo</button>
                </div>

              </div>
            )}

            {/* STEP 3 */}
            {step === 3 && (
              <div className="space-y-4 animate-fade-in">

                <textarea
                  placeholder="Descreva o problema..."
                  value={form.descricao}
                  onChange={e => setForm({ ...form, descricao: e.target.value })}
                  className="w-full p-3 bg-[#020617] border border-[#1f2a44] rounded"
                />

                <select
                  value={form.risco}
                  onChange={e => setForm({ ...form, risco: e.target.value })}
                  className="w-full p-3 bg-[#020617] border border-[#1f2a44] rounded"
                >
                  <option value="baixo">Baixo</option>
                  <option value="medio">Médio</option>
                  <option value="alto">Alto</option>
                </select>

                <div className="flex gap-2">
                  <button onClick={back} className="btn-secondary">Voltar</button>
                  <button onClick={enviar} className="btn">Enviar</button>
                </div>

              </div>
            )}

          </div>
        )}

      </div>

    </div>
  )
}