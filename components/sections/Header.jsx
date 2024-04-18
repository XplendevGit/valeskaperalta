"use client"
import React from 'react'
import Image from 'next/image'

import TopHeader from './TopHeader';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';

import { motion, AnimatePresence } from 'framer-motion';


const Header = () => {
  const [showMenu, setShowMenu] = useState(false);
  const menuRef = useRef(null);
  const [showTopHeader, setShowTopHeader] = useState(true);
  const topHeaderRef = useRef(null);
  const [headerHeight, setHeaderHeight] = useState('80px'); // Altura predeterminada del header

  const navLinks = [
    { href: "/", label: "Inicio" },
    { href: "/about", label: "Conóceme" },
    { href: "/servicios", label: "Servicios" },
    { href: "/recetas", label: "Recetas" },
    { href: "/blog", label: "Sección Educativa" }
  ];

  const closeMenu = () => {
    setShowMenu(false);
  };

  const handleScroll = () => {
    const currentScrollPos = window.scrollY;
    const scrollThreshold = 0; // Ajusta este valor según sea necesario
    setShowTopHeader(currentScrollPos <= scrollThreshold);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleClickOutsideMenu = (e) => {
    if (
      menuRef.current && !menuRef.current.contains(e.target) &&
      topHeaderRef.current && !topHeaderRef.current.contains(e.target)
    ) {
      setShowMenu(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutsideMenu);
    return () => {
      document.removeEventListener("mousedown", handleClickOutsideMenu);
    };
  }, []);

  const handleTopHeaderClick = () => {
    setShowTopHeader(false);
  };

  // Ajustar la altura del header dinámicamente
  useEffect(() => {
    if (showTopHeader) {
      setHeaderHeight('80px'); // Altura normal del header
    } else {
      setHeaderHeight('0px'); // Sin altura, el header se oculta
    }
  }, [showTopHeader]);

  return (

    <div>
      {/* Top Header Render */}
      <AnimatePresence>
        {showTopHeader && (
          <motion.div
          ref={topHeaderRef}
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0, }}
          transition={{ duration: 0.2 }}
          >
            <TopHeader onClick={handleTopHeaderClick} />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Header div */}
      <motion.div
       className={`flex w-full lg:h-[${headerHeight}] h-[80px] fixed z-10 bg-gradient-to-r from-[#B7A1BC] to-[#d46d7c] transition-all duration-300 shadow-white/40 shadow-sm`}
        onClick={handleClickOutsideMenu}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }} // Ajusta la duración de la transición de salida aquí
        transition={{ duration: 0.5 }} // Duración de la transición de entrada
       >
        <div className="container flex justify-between items-center z-30">
          {/* Logo */}
          <div className="w-[110px] h-[110px] flex">
            <Image
              src="https://i.postimg.cc/4xdpQfwW/Logo-vp-280x200.png"
              alt="Logo"
              width={280}
              height={200}
              className="object-contain h-full w-full"
              style={{ filter: 'drop-shadow(3px 3px 4px rgba(0, 0, 0, 0.4))' }}
            />
          </div>

          {/* Navigation Menu Desktop */}
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

          <div className="hidden md:flex h-auto xl:space-x-8 lg:space-x-6 space-x-4">
            {navLinks.map((link, index) => (
              <Link key={index} href={link.href}>
                <h1 className="cursor-pointer lg:text-xl text-sm hover:scale-105 transition-all duration-150 text-white font-bold texto-general"
                style={{ filter: 'drop-shadow(4px 4px 2px rgba(0, 0, 0, 0.4))' }}>
                  {link.label}
                </h1>
              </Link>
            ))}
          </div>
        </div>

      {/* Navigation Menu Mobil */}
        <AnimatePresence>
          {showMenu && (
            <motion.div
              ref={menuRef} 
              className="md:hidden bg-gradient-to-r from-[#D2B2C9] to-[#d46d7c] h-screen w-1/2 flex flex-col absolute right-0 pt-20 space-y-6 text-center items-center"
              initial={{ opacity: 0, x: '100%' }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: '100%' }}
              transition={{ duration: 0.3 }}
            >
              <h1 className="lg:text-2xl text-lg transition-all duration-150 text-white font-bold" style={{ filter: 'drop-shadow(4px 4px 2px rgba(0, 0, 0, 0.4))' }}>
                Navegación
              </h1>
              {navLinks.map((link, index) => (
                <motion.h1
                  key={index}
                  onClick={closeMenu}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="text-center w-auto transition-all"
                >
                  <Link href={link.href}>
                  <h1 className="cursor-pointer lg:text-xl text-sm hover:scale-105 transition-all  duration-150 text-white font-bold texto-general"
                  style={{ filter: 'drop-shadow(4px 4px 2px rgba(0, 0, 0, 0.4))' }}
                  >
                      {link.label}
                  </h1>
                  </Link>
                </motion.h1>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
};

export default Header;