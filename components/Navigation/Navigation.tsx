import Panel from 'components/Layout/SpaceUI/Panel';
import { config } from 'app.config';
import { useEffect } from 'react';
import { gsap } from 'gsap';

export default function Navigation(props: {
  currentPage: { path: string; label?: string };
  goToPage: (any) => void;
  mobileMenuOpened: boolean;
  setMobileMenuOpened: (boolean) => void;
  hide: boolean;
}) {
  useEffect(() => {
    gsap.to('#navigation', { opacity: 1, y: 0, duration: 0.5, delay: 1 });
  }, []);

  return (
    <div
      className={`${props.hide ? 'hide' : ''}`}
      id="navigation"
      onClick={(e) => e.stopPropagation()}>
      <div
        className={`ct${
          props.currentPage.path !== '/' ? ' toggled-logo' : ''
        }`}>
        <button
          onClick={() =>
            props.setMobileMenuOpened(props.mobileMenuOpened ? false : true)
          }
          className="burger space-ui-panel">
          {props.mobileMenuOpened ? (
            <i className="las la-times"></i>
          ) : (
            <i className="las la-bars"></i>
          )}
        </button>
        <div
          className={`logo-wrapper${
            props.currentPage.path !== '/' ? ' toggled-logo' : ''
          }`}>
          <a
            onClick={() => {
              props.goToPage(config.pages[0]);
            }}>
            <Panel
              classes={`font-family-title text-shadow logo${
                props.currentPage.path !== '/' ? ' toggled-logo' : ''
              }`}>
              <span className="filter-shadow">ALEX MEZA</span>
            </Panel>
          </a>
        </div>
        <div
          className={`inner${
            props.mobileMenuOpened ? ' mobile-menu-toggled' : ''
          }`}>
          {config.pages.map((page, i) => {
            return (
              <button
                className={`filter-shadow ${
                  page.path === props.currentPage.path ? 'active' : ''
                }`}
                onClick={() => {
                  props.goToPage(page);
                }}
                key={i}>
                {page.label}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
