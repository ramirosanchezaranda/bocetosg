'use client'
import { useState } from 'react'

const news = [
  {
    title: "Próximo Torneo de League of Legends",
    content: "¡No te pierdas nuestro próximo torneo!",
    image: "/news1.jpg"
  },
  {
    title: "Próximo Torneo de League of Legends",
    content: "¡No te pierdas nuestro próximo torneo!",
    image: "/news1.jpg"
  },
  {
    title: "Próximo Torneo de League of Legends",
    content: "¡No te pierdas nuestro próximo torneo!",
    image: "/news1.jpg"
  },
  {
    title: "Próximo Torneo de League of Legends",
    content: "¡No te pierdas nuestro próximo torneo!",
    image: "/news1.jpg"
  },
  {
    title: "Próximo Torneo de League of Legends",
    content: "¡No te pierdas nuestro próximo torneo!",
    image: "/news1.jpg"
  },
  // Añade más noticias aquí
]

export default function News() {
  const [isPaused, setIsPaused] = useState(false)

  return (
    <section className="bento-grid bg-[#414141] py-20">
      <h2 className="text-4xl font-bold text-white text-center mb-12">Noticias</h2>
      <div 
        className="flex overflow-hidden"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <div className={`flex ${!isPaused ? 'infinite-scroll' : ''}`}>
          {news.map((item, index) => (
            <div key={index} className="min-w-[300px] mx-4">
              <div className="glass-effect p-6">
                <img src={item.image} alt={item.title} className="w-full h-48 object-cover rounded-lg mb-4" />
                <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                <p className="text-white/80">{item.content}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}