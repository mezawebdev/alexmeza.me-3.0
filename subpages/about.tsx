import { gsap } from "gsap";
import { ScrollTrigger } from "../node_modules/gsap/ScrollTrigger";
import Header from "../components/Layout/Header";
import Body from "../components/Layout/Body";
import Tech from "../components/Blocks/Tech";
import App from "../app.config";
import AboutBlock from "../components/Blocks/AboutBlock";

gsap.registerPlugin(ScrollTrigger);

export default function About(props) {
    return (
        <div id="page--about">
            <Header align="left">ABOUT</Header>
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
                            <span className="code-is-art">Code is art.</span>
                            My name is <span className="bolded">Alex Meza,</span> I am a full-stack web developer from San Diego, California.
                            I love creating user-friendly web applications and interfaces that bring long-lasting emotional connections with their users.
                            <br /><br />
                            {/* <strong>code is art</strong>. I view each creation as an extension of my creativity. */}
                        </AboutBlock>
                    </div>
                    <div className="row-3">
                        <AboutBlock bottomPadding={true}>
                            <h4>Brands I've Worked With</h4>
                            <div className="brands">
                                <br /><br /><br /><br /><br />
                            </div>
                        </AboutBlock>
                    </div>
                    <div className="row-4">
                        <AboutBlock align="center">
                            <h4>Tools I Frequent</h4>
                            <div className="list">
                                {App.technologies.map((tech, i) => {
                                    return <Tech key={i} image={tech.image} label={tech.label} />
                                })}
                            </div>
                        </AboutBlock>
                    </div>
                </div>
            </Body>
        </div>
    );
}