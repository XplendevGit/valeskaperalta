"use client"
import React from 'react'

import style from './beneficios.module.css'

import { motion } from "framer-motion";

const Beneficios = () => {
  return (
    <div className="overflow-hidden flex h-full w-full items-center justify-between lg:px-24 lg:p-y-24 px-6 py-24 bg-[#F5F5F5]">
        
        <div 
        className={`container w-full flex h-full items-center space-y-4 lg:px-24 ${style['contenedor-beneficios']}`} 
        >

          <div className={`w-full h-full flex justify-center ${style['beneficios-1']}`}>
            
            <div className="w-[52px] lg:w-[62px] h-[6px] md:h-[8px] rounded-full bg-[#d46d7c]">

            </div>

          </div>

          <div className={`w-full h-full flex justify-center ${style['beneficios-2']}`}>

          <h1 className="texto-titulos text-[#d46d7c] text-center" 
          >
           En tu consulta encontrarás
            </h1>

          </div>

         <div className={`w-full h-full flex min-h-[240px] max-w-[250px] md:min-h-[300px] xl:min-h-[340px] lg:min-w-[210px] xl:min-w-[330px] mx-auto bg-gradient-to-r from-[#B7A1BC] to-[#d46d7c] rounded-xl transition-all duration-200 hover:scale-105 shadow-2xl ${style['beneficios-3']}`}>

            <div className="w-full h-full flex flex-col p-6 items-center space-y-4 text-white">
               <motion.img
                 src="https://i.postimg.cc/nh311tJN/1.png"
                 alt="Logo"
                 width={250}
                 height={250}
                 className="object-contain w-[75px] h-[65px] xl:w-[90px] xl:h-[80px]"
                 style={{ filter: 'drop-shadow(8px 8px 6px rgba(0, 0, 0, 0.4))' }}
               />
 
              <h1 className="texto-subtitulos text-center">
                Entrevista Nutricional Completa
              </h1>

              <h1 className="pt-1 text-center texto-general-normal">
                Obtención  de datos clínicos, emocionales, hábitos alimentarios, con el fin de elaborar una historia clínica completa.
              </h1>
            </div>

          </div>

          <div className={`w-full h-full flex min-h-[240px] max-w-[250px] md:min-h-[300px] xl:min-h-[340px] lg:min-w-[210px] xl:min-w-[330px] mx-auto bg-gradient-to-r from-[#B7A1BC] to-[#d46d7c] rounded-xl transition-all duration-200 hover:scale-105 shadow-2xl ${style['beneficios-4']}`}>

            <div className="w-full h-full flex flex-col p-6 items-center space-y-4 text-white">
              <motion.img
                 src="https://i.postimg.cc/mrhyX6Zk/2.png"
                 alt="Logo"
                 width={250}
                 height={250}
                 className="object-contain w-[75px] h-[65px] xl:w-[90px] xl:h-[80px]"
                 style={{ filter: 'drop-shadow(8px 8px 6px rgba(0, 0, 0, 0.4))' }}
               />
 
              <h1 className="texto-subtitulos text-center">
                Consejos Nutricionales Personalizados
              </h1>

              <h1 className="pt-1 text-center texto-general-normal">
                Entrega de recomendaciones nutricionales individuales según antecedentes recolectados junto con el envío de material anexo.
              </h1>
            </div>

          </div>

          <div className={`w-full h-full flex min-h-[240px] max-w-[250px] md:min-h-[300px] xl:min-h-[340px] lg:min-w-[210px] xl:min-w-[330px] mx-auto bg-gradient-to-r from-[#B7A1BC] to-[#d46d7c] rounded-xl transition-all duration-200 hover:scale-105 shadow-2xl ${style['beneficios-5']}`}>

            <div className="w-full h-full flex flex-col p-4 xl:p-6 items-center space-y-4 text-white">
              <motion.img
                 src="https://i.postimg.cc/7ZHV7Zpg/3.png"
                 alt="Logo"
                 width={250}
                 height={250}
                 className="object-contain w-[75px] h-[65px] xl:w-[90px] xl:h-[80px]"
                 style={{ filter: 'drop-shadow(8px 8px 6px rgba(0, 0, 0, 0.4))' }}
               />

              <h1 className="texto-subtitulos text-center">
                 Planificación Personalizada
              </h1>

              <h1 className="pt-1 text-center texto-general-normal">
                Entrega de plan de alimentación personalizado en función del objetivo y requerimientos nutricionales de cada consultante.
              </h1>
            </div>

          </div>

        </div>
    </div>
  )
}

export default Beneficios