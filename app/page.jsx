import Image from 'next/image'
import Portada from '@/components/sections/inicio/portada'

export default function Home() {
  return (
    <div className="flex min-h-screen h-screen w-full flex-col items-center justify-between lg:px-24 lg:p-y-24 px-6 py-24 bg-gradient-to-r from-[#D2B2C9] to-[#d46d7c]">

      <div className="flex container h-full w-full">
      
         <div className="flex flex-col w-full h-full justify-center lg:px-24 lg:pb-[150px] md:pb-[80px]">

          <div className="flex flex-col space-y-2 w-auto h-auto">

          <h1 className="texto-títulos text-[#d46d7c]"
          style={{ textShadow: "2px 2px 1px #022211" }} 
          >
           Tu Dieta Personalizada
            </h1>

            <h1 className="texto-subtitulos text-xs md:text-base xl:text-lg text-white"
            style={{ filter: 'drop-shadow(2px 2px 2px rgba(0, 0, 0, 0.4))' }} >
             Planes de dieta personalizados para ti: científicos, equilibrados y deliciosos. Alcanza tu peso ideal y mejora tu bienestar con nuestra ayuda experta.
            </h1>

          </div>

          <div className="flex w-auto h-auto pt-6">
          <button className="btn-secundario">
              Contratar Servicio
            </button>
          </div>


         </div>

         <div className="flex w-full h-full space-y-4">
         <div className="w-full h-full flex xl:mt-[-100px] mt-[-40px] min-h-[280px]">
            <Image
              src="https://i.postimg.cc/8kq3WVKq/bg-1.png"
              alt="Logo"
              width={800}
              height={1080}
              className="object-contain"
              style={{ filter: 'drop-shadow(24px 30px 10px rgba(0, 0, 0, 0.4))' }}
            />
          </div>
         </div>

      </div>
      
    </div>
  )
}
