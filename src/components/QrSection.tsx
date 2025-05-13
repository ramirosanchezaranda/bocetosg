export default function QrSection() {
  return (
    <section className="bento-grid py-2 border-shadow-xl navbar-glass">
      {/* Título centrado */}
      <h2 className="text-[250%] text-[#DDDDDD] font-bold text-center mb-2 text-shadow-lg">INGRESA CON TU CELULAR PARA USAR NUESTRO QR</h2>
      
      <div className="flex justify-center">
        <div className="grid auto-rows-min h-[50%]">
          {/* Contenido de texto a la izquierda */}
          <div className="flex justify-center">
            <p className="text-[#DDDDDD] text-xl font-medium">Lee el QR para poder inscribirte y poder participar del evento y obtener promociones increíbles!</p>
          </div>

          {/* QR a la derecha, ocupando gran parte del espacio */}
          <div className="flex flex-col items-center">
            <img src="/qr.png" alt="QR Code" className="w-1/2 h-1/2 object-contain flex flex-col items-center" />
          </div>
        </div>
      </div>
    </section>
  )
}