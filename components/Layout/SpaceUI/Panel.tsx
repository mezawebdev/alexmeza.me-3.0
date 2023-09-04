import { ReactNode } from 'react';

export default function Panel(props: {
  children: ReactNode;
  classes?: string;
}) {
  return (
    <div className={`space-ui-panel ${props.classes ? props.classes : ''}`}>
      <div className="panel-children">{props.children}</div>
    </div>
  );
}
