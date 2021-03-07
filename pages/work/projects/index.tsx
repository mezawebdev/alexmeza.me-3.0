import { useRouter } from "next/router";
import { useState } from "react";
import App from "../../../app.config";
import Header from "../../../components/Layout/Header";
import Body from "../../../components/Layout/Body";
import ProjectCard from "../../../components/Blocks/ProjectCard";
import { Swiper, SwiperSlide } from 'swiper/react';
import Head from 'next/head';

const app: any = App;

export default function Projects(props) {
    const router = useRouter(),
        pid: number|any = parseInt(router.query.id.toString());
    
    if (isNaN(pid)) {
        router.push("/work"); 
        return null;
    }

    const [activeSlide, setActiveSlide] = useState(pid <= app.projects.length - 1 ? pid : 0);

    const params = {
        slidesPerView: 1,
        spaceBetween: -120,
        centeredSlides: true,
        pagination: {
            el: '.swiper-pagination',
            clickable: true
        },
        initialSlide: activeSlide,
        onSlideChange(e) { 
            router.push("/work/projects?id=" + e.realIndex, undefined, { shallow: true });
            setActiveSlide(e.realIndex);
        }
    };

    return (
        <div 
            className="subpage"
            id="page--project">
            <Head>
                <link 
                    rel="stylesheet" 
                    type="text/css" 
                    href="/assets/plugins/jquery-file-tree/jQueryFileTree.min.css" />
                {/* <script
                    src="https://code.jquery.com/jquery-3.5.1.min.js"
                    integrity="sha256-9/aliU8dGd2tb6OSsuzixeV4y/faTqgFtohetphbbj0="
                    crossOrigin="anonymous">
                </script>
                <script
                    src="/assets/plugins/jquery-file-tree/jQueryFileTree.min.js"
                    type="text/javascript">
                </script> */}
            </Head>
            <Header 
                animate={true}
                align="left">
                <span className="sp sp-1">P</span>
                <span className="sp sp-2">R</span>
                <span className="sp sp-3">O</span>
                <span className="sp sp-4">J</span>
                <span className="sp sp-5">E</span>
                <span className="sp sp-6">C</span>
                <span className="sp sp-7">T</span>
                <span className="sp sp-7">S</span>
            </Header>
            <Body>
                <Swiper {...params}>
                    {app.projects.map((project, i) => { 
                        return (
                            <SwiperSlide key={i}>
                                <ProjectCard 
                                    active={activeSlide === i}
                                    {...project} />
                            </SwiperSlide>
                        );
                    })}
                </Swiper>
            </Body>
        </div>
    )
}