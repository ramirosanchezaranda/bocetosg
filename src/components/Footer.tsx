export default function Footer() {
  return (
    <footer className="bg-[#414141] text-[#DDDDDD] py-12">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h3 className="text-2xl font-bold mb-4">Salta Gaming</h3>
          <p>Tu destino para los mejores torneos de gaming en Salta</p>
        </div>
        <div>
          <h4 className="text-xl font-bold mb-4">Enlaces Rápidos</h4>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-[#DDDDDD]">Inicio</a></li>
            <li><a href="#" className="hover:text-[#DDDDDD]">Torneos</a></li>
            <li><a href="#" className="hover:text-[#DDDDDD]">Noticias</a></li>
          </ul>
        </div>
        <div>
          <h4 className="text-xl font-bold mb-4">Contacto</h4>
          <ul className="space-y-2">
            <li>Email: info@saltagaming.com</li>
            <li>Tel: (123) 456-7890</li>
            <li>Salta, Argentina</li>
          </ul>
        </div>
      </div>
      <div className="text-center mt-8 pt-8 border-t border-white/20">
        <p>&copy; 2024 Salta Gaming. Todos los derechos reservados.</p>
      </div>
    </footer>
  )
}