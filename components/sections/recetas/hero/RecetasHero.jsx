import React from 'react'

import style from './recetashero.module.css'

const RecetasHero = () => {
  return (
    <div className='overflow-hidden h-full w-full lg:px-24 lg:p-y-24 px-6 py-24 bg-[#F5F5F5]'>
      
      <div className={`container h-full w-auto py-8 lg:p-24 ${style['contenedor-recetas-hero']}`}>

      <div className={`w-full h-[250px] lg:h-[450px] rounded-xlW relative ${style['recetas-hero-1']}`}>
        <div className="absolute inset-0 bg-gradient-to-r from-[#B7A1BC] to-[#d46d7c] z-0 rounded-xl">
             Imagen
        </div>
        <div className="relative z-10 flex h-full">
    
           <h1 className="">
               compa1
           </h1>
    
        </div>
      </div>

        <div className={`w-full h-full rounded-xl bg-red-300 ${style['recetas-hero-2']}`}>
          <h1 className="">
             compa2
          </h1>
        </div>

        <div className={`w-full h-full rounded-xl bg-red-200 ${style['recetas-hero-3']}`}>
          <h1 className="">
             compa3
          </h1>
        </div>

      </div>

    </div>
  )
}

export default RecetasHero