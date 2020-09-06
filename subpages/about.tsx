import { gsap } from "gsap";
import { ScrollTrigger } from "../node_modules/gsap/ScrollTrigger";
import Header from "../components/Layout/Header";
import Body from "../components/Layout/Body";
import Tech from "../components/Blocks/Tech";
import App from "../app.config";

gsap.registerPlugin(ScrollTrigger);

export default function About(props) {
    return (
        <div id="page--about">
            <Header>ABOUT</Header>
            <Body>
                <div className="ct">
                    <div>
                        <img
                            className="box-shadow" 
                            src="/assets/images/about-me.jpg" />
                        <div className="about-me-wrapper">
                            <div className="about-me box-shadow">
                                <span className="code-is-art">Code is art.</span>
                                My name is <span className="bolded">Alex Meza,</span> I am a full-stack web developer from San Diego, California.
                                I love creating user-friendly web applications and interfaces that bring long-lasting emotional connections with their users.
                                <div className="technologies">
                                    <span className="bolded">Tools I Frequent</span>
                                    <div className="list">
                                        {App.technologies.map((tech, i) => {
                                            return <Tech key={i} image={tech.image} label={tech.label} />
                                        })}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Body>
        </div>
    );
}