import { useState, useEffect, useRef } from "react";
import utils from "../../assets/utils";

class Star {
    x: number;
    y: number;
    r: number;

    constructor(x: number, y: number, r: number) {
        this.x = x;
        this.y = y;
        this.r = r;
    }
}

export default function LoadingScreen(props) {
    const [containerWidth, setContainerWidth] = useState(0);
    const [containerHeight, setContainerHeight] = useState(0);
    const [stars, setStars] = useState([]);
    const [width, setWidth] = useState(250);
    const [height, setHeight] = useState(250);
    const starFadeInOffset = 0.01;
    const canvas = useRef();
    let onResizeEvent;

    useEffect(() => {
        setContainerWidth(window.innerWidth);
        setContainerHeight(window.innerHeight);

        onResizeEvent = window.addEventListener("resize", () => {
            setContainerWidth(window.innerWidth);
            setContainerHeight(window.innerHeight);
        });

        let arr = [];

        // for (let i = 0; i < 100; i++) {
        //     arr.push(new Star(utils.minmaxInt(0, window.innerWidth), utils.minmaxInt(0, window.innerHeight), utils.minmaxInt(0.2, 2)));
        //     setStars(arr);
        // }

        // On component unmount
        return () => {
            window.removeEventListener("resize", onResizeEvent);
        }
    }, []);

    return (
        <div id="loading-screen">
            <div className="bg bg-1"></div>
            <div className="bg bg-2"></div>
            <div
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
            </div>
            <div className="content">
                <div className="text">
                    <span>L</span>
                    <span>O</span>
                    <span>A</span>
                    <span>D</span>
                    <span>I</span>
                    <span>N</span>
                    <span>G</span>
                </div>
                <svg
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
                </svg>
            </div>
        </div>
    );
}