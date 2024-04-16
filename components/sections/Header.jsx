"use client"
import React from 'react'
import Image from 'next/image'

import { useState } from 'react';
import Link from 'next/link';

import { motion, AnimatePresence } from 'framer-motion';

const Header = () => {
    const [showMenu, setShowMenu] = useState(false);

        // Array de objetos para los enlaces de navegación
        const navLinks = [
          { href: "/", label: "Inicio" },
          { href: "/about", label: "Conóceme" },
          { href: "/servicios", label: "Servicios" },
          { href: "/blog", label: "Sección Educativa" }
      ];

          // Función para cerrar el menú desplegable
        const closeMenu = () => {
           setShowMenu(false);
        };
  
        return (
          <div className='flex w-full h-[80px] fixed border-b-[1px] bg-white transition-all duration-300'>
              <div className="container flex justify-between items-center z-30">
                  <div className="w-[110px] h-[110px] flex">
                      <Image
                          src="https://i.postimg.cc/4xdpQfwW/Logo-vp-280x200.png"
                          alt="Logo"
                          width={280}
                          height={200}
                          className="object-contain h-full w-full"
                      />
                  </div>
  
                  {/* Menú hamburguesa */}
                  <div className="md:hidden transition-all ease-in-out duration-300 x-30">
                      <button
                          onClick={() => setShowMenu(!showMenu)}
                          className="block text-gray-600 focus:outline-none"
                      >
                          <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="h-6 w-6"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                          >
                              {showMenu ? (
                                  <path
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      strokeWidth={2}
                                      d="M6 18L18 6M6 6l12 12"
                                  />
                              ) : (
                                  <path
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      strokeWidth={2}
                                      d="M4 6h16M4 12h16m-7 6h7"
                                  />
                              )}
                          </svg>
                      </button>
                  </div>
  
                  {/* Menú principal */}
                  <div className="texto-subtitulos hidden md:flex h-auto xl:space-x-8 lg:space-x-6 space-x-4">
                      {navLinks.map((link) => (
                          <Link key={link.href} href={link.href}>
                              <h1 className="cursor-pointer hover:scale-105 transition-all duration-150">{link.label}</h1>
                          </Link>
                      ))}
                  </div>
              </div>
  
              {/* Menú hamburguesa desplegable */}
              <AnimatePresence>
                  {showMenu && (
                      <motion.div className="md:hidden bg-white h-screen w-1/2 flex flex-col border-x-[1px] absolute right-0 pt-8 space-y-6 text-center items-center"
                          initial={{ opacity: 0, x: '100%' }}
                          animate={{ opacity: 1, x: 0 }}
                          exit={{ opacity: 0, x: '100%' }}
                          transition={{ duration: 0.3 }}
                      >
                          <h1 className="texto-títulos">Navegación</h1>
                          {navLinks.map((link) => (
                              <motion.h1
                                  key={link.href}
                                  onClick={closeMenu}
                                  whileHover={{ scale: 1.05 }}
                                  whileTap={{ scale: 0.95 }}
                                  className="texto-subtitulos text-center cursor-pointer w-auto hover:scale-105 duration-200 transition-all"
                              >
                                  <Link href={link.href}>
                                      {link.label}
                                  </Link>
                              </motion.h1>
                          ))}
                      </motion.div>
                  )}
              </AnimatePresence>
          </div>
      );
  };
  
  export default Header;