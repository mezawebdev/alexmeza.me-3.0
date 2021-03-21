import { useEffect, useRef } from "react";
import axios from "axios";

interface Props {
    dir: string,
    handlers: any
}

export default function FileBrowser(props: Props) {
    const el = useRef();

    useEffect(() => {
        // @ts-ignore
        $(el.current).fileTree({ root: props.dir, script: "/api/get-files" }, file => {
            props.handlers.openFile(file);
		});
    }, []);

    return (
        <div 
            ref={el}
            className="file-browser">

        </div>
    );
}