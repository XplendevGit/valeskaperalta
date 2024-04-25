"use client"
import React, { useState } from 'react'
import Image from 'next/image'

import { motion } from 'framer-motion';

import style from './recetasportada.module.css'

const RecetasPortada = () => {

  // Estado para mantener la receta seleccionada
  const [selectedRecipe, setSelectedRecipe] = useState(0);
  const [imageAnimation, setImageAnimation] = useState({
    opacity: 0,
    rotate: 180,
  });

  // Array con la información de cada receta
  const recipes = [
    {
      name: "Receta 1",
      type: "Desayuno",
      difficulty: 1,
      imageUrl: "https://i.postimg.cc/7PSDY4cb/anna-pelzer-IGf-IGP5-ONV0-unsplash-removebg-preview.png",
      backgroundColor: "#57E8D8"
    },
    {
      name: "Receta 2",
      type: "Almuerzo",
      difficulty: 2,
      imageUrl: "https://i.postimg.cc/GmgJBZNs/eiliv-aceron-0g-Q8-Fh1f54k-unsplash-removebg-preview.png",
      backgroundColor: "#F2CD5D"
    },
    {
      name: "Receta 3",
      type: "Cena",
      difficulty: 3,
      imageUrl: "https://i.postimg.cc/hjtBCQsY/eiliv-aceron-m-W0-LIBBHNd-E-unsplash-removebg-preview.png",
      backgroundColor: "#E5979E"
    }
  ];

  // Función para actualizar la receta seleccionada al hacer hover
  const handleRecipeHover = (index) => {
    setSelectedRecipe(index);
    // Aplicar animación a la imagen grande al hacer hover
    setImageAnimation({
      opacity: 1,
      rotate: 360
    });
  };


  return (
    <div className="overflow-hidden flex min-h-screen h-full w-full items-center justify-center lg:px-24 lg:p-y-24 px-6 py-24 bg-gradient-to-r from-[#B7A1BC] to-[#d46d7c]">
      <motion.div 
        initial={{ opacity: 0, }}
        animate={{ opacity: 1, }}
        transition={{ duration: 0.2, type: "spring", stiffness: 100, damping: 10 }}
        className={`container h-full w-auto m-24 p-24 space-y-4 lg:space-y-0 rounded-2xl shadow-2xl ${style['contenedor-recetas-portada']}`} style={{ backgroundColor: recipes[selectedRecipe].backgroundColor }}>

        {/* Contenedor 1 , 2 y 3 Reducido para Renderizar optimamente las imagenes correspondientes de las recetas*/}
        {recipes.map((recipe, index) => (
          <motion.div
          key={index}
          className={`w-[150px] h-[150px] flex justify-center items-center transition-all duration-150 ${style[`recetas-portada-${index + 1}`]}`}
          onMouseEnter={() => handleRecipeHover(index)}
        >
          <div className="w-[150px] h-[150px] flex object-center items-center text-center rounded-full">
            <Image
              className='hover:scale-105 transition-all duration-150 cursor-pointer'
              style={{ filter: 'drop-shadow(10px 8px 4px rgba(0, 0, 0, 0.4))' }}
              src={recipe.imageUrl}
              alt={`Receta ${index + 1}`}
              width={150}
              height={150}
              objectFit='fill'
            />
          </div>
        </motion.div>
        ))}

      {/* Contenedor 4 Imagen Grande de la Receta*/}
      <motion.div
          className={`w-full justify-center items-center ${style['recetas-portada-4']}`}
        >
          <motion.div
            initial={{ opacity: 0, rotate: 180 }}
            animate={{ opacity: 1, rotate: 0 }}
            transition={{ duration: 0.4, type: "spring", stiffness: 100, damping: 10 }}
          >
            <div className="w-[380px] h-[380px]">
              <Image
                className='hover:scale-105 transition-all duration-150 cursor-pointer w-[350px] h-[350px] object-cover'
                style={{ filter: 'drop-shadow(24px 30px 10px rgba(0, 0, 0, 0.4))' }}
                src={recipes[selectedRecipe].imageUrl}
                alt={`Receta ${selectedRecipe + 1}`}
                width={1080}
                height={1080}
                objectFit='cover'
              />
            </div>
          </motion.div>
        </motion.div>

      {/* Contenedor 5 Nombre de la Receta */}
        <div className={`w-full h-full ${style['recetas-portada-5']}`}>
          <div className="w-full h-full flex px-14 items-end">
            <h1 
              className="texto-titulos text-white xl:text-[80px]"
              style={{ textShadow: "6px 6px 8px #022211" }} 
              >
                {recipes[selectedRecipe].name}
            </h1>
          </div>
        </div>

      {/* Contenedor 6 Descripción Textos */}
        <div className={`w-full h-full ${style['recetas-portada-6']}`}>
          <div className="w-full h-auto flex flex-col space-y-2">
            <div className="w-full h-full flex">
              <h1 
                className="texto-subtitulos text-white text-base lg:text-2xl xl:text-4xl"
                style={{ filter: 'drop-shadow(2px 2px 2px rgba(0, 0, 0, 0.4))' }}
                > 
                  {recipes[selectedRecipe].type}
              </h1>
            </div>

           {/* Div Descripcion Textos */}
            <div className="w-full h-full flex items-baseline space-x-2">
              <h1 
                className="texto-subtitulos text-white text-base lg:text-2xl xl:text-2xl"
                style={{ filter: 'drop-shadow(2px 2px 2px rgba(0, 0, 0, 0.4))' }}> 
                  Dificultad:
              </h1>
              {[...Array(recipes[selectedRecipe].difficulty)].map((_, index) => (
                <Image
                  key={index}
                  className='hover:scale-105 transition-all duration-200 cursor-pointer'
                  style={{ filter: 'drop-shadow(2px 2px 2px rgba(0, 0, 0, 0.4))' }}
                  src="https://i.postimg.cc/h4633Z0n/star.png"
                  alt="Estrella"
                  width={25}
                  height={25}
                  objectFit='fill'
                />
              ))}
            </div>

             {/* Div boton de ver receta */}
            <div className="w-full h-full flex pt-4">
              <button className="btn-secundario"> 
                  Ver Esta Receta
              </button>
            </div>
          </div>
        </div>

      {/* Contenedor 7 Titulo de la recetas*/}
        <div className={`w-full h-full ${style['recetas-portada-7']}`}>
          <div className="w-full h-full flex px-14 ">
            <h1 
              className="texto-subtitulos text-white text-base lg:text-2xl xl:text-4xl"
              style={{ textShadow: "6px 6px 8px #022211" }} 
              >
                Recetas Populares
            </h1>
          </div>
        </div>

      </motion.div>
    </div>
  )
}

export default RecetasPortada;