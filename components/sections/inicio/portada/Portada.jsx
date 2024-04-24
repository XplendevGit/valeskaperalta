"use client"
import React from 'react'

import { motion } from "framer-motion";

import style from '././portada.module.css'

const Portada = () => {
  return (
    <div className="overflow-hidden flex h-full w-full flex-col items-center justify-between lg:px-24 lg:p-y-24 px-6 py-24 bg-gradient-to-r from-[#B7A1BC] to-[#d46d7c]">

      <div className={`flex container h-full w-full ${style['contenedor-portada']}`}>
      
      {/* Title Text div */}
         <motion.div 
         className={`flex flex-col w-full h-full md:justify-center md:items-start items-center lg:px-24 lg:pb-[150px] md:pb-[80px] ${style['portada-1']}`}
         initial={{ opacity: 0, }}
         animate={{ opacity: 1, }}
         transition={{ duration: 0.2, type: "spring", stiffness: 100, damping: 10 }}
         >

          <div className="flex flex-col space-y-2 w-auto h-auto">

          <h1 className="texto-titulos text-white text-center md:text-start"
          style={{ textShadow: "6px 6px 8px #022211" }} 
          >
           ¡Bienvenidos!
            </h1>

            <h1 className="texto-general text-balance text-white"
                style={{ filter: 'drop-shadow(2px 2px 2px rgba(0, 0, 0, 0.4))' }}
             >
             Planes de dieta personalizados para ti: científicos, equilibrados y deliciosos. Alcanza tu peso ideal y mejora tu bienestar con nuestra ayuda experta.
            </h1>

          </div>

          <div className="flex w-auto h-auto pt-6">
          <button className="btn-secundario">
              Contratar Servicio
            </button>
          </div>


         </motion.div>

      {/* Image div */}
      <motion.div
      className={`flex w-full h-full space-y-4 ${style['portada-2']}`}
    >
      <motion.div
        initial={{ opacity: 0, rotate: 180 }}
        animate={{ opacity: 1, rotate: 0 }}
        transition={{ duration: 0.4, type: "spring", stiffness: 100, damping: 10 }}

        className="w-full h-full flex xl:mt-[-100px] md:mt-[-70px] mt-[-20px] min-h-[180px] max-h-[280px] md:max-h-full"
      >
        <motion.img
          src="https://i.postimg.cc/8kq3WVKq/bg-1.png"
          alt="Logo"
          width={800}
          height={1080}
          className="object-contain"
          style={{ filter: 'drop-shadow(24px 30px 10px rgba(0, 0, 0, 0.4))' }}
        />
      </motion.div>
    </motion.div>

      </div>
      
    </div>
  )
  }


export default Portada;