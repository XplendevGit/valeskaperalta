"use client"
import React from 'react'
import Image from 'next/image'
import Link from 'next/link';

import motion from 'framer-motion';

import EmailForm from '@/components/interfaces/EmailForm';

import { IoLogoWhatsapp } from "react-icons/io";
import { AiFillInstagram } from "react-icons/ai";

import style from './footer.module.css'

const navLinks = [
  { href: "/", label: "Inicio" },
  { href: "/servicios", label: "Servicios" },
  { href: "/recetas", label: "Recetas" },
  { href: "/blog", label: "Sección Educativa" }
];

const navPages = [
  { href: "/condiciones", label: "Cancelación de Horas Reservadas" },
  { href: "/faq", label: "Preguntas Frecuentes" },
];



const Footer = () => {
  return (
    <div className="w-full h-1/3 bg-gradient-to-r from-[#B7A1BC] to-[#d46d7c]">

      {/* Contenedor Principal del Footer */}
        <div className={`container ${style['contenedor-footer']}`} >
            
            {/* Contenedor 1 Enviar Correo */}
            <div className={`w-full h-full ${style['footer-1']}`}>
               <div className="flex flex-col justify-center items-center p-4 space-y-6">
                <h1 className="texto-subtitulos text-white lg:text-2xl xl:text-4xl">
                  Si tienes dudas, ¡Contáctame!
                </h1>
                  <EmailForm />
               </div>
            </div>

            {/* Contenedor 2 Logo y Redes Sociales */}
            <div className={`w-full h-full ${style['footer-2']}`}>
              <div className="flex flex-col justify-center items-center p-4">
                <div className="w-[110px] h-[110px] lg:w-[180px] lg:h-[180px] flex">
                  <Image
                     src="https://i.postimg.cc/4xdpQfwW/Logo-vp-280x200.png"
                     alt="Logo"
                     width={350}
                     height={350}
                     className="object-contain h-full w-full"
                     style={{ filter: 'drop-shadow(3px 3px 4px rgba(0, 0, 0, 0.4))' }}
                  />
                </div>
                   
                  <div className="flex w-full h-full justify-center space-x-4">
                    <Link href="">
                      <IoLogoWhatsapp className="w-[26px] h-[26px] cursor-pointer hover:scale-105 transition-all duration-150">
                      </IoLogoWhatsapp>  
                    </Link>

                    <Link href="">
                      <AiFillInstagram className="w-[27px] h-[27px] cursor-pointer hover:scale-105 transition-all duration-150">
                      </AiFillInstagram>  
                    </Link>
                  </div>

               </div>
            </div>

            {/* Contenedor 3 Menú de Navegación*/}
            <div className={`w-full h-full flex ${style['footer-3']}`}>
               <div className="flex w-full h-full flex-col justify-center items-center p-4">
                  <div className="texto-subtitulos  text-white space-y-4 text-center">
                    <h1 className="text-black/70">MENÚ DE NAVEGACIÓN</h1>

                     {navLinks.map((link, index) => (
                       <Link key={index} href={link.href}>
                         <h1 className="cursor-pointer hover:scale-105 transition-all duration-150"
                             style={{ filter: 'drop-shadow(4px 4px 2px rgba(0, 0, 0, 0.4))' }}>
                              {link.label}
                         </h1>
                       </Link>
                     ))}
                  </div>

               </div>
            </div>

            {/* Contenedor 4 Contacto, Dirección y Preguntas Frecuentes */}
            <div className={`w-full h-full ${style['footer-4']}`}>
              <div className="flex flex-col w-full h-full justify-center items-center text-center lg:text-start lg:items-start p-4 space-y-2">
                  <ol className="texto-subtitulos text-white">
                     <li className="uppercase text-black/70">Contacto</li>
                     <li 
                     className="" 
                     style={{ filter: 'drop-shadow(4px 4px 2px rgba(0, 0, 0, 0.4))' }}>
                      valeperaltatorres@gmail.com
                     </li>
                  </ol>

                  <ol className="texto-subtitulos text-white">
                     <li 
                      className="uppercase text-black/70">
                      Dirección
                     </li>
                     <li 
                        className="cursor-pointer transition-all duration-150 border-transparent border-b-[1px] hover:border-b-white"
                        style={{ filter: 'drop-shadow(4px 4px 2px rgba(0, 0, 0, 0.4))' }}>
                          Villa Izolina Barraza x, Vicuña, Chile.
                      </li>
                  </ol>

                  <ol className="texto-subtitulos text-white">
                     <li className="uppercase text-black/70">Condiciones</li>
                     {navPages.map((link, index) => (
                       <Link key={index} href={link.href}>
                         <h1 className="cursor-pointer transition-all duration-150 border-transparent border-b-[1px] hover:border-b-white"
                             style={{ filter: 'drop-shadow(4px 4px 2px rgba(0, 0, 0, 0.4))' }}>
                              {link.label}
                         </h1>
                       </Link>
                     ))}
                  </ol>
              </div>
            </div>

            {/* Contenedor 5 Div Final del Footer */}
            <div className={`w-full h-full ${style['footer-5']}`}>
               <div className="flex justify-center items-center p-4">
                <Link href="https://xplendev.com/">
                  <h1 className="texto-general cursor-pointer text-white">
                    ©2024 Valeska Peralta | Code By Xplendev
                  </h1> 
                </Link> 
               </div>
            </div>

        </div>
    </div>
  )
}

export default Footer