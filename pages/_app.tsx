import "normalize.css";
import { AppProps } from 'next/app';
import Head from 'next/head';
import World from "../world/World";
import React, { useEffect, useState } from 'react';
import "../assets/scss/app.scss";
import config from "../app.config";
import Navigation from "../components/Navigation/Navigation";
import Router from "next/router";
import { useRouter } from "next/router";
import { PageTransition } from 'next-page-transitions';
import LoadingScreenWindow from "../components/Utils/LoadingScreenWindow";
import LaunchButton from "../components/Navigation/LaunchButton";
import 'swiper/swiper.scss';
import 'swiper/components/pagination/pagination.scss';

let world: World,
    App: any = config;

function AlexMeza({ Component, pageProps }: AppProps) {
    const [currentPage, setCurrentPage] = useState({ path: "/" }), 
        [activePage, setActivePage] = useState({ label: "", path: "", active: false }),
        [mobileMenuOpened, setMobileMenuOpened] = useState(false),
        [worldLoaded, setWorldLoaded] = useState(true),
        [appLoaded, setAppLoaded] = useState(false),
        [transition, setTransition] = useState(false),
        [loadingScreenFadeout, setLoadingScreenFadeout] = useState(false),
        [playingGame, setPlayingGame] = useState(false),
        router = useRouter(),
        onBodyClick = () => { setMobileMenuOpened(false) },
        onLoad = () => {
            console.log("on load!");
            setTimeout(() => {
                setLoadingScreenFadeout(true);
                setTimeout(() => { setAppLoaded(true) }, 500);
            }, 500);
        },
        launchGame = () => {
            setPlayingGame(true);
            world.startGame();
        },
        goToPage = (page: any): void => {
            if (window.location.pathname !== page.path && !transition) {
                setTransition(true);
                setMobileMenuOpened(false);
                setCurrentPage(page);

                let planet;

                switch (page.path) {
                    case "/":
                        planet = "earth";
                    break;
                    case "/about":
                        planet = "venus";
                    break;
                    case "/work":
                        planet = "mars"
                    break;
                    case "/contact":
                        planet = "mercury";
                    break;
                    default: 
                        planet = "earth";
                    break;
                }

                // @ts-ignore
                window.moveToNewTarget(planet, () => { 
                    router.push(page.path);
                    setTimeout(() => setTransition(false), 500);
                });
            }
        },
        getCurrentPage = () => { 
            const current = Router.router.pathname === "/" ? config.pages[0] : config.pages.find(page => {  return Router.router.pathname.includes(page.path) && page.path !== "/" }),
                defaultPage = config.pages.find(page => { return page.path === "/" });

            return current ? current : defaultPage;
        };

    if (process.browser) {
        router.events.on("routeChangeEnd", url => {
            setCurrentPage(getCurrentPage());
        });
    }

    useEffect(() => {
        setCurrentPage(getCurrentPage());

        if (App.showWorld) {
            world = new World("canvas", router.pathname);
            window.addEventListener("resize", () => { world.resize() });
        }

        window.addEventListener("load", onLoad);
        // window.onload = onLoad;
        // setTimeout(() => { onLoad() }, 3500);
    }, []);

    return (
        <div 
            id="alex-meza"
            onClick={() => onBodyClick()}> 
            <Head>
                <title>ALEX MEZA | Full-Stack Web Developer</title>
                <meta 
                    name="viewport" 
                    content="width=device-width, initial-scale=1.0">
                </meta>
                <link 
                    rel="icon" 
                    href="/favicon.ico" />
                <link 
                    rel="stylesheet" 
                    type="text/css" 
                    href="//cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.css" />
                <link 
                    rel="stylesheet" 
                    href="https://maxst.icons8.com/vue-static/landings/line-awesome/line-awesome/1.3.0/css/line-awesome.min.css" />
                {/* <script
                    src="https://code.jquery.com/jquery-3.5.1.min.js"
                    integrity="sha256-9/aliU8dGd2tb6OSsuzixeV4y/faTqgFtohetphbbj0="
                    crossOrigin="anonymous">
                </script> */}
                <script
                    src="https://code.jquery.com/jquery-3.5.1.min.js"
                    integrity="sha256-9/aliU8dGd2tb6OSsuzixeV4y/faTqgFtohetphbbj0="
                    crossOrigin="anonymous">
                </script>
                <script
                    src="/assets/plugins/jquery-file-tree/jQueryFileTree.min.js"
                    type="text/javascript">
                </script>
                <link 
                    rel="stylesheet"
                    href="//cdnjs.cloudflare.com/ajax/libs/highlight.js/10.7.2/styles/default.min.css"></link>
            </Head>
            { !appLoaded && App.showLoadingScreen ? <LoadingScreenWindow fadeout={loadingScreenFadeout} /> : null }
            {/* { App.world.debug.showConsole ? <Console /> : null } */}
            <Navigation 
                setCurrentPage={setCurrentPage}
                currentPage={currentPage}
                goToPage={goToPage}
                mobileMenuOpened={mobileMenuOpened}
                setMobileMenuOpened={setMobileMenuOpened}
                hide={playingGame} />
            {/* <LaunchButton 
                playingGame={playingGame}
                setPlayingGame={setPlayingGame} /> */}
            { App.showWorld ? <canvas id="canvas"></canvas> : null  }
            { App.showPages && appLoaded ? 
                <div className={`pages-wrapper${ transition ? " transition" : "" }`}>   
                    <PageTransition  
                        key={router.route}
                        timeout={300} 
                        classNames="page-transition">
                        <Component
                            key={router.route}
                            launchGame={() => launchGame()} 
                            playingGame={playingGame}
                            {...pageProps} /> 
                    </PageTransition>
                </div> : null }

            <style jsx global>{`
                .page-transition-enter {
                    opacity : 0;
                }

                .page-transition-enter-active {
                    opacity    : 1;
                    transition : opacity 300ms;
                }

                .page-transition-exit {
                    opacity : 1;
                }

                .page-transition-exit-active {
                    opacity    : 0;
                    transition : opacity 300ms;
                }

            `}</style>
        </div>
    );
}

export default AlexMeza;
