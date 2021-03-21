import styles from "./FileViewer.module.scss";

interface Props {
    contents: string;
    handlers: any;
}

export default function FileViewer(props: Props) {
    return (
        <div className={styles["file-viewer"]}>
            <button 
                onClick={props.handlers.closeFile}
                className={styles["close-button"]}>
            </button>
            <h4>FileName.html</h4>
            <div className={styles.fileContentsWrapper}>
                <pre>{props.contents}</pre>
            </div>
        </div>
    );
}