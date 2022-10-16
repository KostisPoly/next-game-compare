import React, { useState } from 'react'
import { Swiper, SwiperSlide, } from 'swiper/react';
import { EffectCoverflow, Pagination, Navigation } from 'swiper';

import styles from '@/styles/Sliders.module.css';

import 'swiper/css';
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-coverflow";

const Sliders: React.FC<sliderProps> = (props) => {

    const {platforms, genres} = props;
    const [platformSwiper, setPlatformSwiper] = useState<number>(platforms[0].id);
    const [genreSwiper, setGenreSwiper] = useState<number>(genres[0].id);
    
    return (
        <div>
            <Swiper
                onSlideChange={(e) => setPlatformSwiper(platforms[e.activeIndex].id)}
                effect={'coverflow'}
                grabCursor={true}
                centeredSlides={true}
                slidesPerView={'auto'}
                coverflowEffect={{
                    rotate: 50,
                    stretch: 0,
                    depth: 100,
                    modifier: 1,
                    slideShadows: true,
                }}
                modules={[EffectCoverflow, Pagination, Navigation]}
                navigation={true}
                className={styles.platform}
                pagination={{
                    type: 'progressbar',
                }}
            >
                {platforms.map((el, i) => {
                    return <SwiperSlide
                        key={el.id}
                        style={{
                            background: `rgba(135, 0, 0, .4) url(${el.image_background}) center/cover no-repeat fixed`,
                            width: '50vw',
                            height: '50vh',
                            opacity: '0.9'
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

                    </SwiperSlide>;
                })}
            </Swiper>
            <div className={styles.container}>
                <button
                    className={styles.selectbutton}
                    onClick={(e) => {
                        props.clickHandler(e, [platformSwiper, genreSwiper]);
                    }}
                >
                    Pick Platform And Genre
                </button>
            </div>
            
            <Swiper
                onSlideChange={(e) => setGenreSwiper(genres[e.activeIndex].id)}
                effect={'coverflow'}
                grabCursor={true}
                centeredSlides={true}
                slidesPerView={'auto'}
                modules={[EffectCoverflow, Pagination, Navigation]}
                navigation={true}
                className={styles.genre}
                coverflowEffect={{
                    rotate: 50,
                    stretch: 0,
                    depth: 100,
                    modifier: 1,
                    slideShadows: true,
                }}
                pagination={{
                    type: 'progressbar',
                }}
            >
                {genres.map((el, i) => {
                    return <SwiperSlide
                        key={i}
                        style={{
                            background: `#870000 url(${el.image_background}) center/cover no-repeat fixed`,
                            width: '50vw',
                            height: '50vh'
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
                    </SwiperSlide>;
                })}
            </Swiper>
        </div>

    )
}

export default Sliders