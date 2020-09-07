import App from "../../app.config";
import { useEffect, useState } from "react";
import { gsap } from "gsap";

const app: any = App;

export default function Navigation() {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        gsap.to("#navigation", { opacity: 1, y: 0, duration: 0.5, delay: 3 });

        window.addEventListener("scroll", () => {
            window.scrollY > window.innerHeight - 200 ? setScrolled(true) : setScrolled(false);
        });
    }, []);

    return (
        <div id="navigation">
            <div className={`ct${ scrolled ? ' scrolled' : ''}`}>
                {scrolled ? <div className="logo">
                    <span className="font-family-title">ALEX MEZA</span>
                </div> : null}
                <div className="inner">
                    {app.pages.map((page, i) => {
                        return <button key={i}>{ page.label }</button>
                    })}
                </div>
            </div>
        </div>
    );
}
