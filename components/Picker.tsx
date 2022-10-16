import React, { useRef, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCube } from 'swiper';

import styles from '@/styles/Picker.module.css';

import 'swiper/css';
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-cube";

const Picker: React.FC<pickerProps> = (props) => {

    const { firstList, secondList, onPickerEnd, onPickerChange } = props;

    return (
        <div
            className='h-screen w-screen flex flex-col justify-center items-center'
        >
            <div
                className='text-2xl text-center pb-6'
            >
                Swipe away your least favorite game between the two!
            </div>
            <div
                className='border rounded p-8 flex justify-between items-center'
            >
                <div
                    className='w-96 h-96 bg-red-500'
                >
                    <Swiper
                        effect={"cube"}
                        grabCursor={true}
                        cubeEffect={{
                            shadow: true,
                            slideShadows: true,
                            shadowOffset: 20,
                            shadowScale: 0.94,
                        }}
                        onReachEnd={(e) => {
                            onPickerEnd(1);

                        }}
                        onSlideChange={(e) => {
                            onPickerChange(1, e.activeIndex);
                        }}
                        pagination={false}
                        modules={[EffectCube]}
                        className="firstSwiper"
                    >
                        {
                            firstList.map((el, i) => (
                                <SwiperSlide
                                    key={el.id}
                                    style={{
                                        background: `rgba(135, 0, 0, .4) url(${el.background_image}) center/cover no-repeat fixed`,
                                        width: '50vw',
                                        height: '50vh',
                                        position: 'relative'
                                    }}
                                >
                                    {
                                        ({ isActive }) => (
                                            <div
                                                className={isActive ? styles.activeslide : 'inactiveslide'}
                                            >
                                                {el.name}
                                            </div>
                                        )
                                    }
                                </SwiperSlide>
                            ))
                        }
                    </Swiper>
                </div>
                <div
                    className='m-8'
                >
                    <div>
                        VS
                    </div>
                </div>
                <div
                    className='w-96 h-96 bg-red-500'
                >
                    <Swiper
                        effect={"cube"}
                        grabCursor={true}
                        cubeEffect={{
                            shadow: true,
                            slideShadows: true,
                            shadowOffset: 20,
                            shadowScale: 0.94,
                        }}
                        onReachEnd={(e) => {
                            onPickerEnd(2);
                        }}
                        onSlideChange={(e) => {
                            onPickerChange(2, e.activeIndex);
                        }}
                        pagination={false}
                        modules={[EffectCube]}
                        className="secondSwiper"
                    >
                        {
                            secondList.map((el, i) => (
                                <SwiperSlide
                                    key={el.id}
                                    style={{
                                        background: `rgba(135, 0, 0, .4) url(${el.background_image}) center/cover no-repeat fixed`,
                                        width: '50vw',
                                        height: '50vh',
                                    }}
                                >
                                    {
                                        ({ isActive }) => (
                                            <div
                                                className={isActive ? styles.activeslide : 'inactiveslide'}
                                            >
                                                {el.name}
                                            </div>
                                        )
                                    }
                                </SwiperSlide>
                            ))
                        }
                    </Swiper>
                </div>
            </div>
        </div>
    )
}

export default Picker