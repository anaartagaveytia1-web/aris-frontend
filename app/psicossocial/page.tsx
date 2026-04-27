"use client"

import { useState } from "react"

export default function Psicossocial() {

  // 📊 DADOS
  const secoes = [
    {
      titulo: "Exigência e Carga",
      perguntas: [
        { id: "c1", texto: "A rotina exige execução em ritmo acelerado constante?" },
        { id: "c2", texto: "O trabalho exige alto esforço mental contínuo?" }
      ]
    },
    {
      titulo: "Liderança",
      perguntas: [
        { id: "l1", texto: "A liderança oferece suporte?" },
        { id: "l2", texto: "Existe reconhecimento?" }
      ]
    }
  ]

  // 🧠 STATE
  const [etapa, setEtapa] = useState(0)
  const [respostas, setRespostas] = useState<{ [key: string]: number }>({})
  const [finalizado, setFinalizado] = useState(false)

  // 🔁 SEÇÃO ATUAL
  const secao = secoes[etapa]

  // 🧠 SALVAR RESPOSTA (SEM BUG)
  function responder(id: string, valor: number) {
    setRespostas(prev => ({
      ...prev,
      [id]: valor
    }))
  }

  // ✅ VERIFICA SE RESPONDEU TUDO
  const respondeuTudo = secao.perguntas.every(p => respostas[p.id] !== undefined)

  // 📊 SCORE SIMPLES
  function calcularScore() {
    const valores = Object.values(respostas)
    if (!valores.length) return 0

    const soma = valores.reduce((a, b) => a + b, 0)
    return Math.round((soma / (valores.length * 2)) * 100)
  }

  const score = calcularScore()

  // 🏁 FINAL
  if (finalizado) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="bg-white p-6 rounded-xl shadow w-[360px]">

          <h2 className="text-xl font-bold mb-4">Resultado</h2>

          <div className="text-3xl font-bold text-blue-600 mb-2">
            {score}%
          </div>

          <button
            onClick={() => console.log(respostas)}
            className="w-full bg-blue-600 text-white py-2 rounded"
          >
            Enviar
          </button>

        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">

      <div className="w-[360px] h-[720px] bg-white rounded-2xl shadow p-5 flex flex-col justify-between">

        {/* HEADER */}
        <div>
          <h1 className="text-xl font-bold text-blue-600">
            Radar Psicossocial
          </h1>

          {/* PROGRESSO */}
          <div className="mt-3">

            <div className="flex justify-between text-xs text-gray-400 mb-1">
              <span>Etapa {etapa + 1} de {secoes.length}</span>
              <span>{Math.round(((etapa + 1) / secoes.length) * 100)}%</span>
            </div>

            <div className="w-full bg-gray-200 h-2 rounded-full">
              <div
                className="bg-blue-500 h-2 rounded-full transition-all"
                style={{ width: `${((etapa + 1) / secoes.length) * 100}%` }}
              />
            </div>

            {/* 🔥 SCORE EM TEMPO REAL */}
            <div className="text-center text-xs text-gray-500 mt-2">
              Risco atual:
              <span className="ml-1 font-bold text-blue-600">
                {score}%
              </span>
            </div>

          </div>
        </div>

        {/* PERGUNTAS */}
        <div>

          <h2 className="font-semibold mb-3">{secao.titulo}</h2>

          {secao.perguntas.map(p => (
            <div key={p.id} className="mb-4">

              <p className="mb-2">{p.texto}</p>

              <div className="flex gap-2">

                <button
                  onClick={() => responder(p.id, 2)}
                  className={`px-3 py-1 rounded ${
                    respostas[p.id] === 2 ? "bg-blue-500 text-white" : "bg-gray-200"
                  }`}
                >
                  Sim
                </button>

                <button
                  onClick={() => responder(p.id, 1)}
                  className={`px-3 py-1 rounded ${
                    respostas[p.id] === 1 ? "bg-blue-500 text-white" : "bg-gray-200"
                  }`}
                >
                  Parcial
                </button>

                <button
                  onClick={() => responder(p.id, 0)}
                  className={`px-3 py-1 rounded ${
                    respostas[p.id] === 0 ? "bg-blue-500 text-white" : "bg-gray-200"
                  }`}
                >
                  Não
                </button>

              </div>

            </div>
          ))}

        </div>

        {/* BOTÕES */}
        <div className="flex gap-2">

          <button
            onClick={() => setEtapa(etapa - 1)}
            disabled={etapa === 0}
            className="w-full bg-gray-200 py-2 rounded"
          >
            Voltar
          </button>

          {etapa < secoes.length - 1 ? (
            <button
              disabled={!respondeuTudo}
              onClick={() => setEtapa(etapa + 1)}
              className={`w-full py-2 rounded text-white ${
                respondeuTudo ? "bg-blue-600" : "bg-gray-300"
              }`}
            >
              Próximo
            </button>
          ) : (
            <button
              onClick={() => setFinalizado(true)}
              className="w-full bg-green-600 text-white py-2 rounded"
            >
              Finalizar
            </button>
          )}

        </div>

      </div>
    </div>
  )
}