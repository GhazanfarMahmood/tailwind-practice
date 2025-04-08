"use client";

import Image from "next/image";
import {Swiper, SwiperSlide} from "swiper/react";
import {Navigation, Autoplay} from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import 'swiper/css/scrollbar';

export default function Advertisement (){
    
    return (
        <section className="bg-[rgba(45,168,132,0.3)] pt-[50px]">
            <div className="container">
                <div className="flex flex-col items-center justify-center">
                    <Image src={"/images/icons/instagram.svg"} alt="instagram-icon" width={48} height={48} className="mb-[15px]" />
                    <h2 className="text-4xl font-bold leading-[1.3em] mb-2.5">Follow @antiques</h2>
                    <p className="pb-10 text-[15px] text-center">Leo nulla cras augue eros, diam vivamus et lectus volutpat at facilisi tortor porta.</p>
                </div>
            </div>
            <Image src={"/images/ad-img.jpg"} alt="products-image" width={1920} height={384} className="w-[1920px] h-[384px] object-cover mx-auto" />
            {/* Swiper slider will come here */}
            <div className="container py-[70px]">
                <Swiper
                    modules={[Autoplay]}
                    slidesPerView={1}
                    spaceBetween={20}
                    navigation={false}
                    autoplay={{
                        delay: 3000,
                        disableOnInteraction: false,  
                    }}
                    pagination={{
                        clickable: true,
                    }}
                    loop={true}
                    arrow
                    breakpoints={{
                        576 : {
                            slidesPerView : 1,
                        },
                        768 : {
                            slidesPerView : 2, 
                        },
                        991 : {
                            slidesPerView : 3,
                        },
                        1200: {
                            spaceBetween : 40,
                            slidesPerView : 4,
                        }
                    }}
                >
                    <SwiperSlide>
                        <div className="bg-white p-[30px]">
                            <Image src={"/images/icons/truck.svg"} alt="truck-icon" width={45} height={45} className="w-[45px] h-[45px] block mb-[15px] filter-(--c-filter)" />
                            <span className="block text-2xl font-secondary font-bold leading-[1.2em] mb-2.5 text-black">Free Shipping</span>
                            <p className="text-[15px] leading-[1.4em]">Justo vestibulum risus impe rdietsconse sectetur.</p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="bg-white p-[30px]">
                            <Image src={"/images/icons/recycle.svg"} alt="recycle-icon" width={45} height={45} className="w-[45px] h-[45px] block mb-[15px] filter-(--c-filter)" />
                            <span className="block text-2xl font-secondary font-bold leading-[1.2em] mb-2.5 text-black">30 Days Return</span>
                            <p className="text-[15px] leading-[1.4em]">Justo vestibulum risus impe rdietsconse sectetur.</p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="bg-white p-[30px]">
                            <Image src={"/images/icons/percent.svg"} alt="precent-icon" width={45} height={45} className="w-[45px] h-[45px] block mb-[15px] filter-(--c-filter)" />
                            <span className="block text-2xl font-secondary font-bold leading-[1.2em] mb-2.5 text-black">Best Offers</span>
                            <p className="text-[15px] leading-[1.4em]">Justo vestibulum risus impe rdietsconse sectetur.</p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="bg-white p-[30px]">
                            <Image src={"/images/icons/lock.svg"} alt="lock-icon" width={45} height={45} className="w-[45px] h-[45px] block mb-[15px] filter-(--c-filter)" />
                            <span className="block text-2xl font-secondary font-bold leading-[1.2em] mb-2.5 text-black">Secure Payment</span>
                            <p className="text-[15px] leading-[1.4em]">Justo vestibulum risus impe rdietsconse sectetur.</p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="bg-white p-[30px]">
                            <Image src={"/images/icons/truck.svg"} alt="truck-icon" width={52} height={41} className="w-[45px] h-[45px] block mb-[15px] filter-(--c-filter)" />
                            <span className="block text-2xl font-secondary font-bold leading-[1.2em] mb-2.5 text-black">Free Shipping</span>
                            <p className="text-[15px] leading-[1.4em]">Justo vestibulum risus impe rdietsconse sectetur.</p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="bg-white p-[30px]">
                            <Image src={"/images/icons/recycle.svg"} alt="recycle-icon" width={45} height={45} className="w-[45px] h-[45px] block mb-[15px] filter-(--c-filter)" />
                            <span className="block text-2xl font-secondary font-bold leading-[1.2em] mb-2.5 text-black">30 Days Return</span>
                            <p className="text-[15px] leading-[1.4em]">Justo vestibulum risus impe rdietsconse sectetur.</p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="bg-white p-[30px]">
                            <Image src={"/images/icons/percent.svg"} alt="precent-icon" width={45} height={45} className="w-[45px] h-[45px] block mb-[15px] filter-(--c-filter)" />
                            <span className="block text-2xl font-secondary font-bold leading-[1.2em] mb-2.5 text-black">Best Offers</span>
                            <p className="text-[15px] leading-[1.4em]">Justo vestibulum risus impe rdietsconse sectetur.</p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="bg-white p-[30px]">
                            <Image src={"/images/icons/lock.svg"} alt="lock-icon" width={45} height={45} className="w-[45px] h-[45px] block mb-[15px] filter-(--c-filter)" />
                            <span className="block text-2xl font-secondary font-bold leading-[1.2em] mb-2.5 text-black">Secure Payment</span>
                            <p className="text-[15px] leading-[1.4em]">Justo vestibulum risus impe rdietsconse sectetur.</p>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
        </section>
    )
}