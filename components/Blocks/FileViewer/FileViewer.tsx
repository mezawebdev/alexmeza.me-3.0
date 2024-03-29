import styles from './FileViewer.module.scss';
import SyntaxHighlighter from 'react-syntax-highlighter';

interface Props {
  contents: string;
  header: string;
  closeFile: () => void;
}

export default function FileViewer(props: Props) {
  return (
    <div className={styles['file-viewer']}>
      <button
        onClick={props.closeFile}
        className={styles['close-button']}></button>
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
