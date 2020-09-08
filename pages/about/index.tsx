import { gsap } from "gsap/dist/gsap";
import { ScrollTrigger } from "../../node_modules/gsap/dist/ScrollTrigger";
import Header from "../../components/Layout/Header";
import Body from "../../components/Layout/Body";
import Tech from "../../components/Blocks/Tech";
import App from "../../app.config";
import AboutBlock from "../../components/Blocks/AboutBlock";
import InfiniteSlider from "../../components/Blocks/InfiniteSlider";
import { useEffect } from "react";

gsap.registerPlugin(ScrollTrigger);

export default function About(props) {
    useEffect(() => {
        let tl = gsap.timeline(),
            tl2 = gsap.timeline();

        tl.to(".sp-1", { opacity: 1, y: 0, duration: 0.5 });
        tl.to(".sp-2", { opacity: 1, y: 0, duration: 0.5 }, 0.1);
        tl.to(".sp-3", { opacity: 1, y: 0, duration: 0.5 }, 0.2);
        tl.to(".sp-4", { opacity: 1, y: 0, duration: 0.5 }, 0.3);
        tl.to(".sp-5", { opacity: 1, y: 0, duration: 0.5 }, 0.4);
        tl2.to(".row-1", { opacity: 1, x: 0, y: 0, scale: 1, duration: 0.5 }, 1);
        tl2.to(".row-2", { opacity: 1, x: 0, y: 0, scale: 1, duration: 0.5 }, 1.5);
    }, []);

    return (
        <div 
            className="subpage"
            id="page--about">
            <Header align="left">
                <span className="sp-1 sp">A</span>
                <span className="sp-2 sp">B</span>
                <span className="sp-3 sp">O</span>
                <span className="sp-4 sp">U</span>
                <span className="sp-5 sp">T</span>
            </Header>
            <Body>
                <div className="ct">
                    <div className="row-1">
                        <img
                            className="global-border-radius box-shadow profile" 
                            src="/assets/images/about-me.jpg" />
                    </div>
                    <div className="row-2">
                        <AboutBlock 
                            align="right" 
                            bottomPadding={true}>
                            <div className="section">
                                My name is <span className="font-family-medium">Alex Meza,</span> I am a full-stack web developer from San Diego, California.
                                I love creating user-friendly web applications and interfaces that bring long-lasting emotional connections with their users.
                            </div>
                            <div className="section">
                                <h4 className="font-family-regular">Brands I've Worked With</h4>
                                <div className="brands">
                                    <InfiniteSlider
                                        slides={App.brands} />
                                </div>
                            </div>
                            <div className="section">
                                <h4 className="font-family-regular">Tools I Frequent</h4>
                                <div className="list">
                                    {App.technologies.map((tech, i) => {
                                        return <Tech key={i} image={tech.image} label={tech.label} />
                                    })}
                                </div>
                            </div>
                        </AboutBlock>
                    </div>
                </div>
            </Body>
        </div>
    );
}