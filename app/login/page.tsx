"use client"

import { useEffect, useRef, useState } from "react"

export default function Login() {

  const canvasRef = useRef<HTMLCanvasElement>(null)

  const [lang, setLang] = useState("pt")
  const [menuOpen, setMenuOpen] = useState(false)
  const [email, setEmail] = useState("")
  const [senha, setSenha] = useState("")
  const [loading, setLoading] = useState(false)
  const [erro, setErro] = useState("")
  const handleLogin = async () => {

  if (!email || !senha) {
    setErro("Preencha todos os campos")
    return
  }

  setErro("")
  setLoading(true)

  try {

    const response = await fetch("https://radar360-api.onrender.com/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ email, senha })
    })

    const data = await response.json()

    setLoading(false)

    if (!data.ok) {
      setErro(data.error || "Login falhou")
      return
    }

    // salvar dados
    localStorage.setItem("token", data.token)
    localStorage.setItem("usuario", JSON.stringify(data.usuario))

    // redirecionar
    window.location.href = "/hub"

  } catch (e) {
    setLoading(false)
    setErro("Erro de conexão")
  }
}
  
  // 🌍 TRADUÇÕES (IGUAL HTML)
  const translations: any = {
    en: {
      title: "Global Platform for Organizational Risk Intelligence",
      desc: "Predict organizational risk before incidents occur through converged human, environmental and cultural intelligence.",
      login: "Platform Access",
      email: "Corporate Email",
      password: "Password",
      access: "Access ARISS Platform"
    },
    pt: {
      title: "Plataforma Global de Inteligência de Risco Organizacional",
      desc: "Preveja riscos organizacionais antes que incidentes ocorram por meio da convergência de inteligência humana, ambiental e cultural.",
      login: "Acesso à Plataforma",
      email: "Email Corporativo",
      password: "Senha",
      access: "Entrar na Plataforma ARISS"
    },
    es: {
      title: "Plataforma Global de Inteligencia de Riesgo Organizacional",
      desc: "Prediga riesgos organizacionales antes de que ocurran incidentes mediante inteligencia humana, ambiental y cultural.",
      login: "Acceso a la Plataforma",
      email: "Correo Corporativo",
      password: "Contraseña",
      access: "Acceder a ARISS"
    }
  }

  // 🌍 CARREGA IDIOMA
  useEffect(() => {
    const saved = localStorage.getItem("aris_lang") || "pt"
    setLang(saved)
  }, [])

  const changeLang = (l: string) => {
    setLang(l)
    localStorage.setItem("aris_lang", l)
    setMenuOpen(false)
  }

  const flags: any = {
    en: "https://flagcdn.com/us.svg",
    pt: "https://flagcdn.com/br.svg",
    es: "https://flagcdn.com/es.svg"
  }

  const labels: any = {
    en: "English",
    pt: "Português",
    es: "Español"
  }

  // 🧠 BACKGROUND ANIMADO (IGUAL)
  useEffect(() => {
  const canvas = canvasRef.current
  if (!canvas) return

  const ctx = canvas.getContext("2d")!
  canvas.width = window.innerWidth
  canvas.height = window.innerHeight

  const particles: any[] = []
  const PARTICLE_COUNT = 200

  for (let i = 0; i < PARTICLE_COUNT; i++) {
    particles.push({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      vx: (Math.random() - 0.5) * 0.4,
      vy: (Math.random() - 0.5) * 0.4
    })
  }

  function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height)

    particles.forEach(p => {
      p.x += p.vx
      p.y += p.vy

      if (p.x < 0 || p.x > canvas.width) p.vx *= -1
      if (p.y < 0 || p.y > canvas.height) p.vy *= -1

      // brilho do ponto
      const gradient = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, 6)
      gradient.addColorStop(0, "#3b82f6")
      gradient.addColorStop(1, "transparent")

      ctx.beginPath()
      ctx.arc(p.x, p.y, 2.2, 0, Math.PI * 2)
      ctx.fillStyle = gradient
      ctx.fill()
    })

    // conexões
    for (let i = 0; i < particles.length; i++) {
      for (let j = i + 1; j < particles.length; j++) {
        const dx = particles[i].x - particles[j].x
        const dy = particles[i].y - particles[j].y
        const dist = Math.sqrt(dx * dx + dy * dy)

        if (dist < 160) {
          const opacity = 1 - dist / 140

          ctx.beginPath()
          ctx.moveTo(particles[i].x, particles[i].y)
          ctx.lineTo(particles[j].x, particles[j].y)
          ctx.strokeStyle = `rgba(59,130,246,${opacity * 0.25})`
          ctx.lineWidth = 1
          ctx.stroke()
        }
      }
    }

    requestAnimationFrame(draw)
  }

  draw()

  // RESPONSIVO
  window.addEventListener("resize", () => {
    canvas.width = window.innerWidth
    canvas.height = window.innerHeight
  })

}, [])

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#020617] text-white relative overflow-hidden">

      <canvas
  ref={canvasRef}
  className="fixed inset-0 w-full h-full z-0"
