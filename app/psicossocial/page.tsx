"use client"

import { useState } from "react"

export default function Psicossocial() {

  // 1️⃣ TYPES
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
    titulo: "Exigência e Carga",
    perguntas: [
      { id: "c1", texto: "A rotina exige execução em ritmo acelerado constante?" },
      { id: "c2", texto: "O trabalho exige alto esforço mental contínuo?" },
      { id: "c3", texto: "Existem situações emocionalmente difíceis no trabalho?" }
    ]
  },
  {
    titulo: "Autonomia e Controle",
    perguntas: [
      { id: "a1", texto: "Existe autonomia na execução das tarefas?" },
      { id: "a2", texto: "Os colaboradores participam de decisões importantes?" },
      { id: "a3", texto: "Há oportunidade de desenvolvimento profissional?" }
    ]
  },
  {
    titulo: "Liderança e Suporte",
    perguntas: [
      { id: "l1", texto: "A liderança oferece suporte quando necessário?" },
      { id: "l2", texto: "O trabalho é reconhecido pela gestão?" },
      { id: "l3", texto: "A comunicação da liderança é clara?" },
      { id: "l4", texto: "Existe feedback sobre desempenho?" }
    ]
  },
  {
    titulo: "Clima Organizacional",
    perguntas: [
      { id: "cl1", texto: "Existe colaboração entre colegas?" },
      { id: "cl2", texto: "Os colaboradores se sentem parte da equipe?" },
      { id: "cl3", texto: "Conflitos acontecem com frequência?" }
    ]
  },
  {
    titulo: "Segurança Psicológica",
    perguntas: [
      { id: "s1", texto: "As pessoas se sentem seguras para opinar?" },
      { id: "s2", texto: "Existe confiança entre equipe e liderança?" },
      { id: "s3", texto: "Há retenção ou ocultação de informações?" }
    ]
  },
  {
    titulo: "Equilíbrio Vida-Trabalho",
    perguntas: [
      { id: "e1", texto: "O trabalho interfere na vida pessoal?" },
      { id: "e2", texto: "Os colaboradores conseguem descansar?" },
      { id: "e3", texto: "As preocupações do trabalho continuam fora do expediente?" }
    ]
  },
  {
    titulo: "Saúde Mental",
    perguntas: [
      { id: "m1", texto: "Há sinais frequentes de estresse?" },
      { id: "m2", texto: "Existem dificuldades com sono?" },
      { id: "m3", texto: "Há sinais de esgotamento emocional?" },
      { id: "m4", texto: "Existe desmotivação ou queda de engajamento?" }
    ]
  },
  {
    titulo: "Riscos Graves",
    perguntas: [
      { id: "r1", texto: "Existem relatos de assédio moral?" },
      { id: "r2", texto: "Há comportamentos ofensivos no ambiente?" },
      { id: "r3", texto: "Existe insegurança quanto ao emprego?" }
    ]
  }
]

// 🧠 STATE (sempre dentro da função)
  const [contexto, setContexto] = useState({
    empresa: "",
    unidade: "",
    responsavel: "",
    data: "",
    referencia: ""
  })
const [respostas, setRespostas] = useState<Record<string, number>>({})
const [etapa, setEtapa] = useState(-1) // 🔥 começa no contexto
const [finalizado, setFinalizado] = useState(false)

  // ⚙️ FUNÇÃO
  function handleContexto(campo: string, valor: string) {
    setContexto(prev => ({
      ...prev,
      [campo]: valor
    }))
  }
  const handleChange = (id: string, valor: number) => {
  setRespostas(prev => ({
    ...prev,
    [id]: valor
  }))
}
  const calcularScore = () => {
    const valores = Object.values(respostas) as number[]
    if (!valores.length) return 0

    const soma = valores.reduce((acc, v) => acc + v, 0)
    return 100 - (soma / (valores.length * 2)) * 100
  }

  const handleEnviar = () => {
  console.log({
    contexto,
    respostas,
    score: calcularScore()
  })
}

// DERIVADOS
const secaoAtual = etapa >= 0 ? secoes[etapa] : null
const perguntasAtuais = secaoAtual?.perguntas || []

