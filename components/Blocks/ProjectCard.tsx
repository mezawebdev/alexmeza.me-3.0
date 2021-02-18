import Panel from "../Layout/SpaceUI/Panel";
import dynamic from 'next/dynamic';

const Swiper = dynamic(() => import("react-id-swiper"), { ssr: false });

export default function ProjectCard(props) {
    const sliderParams = {
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
                <div className="title">
                    {props.title}
                </div>  
                <hr />
                <div className="images">
                    <Swiper {...sliderParams}>
                        {props.images.map((image, i) => { 
                            return (
                                <div key={i}>
                                    <img src={image} />
                                </div>
                            );
                        })}
                    </Swiper>
                </div>
                <div className="general-info">
                    {props.description}
                </div>
            </Panel>
        </div>
    );
}