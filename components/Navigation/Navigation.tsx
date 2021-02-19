import App from "../../app.config";
import { useEffect, useState } from "react";
import { gsap } from "gsap";
import { useRouter } from 'next/router';
import Panel from "../Layout/SpaceUI/Panel";
import Link from 'next/link';

const app: any = App;

export default function Navigation(props) {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        gsap.to("#navigation", { opacity: 1, y: 0, duration: 0.5, delay: 1 });
    }, []);

    return (
        <div
            className={`${ props.hide ? "hide" : "" }`} 
            id="navigation"
            onClick={e => e.stopPropagation()}>
            <div className={`ct${ scrolled ? ' scrolled' : ''}${ props.currentPage.path !== '/' ? " toggled-logo" : "" }`}>
                <button 
                    onClick={() => props.setMobileMenuOpened(props.mobileMenuOpened ? false : true)}
                    className="burger space-ui-panel">
                    {props.mobileMenuOpened ? <i className="las la-times"></i> : <i className="las la-bars"></i>}
                </button>
                <div className={`logo-wrapper${ props.currentPage.path !== '/' ? " toggled-logo" : "" }`}>
                    <Link href="/">
                        <a onClick={() => { props.goToPage(app.pages[0]); }}>
                            <Panel classes={`font-family-title text-shadow logo${ props.currentPage.path !== '/' ? " toggled-logo" : "" }`}>
                                <span className="filter-shadow">ALEX MEZA</span>
                            </Panel>
                        </a>
                    </Link>
                </div>
                <div className={`inner${ props.mobileMenuOpened ? ' mobile-menu-toggled' : '' }`}>
                    {app.pages.map((page, i) => {
                        return (
                            <button 
                                className={`filter-shadow ${ page.path === props.currentPage.path ? 'active' : '' }`}
                                onClick={() => { props.goToPage(page); }} 
                                key={i}>
                                { page.label }
                            </button>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}
