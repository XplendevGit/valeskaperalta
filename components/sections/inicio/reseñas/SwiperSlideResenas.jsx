import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import '@/app/globals.css';

// import required modules
import { Pagination, Navigation } from 'swiper/modules';

export default function SwiperSlideResenas() {
  return (
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="swiperslidecolor"
      >
        <SwiperSlide>
            {/* Resena map future Integration */}
            <div className="w-full h-full text-center p-12 flex flex-col items-center space-y-8">
              <h1 className="">Nombre de Paciente</h1>
              <h1 className="">Velit voluptate ut labore nulla tempor sint magna enim eiusmod dolor Lorem duis minim. Qui amet nostrud dolore ex velit exercitation irure nisi eiusmod consectetur sunt magna sint. Exercitation ullamco incididunt eiusmod laborum occaecat ut irure. In aute non aliquip cupidatat aliquip aute qui. Reprehenderit et consequat ullamco laboris nostrud esse pariatur do occaecat nostrud. Aliquip laboris ipsum dolor ut laborum voluptate aute in consequat dolor consequat.</h1>
            </div>
            
        </SwiperSlide>
        <SwiperSlide>
            {/* Resena map future Integration */}
            <div className="w-full h-full text-center p-12 flex flex-col items-center space-y-8">
              <h1 className="">Nombre de Paciente</h1>
              <h1 className="">Velit voluptate ut labore nulla tempor sint magna enim eiusmod dolor Lorem duis minim. Qui amet nostrud dolore ex velit exercitation irure nisi eiusmod consectetur sunt magna sint. Exercitation ullamco incididunt eiusmod laborum occaecat ut irure. In aute non aliquip cupidatat aliquip aute qui. Reprehenderit et consequat ullamco laboris nostrud esse pariatur do occaecat nostrud. Aliquip laboris ipsum dolor ut laborum voluptate aute in consequat dolor consequat.</h1>
            </div>
            
        </SwiperSlide>
        <SwiperSlide>
            {/* Resena map future Integration */}
            <div className="w-full h-full text-center p-12 flex flex-col items-center space-y-8">
              <h1 className="">Nombre de Paciente</h1>
              <h1 className="">Velit voluptate ut labore nulla tempor sint magna enim eiusmod dolor Lorem duis minim. Qui amet nostrud dolore ex velit exercitation irure nisi eiusmod consectetur sunt magna sint. Exercitation ullamco incididunt eiusmod laborum occaecat ut irure. In aute non aliquip cupidatat aliquip aute qui. Reprehenderit et consequat ullamco laboris nostrud esse pariatur do occaecat nostrud. Aliquip laboris ipsum dolor ut laborum voluptate aute in consequat dolor consequat.</h1>
            </div>
            
        </SwiperSlide>
      </Swiper>
    </>
  );
}
