import { Swiper, SwiperSlide } from 'swiper/react';
import { useEffect } from "react";

interface Props {
    media: Array<string>;
    index: number;
    close: Function;
}

export default function Spotlight(props: Props) {
    const helpers = {
            getMediaAsset(assetObj) {
                switch (assetObj.type) {
                    case "image":
                        return (<img src={assetObj.src} />);
                    case "video":
                        return (
                            <video className={assetObj.vertical ? 'vertical' : ''} controls>
                                <source src={assetObj.src} type={assetObj.mimeType} />
                            </video>
                        );
                }
            }
        },
        handlers = {
            onClose() {
                document.body.style.overflow = "scroll";
                props.close();
            }
        };

    useEffect(() => {
        document.body.style.overflow = "hidden";
    }, []);

    return (
        <main className="spotlight">
            <button 
                onClick={() => handlers.onClose()}
                className="close-btn">
                <i className="las la-times"></i>
            </button>
            <Swiper
                slidesPerView={1}
                spaceBetween={15}
                initialSlide={props.index}
                centeredSlides={true}>
                {props.media.map((mediaAsset, i) => { 
                    return (
                        <SwiperSlide key={i}>
                            {helpers.getMediaAsset(mediaAsset)}
                        </SwiperSlide>
                    );
                })}
            </Swiper>
        </main>
    );
};