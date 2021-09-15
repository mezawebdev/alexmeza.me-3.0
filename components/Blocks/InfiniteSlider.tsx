import { useEffect, useRef } from "react";

const uuid = Math.round(Math.random() * 1000000);

export default function InfiniteSlider(props) {
    const slick = useRef(null);

    useEffect(() => {
        // @ts-ignore
        $(slick.current).slick({
            infinite: true,
            speed: 300,
            arrows: false,
            slidesToShow: 1,
            centerMode: true,
            autoplay: true,
            // variableWidth: true,
            autoplaySpeed: 1500
        });
    }, []);

    return (
        <div className="infinite-slider">
            <div 
                ref={slick}
                className="slick-dawg">
                {props.slides.map((slide, i) => {
                    return (
                        <div 
                            key={i}
                            className="slide">
                            <img src={slide.image} />
                        </div>
                    );
                })}
            </div>
        </div>
    );
}