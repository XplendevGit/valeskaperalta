"use client"

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

import { HiArrowCircleRight } from "react-icons/hi";

import SwiperSlideReceta from './SwiperSlideReceta';

const RecetasPortada = ({ recipes, selectedRecipe, handleRecipeHover }) => {
  return (
    <div className="overflow-hidden min-h-screen h-full w-full lg:px-24 lg:py-24 px-6 py-24 bg-gradient-to-r from-[#B7A1BC] to-[#d46d7c]">

    {/* Contenedor Principal */}
      <div className="w-full h-full container items-center justify-center flex flex-col">
     
     {/* Contenedor Titulos y Subtítulos de la Sección */}
       <div className="w-full h-full flex flex-col space-y-2 items-center">

        <h1 
        className="texto-subtitulos text-white text-base lg:text-2xl xl:text-4xl text-center"
        style={{ filter: 'drop-shadow(3px 3px 2px rgba(0, 0, 0, 0.4))' }}>
          Wake Up Mater Fuckersss 
        </h1>

        <div className="w-full h-full flex justify-center space-x-2">
        <h2 
        className="texto-subtitulos text-white text-base lg:text-2xl xl:text-4xl text-center pt-[9.5px]"
        style={{ filter: 'drop-shadow(3px 3px 2px rgba(0, 0, 0, 0.4))' }}>
          Recetas Populares
        </h2>

          {/* Renderizado Imagen Para móviles */}
          <Image
            src="https://i.postimg.cc/h4633Z0n/star.png"
            alt="star"
            className="w-8 h-8 lg:hidden"  // Se mostrará solo en pantallas más pequeñas que lg
            height={500}
            width={500}
            style={{ filter: 'drop-shadow(2px 2px 2px rgba(0, 0, 0, 0.4))' }}
          />

  {/* Renderizado Imagen Para pantallas lg y superiores */}
          <Image
            src="https://i.postimg.cc/h4633Z0n/star.png"
            alt="star"
            className="w-14 h-14 hidden lg:inline-block"  // Se mostrará solo en lg y superiores
            height={500}
            width={500}
            style={{ filter: 'drop-shadow(2px 2px 2px rgba(0, 0, 0, 0.4))' }}
           />
        </div>

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