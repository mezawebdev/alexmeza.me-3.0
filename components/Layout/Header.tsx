import Panel from "./SpaceUI/Panel";
import { useEffect, useRef } from "react";
import { gsap } from "gsap/dist/gsap";

export default function Header(props) {
    const refs = {
        content: useRef()
    }

    useEffect(() => {
        if (props.animate) {
            const tl = gsap.timeline({ clearProps: "all" }),
            // @ts-ignore
                children: HTMLCollection = refs.content.current.children,
                speed = 0.1;

            let frame = 0;

            // @ts-ignore
            for (let i = 0; i < children.length; i++)  {
                tl.to(children[i], { opacity: 1, y: 0, duration: 0.5 }, frame * speed);
                frame++;
            }
        }
    }, []);

    return (
        <div className="ct-2">
            <div className={`header ${ props.align ? props.align : '' }`}>
                {props.align === 'right' ? <span className={`box-shadow-white filter-shadow decor ${ props.align }`}></span> : null}
                <h3 
                    ref={refs.content}
                    className="text-shadow filter-shadow">
                    {props.children}
                </h3>
                {props.align === 'left' ? <span className={`box-shadow-white filter-shadow decor ${ props.align }`}></span> : null}
            </div>
        </div>
    );
}