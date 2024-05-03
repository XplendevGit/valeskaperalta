import React from 'react'

const ServiciosPortada = (services) => {
  console.log(services)
    return (
        <div className="overflow-hidden flex min-h-screen h-full w-full flex-col items-center justify-between lg:px-24 lg:p-y-24 px-6 py-24 bg-gradient-to-r from-[#B7A1BC] to-[#d46d7c]">
    
        <div className="container w-full flex h-full justify-center text-center ">
    
          <div className="w-[428px] h-[628px] bg-white rounded-2xl flex flex-col p-6 space-y-2">
            {/* Contenedor de Membersía */}
            <div className="w-full min-h-[88px] bg-red-400 flex justify-center items-center">
              <h1 className="">
                Starter
              </h1>
            </div>

            <div className="w-full min-h-[166px] justify-center items-center border-b-2 rounded-2xl">

            </div>

            <div className="">

            </div>

            <div className="">

            </div>
    
          </div>
    
        </div>
      
    </div>
  )
}

export default ServiciosPortada