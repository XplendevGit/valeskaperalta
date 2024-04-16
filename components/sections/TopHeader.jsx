import Link from 'next/link';
import React from 'react'

import { IoLogoWhatsapp, IoLogoInstagram } from "react-icons/io";

const TopHeader = ({ onClick }) => {
  const handleButtonClick = (e) => {
    e.stopPropagation(); // Evita que el clic se propague al contenedor del Header
  };

  return (
    <div className="flex w-full h-auto bg-apoyo2 z-30" onClick={onClick}>
        <div className="flex container justify-between items-center">
            <Link href="/">
              <div className="flex space-x-2 cursor-pointer items-center">
               <IoLogoWhatsapp className="md:w-6 md:h-6 h-5 w-5 text-[#4DC356]">
               </IoLogoWhatsapp> 
               <h1 className="texto-general">
                +569 94661560
               </h1> 
              </div>
            </Link>

            <div className="flex space-x-4 items-center">
              <IoLogoInstagram className="md:w-8 md:h-8 w-6 h-6 text-[#FF00B6] cursor-pointer">
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