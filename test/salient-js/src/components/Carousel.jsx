'use client';
'use strict';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import '@/styles/styles.css';

// import required modules
import { Pagination } from 'swiper/modules';


    export default function Carousel(){
        return (
            <div className="flex items-center flex-col py-6">
                <div className="lg:h-400px sm:border rounded-xl sm:border-gray-300 sm:min-h-[400px] sm:mt-4 sm:w-[calc(100%-2rem)] min-h-[423px] mt-0 overflow-hidden w-full">
                    <Swiper className="mySwiper w-full h-full">
                        <SwiperSlide className="text-center text-lg bg-white flex justify-center items-center">
                            <img className="h-14"
                            src='/earn.jpg'
                            alt='Swiper img'
                            />
                        </SwiperSlide>
                        <SwiperSlide><img className="h-14"
                            src='/sammy.jpg'
                            alt='Swiper img'
                            /></SwiperSlide>
                    </Swiper>
                </div>
            </div>
        );
    }