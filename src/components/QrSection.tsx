export default function QrSection() {
  return (
    <section className="bento-grid bg-[#DDDDDD] py-20">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-[#414141] mb-8">¡Únete a la Comunidad!</h2>
        <div className="flex items-center justify-center gap-12">
          <div className="w-64 h-64">
            <img src="/qr-code.png" alt="QR Code" className="w-full h-full" />
          </div>
          <div className="text-left">
            <p className="text-xl mb-6">Escanea el código QR y obtén:</p>
            <ul className="list-disc list-inside mb-8">
              <li>Promociones exclusivas</li>
              <li>Acceso anticipado a torneos</li>
              <li>Premios especiales</li>
            </ul>
            <button className="glass-effect bg-[#414141] text-white px-8 py-4">
              Registrarme Ahora
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}