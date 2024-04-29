"use client"
import React from 'react'
import motion from 'framer-motion'

import Image from 'next/image'

import style from './resenas.module.css'

import SwiperSlideResenas from './SwiperSlideResenas'

const Reseñas = () => {
  return (
    <div className="overflow-hidden flex flex-col min-h-screen h-full w-full items-center justify-between lg:px-24 lg:p-y-24 px-6 py-24 bg-[#F5F5F5]">

      <div className={`container w-full flex flex-col h-full items-center space-y-4 lg:px-24 ${style['contenedor-reseñas']}`}>

        <div className={`w-full justify-center flex ${style['resenas-1']}`}>
            <div className="w-[52px] lg:w-[62px] h-[6px] md:h-[8px] rounded-full bg-[#d46d7c]">

            </div>
        </div>

        <div className={`w-full justify-center ${style['resenas-2']}`}>
            <h1 className="texto-titulos text-[#d46d7c] text-center">
               Reseñas
            </h1>
        </div>
        
        <div className={`flex max-h-full max-w-full w-[480px] min-h-[310px] lg:w-[650px] lg:min-h-[400px] xl:w-[850px] xl:min-h-[600px] rounded-xl bg-gradient-to-r from-[#B7A1BC] to-[#d46d7c] shadow-2xl ${style['resenas-3']}`}>

        <div className="w-full h-full flex flex-col p-6 items-center justify-center space-y-4 text-white">
              <Image
                 src="https://i.postimg.cc/TPSb3Rzp/speech-bubble.png"
                 alt="Logo"
                 width={250}
                 height={250}
                 className="object-contain w-[75px] h-[65px] xl:w-[90px] xl:h-[80px]"
                 style={{ filter: 'drop-shadow(8px 8px 6px rgba(0, 0, 0, 0.4))' }}
               />
 
              <h1 
              className="texto-subtitulos text-white text-base lg:text-2xl xl:text-4xl text-center"
              style={{ filter: 'drop-shadow(8px 8px 6px rgba(0, 0, 0, 0.4))' }}
              >
                Esto es lo que dicen Nuestros Pacientes
              </h1>

               {/* SwiperSlide */}
               <div className="w-full h-full">

                 <SwiperSlideResenas>
                    
                 </SwiperSlideResenas>

               </div>

            </div>

        </div>
       </div>
     </div>
  )
}

export default Reseñas