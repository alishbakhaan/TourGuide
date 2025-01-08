'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import '@/app/globals.css';
import { Navigation } from 'swiper/modules';
import SliderCard from './SliderCard';

export default function Slider() {
    return (
        <>
            <Swiper
                slidesPerView={5}
                spaceBetween={30}
                // navigation={true} 
                // modules={[Navigation]}
                className="mySwiper"
                breakpoints={{
                    320: {
                        slidesPerView: 1,
                        spaceBetween: 10,
                    },
                    640: {
                        slidesPerView: 2,
                        spaceBetween: 20,
                    },
                    768: {
                        slidesPerView: 3,
                        spaceBetween: 30,
                    },
                    1024: {
                        slidesPerView: 4,
                        spaceBetween: 30,
                    },
                    1280: {
                        slidesPerView: 5,
                        spaceBetween: 30,
                    },
                }}
            >
                <SwiperSlide>
                    <SliderCard
                        image={'/slidercard (1).png'}
                        head={'Westminster to Greenwich River Thames'}
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <SliderCard
                        image={'/slidercard (2).png'}
                        head={'Vintage Double Decker Bus Tour & Thames'}
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <SliderCard
                        image={'/slidercard (3).png'}
                        head={'Magic of London Tour with Afternoon Tea at'}
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <SliderCard
                        image={'/slidercard (4).png'}
                        head={'Magic of London Tour with Afternoon Tea at'}
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <SliderCard
                        image={'/slidercard (1).png'}
                        head={'Westminster to Greenwich River Thames'}
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <SliderCard
                        image={'/slidercard (1).png'}
                        head={'Vintage Double Decker Bus Tour & Thames'}
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <SliderCard
                        image={'/slidercard (2).png'}
                        head={'Magic of London Tour with Afternoon Tea at'}
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <SliderCard
                        image={'/slidercard (3).png'}
                        head={'Westminster to Greenwich River Thames'}
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <SliderCard
                        image={'/slidercard (4).png'}
                        head={'Westminster to Greenwich River Thames'}
                    />
                </SwiperSlide>
            </Swiper>
        </>
    );
}
