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
    <div className="min-h-screen bg-[#f8fafc] flex items-center justify-center p-6">

      <div className="
w-full max-w-[420px]

bg-white
p-6
rounded-xl

border border-gray-200

shadow-[0_10px_30px_rgba(0,0,0,0.08)]
">

        {/* SUCESSO */}
        {enviado && (
          <div className="
bg-white
border border-gray-200
p-6
rounded-xl
shadow-[0_10px_25px_rgba(0,0,0,0.05)]
transition-all
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
bg-green-50
border border-green-200
p-6
rounded-xl
text-center
shadow-sm
animate-fade-in
">

           {/* HEADER + TOPO ACOLHEDOR */}
<div className="mb-6">

  {/* título */}
  <div className="text-center mb-4">
    <div className="text-xl font-bold text-[#0f172a]">
      Safety Voice
    </div>
  </div>

  {/* box acolhedor */}
  <div className="
  bg-blue-50
  border border-blue-200
  p-4
  rounded-lg
  ">

    <div className="text-sm text-blue-700 font-medium">
      Canal 100% anônimo
    </div>

    <div className="text-xs text-blue-600 mt-1">
      Seu relato ajuda a melhorar a segurança no trabalho.
    </div>

  </div>

</div>

            {/* STEP 1 */}
            {step === 1 && (
              <div className="space-y-4 animate-fade-in">

                <select
                  value={form.unidade}
                  onChange={e => setForm({ ...form, unidade: e.target.value })}
                  className="
w-full
p-3
bg-white
border border-gray-300
rounded-lg
text-[#0f172a]
focus:outline-none
focus:ring-2
focus:ring-blue-500
focus:border-blue-500
transition
"
                >
                  <option value="">Unidade</option>
                  <option>Unidade A</option>
                  <option>Unidade B</option>
                </select>

                <select
                  value={form.turno}
                  onChange={e => setForm({ ...form, turno: e.target.value })}
                  className="
w-full
p-3
bg-white
border border-gray-300
rounded-lg
text-[#0f172a]
focus:outline-none
focus:ring-2
focus:ring-blue-500
focus:border-blue-500
transition
"
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
                  className="
w-full
p-3
bg-white
border border-gray-300
rounded-lg
text-[#0f172a]
focus:outline-none
focus:ring-2
focus:ring-blue-500
focus:border-blue-500
transition
"
                >
                  <option value="denuncia">Denúncia</option>
                  <option value="risco">Risco</option>
                  <option value="sugestao">Sugestão</option>
                </select>

                <select
                  value={form.categoria}
                  onChange={e => setForm({ ...form, categoria: e.target.value })}
                  className="
w-full
p-3
bg-white
border border-gray-300
rounded-lg
text-[#0f172a]
focus:outline-none
focus:ring-2
focus:ring-blue-500
focus:border-blue-500
transition
"
                >
                  <option value="pessoas">Pessoas</option>
                  <option value="ambiente">Ambiente</option>
                </select>

                <div className="flex gap-2">
                  <button className="
w-full
bg-gray-200
hover:bg-gray-300

text-gray-800
py-3
rounded-lg

transition
">
  Voltar
</button>
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
                  className="
w-full
p-3
bg-white
border border-gray-300
rounded-lg
text-[#0f172a]
focus:outline-none
focus:ring-2
focus:ring-blue-500
focus:border-blue-500
transition
"
                />

                <select
                  value={form.risco}
                  onChange={e => setForm({ ...form, risco: e.target.value })}
                  className="
w-full
p-3
bg-white
border border-gray-300
rounded-lg
text-[#0f172a]
focus:outline-none
focus:ring-2
focus:ring-blue-500
focus:border-blue-500
transition
"
                >
                  <option value="baixo">Baixo</option>
                  <option value="medio">Médio</option>
                  <option value="alto">Alto</option>
                </select>

                <div className="flex gap-2">
                  <button className="
w-full
bg-gray-200
hover:bg-gray-300

text-gray-800
py-3
rounded-lg

transition
">
  Voltar
</button>
                  <button className="
w-full
bg-[#2563eb]
hover:bg-[#1d4ed8]

text-white
py-3
rounded-lg
font-semibold

shadow-md
transition
">
  Enviar Relato
</button>
                </div>

              </div>
            )}

          </div>
        )}

      </div>

    </div>
  )
}