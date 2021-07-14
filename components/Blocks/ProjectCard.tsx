import Panel from "../Layout/SpaceUI/Panel";
import App from "../../app.config";
import { Swiper, SwiperSlide } from 'swiper/react';
import FileBrowser from "./FileBrowser";

export default function ProjectCard(props) {
    const app: any = App,
        sliderParams = {
            slidesPerView: 1,
            spaceBetween: 15,
            centeredSlides: true,
            navigation: {
                nextEl: ".swiper-next",
                prevEl: ".swiper-prev"
            }
        };

    return (
        <div className={`project-card${ props.active ? " active" : "" }`}>
            <Panel>
                {props.active ? (
                    <div className="loaded">
                        <div className="title">{props.title}</div>  
                        <hr />
                        <div className="images">
                            <Swiper {...sliderParams}>
                                {props.images.map((image, i) => { 
                                    return (
                                        <SwiperSlide key={i}>
                                            <button onClick={() => props.handlers.openSpotlight(props.images, i)}>
                                                <img src={image} />
                                            </button>
                                        </SwiperSlide>
                                    );
                                })}
                            </Swiper>
                            <div className="swiper-navigation">
                                <button className="swiper-prev">
                                    <i className="las la-angle-left"></i>
                                </button>
                                <button className="swiper-next">
                                    <i className="las la-angle-right"></i>
                                </button>
                            </div>
                        </div>
                        <div className="general-info">{props.description}</div>
                        <div className="options">
                            {props.appUrl.length > 0 ? <a target="_blank" href={props.appUrl}>
                                <i className="las la-external-link-alt"></i>&nbsp;Go To App
                            </a> : null}
                            {props.githubUrl.length > 0 ? <a target="_blank" href={props.githubUrl}>
                                <i className="lab la-github"></i>&nbsp;See On Github
                            </a> : null}
                        </div>
                        <div className="technology section">
                            <p className="headline">Technologies Used</p>
                            <div className="grid">
                                {props.technologies.map((tech, i) => {
                                    const techData = app.technologies.find(t => { return t.label === tech });
                                    return (
                                        <div
                                            key={i} 
                                            className="tech">
                                            <img src={techData.image} />
                                            <span>{tech}</span>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                        {props.codebaseSrc.length > 0 ? (
                            <div className="section source-code">
                                <p className="headline">Source Code</p>
                                <div className="code">
                                    {props.active ? <FileBrowser handlers={props.handlers} dir={props.codebaseSrc} /> : null}
                                </div>
                            </div>
                        ) : (
                            <div className="section source-code">
                                <p>No Source Code To Display</p>
                            </div>
                        )}
                    </div>
                ) : null}
            </Panel>
        </div>
    );
}