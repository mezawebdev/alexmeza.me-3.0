import { useEffect, useRef } from 'react';
import { gsap } from 'gsap/dist/gsap';

interface Props {
  children: string;
  animate?: boolean;
  align?: string;
}

export default function Header(props: Props) {
  const contentRef = useRef<HTMLHeadingElement>();

  useEffect(() => {
    if (props.animate && contentRef.current) {
      const tl = gsap.timeline({ clearProps: 'all' });
      const children = contentRef.current.children;
      const speed = 0.1;

      let frame = 0;

      for (let i = 0; i < children.length; i++) {
        tl.to(children[i], { opacity: 1, y: 0, duration: 0.5 }, frame * speed);
        frame++;
      }
    }
  }, []);

  return (
    <div className="ct-2">
      <div className={`header ${props.align ? props.align : ''}`}>
        {props.align === 'right' ? (
          <span
            className={`box-shadow-white filter-shadow decor ${props.align}`}></span>
        ) : null}
        <h3 ref={contentRef} className="text-shadow filter-shadow">
          {props.children}
        </h3>
        {props.align === 'left' ? (
          <span
            className={`box-shadow-white filter-shadow decor ${props.align}`}></span>
        ) : null}
      </div>
    </div>
  );
}
