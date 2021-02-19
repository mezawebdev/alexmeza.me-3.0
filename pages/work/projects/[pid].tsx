import { useRouter } from "next/router";
import App from "../../../app.config";
import Header from "../../../components/Layout/Header";
import Body from "../../../components/Layout/Body";
import ProjectCard from "../../../components/Blocks/ProjectCard";
import { Swiper, SwiperSlide } from 'swiper/react';

const app: any = App;

export default function Projects(props) {
    const router = useRouter(),
        pid: number|any = parseInt(router.query.pid.toString());
    
    if (isNaN(pid)) {
        router.push("/work"); 
        return null;
    }

    const params = {
            slidesPerView: 1,
            spaceBetween: -120,
            centeredSlides: true,
            pagination: {
                el: '.swiper-pagination',
                clickable: true
            },
            initialSlide: pid - 1
        };

    return (
        <div 
            className="subpage"
            id="page--project">
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
                                <ProjectCard {...project} />
                            </SwiperSlide>
                        );
                    })}
                </Swiper>
            </Body>
        </div>
    )
}