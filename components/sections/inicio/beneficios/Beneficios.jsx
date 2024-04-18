"use client"
import React from 'react'

import style from './beneficios.module.css'

import { motion } from "framer-motion";

const Beneficios = () => {
  return (
    <div className="overflow-hidden flex min-h-screen h-full w-full items-center justify-between lg:px-24 lg:p-y-24 px-6 py-24 bg-white">
        
        <div 
        className={`container w-full flex h-full items-center space-y-4 lg:px-24 ${style['contenedor-beneficios']}`} 
        >

          <div className={`w-full h-full flex justify-center ${style['beneficios-1']}`}>
            
            <div className="w-[52px] lg:w-[62px] h-[6px] md:h-[8px] rounded-full bg-[#d46d7c]">

            </div>

          </div>

          <div className={`w-full h-full flex justify-center ${style['beneficios-2']}`}>

          <h1 className="texto-títulos text-[#d46d7c] text-center" 
          >
           En tu consulta encontrarás
            </h1>

          </div>

         <div className={`w-full h-full flex min-h-[240px] max-w-[250px] md:max-h-[200px] xl:min-h-[340px] mx-auto bg-red-200 rounded-xl ${style['beneficios-3']}`}>

          <div className="w-full h-full flex">
            cs
          </div>

          </div>

          <div className={`w-full h-full flex min-h-[240px] max-w-[250px] md:max-h-[200px] xl:min-h-[340px] mx-auto bg-red-200 rounded-xl ${style['beneficios-4']}`}>

          </div>

          <div className={`w-full h-full flex min-h-[240px] max-w-[250px] md:max-h-[200px] xl:min-h-[340px] mx-auto bg-red-200 rounded-xl ${style['beneficios-5']}`}>

          </div>

        </div>
    </div>
  )
}

export default Beneficios