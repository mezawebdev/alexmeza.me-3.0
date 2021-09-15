import styles from "./FileViewer.module.scss";
import SyntaxHighlighter from 'react-syntax-highlighter';
// import { style } from 'react-syntax-highlighter/dist/esm/styles/prism;

interface Props {
    contents: string;
    header: string;
    handlers: any;
}

export default function FileViewer(props: Props) {
    return (
        <div className={styles["file-viewer"]}>
            <button 
                onClick={props.handlers.closeFile}
                className={styles["close-button"]}>
            </button>
            <h4>{props.header}</h4>
            <div className={styles.fileContentsWrapper}>
                <SyntaxHighlighter 
                    stylesheet="twilight"
                    useInlineStyles={true}
                    language="javascript">
                    {props.contents}
                </SyntaxHighlighter>
            </div>
        </div>
    );
}