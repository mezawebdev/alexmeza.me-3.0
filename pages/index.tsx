import App from "../app.config";
import { gsap } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useEffect, useState } from "react";
import Panel from "../components/Layout/SpaceUI/Panel";

const app: any = App;

const debug: boolean = false;

gsap.registerPlugin(ScrollTrigger);

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
    const [uuid, setUuid] = useState(Math.round(Math.random() * 10000));

    useEffect(() => {
        let tl1 = gsap.timeline({
            onComplete: () => {
        //         gsap.to(".sp-1", {
        //             scrollTrigger: {
        //                 trigger: "#page--home",
        //                 markers: debug,
        //                 scrub: 0.5,
        //                 start: "5% top",
        //                 end: "bottom 50%"
        //             },
        //             x: -100,
        //             y: -100,
        //             opacity: 0,
        //         });

        //         gsap.to(".sp-2", {
        //             scrollTrigger: {
        //                 trigger: "#page--home",
        //                 markers: debug,
        //                 scrub: 0.5,
        //                 start: "5% top",
        //                 end: "bottom 50%"
        //             },
        //             x: -75,
        //             y: -100,
        //             opacity: 0,
        //         });
        
        //         gsap.to(".sp-3", {
        //             scrollTrigger: {
        //                 trigger: "#page--home",
        //                 markers: debug,
        //                 scrub: 0.5,
        //                 start: "5% top",
        //                 end: "bottom 50%"
        //             },
        //             x: -50,
        //             y: -100,
        //             opacity: 0,
        //         });
        
        //         gsap.to(".sp-4", {
        //             scrollTrigger: {
        //                 trigger: "#page--home",
        //                 markers: debug,
        //                 scrub: 0.5,
        //                 start: "5% top",
        //                 end: "bottom 50%"
        //             },
        //             x: -25,
        //             y: -100,
        //             opacity: 0,
        //         });
        
        //         gsap.to(".sp-5", {
        //             scrollTrigger: {
        //                 trigger: "#page--home",
        //                 markers: debug,
        //                 scrub: 0.5,
        //                 start: "5% top",
        //                 end: "bottom 50%"
        //             },
        //             x: 25,
        //             y: -100,
        //             opacity: 0,
        //         });
        
        //         gsap.to(".sp-6", {
        //             scrollTrigger: {
        //                 trigger: "#page--home",
        //                 markers: debug,
        //                 scrub: 0.5,
        //                 start: "5% top",
        //                 end: "bottom 50%"
        //             },
        //             x: 50,
        //             y: -100,
        //             opacity: 0,
        //         });
        
        //         gsap.to(".sp-7", {
        //             scrollTrigger: {
        //                 trigger: "#page--home",
        //                 markers: debug,
        //                 scrub: 0.5,
        //                 start: "5% top",
        //                 end: "bottom 50%"
        //             },
        //             x: 75,
        //             y: -100,
        //             opacity: 0,
        //         });
        
        //         gsap.to(".sp-8", {
        //             scrollTrigger: {
        //                 trigger: "#page--home",
        //                 markers: debug,
        //                 scrub: 0.5,
        //                 start: "5% top",
        //                 end: "bottom 50%"
        //             },
        //             x: 100,
        //             y: -100,
        //             opacity: 0,
        //         });

        //         gsap.to(".sp-9", {
        //             scrollTrigger: {
        //                 trigger: "#page--home",
        //                 markers: debug,
        //                 scrub: 0.5,
        //                 start: "5% top",
        //                 end: "bottom 50%"
        //             },
        //             y: -100,
        //             opacity: 0
        //         });
            }
        });

        tl1.to(".sp-1", { opacity: 1, y: 0, duration: 0.5, }, 0);
        tl1.to(".sp-2", { opacity: 1, y: 0, duration: 0.5, }, 0.1);
        tl1.to(".sp-3", { opacity: 1, y: 0, duration: 0.5, }, 0.2);
        tl1.to(".sp-4", { opacity: 1, y: 0, duration: 0.5, }, 0.3);
        tl1.to(".sp-5", { opacity: 1, y: 0, duration: 0.5, }, 0.4);
        tl1.to(".sp-6", { opacity: 1, y: 0, duration: 0.5, }, 0.5);
        tl1.to(".sp-7", { opacity: 1, y: 0, duration: 0.5, }, 0.6);
        tl1.to(".sp-8", { opacity: 1, y: 0, duration: 0.5, }, 0.7);
        tl1.to(".sp-9", { opacity: 1, y: 0, duration: 0.5, }, 0.8);
    }, []);

    return (
        <div id="page--home">
            <main>
                <div className="content">
                    <div className="centered">
                        <Panel>
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
                                <h2 className="sp-9">WEB DEVELOPER</h2>
                            </div>
                        </Panel>
                    </div>
                </div>
            </main>
        </div>
    );
}
