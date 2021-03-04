import Panel from "../Layout/SpaceUI/Panel";
import App from "../../app.config";
import { Swiper, SwiperSlide } from 'swiper/react';

export default function ProjectCard(props) {
    const app: any = App,
        sliderParams = {
        slidesPerView: 1,
        spaceBetween: 15,
        centeredSlides: true,
        pagination: {
            el: '.swiper-pagination',
            clickable: true
        }
    };

    return (
        <div className="project-card">
            <Panel>
                <div className="title">{props.title}</div>  
                <hr />
                <div className="images">
                    <Swiper {...sliderParams}>
                        {props.images.map((image, i) => { 
                            return (
                                <SwiperSlide key={i}>
                                    <img src={image} />
                                </SwiperSlide>
                            );
                        })}
                    </Swiper>
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
            </Panel>
        </div>
    );
}