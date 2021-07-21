import { Swiper, SwiperSlide } from 'swiper/react';

interface Props {
    media: Array<string>,
    index: number,
    close: Function
}

export default function Spotlight(props: Props) {
    const helpers = {
        getMediaAsset(assetObj) {
            switch (assetObj.type) {
                case "image":
                return (<img src={assetObj.src} />);
                case "video":
                    if (assetObj.isTransparent) {
                        return (
                            <video autoPlay loop muted playsInline>
                                <source src={assetObj.srcMov} type="video/quicktime" />
                                <source src={assetObj.srcWebM} type="video/webm" />
                            </video>
                        );
                    }
                break;
            }
        }
    };

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