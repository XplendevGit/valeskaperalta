'use client'
import Link from 'next/link';
import React from 'react'
import { motion } from 'framer-motion';

import { IoLogoWhatsapp, IoLogoInstagram } from "react-icons/io";

const TopHeader = ({ onClick }) => {
  const handleButtonClick = (e) => {
    e.stopPropagation(); // Evita que el clic se propague al contenedor del Header
  };

  return (
    <div className="flex z-10 w-full h-auto bg-gradient-to-r from-[#D2B2C9] to-[#d46d7c]" onClick={onClick}>
        <div className="flex container justify-between items-center">
            <Link href="/">
              <motion.div className="flex space-x-2 cursor-pointer items-center hover:scale-105 transition-all duration-200">
               <IoLogoWhatsapp className="md:w-6 md:h-6 h-5 w-5 text-green-600">
               </IoLogoWhatsapp> 
               <h1 className="texto-general text-white">
                +569 94661560
               </h1> 
              </motion.div>
            </Link>

            <div className="flex space-x-4 items-center">
              <IoLogoInstagram className="md:w-8 md:h-8 w-6 h-6 text-white cursor-pointer hover:scale-105 transition-all duration-200">
              </IoLogoInstagram>
              <button className="btn-primario" onClick={handleButtonClick}>
                Agendar una Cita
              </button>
            </div>
        </div>
    </div>
  )
}

export default TopHeader;