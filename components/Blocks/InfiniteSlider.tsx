import { useEffect, useRef } from 'react';

export default function InfiniteSlider({
  slides,
}: {
  slides: { image: string }[];
}) {
  const slick = useRef(null);

  useEffect(() => {
    $(slick.current).slick({
      infinite: true,
      speed: 300,
      arrows: false,
      slidesToShow: 1,
      centerMode: true,
      autoplay: true,
      autoplaySpeed: 1500,
    });
  }, []);

  return (
    <div className="infinite-slider">
      <div ref={slick} className="slick-dawg">
        {slides.map((slide, i) => {
          return (
            <div key={i} className="slide">
              <img src={slide.image} />
            </div>
          );
        })}
      </div>
    </div>
  );
}
