import { ReactNode } from 'react';

interface Props {
  align?: string;
  bottomPadding?: boolean;
  children: ReactNode;
}

export default function AboutBlock({ align, bottomPadding, children }: Props) {
  return (
    <div
      className={`about-block ${align ? align : null} ${
        bottomPadding ? 'bottom-padding' : null
      }`}>
      <div className="block-content space-ui-panel text-shadow">{children}</div>
    </div>
  );
}
