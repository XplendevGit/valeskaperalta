"use client"

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

import SwiperSlideReceta from './SwiperSlideReceta';

const RecetasPortada = ({ recipes, selectedRecipe, handleRecipeHover }) => {
  return (
    <div className="overflow-hidden h-full w-full lg:px-24 lg:py-24 px-6 py-24 bg-gradient-to-r from-[#B7A1BC] to-[#d46d7c]">

    {/* Contenedor Principal */}
      <div className="w-full h-full container items-center justify-center flex flex-col">
     
     {/* Contenedor Titulos y Subtítulos de la Sección */}
       <div className="w-full h-full flex flex-col space-y-2 items-center">

        <h1 className="texto-subtitulos text-white text-base lg:text-2xl xl:text-4xl text-center">
          Wake Up Mater Fuckersss <br/>
          Tis is the rial Life
        </h1>

        <h2 className="texto-general text-white text-center">
          conoce nuestras mejores receras y ponlas a prueba en el día a día
        </h2>

       </div>

       {/* Contenedor Swiper Recetas */}
       <div className="lg:w-[850px] w-full h-full flex justify-center items-center mx-auto pt-[40px] lg:pt-[80px]">

        <SwiperSlideReceta recipes={recipes} handleRecipeHover={handleRecipeHover}>

        </SwiperSlideReceta>
       </div>

      </div>

    </div>
  );
};

export default RecetasPortada;