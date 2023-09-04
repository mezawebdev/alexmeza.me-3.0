import { ReactNode } from 'react';

function Page(props: {
  children: ReactNode;
  subpage?: string;
  autoHeight?: boolean;
}) {
  return (
    <div
      className={`page${props.subpage ? ' subpage' : ''}${
        props.autoHeight ? ' auto-height' : ''
      }`}>
      {props.children}
    </div>
  );
}

export default Page;
