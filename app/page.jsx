import Image from 'next/image'

export default function Home() {
  return (
    <div className="flex min-h-screen h-screen w-full flex-col items-center justify-between lg:px-24 lg:p-y-24 px-6 py-24">

      <div className="flex container h-full w-full">
      
         <div className="flex flex-col w-full h-full justify-center lg:px-24 lg:pb-[150px] md:pb-[80px]">

          <div className="flex flex-col space-y-2 w-auto h-auto">

          <h1 className="texto-títulos text-[#D2B2C9]" 
              style={{
              background: 'linear-gradient(to right, #d46d7c, #D2B2C9)', // Gradiente de texto
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              display: 'inline-block' // Necesario para que el background-clip funcione correctamente
            }}
          >
              Tu Dieta Personalizada
            </h1>

            <h1 className="texto-subtitulos text-xs md:text-base xl:text-lg">
              Laborum ea officia esse veniam officia sit quis culpa voluptate laboris voluptate aliqua magna fugiat. Qui minim elit consequat deserunt pariatur et amet ad eiusmod et sint. Sunt ipsum elit reprehenderit exercitation cillum cillum incididunt officia.
            </h1>

          </div>

          <div className="flex w-auto h-auto pt-1">
          <button className="btn-secundario">
              Contratar Servicio
            </button>
          </div>


         </div>

         <div className="flex w-full h-full justify-center space-y-4">
            <h1 className="texto-títulos">
              Inicio
            </h1>
         </div>

      </div>
      
    </div>
  )
}
