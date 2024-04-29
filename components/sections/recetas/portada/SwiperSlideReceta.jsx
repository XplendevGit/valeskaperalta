import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, FreeMode } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/free-mode';
import Image from 'next/image';
import { motion } from 'framer-motion';

import { HiArrowCircleRight } from "react-icons/hi";

import style from './recetasportada.module.css'

const SwiperSlideReceta = ({ recipes, handleRecipeHover }) => {
  return (
    <>
      {/* Mostrar Swiper solo en pantallas con un ancho mayor o igual a 769px */}
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        freeMode={true}
        loop={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination, FreeMode]}
        className="mySwiper"
      >
        {recipes.map((recipe, index) => (
          <SwiperSlide key={index}>
            <div className={`w-[280px] h-[390px] ${style['contenedor-recetas-portada']}`}>

              <div className={`w-[180px] h-[180px] z-10 ${style['recetas-portada-1']}`}>
                <Image
                  className='w-full h-[180px] object-cover cursor-grab'
                  style={{ filter: 'drop-shadow(6px 6px 2px rgba(0, 0, 0, 0.4))' }}
                  src={recipe.imageUrl}
                  alt={`Receta ${index + 1}`}
                  width={250}
                  height={250}
                />
              </div>


            {/* Contenedor de Detalles de la Receta */}
              <div 
              style={{ filter: 'drop-shadow(6px 6px 5px rgba(0, 0, 0, 0.4))' }}
              className={`w-full h-full bg-white hover:bg-[#EFB729] rounded-xl mt-[-8%] cursor-grab px-2 pb-2 lg:pb-4 lg:px-4 ${style['recetas-portada-2']}`}>

                <div className="w-full h-full flex flex-col text-center space-y-2">
                  <h1 
                  style={{ filter: 'drop-shadow(3px 3px 2px rgba(0, 0, 0, 0.4))' }}
                  className="pt-[120px] texto-subtitulos">
                    {recipe.name}
                  </h1>
                  
                  {/* Contenedor flex Calorias y Personas */}
                  <div className="w-full flex justify-between">
                    <h1 
                       style={{ filter: 'drop-shadow(3px 3px 2px rgba(0, 0, 0, 0.4))' }}
                       className="texto-general">
                         {recipe.calories}
                    </h1>

                    <h1 
                       style={{ filter: 'drop-shadow(3px 3px 2px rgba(0, 0, 0, 0.4))' }}
                       className="texto-general">
                         {recipe.eat}
                    </h1>
                  </div>

                {/* Contenedor final Tipo y Botón de Ver */}
                  <div className="w-full h-full flex justify-between items-end">
                    <h1 
                       style={{ filter: 'drop-shadow(3px 3px 2px rgba(0, 0, 0, 0.4))' }}
                       className="texto-general">
                         {recipe.calories}
                    </h1>

                    <HiArrowCircleRight 
                       style={{ filter: 'drop-shadow(2px 2px 2px rgba(0, 0, 0, 0.4))' }}
                       className="w-[40px] h-[40px] cursor-pointer">
                    </HiArrowCircleRight>
                  </div>



                </div>


              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      {/* Fin de la sección para pantallas más grandes */}

      {/* Mostrar las recetas de forma predeterminada en pantallas más pequeñas */}

      {/* Fin de la sección para pantallas más pequeñas */}
    </>
  );
};

export default SwiperSlideReceta;
