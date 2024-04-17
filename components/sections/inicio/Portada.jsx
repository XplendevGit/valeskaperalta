import React from 'react'
import Image from 'next/image'

const Portada = () => {
    return (
      <div className="flex container h-full w-full">
      
         <div className="flex flex-col w-full h-full justify-center lg:px-24 lg:pb-[150px] md:pb-[80px]">

          <div className="flex flex-col space-y-2 w-auto h-auto">

          <h1 className="texto-títulos text-[#d46d7c]"
          style={{ textShadow: "2px 2px 1px #022211" }} 
          >
           Tu Dieta Personalizada
            </h1>

            <h1 className="texto-subtitulos text-xs md:text-base xl:text-lg text-white">
              Laborum eas officia esse veniam officia sit quis culpa voluptate laboris voluptate aliqua magna fugiat. Qui minim elit consequat deserunt pariatur et amet ad eiusmod et sint. Sunt ipsum elit reprehenderit exercitation cillum cillum incididunt officia
            </h1>

          </div>

          <div className="flex w-auto h-auto pt-6">
          <button className="btn-secundario">
              Contratar Servicio
            </button>
          </div>


         </div>

         <div className="flex w-full h-full justify-center space-y-4">
         <div className="w-full h-full flex bg-red-100">

        </div>
         </div>

      </div>
    )
  }


export default Portada;