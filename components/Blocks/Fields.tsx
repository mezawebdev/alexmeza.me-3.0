import { ReactNode } from 'react';

export default function Fields({ children }: { children: ReactNode }) {
  return <div className="fields">{children}</div>;
}
