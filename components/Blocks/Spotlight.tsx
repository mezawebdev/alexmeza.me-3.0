import { Swiper, SwiperSlide } from 'swiper/react';

interface Props {
    media: Array<string>,
    index: number,
    close: Function
}

export default function Spotlight(props: Props) {
    return (
        <main className="spotlight">
            <button 
                onClick={() => props.close()}
                className="close-btn">
                <i className="las la-times"></i>
            </button>
            <Swiper
                slidesPerView={1}
                spaceBetween={15}
                initialSlide={props.index}
                centeredSlides={true}>
                {props.media.map((imageSrc, i) => { 
                    return (
                        <SwiperSlide key={i}>
                            <img src={imageSrc} />
                        </SwiperSlide>
                    );
                })}
            </Swiper>
        </main>
    );
};