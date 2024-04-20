import Image from 'next/image'
import Portada from '@/components/sections/inicio/portada/Portada'
import Beneficios from '@/components/sections/inicio/beneficios/Beneficios'
import SobreMi from '@/components/sections/inicio/sobre-mi/SobreMi'
import Reseñas from '@/components/sections/inicio/reseñas/Reseñas'

export default function Home() {

  return(
    <>

      <section id="portada">
        <Portada />
      </section>

      <section>
        <Beneficios id="beneficios"/>
      </section>

      <section>
        <SobreMi id="sobremi"/>
      </section>

      <section>
        <Reseñas id="reseñas"/>
      </section>

    </>
  )

}
