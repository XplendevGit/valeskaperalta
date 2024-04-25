import RecetasHero from '@/components/sections/recetas/hero/RecetasHero'
import RecetasPortada from '@/components/sections/recetas/portada/RecetasPortada'
import React from 'react'

const Recetas = () => {
  return (
    <>
    <section className="" id="recetasportada">
      <RecetasPortada />
    </section>

    <section className="" id="recetashero">
      <RecetasHero />
    </section>
    
    </>
  )
}

export default Recetas