import Link from 'next/link'

export default function Navbar() {
  return (
    <nav className="absolute navbar-glass fixed w-[90%] top-0 z-50 left-[5%] shadow-2xl py-4 blur-3xl">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="flex items-center">
          <img
            src="/saltagaminglogo-removebg-preview.png"
            alt="Salta Gaming Logo"
            width={100}
            height={60}
            className="h-10 w-auto"
          />
        </Link>
        
        <div className="flex gap-8 rem-medium font-bold text-shadow-lg/30">
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