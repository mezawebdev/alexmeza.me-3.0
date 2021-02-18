import { useRouter } from "next/router";
import { useState } from "react";
import App from "../../../app.config";
import Header from "../../../components/Layout/Header";
import Body from "../../../components/Layout/Body";
import Panel from "../../../components/Layout/SpaceUI/Panel";
import ProjectCard from "../../../components/Blocks/ProjectCard";
import dynamic from 'next/dynamic';

const app: any = App,
    Swiper = dynamic(() => import("react-id-swiper"), { ssr: false });

export default function Projects(props) {
    const router = useRouter(),
        pid: number = parseInt(router.query.pid.toString()),
        params = {
            slidesPerView: 1,
            spaceBetween: -120,
            centeredSlides: true,
            pagination: {
                el: '.swiper-pagination',
                clickable: true
            }
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
                            <div key={i}>
                                <ProjectCard {...project} />
                            </div>
                        );
                    })}
                </Swiper>
            </Body>
        </div>
    )
}