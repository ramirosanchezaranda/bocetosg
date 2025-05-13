'use client'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Navigation, Autoplay } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

const images = [
  '/jugando1.png',
  '/jugando2.png',
  '/jugando3.png',
]

export default function Hero() {
  return (
    <div id="section-home py-8" className="w-full h-auto min-h-[500px] relative flex flex-col items-center justify-start z-[3]">
      <section className="w-full !h-[clamp(600px,90vh,768px)] flex flex-col items-center justify-end gap-[30px] aspect-[2/1] relative">
        <div className="image-cont w-full h-full absolute top-0 left-0 flex items-center justify-center">
          <div className="w-full h-full relative flex align-center justify-start overflow-hidden navbar-glass">
            <Swiper
              direction="vertical"
              pagination={{
                clickable: true,
              }}
              navigation={false}
              modules={[Pagination, Navigation, Autoplay]}
              className="w-full mesh-dark"
              autoplay={{
                delay: 5000,
                disableOnInteraction: false,
              }}
              style={{ '--overlay-opacity': '0.5' } as React.CSSProperties}
            >
              {images.map((image, index) => (
                <SwiperSlide key={index} style={{ height: '600px' }}>
                  <img
                    loading="lazy"
                    width={1920}
                    height={1080}
                    src={image}
                    alt="Gallery Image"
                    className="object-cover w-full h-full rounded-lg"
                    style={{ filter: 'brightness(0.5)' }}
                  />
                </SwiperSlide>
              ))}
            </Swiper>
            {/* Título agregado aquí */}
            <img
            src="/saltagaminglogo-removebg-prev.png"
            alt="Salta Gaming Logo"
            width={100}
            height={100}
            className="absolute w-[850px] h-auto object-cover top-[50%] left-[-2%] transform -translate-y-1/2 z-20"
            style={{maxHeight:'400px'}}
          />
            <p className="absolute right-[4.5%] top-[10%] text-[120%] font-bold text-[#f4f4f4] z-20 bento-grid navbar-glass flex flex gap-y-[1%] h-auto
            w-auto">
               <br /> <br /> <br />
               <br />Juegos de última generación<br /> Torneos y Eventos <br /> ¡Ingresá desde tu celular! <br /> <br />
               Desde acá ↓<br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br />
            </p>
          </div>
        </div>
        
        {/* Botones posicionados correctamente en la parte inferior derecha */}
        <div className="absolute bottom-[15%] right-[6%] flex flex gap-x-[5%] z-40">
          <button className="px-8 py-4 spark-button transition-colors flex flex-col bg-[#c4c4c4] text-[#f4f4f4] hover:bg-[#6a0072]">
            QR A PÁGINA
          </button>
          <button className="px-8 py-4 gap-4 spark-button bg-[#935CA3] transition-colors flex flex-col text-[#ffffff] hover:bg-[#111111]">
            MÁS INFORMACIÓN
          </button>
        </div>
      </section>
    </div>
  )
}