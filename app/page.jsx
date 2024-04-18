import Image from 'next/image'
import Portada from '@/components/sections/inicio/portada/Portada'
import Beneficios from '@/components/sections/inicio/beneficios/Beneficios'

export default function Home() {

  return(
    <>

      <section id="portada">
        <Portada />
      </section>

      <section>
        <Beneficios id="beneficios"/>
      </section>

    </>
  )

}
