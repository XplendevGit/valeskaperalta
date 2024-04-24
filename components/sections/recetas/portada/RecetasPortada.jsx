import React from 'react'

import style from './recetasportada.module.css'

const RecetasPortada = () => {
  return (
    <div className='overflow-hidden flex min-h-screen h-full w-full flex-col items-center justify-between lg:px-24 lg:p-y-24 px-6 py-24 bg-gradient-to-r from-[#B7A1BC] to-[#d46d7c]'>

    {/* Div Contenedor General */}
        <div className={`container flex h-full w-full m-24 p-24 space-y-4 lg:space-y-0 rounded-2xl bg-white ${style['contenedor-recetas-portada']}`}>

          {/* Div 1 */}
            <div className={`w-full h-full flex justify-center items-center bg-red-200 ${style['recetas-portada-1']}`}>
                 <div className="w-[90px] h-[90px] bg-red-400 text-center rounded-full">
                    compa 1
                 </div>
            </div>

           {/* Div 2 */}
            <div className={`w-full h-full flex justify-center items-center bg-red-300 ${style['recetas-portada-2']}`}>
                <div className="w-[90px] h-[90px] bg-red-400 text-center rounded-full">
                    compa 2
                 </div>
            </div>

            {/* Div 3 */}
             <div className={`w-full h-full flex justify-center items-center bg-green-400 ${style['recetas-portada-3']}`}>
                 <div className="w-[90px] h-[90px] bg-red-400 text-center rounded-full">
                    compa 3
                 </div>
            </div>

            {/* Div 4 */}
             <div className={`w-full h-full flex justify-center items-center ${style['recetas-portada-4']}`}>
             
                <div className="w-[320px] h-[320px] text-center bg-blue-400 rounded-full">
                    <h1 className="">
                        Imagen
                    </h1>
                </div>

            </div>

            {/* Div 5 */}
             <div className={`w-full h-full bg-yellow-400 ${style['recetas-portada-5']}`}>
             div 5
            </div>

            {/* Div 6 */}
             <div className={`w-full h-full bg-green-200 ${style['recetas-portada-6']}`}>
                div 6
            </div>

        </div>
        
    </div>
  )
}

export default RecetasPortada