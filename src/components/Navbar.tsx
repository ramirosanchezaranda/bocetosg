import Link from 'next/link'
import Image from 'next/image'

export default function Navbar() {
  return (
    <nav className="fixed w-full z-50 glass-effect px-6 py-2">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="flex items-center">
          <img
            src="/saltagaminglogo.png"
            alt="Salta Gaming Logo"
            width={110}
            height={60}
            className="h-10 w-auto"
            style={{maxHeight:'40px'}}
          />
        </Link>
        
        <div className="flex gap-8 rem-medium">
          <Link href="/noticias" className="nav-link">
            Noticias
          </Link>
          <Link href="/contacto" className="nav-link">
            Contacto
          </Link>
          <Link href="/inscripciones" className="nav-link">
            Inscripciones
          </Link>
          <Link href="/nosotros" className="nav-link">
            Nosotros
          </Link>
        </div>
      </div>
    </nav>
  )
}