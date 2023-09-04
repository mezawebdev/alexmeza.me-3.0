import { gsap } from 'gsap/dist/gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { useEffect } from 'react';

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  useEffect(() => {
    const tl1 = gsap.timeline();
    tl1.to('.sp-1', { opacity: 1, duration: 0.5 }, 0);
    tl1.to('.sp-2', { opacity: 1, duration: 0.5 }, 0.1);
    tl1.to('.sp-3', { opacity: 1, duration: 0.5 }, 0.2);
    tl1.to('.sp-4', { opacity: 1, duration: 0.5 }, 0.3);
    tl1.to('.sp-5', { opacity: 1, duration: 0.5 }, 0.4);
    tl1.to('.sp-6', { opacity: 1, duration: 0.5 }, 0.5);
    tl1.to('.sp-7', { opacity: 1, duration: 0.5 }, 0.6);
    tl1.to('.sp-8', { opacity: 1, duration: 0.5 }, 0.7);
    tl1.to('.sp-9', { opacity: 1, duration: 0.5 }, 0.8);
  }, []);

  return (
    <div id="page--home">
      <main>
        <div className="content">
          <div className="centered">
            <div className="title">
              <h1 className="text-shadow filter-shadow">
                <span className="sp-1">A</span>
                <span className="sp-2">L</span>
                <span className="sp-3">E</span>
                <span className="sp-4">X</span>
                &nbsp;
                <span className="sp-5">M</span>
                <span className="sp-6">E</span>
                <span className="sp-7">Z</span>
                <span className="sp-8">A</span>
              </h1>
              <h2 className="sp-9 filter-shadow">SOFTWARE ENGINEER</h2>
              <div className="social-media">
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://www.linkedin.com/in/alex-meza-6419b4117">
                  <i className="lab la-linkedin"></i>
                </a>
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://codepen.io/mezawebdev">
                  <i className="lab la-codepen"></i>
                </a>
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://github.com/mezawebdev">
                  <i className="lab la-github"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
