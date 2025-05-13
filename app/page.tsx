import Hero from '@/src/components/Hero'
import Tournaments from '@/src/components/Tournaments'
import QrSection from '@/src/components/QrSection'
import News from '@/src/components/News'
//import About from '@//components/About'
import Sponsors from '@/src/components/Sponsors'
import Footer from '@/src/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <QrSection />
      <Tournaments />
      <News />
      {/*<About />*/}
      <Sponsors />
      <Footer />
    </main>
  )
}