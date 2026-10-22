import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="min-h-screen bg-[#0b0b10] text-white font-[Inter] scroll-smooth">
      <nav className="flex justify-between p-6">
        <h2 className="font-bold text-violet-400">dev.portfolio</h2>
        <a href="#contact" className="text-gray-400 hover:text-white">
          Kapcsolat
        </a>
      </nav>

      <main className="mx-auto max-w-3xl px-6 py-28">
        <p className="mb-4 text-violet-400">Web Developer</p>
        <h1 className="text-5xl font-bold">
          Szia, Michael vagyok.
        </h1>
        <p className="mt-6 max-w-lg text-gray-400">
          Modern weboldalakat és alkalmazásokat készítek letisztult dizájnnal és kreatívan.
        </p>

        <a href="#projects" className="mt-8 inline-block rounded-xl bg-violet-600 px-5 py-3 hover:bg-violet-500 transition-colors">
          Projekteim
        </a>

        <section id="projects" className="mt-24">
          <h2 className="mb-6 text-2xl font-bold">Projekteim</h2>
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="project">
              <h3 className="font-semibold">Webshop</h3>
              <p className="mt-2 text-sm text-gray-400">
                Modern webshop adatbázissal.
              </p>
            </div>
            <div className="project">
              <h3 className="font-semibold">Admin Dashboard</h3>
              <p className="mt-2 text-sm text-gray-400">
                Egyedi adminisztrációs felület.
              </p>
            </div>
          </div>
        </section>

        <section id="contact" className="mt-24">
          <h2 className="text-2xl font-bold">Dolgozzunk együtt!</h2>
          <p className="mt-3 text-gray-400">xd@xd.com</p>
        </section>
      </main>

      <footer className="border-t border-white/10 p-6 text-center text-sm text-gray-500">
        2026 Michael
      </footer>
    </div>
  )
}

export default App
