import { gsap } from "gsap";
import { useEffect, useRef } from "react";

export default function Panel(props) {
    const panel = useRef();

    return (
        <div
            ref={panel} 
            className={`space-ui-panel ${ props.classes ? props.classes : '' }`}>
            <div className="panel-children">{props.children}</div>
        </div>
    );
}