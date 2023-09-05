import Link from 'next/link';
import App from 'app.config';
import Header from 'components/Layout/Header';
import Body from 'components/Layout/Body';
import ProjectCard from 'components/Blocks/ProjectCard';
import SwiperCore from 'swiper';
import Spotlight from 'components/Blocks/Spotlight';
import { Swiper, SwiperSlide } from 'swiper/react';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { Navigation } from 'swiper';

SwiperCore.use([Navigation]);

const app = App;

export default function Projects() {
  const router = useRouter();
  const pid: number = parseInt(router.query.id.toString());

  if (isNaN(pid)) {
    router.push('/work');
    return null;
  }

  const [activeSlide, setActiveSlide] = useState(
    pid <= app.projects.length - 1 ? pid : 0
  );
  const [showSpotlight, setShowSpotlight] = useState(false);
  const [spotlightData, setSpotlightData] = useState({ images: [], index: 0 });
  const params = {
    spaceBetween: 100,
    slidesPerView: 1,
    centeredSlides: true,
    centerInsufficientSlides: false,
    allowTouchMove: false,
    breakpoints: {
      640: {
        allowTouchMove: true,
      },
      800: {
        spaceBetween: 200,
      },
    },
    navigation: {
      nextEl: '.nav-next',
      prevEl: '.nav-prev',
    },
    initialSlide: activeSlide,
    onSlideChange(e) {
      router.push('/work/projects?id=' + e.realIndex, undefined, {
        shallow: true,
      });
      setActiveSlide(e.realIndex);
    },
    onSlideChangeTransitionStart() {
      const doc = document.documentElement,
        top = (window.pageYOffset || doc.scrollTop) - (doc.clientTop || 0);

      if (window.innerWidth < 962 && top > 275)
        window.scrollTo({
          top: 0,
          left: 0,
          behavior: 'smooth',
        });
    },
    onResize(e) {
      e.updateSize();
      e.update();
    },
  };

  function openSpotlight(images: Array<string>, index: number): void {
    setSpotlightData({ images, index });
    setShowSpotlight(true);
  }

  function closeSpotlight(): void {
    setShowSpotlight(false);
    setSpotlightData({ images: [], index: 0 });
  }

  return (
    <div className="subpage" id="page--project">
      {showSpotlight ? (
        <Spotlight
          media={spotlightData.images}
          index={spotlightData.index}
          close={closeSpotlight}
        />
      ) : null}
      <Header animate={true} align="left">
        <span className="sp sp-1">P</span>
        <span className="sp sp-2">R</span>
        <span className="sp sp-3">O</span>
        <span className="sp sp-4">J</span>
        <span className="sp sp-5">E</span>
        <span className="sp sp-6">C</span>
        <span className="sp sp-7">T</span>
        <span className="sp sp-7">S</span>
      </Header>
      <div className="back-link">
        <div className="ct-2">
          <Link href={`/work#project-${pid === 0 ? 0 : pid - 1}`}>
            <a>
              <i className="las la-arrow-left"></i>&nbsp;Back to work list
            </a>
          </Link>
        </div>
      </div>
      <Body>
        <Swiper {...params}>
          {app.projects.map((project, i) => {
            return (
              <SwiperSlide key={i}>
                <ProjectCard
                  handlers={{
                    openSpotlight,
                    closeSpotlight,
                  }}
                  active={activeSlide === i}
                  {...project}
                />
              </SwiperSlide>
            );
          })}
        </Swiper>
        <div className="navigation">
          <button className="nav-prev">
            <i className="las la-angle-left"></i>
          </button>
          <button className="nav-next">
            <i className="las la-angle-right"></i>
          </button>
        </div>
      </Body>
    </div>
  );
}
