"use client"
import React from 'react'
import { useState } from 'react';

import ServiciosPortada from './ServiciosPortada';

const Servicio = () => {
    const [services, setService] = useState([
        {
          title: "Primera Consulta Nutricional",
          description: "Primera consulta nutricional etc etc",
          price: "30.000",
          duration: "1.30 Hrs",
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
    

      return (
        <div>
          <ServiciosPortada services={services} />
        </div>
      );
    };

export default Servicio