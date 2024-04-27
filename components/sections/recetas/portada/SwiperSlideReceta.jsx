import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

import motion from 'framer-motion';

import Image from 'next/image';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import '@/app/globals.css';

// import required modules
import { Pagination, Navigation } from 'swiper/modules';

export default function SwiperSlideReseta() {
  return (
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        navigation={true}
        modules={[Pagination, Navigation]}
        loop={true} //
        className="swiperslidecolor cursor-grab"
      >
        <SwiperSlide>
            {/* Resena map future Integration */}
            <motion.div
          key={index}
          className={`w-auto h-auto lg:w-[150px] lg:h-[150px] flex justify-center items-center transition-all duration-150 ${style[`recetas-portada-${index + 1}`]}`}
          onMouseEnter={() => handleRecipeHover(index)}
        >
          <div className="w-[80px] h-[80px] lg:w-[150px] lg:h-[150px] flex object-center items-center text-center rounded-full">
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
            
        </SwiperSlide>
      </Swiper>
    </>
  );
}
