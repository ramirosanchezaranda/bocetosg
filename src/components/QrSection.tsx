export default function QrSection() {
  return (
    <section className="py-8 bg-purple-900 rounded-lg">
      {/* Título centrado */}
      <h2 className="text-[250%] text-white font-bold text-center mb-6">
        INGRESA CON TU CELULAR PARA USAR NUESTRO QR
      </h2>
      
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center justify-center">
          {/* Texto centrado */}
          <div className="text-center mb-8">
            <p className="text-white text-xl font-medium">
              Lee el QR para poder inscribirte y poder participar del evento y obtener promociones increíbles!
            </p>
          </div>

          {/* QR centrado */}
          <div className="mb-8">
            <img 
              src="/qr.png" 
              alt="QR Code" 
              className="w-64 h-64 object-contain" 
            />
          </div>
        </div>
      </div>
    </section>
  )
}