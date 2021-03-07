import { useEffect, useRef } from "react";

interface Props {
    dir: string
}

export default function FileBrowser(props: Props) {
    const el = useRef();

    useEffect(() => {
        console.log("yay");
        // @ts-ignore
        $(el.current).fileTree({ root: props.dir, script: "/api/get-files" }, file => {
			console.log(file);
		});
    }, []);

    return (
        <div 
            ref={el}
            className="file-browser">

        </div>
    );
}