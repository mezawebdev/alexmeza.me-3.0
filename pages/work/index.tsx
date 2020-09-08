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
    const personalProjects = useRef(null);
    const experimentalProjects = useRef(null);

    useEffect(() => {
        let tl = gsap.timeline(),
            tl2 = gsap.timeline({
                clearProps: "all"
            }),
            tl3 = gsap.timeline(),
            tl4 = gsap.timeline({
                clearProps: "all"
            }),
            tl5 = gsap.timeline(),
            positionOffset = 1.1,
            parallaxSpeed = -50;

        tl.to(".sp-1", { opacity: 1, y: 0, duration: 0.5 });
        tl.to(".sp-2", { opacity: 1, y: 0, duration: 0.5 }, 0.1);
        tl.to(".sp-3", { opacity: 1, y: 0, duration: 0.5 }, 0.2);
        tl.to(".sp-4", { opacity: 1, y: 0, duration: 0.5 }, 0.3);
        tl.to(".sp-5", { opacity: 1, y: 0, duration: 0.5 }, 0.8);

        for (let i = 0; i < professionalProjects.current.children.length; i++) {
            let current = professionalProjects.current.children[i].children[0];
            
            tl2.to(current, {
                opacity: 0.99,
                duration: 1,
                x: 0,
                y: 0,
                scale: 1,
                scrollTrigger: {
                    trigger: current,
                    scrub: 1,
                    // once: true,
                    start: "0% 90%",
                    end: "50% 100%"
                },
                onComplete: () => {
                    // tl3.to(current, {
                    //     duration: 0.25,
                    //     opacity: 1,
                    //     y: parallaxSpeed * (i + 1),
                    //     scrollTrigger: {
                    //         trigger: ".professional",
                    //         scrub: 1,
                    //         start: "top 50%",
                    //         end: "100% 100%"
                    //     }
                    // });
                }
            }, positionOffset + (0.1 * i));
        }

        for (let i = 0; i < personalProjects.current.children.length; i++) {
            let current = personalProjects.current.children[i].children[0];
            
            tl4.to(current, {
                opacity: 0.99,
                duration: 1,
                x: 0,
                y: 0,
                scale: 1,
                scrollTrigger: {
                    trigger: current,
                    scrub: 1,
                    // once: true,
                    start: "0% 80%",
                    end: "50% 100%"
                },
                onComplete: () => {
                    // tl5.to(current, {
                    //     duration: 0.25,
                    //     opacity: 1,
                    //     y: parallaxSpeed * (i + 1),
                    //     scrollTrigger: {
                    //         trigger: "#page--work",
                    //         scrub: 1,
                    //         start: "50% 0%",
                    //         end: "100% 100%"
                    //     }
                    // });
                }
            }, positionOffset + (0.1 * i));
        }

        for (let i = 0; i < experimentalProjects.current.children.length; i++) {
            let current = experimentalProjects.current.children[i].children[0];
            
            tl4.to(current, {
                opacity: 0.99,
                duration: 1,
                x: 0,
                y: 0,
                scale: 1,
                scrollTrigger: {
                    trigger: current,
                    scrub: 1,
                    // once: true,
                    start: "0% 90%",
                    end: "50% 100%"
                },
                onComplete: () => {
                    // tl5.to(current, {
                    //     duration: 0.25,
                    //     opacity: 1,
                    //     y: parallaxSpeed * (i + 1),
                    //     scrollTrigger: {
                    //         trigger: "#page--work",
                    //         scrub: 1,
                    //         start: "50% 0%",
                    //         end: "100% 100%"
                    //     }
                    // });
                }
            }, positionOffset + (0.1 * i));
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
                        <h4 className="sp-5">PROFESSIONAL</h4>
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
                        <div 
                            ref={personalProjects}
                            className="personal project-list">
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
                        <div 
                            ref={experimentalProjects}
                            className="experimental project-list">
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