/>

      {/* 🌍 LANGUAGE SELECTOR */}
      <div className="absolute top-5 right-8 text-sm">
        <div
          onClick={() => setMenuOpen(!menuOpen)}
          className="flex items-center gap-2 px-3 py-2 border border-[#1f2a44] rounded-lg cursor-pointer bg-[#020617] hover:border-blue-500"
        >
          <img src={flags[lang]} className="w-5 h-3" />
          {labels[lang]}
        </div>

        {menuOpen && (
          <div className="absolute right-0 mt-2 bg-[#020617] border border-[#1f2a44] rounded-lg overflow-hidden w-40">
            {["en", "pt", "es"].map(l => (
              <div
                key={l}
                onClick={() => changeLang(l)}
                className="flex items-center gap-2 px-3 py-2 cursor-pointer text-gray-400 hover:bg-[#0b1220] hover:text-white"
              >
                <img src={flags[l]} className="w-5 h-3" />
                {labels[l]}
              </div>
            ))}
          </div>
        )}
      </div>

      {/* CONTAINER */}
      <div className="grid md:grid-cols-2 gap-16 max-w-6xl w-full px-10">

        {/* HERO */}
        <div className="flex flex-col justify-center">

          <h1 className="text-5xl font-black mb-4 tracking-widest flex items-center">

 <span
  className="text-white"
  style={{
    textShadow: "0 0 15px rgba(255,255,255,0.9)",
    animation: "pulseGlow 2.5s infinite alternate"
  }}
>
  A
</span>

  <span
    className="bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-500 
    bg-clip-text text-transparent drop-shadow-[0_0_15px_rgba(59,130,246,0.5)]"
  >
    RISS
  </span>

</h1>

          <h2 className="text-3xl font-semibold mb-4">
            {translations[lang].title}
          </h2>

          <p className="text-gray-400 text-sm leading-relaxed">
            {translations[lang].desc}
          </p>

        </div>

        {/* LOGIN */}
        <div className="relative bg-[#0b1220]/70 backdrop-blur-xl 
border border-blue-500/20 rounded-2xl p-10 
shadow-[0_30px_120px_rgba(0,0,0,0.8),0_0_25px_rgba(59,130,246,0.15)]
transition-all duration-300 hover:scale-[1.01] hover:shadow-[0_40px_140px_rgba(0,0,0,0.9),0_0_40px_rgba(59,130,246,0.25)]">

          <h3 className="text-xl font-semibold mb-6 text-white/90 tracking-wide">
            {translations[lang].login}
          </h3>
          <div className="h-[1px] w-full mb-6 bg-gradient-to-r from-transparent via-blue-500/40 to-transparent" />
          <label className="text-xs text-gray-400">
            {translations[lang].email}
          </label>

          <input
  value={email}
  onChange={(e) => setEmail(e.target.value)}
  className="w-full p-3 mb-4 rounded-lg 
  bg-[#020617] border border-[#1f2a44]
  focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
  placeholder="user@company.com"
/>

<input
  type="password"
  value={senha}
  onChange={(e) => setSenha(e.target.value)}
  className="w-full p-3 mb-6 rounded-lg 
  bg-[#020617] border border-[#1f2a44]
  focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
/>
  <button
  onClick={handleLogin}
  className="w-full py-3 rounded-xl font-bold
  bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700
  hover:scale-[1.03]
  hover:shadow-[0_0_30px_rgba(59,130,246,0.8)]
  active:scale-[0.98]
  transition-all duration-300"
>
  {translations[lang].access}
</button>

<p className="text-xs text-gray-500 mt-4 text-center tracking-wide
hover:text-gray-300 transition-all">
  Secure access • Enterprise-grade encryption
</p>
{erro && (
  <p className="mt-3 text-sm text-red-500 text-center">
    {erro}
  </p>
)}

{loading && (
  <p className="mt-3 text-sm text-green-400 text-center">
    Initializing Risk Intelligence Engine...
  </p>
)}
        </div>

      </div>

      {/* FOOTER */}
      <div className="absolute bottom-4 text-center w-full text-xs text-gray-500">
        ARISS — Anticipatory Risk Intelligence Safety System
        <br />
        © 2025 Safety Tech SC Engenharia de Segurança Ltda.
      </div>

    </div>
  )
}