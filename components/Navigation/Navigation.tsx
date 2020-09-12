import App from "../../app.config";
import { useEffect, useState } from "react";
import { gsap } from "gsap";
import { useRouter } from 'next/router';
import Panel from "../Layout/SpaceUI/Panel";

const app: any = App;

export default function Navigation(props) {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpened, setMobileMenuOpened] = useState(false);
    const [currentPage, setCurrentPage] = useState(App.pages[0]);
    const router = useRouter();
    const transitioning = false;

    function goToPage(page: any): void {
        // TODO: Move world to new planet
        // if (props.world) {
        //     props.world.goToTarget(page.target);
        // }

        if (props.onNavClick) {
            props.onNavClick();
        }
        
        toggleMobileMenu();
        setCurrentPage(page);
        router.push(page.path);
    }

    function toggleMobileMenu() {
        setMobileMenuOpened(mobileMenuOpened ? false : true);
    }

    useEffect(() => {
        gsap.to("#navigation", { opacity: 1, y: 0, duration: 0.5, delay: 2 });

        setCurrentPage(App.pages.find(page_ => { return page_.path === window.location.pathname; }));
    }, []);

    return (
        <div id="navigation">
            <div className={`ct${ scrolled ? ' scrolled' : ''}${ currentPage.path !== '/' ? " toggled-logo" : "" }`}>
                <button 
                    onClick={toggleMobileMenu}
                    className="burger space-ui-panel">
                    {mobileMenuOpened ? null : <i className="las la-bars"></i>}
                    {mobileMenuOpened ? <i className="las la-times"></i> : null}
                </button>
                <Panel classes={`font-family-title text-shadow logo${ currentPage.path !== '/' ? " toggled-logo" : "" }`}>
                    ALEX MEZA
                </Panel>
                <div className={`inner${ mobileMenuOpened ? ' mobile-menu-toggled' : '' }`}>
                    {app.pages.map((page, i) => {
                        return (
                            <button 
                                className={`${ page.path === currentPage.path ? 'active' : '' }`}
                                onClick={() => { goToPage(page); }} 
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
