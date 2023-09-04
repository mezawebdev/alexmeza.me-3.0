import { ReactNode } from 'react';

export default function Pages(props: { children: ReactNode }) {
  return <div className="pages">{props.children}</div>;
}
