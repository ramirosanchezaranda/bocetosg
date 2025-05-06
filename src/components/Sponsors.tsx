export default function Sponsors() {
  return (
    <section className="bg-[#DDDDDD] py-20 overflow-hidden">
      <h2 className="text-4xl font-bold text-[#414141] text-center mb-12">Nuestros Sponsors</h2>
      <div className="relative flex">
        <div className="flex infinite-scroll">
          {/* Duplicamos los logos para crear el efecto infinito */}
          {[1,2].map((set) => (
            <div key={set} className="flex items-center space-x-12 min-w-full">
              {/* Añade aquí los logos de los sponsors */}
              <img src="/sponsor1.png" alt="Sponsor 1" className="h-20" />
              <img src="/sponsor1.png" alt="Sponsor 2" className="h-20" />
              <img src="/sponsor1.png" alt="Sponsor 3" className="h-20" />
              <img src="/sponsor1.png" alt="Sponsor 1" className="h-20" />
              <img src="/sponsor1.png" alt="Sponsor 2" className="h-20" />
              <img src="/sponsor1.png" alt="Sponsor 3" className="h-20" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}