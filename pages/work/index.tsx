import Header from "../../components/Layout/Header";
import Body from "../../components/Layout/Body";
import WorkProjects from "../../components/Blocks/WorkProjects";
import WorkProject from "../../components/Blocks/WorkProject";
import App from "../../app.config";
import { useEffect, useRef } from "react";
import { gsap } from "gsap/dist/gsap";
import { ScrollTrigger } from "../../node_modules/gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Work() {
    const professionalProjects = useRef(null);

    useEffect(() => {
        let tl = gsap.timeline(),
            tl2 = gsap.timeline();

        tl.to(".sp-1", { opacity: 1, y: 0, duration: 0.5 });
        tl.to(".sp-2", { opacity: 1, y: 0, duration: 0.5 }, 0.1);
        tl.to(".sp-3", { opacity: 1, y: 0, duration: 0.5 }, 0.2);
        tl.to(".sp-4", { opacity: 1, y: 0, duration: 0.5 }, 0.3);

        console.log(professionalProjects.current.children);

        for (let i = 0; i < professionalProjects.current.children.length; i++) {
            let current = professionalProjects.current.children[i].children[0],
                isOdd = i % 2 === 0;
            
            tl2.to(current, {
                opacity: 1,
                duration: 1,
                x: 0,
                y: 0,
                scrollTrigger: {
                    trigger: "#page--home",
                    markers: true,
                    scrub: 1,
                    start: "top top",
                    end: "bottom bottom"
                }
            });
        }
    }, []);

    return (
        <div 
            className="subpage"
            id="page--work">
            <Header align="left">
                <span className="sp sp-1">W</span>
                <span className="sp sp-2">O</span>
                <span className="sp sp-3">R</span>
                <span className="sp sp-4">K</span>
            </Header>
            <Body>
                <div className="ct">
                    <WorkProjects>
                        <h4>PROFESSIONAL</h4>
                        <div 
                            ref={professionalProjects}
                            className="professional project-list">
                            {App.projects.map((project, i) => {
                                return (
                                    project.type === "professional" ?
                                        <div 
                                            key={i}
                                            className="row">
                                            <WorkProject 
                                                thumbnail={project.thumbnail} 
                                                key={i} />
                                        </div> : null
                                );
                            })}
                        </div>
                        <h4>PERSONAL</h4>
                        <div className="personal project-list">
                            {App.projects.map((project, i) => {
                                return (
                                    project.type === "personal" ?
                                        <div 
                                            key={i}
                                            className="row">
                                            <WorkProject 
                                                thumbnail={project.thumbnail} 
                                                key={i} />
                                        </div> : null
                                );
                            })}
                        </div>
                        <h4>EXPERIMENTAL</h4>
                        <div className="experimental project-list">
                            {App.projects.map((project, i) => {
                                return (
                                    project.type === "experimental" ?
                                        <div 
                                            key={i}
                                            className="row">
                                            <WorkProject 
                                                thumbnail={project.thumbnail} 
                                                key={i} />
                                        </div> : null
                                );
                            })}
                        </div>
                    </WorkProjects>
                </div>
            </Body>
        </div>
    );
}