import App from "../app.config";
import { gsap } from "gsap";
import { useEffect } from "react";

const app: any = App;

function iOS(): boolean {
    if (process.browser) {
        return [
        'iPad Simulator',
        'iPhone Simulator',
        'iPod Simulator',
        'iPad',
        'iPhone',
        'iPod'
        ].includes(navigator.platform)
        // iPad on iOS 13 detection
        || (navigator.userAgent.includes("Mac") && "ontouchend" in document) 
    }
}

export default function Home() {
    useEffect(() => {
        gsap.to(".sp-1", { opacity: 1, y: 0, duration: 0.5, delay: 2 });
        gsap.to(".sp-2", { opacity: 1, y: 0, duration: 0.5, delay: 2.10 });
        gsap.to(".sp-3", { opacity: 1, y: 0, duration: 0.5, delay: 2.20 });
        gsap.to(".sp-4", { opacity: 1, y: 0, duration: 0.5, delay: 2.30 });
        gsap.to(".sp-5", { opacity: 1, y: 0, duration: 0.5, delay: 2.40 });
        gsap.to(".sp-6", { opacity: 1, y: 0, duration: 0.5, delay: 2.50 });
        gsap.to(".sp-7", { opacity: 1, y: 0, duration: 0.5, delay: 2.60 });
        gsap.to(".sp-8", { opacity: 1, y: 0, duration: 0.5, delay: 2.70 });
        gsap.to(".sp-9", { opacity: 1, y: 0, duration: 0.5, delay: 2.50 })
    }, []);

    return (
        <div id="page--home">
            <main>
                <div className="ct">
                    <div className="content">
                        <div className="centered">
                            <div className="title">
                                <h1>
                                    <span className="sp-1">A</span>
                                    <span className="sp-2">L</span>
                                    <span className="sp-3">E</span>
                                    <span className="sp-4">X</span>
                                    &nbsp;
                                    <span className="sp-5">M</span>
                                    <span className="sp-6">E</span>
                                    <span className="sp-7">Z</span>
                                    <span className="sp-8">A</span>
                                </h1>
                                <h2 className="sp-9">Web Developer</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}
