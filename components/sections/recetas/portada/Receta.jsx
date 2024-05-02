"use client"
import React, { useState } from 'react';
import SwiperSlideReceta from './SwiperSlideReceta';
import RecetasPortada from './RecetasPortada';

const Receta = () => {
  const [recipes, setRecipes] = useState([
    {
      name: "Muesli",
      type: "Desayuno",
      eat: "1 Persona",
      calories: "320 Calorías",
      popularity: 3,
      imageUrl: "https://i.postimg.cc/hjtBCQsY/eiliv-aceron-m-W0-LIBBHNd-E-unsplash-removebg-preview.png",
      backgroundColor: "#57E8D8"
    },
    {
      name: "Pollo a la Naranja",
      type: "Almuerzo",
      eat: "1 Persona",
      calories: "250 Calorías",
      popularity: 3,
      imageUrl: "https://i.postimg.cc/GmgJBZNs/eiliv-aceron-0g-Q8-Fh1f54k-unsplash-removebg-preview.png",
      backgroundColor: "#F2CD5D"
    },
    {
      name: "Receta 3",
      type: "Almuerzo",
      eat: "1 Persona",
      calories: "480 Calorías",
      popularity: 3,
      imageUrl: "https://i.postimg.cc/hjtBCQsY/eiliv-aceron-m-W0-LIBBHNd-E-unsplash-removebg-preview.png",
      backgroundColor: "#E5979E"
    }
  ]);

  const [selectedRecipe, setSelectedRecipe] = useState(0);

  const handleRecipeHover = (index) => {
    setSelectedRecipe(index);
  };

  return (
    <div>
      <RecetasPortada recipes={recipes} selectedRecipe={selectedRecipe} handleRecipeHover={handleRecipeHover} />
    </div>
  );
};

export default Receta;