import { useState } from "react";
 
export default function Console(props) {
    const [message, setMessage] = useState("APP STARTED");
    let timeout;

    function showMessage(msg) {
        if (timeout) {
            clearTimeout(timeout);
        }

        setMessage(msg);

        timeout = setTimeout(() => {
            setMessage("");
        }, 5000);
    }
    
    if (process.browser) {
        // @ts-ignore
        window.showMessage = showMessage;
    }

    timeout = setTimeout(() => {
        setMessage("");
    }, 5000);

    return (
        <div id="console">
            <div>{message}</div>
        </div>
    );
}