import "normalize.css";
import { AppProps } from 'next/app';
import Head from 'next/head';
import World from "../world/World";
import React, { useEffect, useState } from 'react';
import "../assets/scss/app.scss";
import config from "../app.config";
import Navigation from "../components/Navigation/Navigation";
import Router from "next/router";
import { PageTransition } from 'next-page-transitions';
import LoadingScreenWindow from "../components/Utils/LoadingScreenWindow";
import Console from "../components/Utils/Console";

let world: World,
    App: any = config;

function getCurrentPage() {
    return config.pages.find(page => { return Router.router.pathname === page.path });
}

function AlexMeza({ Component, pageProps }: AppProps) {
    const [activePage, setActivePage] = useState({
        label: "",
        path: "",
        active: false
    });
    const [worldLoaded, setWorldLoaded] = useState(true);
    const [appLoaded, setAppLoaded] = useState(false);
    const [transition, setTransition] = useState(false);
    const [loadingScreenFadeout, setLoadingScreenFadeout] = useState(false);

    const onNavClick = pageData => {
        if (App.showWorld) {
            // setTransition(true);
            // world.moveToNewTarget(pageData.target, () => {
            //     alert("yo");
            //     setTransition(false);
            // });
        } else {

        }
    }

    function onLoad() {
        setTimeout(() => {
            setLoadingScreenFadeout(true);
            setTimeout(() => {
                setAppLoaded(true);
            }, 500);
        }, 500);
    }

    useEffect(() => {
        setActivePage(getCurrentPage());

        if (App.showWorld) {
            world = new World("canvas");

            window.addEventListener("load", onLoad);

            window.onload = () => {
                onLoad();
            }

            setTimeout(() => {
                onLoad();
            }, 3500);

            window.addEventListener("resize", () => {
                world.resize();
            });
        }

        // window.addEventListener("load", onLoad);

        // window.onload = window.onload;
    }, []);

    return (
        <div id="alex-meza"> 
            <Head>
                <title>ALEX MEZA | Web Developer</title>
                <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
                <link rel="icon" href="/favicon.ico" />
                <link rel="stylesheet" type="text/css" href="//cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.css" />
                <link rel="stylesheet" href="https://maxst.icons8.com/vue-static/landings/line-awesome/line-awesome/1.3.0/css/line-awesome.min.css" />
                <script
                    src="https://code.jquery.com/jquery-3.5.1.min.js"
                    integrity="sha256-9/aliU8dGd2tb6OSsuzixeV4y/faTqgFtohetphbbj0="
                    crossOrigin="anonymous">
                </script>
                <script type="text/javascript" src="//cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.min.js"></script>
            </Head>
            { appLoaded ? null : <LoadingScreenWindow fadeout={loadingScreenFadeout} /> }
            { App.world.debug.showConsole ? <Console /> : null }
            <Navigation onNavClick={onNavClick} />
            { App.showWorld ? <canvas id="canvas"></canvas> : null  }
            { App.showPages && worldLoaded && appLoaded ? 
                <div className={`pages-wrapper${ transition ? " transition" : "" }`}>   
                    <PageTransition  
                        timeout={300} 
                        classNames="page-transition">
                        <Component {...pageProps} /> 
                    </PageTransition>
                </div> : null }
            <style jsx global>{`
                .page-transition-enter {
                    opacity: 0;
                }
                .page-transition-enter-active {
                    opacity: 1;
                    transition: opacity 300ms;
                }
                .page-transition-exit {
                    opacity: 1;
                }
                .page-transition-exit-active {
                    opacity: 0;
                    transition: opacity 300ms;
                }
            `}</style>
        </div>
    );
}

export default AlexMeza;