const respondeuTudo = perguntasAtuais.every(
  (q) => respostas[q.id] !== undefined
)

const score = calcularScore()

// 👉 variável que faltava
const podeIniciar =
  contexto.empresa &&
  contexto.unidade &&
  contexto.responsavel

// 👉 TELA 1 (contexto)
if (etapa === -1) {
  return (
    <div className="min-h-screen bg-[#020617] flex items-center justify-center text-white">

      <div className="w-full max-w-3xl p-8 rounded-2xl border border-cyan-500/20
      shadow-[0_0_60px_rgba(0,200,255,0.15)]">

        <h1 className="text-2xl font-bold text-cyan-400 mb-6">
          Radar Psicossocial 360°
        </h1>

        <div className="grid grid-cols-2 gap-4">

          <input placeholder="Empresa"
            value={contexto.empresa}
            onChange={(e) => handleContexto("empresa", e.target.value)}
            className="p-3 bg-[#020617] border border-cyan-400/30 rounded" />

          <input placeholder="Unidade"
            value={contexto.unidade}
            onChange={(e) => handleContexto("unidade", e.target.value)}
            className="p-3 bg-[#020617] border border-cyan-400/30 rounded" />

          <input placeholder="Responsável"
            value={contexto.responsavel}
            onChange={(e) => handleContexto("responsavel", e.target.value)}
            className="p-3 bg-[#020617] border border-cyan-400/30 rounded" />

          <input type="date"
            value={contexto.data}
            onChange={(e) => handleContexto("data", e.target.value)}
            className="p-3 bg-[#020617] border border-cyan-400/30 rounded" />

          <input placeholder="Referência"
            value={contexto.referencia}
            onChange={(e) => handleContexto("referencia", e.target.value)}
            className="p-3 bg-[#020617] border border-cyan-400/30 rounded col-span-2" />

        </div>

        <button
          disabled={!podeIniciar}
          onClick={() => setEtapa(0)}
          className={`mt-6 w-full py-3 rounded-xl font-bold
            ${podeIniciar
              ? "bg-cyan-500 text-black"
              : "bg-gray-600 cursor-not-allowed"}`}
        >
          Iniciar Avaliação
        </button>

      </div>
    </div>
  )
}

// 👉 TELA 2 (FORMULÁRIO + RESULTADO)
return (
  <div className="min-h-screen bg-gray-50 flex items-center justify-center">
    
    <div className="w-full max-w-md mx-auto flex flex-col gap-6">

      {/* FORMULÁRIO COMPLETO */}
      {!finalizado && (
        <>
          {/* HEADER */}
          <div className="w-full bg-white p-5 rounded-xl shadow-md border">
            <h1 className="text-3xl font-bold text-blue-600">
              Radar Psicossocial
            </h1>
            <p className="text-gray-500">
              Avaliação de riscos organizacionais
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
                className="bg-orange-500 h-2 rounded-full"
                style={{ width: `${((etapa + 1) / secoes.length) * 100}%` }}
              />
            </div>
          </div>

          {/* FORM */}
          <div className="w-full bg-white p-5 rounded-xl shadow-md border">

            {secaoAtual && (
              <h2 className="text-lg font-semibold mb-4 text-orange-500">
                {secaoAtual.titulo}
              </h2>
            )}

            {perguntasAtuais.map((q) => (
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
              onClick={() => setEtapa(etapa - 1)}
              className="px-4 py-2 bg-gray-200 rounded"
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
                    : "bg-gray-300"}`}
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
      ⚠️ Identificamos um nível elevado de risco psicossocial. 
      Recomendamos que você procure o RH ou Departamento Pessoal da sua empresa 
      para relatar sua percepção e buscar apoio. Sua saúde e bem-estar são prioridade.
    </p>
  )}

  {score > 40 && score <= 70 && (
    <p>
      ⚠️ Existem sinais de atenção em relação ao ambiente de trabalho. 
      Se possível, converse com o RH ou liderança da sua empresa 
      para compartilhar suas percepções e contribuir para melhorias.
    </p>
  )}

  {score <= 40 && (
    <p>
      ✅ O nível de risco psicossocial está baixo. 
      Continue promovendo um ambiente saudável e colaborativo no seu dia a dia.
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
