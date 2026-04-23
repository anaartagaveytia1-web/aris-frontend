"use client"

import { useState } from "react"
function FloatingInput({ label, value, onChange, textarea = false }: any) {
  return (
    <div className="relative">

      {textarea ? (
        <textarea
          value={value}
          onChange={onChange}
          className="
          peer w-full p-3 pt-5 bg-white border border-gray-300 rounded-lg
          text-[#0f172a]
          focus:outline-none focus:ring-2 focus:ring-blue-500
          transition
          "
        />
      ) : (
        <input
          value={value}
          onChange={onChange}
          className="
          peer w-full p-3 pt-5 bg-white border border-gray-300 rounded-lg
          text-[#0f172a]
          focus:outline-none focus:ring-2 focus:ring-blue-500
          transition
          "
        />
      )}

      <label className="
        absolute left-3 top-2 text-xs text-gray-500
        transition-all
        peer-placeholder-shown:top-3.5
        peer-placeholder-shown:text-sm
        peer-placeholder-shown:text-gray-400
        peer-focus:top-2
        peer-focus:text-xs
        peer-focus:text-blue-500
      ">
        {label}
      </label>

    </div>
  )
}
export default function SafetyVoice() {

  const [step, setStep] = useState(1)
const [enviado, setEnviado] = useState(false)
const [erro, setErro] = useState("")

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
  if (!form.descricao) {
    setErro("Descreva o problema antes de enviar")
    return
  }

  setErro("")
  setEnviado(true)
}

  return (
  <div className="
  min-h-screen
  bg-[#e5e7eb]
  flex
  items-center
  justify-center
  ">

    {/* 📱 MOLDURA DE APP */}
    <div className="
    w-[360px]
    h-[720px]

   bg-[#f8fafc] relative

    rounded-[30px]
    shadow-[0_20px_60px_rgba(0,0,0,0.2)]

    overflow-hidden
    border border-gray-300
    ">

      {/* 📦 CONTEÚDO INTERNO */}
<div className="
  h-full
  flex
  flex-col
  justify-between
  px-5
  py-6
">
{enviado ? (
  <div className="
    bg-green-50
    border border-green-200
    p-6
    rounded-xl
    text-center
    shadow-sm
  ">

    <div className="text-green-600 text-xl font-bold mb-2">
      ✔ Enviado com sucesso
    </div>

    <div className="text-sm text-gray-600">
      Obrigado por contribuir com a segurança.
    </div>

  </div>
) : (
           {/* HEADER + TOPO ACOLHEDOR */}
           {!enviado && (
  <>
{/* 🔵 HEADER NOVO */}
<div className="
  bg-[#020617]
  pt-10 pb-16
  px-5
  relative
  overflow-hidden
">

  {/* glow */}
  <div className="absolute w-[300px] h-[120px] bg-cyan-500/20 blur-[100px]" />

  {/* LINHA ESQUERDA */}
  <div className="
    absolute left-0 top-1/2 w-[40%] h-[2px]
    bg-gradient-to-r from-transparent via-cyan-400 to-cyan-500
    opacity-60
  " />

  {/* LINHA DIREITA */}
  <div className="
    absolute right-0 top-1/2 w-[40%] h-[2px]
    bg-gradient-to-l from-transparent via-cyan-400 to-cyan-500
    opacity-60
  " />

 {/* logo */}
  <img
    src="/logo-aris.png"
    className="w-[220px] mx-auto relative z-10"
  />
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
<div className="text-center mb-6 mt-2">

  <div className="flex items-center justify-center gap-3 mb-2">
    <div className="h-[1px] w-10 bg-blue-300" />
    <div className="text-blue-500 text-xl">🎤</div>
    <div className="h-[1px] w-10 bg-blue-300" />
  </div>

  <h1 className="text-2xl font-bold text-[#0f172a]">
    Safety Voice
  </h1>

</div>
<div className="
mt-2
bg-blue-50
border border-blue-200
p-4
rounded-xl
mb-5
">
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

                <button onClick={next} className="
w-full
mt-4
bg-gradient-to-r from-blue-600 to-cyan-400
text-white
py-4
rounded-xl
font-semibold text-lg
shadow-[0_10px_30px_rgba(37,99,235,0.4)]
hover:scale-[1.02]
active:scale-[0.98]
transition
">
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
                  <button
  onClick={back}
  className="
  w-full
  bg-gray-200
  hover:bg-gray-300
  text-gray-800
  py-3
  rounded-lg
  transition
  "
>
  Voltar
</button>
                  <button onClick={next} className="
w-full
mt-4
bg-gradient-to-r from-blue-600 to-cyan-400
text-white
py-4
rounded-xl
font-semibold text-lg
shadow-[0_10px_30px_rgba(37,99,235,0.4)]
hover:scale-[1.02]
active:scale-[0.98]
transition
"
>Próximo
</button>
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

    {/* ERRO */}
    {erro && (
      <div className="text-red-500 text-sm mb-2">
        {erro}
      </div>
    )}

    <div className="flex gap-2">

      <button
        onClick={back}
        className="
        w-full
        bg-gray-200
        hover:bg-gray-300
        text-gray-800
        py-3
        rounded-lg
        transition
        "
      >
        Voltar
      </button>

      <button
        onClick={enviar}
        className="
        w-full
        bg-[#2563eb]
        hover:bg-[#1d4ed8]
        active:scale-[0.98]
        text-white
        py-3
        rounded-lg
        font-semibold
        shadow-md
        transition
        "
      >
        Enviar Relato
      </button>

    </div>
    
{/* FOOTER */}
      <div className="text-center text-xs text-gray-400">

        <div className="text-blue-500 font-semibold">
          ARIS
        </div>

        <div className="opacity-70">
          Safety System
        </div>

      </div>

    </>
  )}

</div>
           )}
           