"use client"
import React from 'react'

import { motion } from 'framer-motion';

const ServiciosPortada = ({ services }) => {
  console.log(services)
    return (
      <>
        <div className="flex flex-col space-y-12 overflow-hidden min-h-screen h-full w-full items-center justify-center lg:px-24 lg:p-y-24 px-6 py-24 bg-gradient-to-r from-[#B7A1BC] to-[#d46d7c]">

       {services.map((service, index) => (

        <div 
        key={index}
        className="flex container w-full h-full justify-center text-center">

      {/* Contenedor Principal de Servicios */}
          <motion.div 
          className="flex w-[328px] min-h-[468px] bg-white rounded-2xl flex-col p-6 space-y-2"
          initial={{ opacity: 0, }}
          animate={{ opacity: 1, }}
          transition={{ duration: 0.2, type: "spring", stiffness: 100, damping: 10 }}
          >
            {/* Servicios Contenedor titulo */}
            <div 
            className="flex w-full min-h-[88px] bg-gradient-to-r from-[#B7A1BC] to-[#d46d7c] justify-center items-center rounded-[10px]">
              <h1 
              className="texto-titulos-alternativos text-white"
              style={{ filter: 'drop-shadow(8px 8px 6px rgba(0, 0, 0, 0.4))' }}
              >
                {service.title}
              </h1>
            </div>

            {/* Servicios contenedor Valor */}
            <div className="flex flex-col w-full min-h-[86px] h-auto justify-center items-center border-b-2 space-y-2">
                <h1 className="texto-subtitulos">
                  $ {service.price}
                </h1>
            </div>

        {/* Contenedor Principal Icono & -texto de descripcion */}
            <div className="flex flex-col w-full h-full justify-center items-center border-b-2 space-y-2">
          {/* Icono & -texto de descripcion (Generar desde map)*/}
              <div className="flex w-full h-auto justify-center items-center space-x-2">
                <h1 className="texto-general">
                  Icono
                </h1>

                <h1 className="texto-general">
                  Descripcion 1
                </h1>
              </div>

              <div className="flex w-full h-auto justify-center items-center space-x-2">
                <h1 className="texto-general">
                  Icono
                </h1>

                <h1 className="texto-general">
                  Descripcion 1
                </h1>
              </div>

              <div className="flex w-full h-auto justify-center items-center space-x-2">
                <h1 className="texto-general">
                  Icono
                </h1>

                <h1 className="texto-general">
                  Descripcion 1
                </h1>
              </div>

              <div className="flex w-full h-auto justify-center items-center space-x-2">
                <h1 className="texto-general">
                  Icono
                </h1>

                <h1 className="texto-general">
                  Descripcion 1
                </h1>
              </div>

            </div>

            {/* Servicios Contenedor Boton */}
            <div className="flex w-full h-full lg:py-8 justify-center items-end">
              <button className="btn-secundario">
                Reservar una Hora
              </button>
            </div>
    
          </motion.div>
    
        </div>
        ))}
    </div>
    </>
  )
}

export default ServiciosPortada