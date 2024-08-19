import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination } from "swiper/modules";
import banner1 from "../../../public/slide1.png";
import banner2 from "../../../public/slide2.png";
import banner3 from "../../../public/slide3.png";
const Home = () => {
  return (
    <div>
      <div className="lg:my-12 mt-[100px]  lg:mt-[100px]">
        <div className="container mx-auto">
          <Swiper
            spaceBetween={30}
            centeredSlides={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
            }}
            modules={[Autoplay, Pagination]}
            className="mySwiper"
          >
            <SwiperSlide>
              <div className="flex flex-col lg:flex-row items-center justify-center">
                <div>
                  <h2 className="lg:text-[20px] font-semibold uppercase">
                    New Arrivals
                  </h2>
                  <h2 className="lg:text-[60px] font-semibold lg:w-[600px] lg:tracking-[5px]">
                    Charis & Seating You'll Love
                  </h2>
                  <p className="text-[18px] font-medium text-gray-500 mt-4">
                    Designer chair for every space -{" "}
                    <span className="text-black">Free Shipping</span>
                  </p>
                  <button className="lg:text-[16px] text-sm border-b border-gray-900 mt-10 font-semibold text-black uppercase">
                    Show Now
                  </button>
                </div>
                <div>
                  <img src={banner3} alt="" />
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="flex flex-col lg:flex-row items-center justify-center">
                <div>
                  <h2 className="lg:text-[20px] font-semibold uppercase">
                    Sale off 20%
                  </h2>
                  <h2 className="lg:text-[60px] font-semibold lg:w-[600px] lg:tracking-[5px]">
                    Discover Living Room Tables
                  </h2>
                  <p className="lg:text-[18px] font-medium text-gray-500 mt-4">
                    free standard shipping{" "}
                    <span className="text-black">with $45</span>
                  </p>
                  <button className="lg:text-[16px] text-sm border-b border-gray-900 mt-10 font-semibold text-black uppercase">
                    Show Now
                  </button>
                </div>
                <div>
                  <img src={banner1} alt="" />
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="flex flex-col lg:flex-row items-center justify-center">
                <div>
                  <h2 className="lg:text-[20px] font-semibold uppercase">
                    Sale off 30%
                  </h2>
                  <h2 className="lg:text-[60px] font-semibold lg:w-[600px] lg:tracking-[5px]">
                    Lamps & Lighting Great Low Prices
                  </h2>
                  <p className="lg:text-[18px] font-medium text-gray-500 mt-4">
                    free standard shipping{" "}
                    <span className="text-black">with $45</span>
                  </p>
                  <button className="lg:text-[16px] text-sm border-b border-gray-900 mt-10 font-semibold text-black uppercase">
                    Show Now
                  </button>
                </div>
                <div>
                  <img src={banner2} alt="" />
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Home;
