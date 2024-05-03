"use client"
import React from 'react'
import { useState } from 'react';

import ServiciosPortada from './ServiciosPortada';

const Servicio = () => {
    const [services, setService] = useState([
        {
          title: "Ingreso",
          description: "Primera consulta nutricional etc etc",
          price: "20.000",
          duration: "1.30 Hrs",
          imageUrl: "https://i.postimg.cc/hjtBCQsY/eiliv-aceron-m-W0-LIBBHNd-E-unsplash-removebg-preview.png",
          backgroundColor: "#57E8D8"
        },
        {
          title: "Control",
          price: "14.500",
          duration: "1.30 Hrs",
          imageUrl: "https://i.postimg.cc/GmgJBZNs/eiliv-aceron-0g-Q8-Fh1f54k-unsplash-removebg-preview.png",
          backgroundColor: "#F2CD5D"
        },
      ]);
    

      return (
        <div>
          <ServiciosPortada services={services} />
        </div>
      );
    };

export default Servicio