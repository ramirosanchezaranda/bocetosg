'use client'
import { useState, useEffect } from 'react'

const images = [
  '/hero1.jpg',
  '/hero2.jpg',
  '/hero3.jpg',
]

export default function Hero() {
  return (
    <section className="relative h-screen bg-[#1a1a1a]">
      <div className="relative h-full flex items-center justify-between px-4">
        <div className="flex flex-col justify-center h-[80vh] w-[60%]">
          <h1 className="text-[15vw] font-extrabold mb-8 leading-tight" style={{ color: '#ddddd', width: '100%' }}>
            Salta Gaming
          </h1>
        </div>
        <div className="flex flex-col items-center justify-center relative w-[35%] h-[70%] gap-8">
          <div className="absolute top-0 left-0 w-full h-full bg-[#232323] rounded-3xl z-0" />
          <img
            src="/imghero.png"
            alt="Hero Image"
            className="relative z-10 w-[70%] h-[70%] object-contain"
          />
          <button className="relative z-10 mt-8 px-12 py-6 bg-[#ddddd] text-[#232323] font-bold rounded-2xl text-3xl w-fit hover:bg-[#cccccc] transition-colors duration-200 mx-auto">
            Registrate
          </button>
        </div>
      </div>
    </section>
  )
}