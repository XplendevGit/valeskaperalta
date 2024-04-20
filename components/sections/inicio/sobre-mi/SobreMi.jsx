import React from 'react'

import style from './sobremi.module.css'

const SobreMi = () => {
  return (
    <div className="overflow-hidden flex h-full w-full justify-center lg:px-24 lg:p-y-24 px-6 py-24 bg-gradient-to-r from-[#B7A1BC] to-[#d46d7c]">
        <div className={`container h-full w-full lg:px-24 space-y-4 lg:space-y-0 ${style['contenedor-sobremi']}`}>

          <div className={`w-full h-full ${style['sobremi-1']}`}>
             <div className="w-full h-full">
                <h1 className="texto-subtitulos text-white text-base lg:text-2xl xl:text-4xl text-center lg:text-start">
                      Nutricionista Valeska Peralta
                </h1>
             </div>
          </div>

          <div className={`flex w-full h-full ${style['sobremi-2']}`}>
             <div className="w-full h-full">
                <h1 className="texto-general text-balance text-white">
                Exercitation excepteur mollit et magna adipisicing minim id commodo consequat ea culpa ut. Do proident id amet aliquip do duis labore. Excepteur et veniam ullamco sint.
                Exercitation excepteur mollit et magna adipisicing minim id commodo consequat ea culpa ut. Do proident id amet aliquip do duis labore. Excepteur et veniam ullamco sint.
                </h1>
             </div>
          </div>

          <div className={`w-full h-full bg-red-200 ${style['sobremi-3']}`}>
              <div className="flex w-full h-full justify-center items-center px-12">
                 Imagen
              </div>
          </div>

        </div>
    </div>
  )
}

export default SobreMi