"use client"

import { useState } from "react"

type Pergunta = {
  id: string
  texto: string
}

type Secao = {
  titulo: string
  perguntas: Pergunta[]
}

const secoes: Secao[] = [
  {
    titulo: "Postura de Trabalho",
    perguntas: [
      { id: "p1", texto: "Você trabalha por longos períodos na mesma posição?" },
      { id: "p2", texto: "Sente desconforto na coluna durante o trabalho?" },
      { id: "p3", texto: "Precisa inclinar ou torcer o corpo com frequência?" }
    ]
  },
  {
    titulo: "Mobiliário e Equipamentos",
    perguntas: [
      { id: "m1", texto: "A cadeira oferece suporte adequado para as costas?" },
      { id: "m2", texto: "A altura da mesa é adequada para sua atividade?" },
      { id: "m3", texto: "O monitor está na altura dos olhos?" }
    ]
  },
  {
    titulo: "Movimentos Repetitivos",
    perguntas: [
      { id: "r1", texto: "Você realiza movimentos repetitivos com frequência?" },
      { id: "r2", texto: "Sente dores em mãos, punhos ou braços?" },
      { id: "r3", texto: "Há pausas suficientes durante o trabalho?" }
    ]
  },
  {
    titulo: "Esforço Físico",
    perguntas: [
      { id: "e1", texto: "Você realiza levantamento de peso com frequência?" },
      { id: "e2", texto: "Sente cansaço físico excessivo ao final do dia?" },
      { id: "e3", texto: "O trabalho exige esforço físico intenso?" }
    ]
  },
  {
    titulo: "Condições do Ambiente",
    perguntas: [
      { id: "a1", texto: "A iluminação é adequada para o trabalho?" },
      { id: "a2", texto: "A temperatura do ambiente é confortável?" },
      { id: "a3", texto: "O ruído interfere na sua concentração?" }
    ]
  }
]
export default function Ergonomico() {

const [respostas, setRespostas] = useState<Record<string, number>>({})
const [etapa, setEtapa] = useState(0)
const [finalizado, setFinalizado] = useState(false)
const secaoAtual = secoes[etapa]

  const handleChange = (id: string, valor: number) => {
    setRespostas((prev: any) => ({
      ...prev,
      [id]: valor
    }))
  }

const calcularScore = () => {
  const valores = Object.values(respostas) as number[]

  if (valores.length === 0) return 0

  const soma = valores.reduce((acc, v) => acc + v, 0)

  const scorePositivo = (soma / (valores.length * 2)) * 100

  const risco = 100 - scorePositivo

  return risco
}
const handleEnviar = async () => {
  try {
    console.log("Enviando dados...")

    // 👉 aqui depois entra o Supabase
    console.log({
      respostas,
      score
    })

    alert("Resultado enviado com sucesso!")
  } catch (err) {
    console.error(err)
    alert("Erro ao enviar")
  }
}
const score = calcularScore()

const perguntasAtuais = secoes[etapa].perguntas

const respondeuTudo = perguntasAtuais.every(
  (q) => respostas[q.id] !== undefined
)

return (
  <div className="min-h-screen bg-gray-50 flex items-center justify-center">
    
    <div className="w-full max-w-md mx-auto flex flex-col gap-6">

      {/* FORMULÁRIO COMPLETO */}
      {!finalizado && (
        <>
          {/* HEADER */}
          <div className="w-full bg-white p-5 rounded-xl shadow-md border">
            <h1 className="text-3xl font-bold text-blue-600">
                Radar Ergonômico
            </h1>
            <p className="text-gray-500">
              Avaliação de riscos ergonômicos
            </p>
          </div>

          {/* PROGRESSO */}
          <div className="w-full bg-white p-5 rounded-xl shadow-md border">
            <div className="flex justify-between text-sm text-gray-500 mb-1">
              <span>Etapa {etapa + 1} de {secoes.length}</span>
              <span>{Math.round(((etapa + 1) / secoes.length) * 100)}%</span>
            </div>

            <div className="w-full bg-gray-200 h-2 rounded-full">
              <div
                className="bg-orange-500 h-2 rounded-full transition-all duration-300"
                style={{
                  width: `${((etapa + 1) / secoes.length) * 100}%`
                }}
              />
            </div>
          </div>

          {/* FORM */}
          <div className="w-full bg-white p-5 rounded-xl shadow-md border">

            <h2 className="text-lg font-semibold mb-4 text-orange-500">
              {secoes[etapa].titulo}
            </h2>

            {secoes[etapa].perguntas.map((q) => (
              <div key={q.id} className="mb-4">

                <p className="mb-2 font-medium">{q.texto}</p>

                <div className="flex gap-2">
                  {[2, 1, 0].map((v) => (
                    <button
                      key={v}
                      onClick={() => handleChange(q.id, v)}
                      className={`px-3 py-1 rounded-full text-sm border ${
                        respostas[q.id] === v
                          ? "bg-orange-500 text-white"
                          : "bg-gray-100"
                      }`}
                    >
                      {v === 2 ? "Sim" : v === 1 ? "Parcial" : "Não"}
                    </button>
                  ))}
                </div>

              </div>
            ))}

          </div>

          {/* BOTÕES */}
          <div className="flex justify-between w-full">

            <button
              disabled={etapa === 0}
              onClick={() => setEtapa(etapa - 1)}
              className="px-4 py-2 bg-gray-200 rounded disabled:opacity-50"
            >
              Voltar
            </button>

            {etapa < secoes.length - 1 ? (
              <button
                disabled={!respondeuTudo}
                onClick={() => setEtapa(etapa + 1)}
                className={`px-4 py-2 rounded text-white
                  ${respondeuTudo
                    ? "bg-orange-500"
                    : "bg-gray-300 cursor-not-allowed"}
                `}
              >
                Próximo
              </button>
            ) : (
              <button
                onClick={() => setFinalizado(true)}
                className="px-4 py-2 bg-green-600 text-white rounded"
              >
                Finalizar
              </button>
            )}

          </div>
        </>
      )}

      {/* RESULTADO */}
      {finalizado && (
        <div className="w-full bg-white p-6 rounded-xl shadow border">

          <h2 className="text-xl font-bold mb-4">Resultado</h2>

          <div className="text-2xl font-bold mb-2 text-blue-600">
            {score.toFixed(0)}% de risco
          </div>

          <div
            className={`p-3 rounded text-white font-semibold
              ${score > 70 ? "bg-red-500" :
                score > 40 ? "bg-yellow-500" :
                "bg-green-500"}
            `}
          >
            {score > 70 && "Alto risco"}
            {score > 40 && score <= 70 && "Risco médio"}
            {score <= 40 && "Baixo risco"}
          </div>
        <div className="mt-4 text-sm text-gray-700">

  {score > 70 && (
    <p>
      ⚠️ Identificamos um nível elevado de risco ergonômico. 
      Recomendamos que você procure o RH ou responsável pela segurança do trabalho 
      para avaliar seu posto de trabalho e possíveis ajustes.
    </p>
  )}

  {score > 40 && score <= 70 && (
    <p>
      ⚠️ Existem sinais de atenção em relação à ergonomia. 
      Se possível, converse com o RH ou liderança para avaliar melhorias 
      no seu ambiente de trabalho.
    </p>
  )}

  {score <= 40 && (
    <p>
      ✅ O nível de risco ergonômico está baixo. 
      Continue mantendo boas práticas de postura e organização no trabalho.
    </p>
  )}

</div>
          {/* BOTÃO ENVIAR */}
          <button
            onClick={handleEnviar}
            className="mt-6 w-full bg-blue-600 text-white py-2 rounded"
          >
            Enviar resultado
          </button>

        </div>
      )}

    </div>
  </div>
)
}