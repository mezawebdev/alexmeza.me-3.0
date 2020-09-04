import App from "../../app.config";
import { useEffect } from "react";
import { gsap } from "gsap";

const app: any = App;

export default function Navigation() {
    useEffect(() => {
        gsap.to("#navigation", { opacity: 1, y: 0, duration: 0.5, delay: 3 })
    }, []);

    return (
        <div id="navigation">
            {
                app.pages.map((page, i) => {
                    return <button key={i}>{ page.label }</button>
                })
            }
        </div>
    );
}
