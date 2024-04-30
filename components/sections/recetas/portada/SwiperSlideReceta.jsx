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
import { Scale } from 'lucide-react';

const SwiperSlideReceta = ({ recipes, handleRecipeHover }) => {

  const [selectedRecipe, setSelectedRecipe] = useState(0);

  const renderDifficultyStars = (difficulty) => {
    const stars = [];
    for (let i = 0; i < difficulty; i++) {
      stars.push(
      <Image 
        key={i} 
        src="https://i.postimg.cc/h4633Z0n/star.png" 
        alt="star" 
        className="w-10 h-10" 
        height={500}
        width={500}
        style={{ filter: 'drop-shadow(2px 2px 2px rgba(0, 0, 0, 0.4))' }}
        />
        );
    }
    return stars;
  };

  // mi primer handlehover para lograr cambiar varios aspectos de la pantalla
  const handleHoverChanges = () => {
    selectedRecipe === recipes.length - 1? setSelectedRecipe(0) : setSelectedRecipe(selectedRecipe);
  }


  return (
    <>
      <Swiper
      spaceBetween={30}
        freeMode={true}
        loop={true}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          // Vista previa de 1 en pantallas móviles
          0: {
            slidesPerView: 1,

          },
          // Vista previa de 2 en tablets
          768: {
            slidesPerView: 2,

          },
          // Vista previa de 3 en pantallas de escritorio
          1024: {
            slidesPerView: 3,
 
          },
        }}
        modules={[Pagination, FreeMode]}
        className="mySwiper "
      >
        {recipes.map((recipe, index) => (
          <SwiperSlide key={index}>

            <div className="w-full h-full flex">

          {/* Contenedor Principal de las recetas */}
            <motion.div 
            className={`w-full h-[390px] justify-center ${style['contenedor-recetas-portada']}`}
            whileHover={{ scale: 1.025, duration: 0.2 }}
            >

           {/* Imagen de la receta */}
              <div className={`w-[180px] lg:h-[180px] h-[160px] mx-auto z-10 ${style['recetas-portada-1']}`}>
                <motion.img
                  className='w-full h-[152px] lg:h-[180px] object-cover cursor-pointer'
                  style={{ filter: 'drop-shadow(6px 6px 2px rgba(0, 0, 0, 0.4))' }}
                  src={recipe.imageUrl}
                  alt={recipe.name}
                  width={250}
                  height={250}
                  initial={{ opacity: 0, rotate: 180 }}
                  animate={{ opacity: 1, rotate: 0 }}
                  transition={{ duration: 0.4, type: "spring", stiffness: 70, damping: 10 }}
                />
              </div>


            {/* Contenedor de Detalles de la Receta */}
              <motion.div 
              style={{ filter: 'drop-shadow(6px 6px 5px rgba(0, 0, 0, 0.4))' }}
              className={`w-full h-full lg:max-h-full max-h-[250px] max-w-[210px] bg-[#57E8D8] hover:bg-[${recipe.backgroundColor} rounded-xl lg:mt-[-8%] cursor-pointer pb-4 px-4 mx-auto ${style['recetas-portada-2']}`}
              initial={{ opacity: 0, }}
              animate={{ opacity: 1, }}
              transition={{ duration: 0.2, type: "spring", stiffness: 100, damping: 10 }}
              >

                {/* Contenedor 2 de Detalles de la Receta */}
                <div className="w-full h-full flex flex-col text-center space-y-2">

                  {/* Nombre de la Receta */}
                  <h1 
                  style={{ filter: 'drop-shadow(3px 3px 2px rgba(0, 0, 0, 0.4))' }}
                  className="lg:pt-[120px] pt-[80px] texto-titulos-alternativos text-white">
                    {recipe.name}
                  </h1>
                  
                  {/* Contenedor flex Calorias y Personas */}
                  <div className="w-full flex justify-between">
                    <h1 
                       className="texto-general text-gray-600">
                         {recipe.calories}
                    </h1>

                    <h1 
                       style={{ filter: 'drop-shadow(3px 3px 2px rgba(0, 0, 0, 0.4))' }}
                       className="texto-general text-gray-600">
                         {recipe.eat}
                    </h1>
                  </div>

                {/* Contenedor final Tipo y Botón de Ver */}
                  <div className="w-full h-full flex justify-between items-end">
                {/*Renderización de Estrellas segun dificultad */}
                  {renderDifficultyStars(recipe.difficulty)}

                 {/*Boton Flecha */}
                    <HiArrowCircleRight 
                       style={{ filter: 'drop-shadow(2px 2px 2px rgba(0, 0, 0, 0.4))' }}
                       className="w-[40px] h-[40px] cursor-pointer text-white">
                    </HiArrowCircleRight>
                  </div>

                </div>

              </motion.div>
            </motion.div>
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