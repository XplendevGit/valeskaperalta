import React from 'react'

const ServiciosPortada = ({ services }) => {
  console.log(services)
    return (
      <>
        <div className="flex flex-col space-y-6 overflow-hidden min-h-screen h-full w-full items-center justify-between lg:px-24 lg:p-y-24 px-6 py-24 bg-gradient-to-r from-[#B7A1BC] to-[#d46d7c]">

       {services.map((service, index) => (
    
        <div 
        key={index}
        className="flex container w-full h-full justify-center text-center">
    
          <div className="flex w-[428px] h-[628px] bg-white rounded-2xl flex-col p-6 space-y-2">
            {/* Contenedor de Membersía */}
            <div className="flex w-full min-h-[88px] bg-red-400 justify-center items-center">
              <h1 className="texto-titulos-normales">
                {service.title}
              </h1>
            </div>

            <div className="flex w-full min-h-[166px] justify-center items-center border-b-2">
                <h1 className="">
                  ${service.price}
                </h1>
            </div>

            <div className="">

            </div>

            <div className="">

            </div>
    
          </div>
    
        </div>
        ))}
    </div>
    </>
  )
}

export default ServiciosPortada