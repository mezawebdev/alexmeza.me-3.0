import { useEffect, useRef, useState } from 'react';

interface Props {
  dir: string;
  handlers: { [key: string]: (any) => void };
}

export default function FileBrowser(props: Props) {
  const el = useRef();
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      $(el.current).fileTree(
        {
          root: props.dir,
          script: '/api/get-files',
          preventLinkAction: true,
          multiFolder: true,
          loadMessage: '<i class="fas fa-spinner"></i>',
        },
        (file) => {
          props.handlers.openFile(file);
        }
      );

      setLoaded(true);
    }, 500);
  }, []);

  return (
    <div className={`file-browser${!loaded ? ' flex' : ''}`}>
      <div ref={el} className="files"></div>
      {!loaded ? <i className="las la-spinner"></i> : null}
    </div>
  );
}
