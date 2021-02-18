import { useState, useEffect, useRef } from "react";

export default function LoadingScreen(props) {
    const [containerWidth, setContainerWidth] = useState(0),
        [containerHeight, setContainerHeight] = useState(0),
        [stars, setStars] = useState([]),
        [width, setWidth] = useState(250),
        [height, setHeight] = useState(250),
        starFadeInOffset = 0.01,
        canvas = useRef();

    let onResizeEvent;

    return (
        <div
            className={`${ props.fadeout ? "fadeout" : "" }`} 
            id="loading-screen">
            <div className="bg bg-1"></div>
            <div className="bg bg-2"></div>
            {/* <div
                style={{ width: containerWidth, height: containerHeight }} 
                className="stars">
                {stars.map((star, i) => {
                    return (
                        <span 
                            style={{ 
                                top: star.x + "px", 
                                left: star.y + "px", 
                                width: (star.r * 2) + "px", 
                                height: (star.r * 2) + "px",
                                animationDelay: (starFadeInOffset * i) + "s"
                            }}
                            className="star" 
                            key={i}>
                        </span>
                    );
                })}
            </div> */}
            <div className="content">
                <div className="text">
                    WORKING
                </div>
                <div className="loading-bar">
                    <div>
                        <span></span>
                    </div>
                </div>
                {/* <svg
                    xmlns="http://www.w3.org/2000/svg" 
                    viewBox={`0 0 ${ containerWidth } ${ containerHeight }`}
                    height={containerHeight}
                    width={containerWidth}
                    preserveAspectRatio="none">
                    <filter 
                        id="shadow"
                        x="-50%" 
                        y="-50%" 
                        width="300%" 
                        height="300%">
                        <feDropShadow 
                            dx="0" 
                            dy="0" 
                            stdDeviation="5" 
                            floodColor="#ffffff" 
                            floodOpacity="0.5" />
                    </filter>
                    <circle 
                        style={{filter: 'url(#shadow)'}}
                        cx="50%" 
                        cy="50%"
                        r={(width / 2) - 3}
                        strokeWidth="5"
                        fillOpacity="0"
                        stroke="white" />
                    <circle 
                        cx="50%" 
                        cy="50%"
                        r={(width / 2) - 15}
                        strokeWidth="1"
                        stroke="white"
                        fillOpacity="0"
                        strokeDasharray="50" />
                    <circle 
                        cx="50%" 
                        cy="50%"
                        r={(width / 2) - 26}
                        strokeWidth="1"
                        stroke="white"
                        fillOpacity="0"
                        strokeDasharray="100" />
                </svg> */}
            </div>
        </div>
    );
}