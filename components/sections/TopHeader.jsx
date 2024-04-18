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
    <motion.div 
    className="flex z-10 w-full h-auto bg-gradient-to-r from-[#B7A1BC] to-[#d46d7c]" onClick={onClick}
    exit={{ opacity: 0, height: 0, }}
    transition={{ duration: 0.2 }}
    >

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
              <Link href='https://www.instagram.com/lanutrivale_/'>
              
              <IoLogoInstagram className="md:w-8 md:h-8 w-6 h-6 text-white cursor-pointer hover:scale-105 transition-all duration-200">
              </IoLogoInstagram>
              </Link>
              <button className="btn-primario" onClick={handleButtonClick}>
                Agendar una Cita
              </button>

            </div>
        </div>
    </motion.div>
  )
}

export default TopHeader;