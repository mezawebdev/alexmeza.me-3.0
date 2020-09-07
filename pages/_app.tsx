// import '../styles/globals.css';
import "normalize.css";
import { AppProps } from 'next/app';
import Head from 'next/head';
import World from "../world/World";
import React, { useEffect, useState } from 'react';
import "../assets/scss/app.scss";
import config from "../app.config";
import Navigation from "../components/Navigation/Navigation";
import Router from "next/router";
import Page from "../components/Layout/Page";
import Pages from "../components/Layout/Pages";
import Home from "./home";
import About from "../subpages/about";
import Work from "../subpages/work";
import Contact from "../subpages/contact";


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

    useEffect(() => {
        setActivePage(getCurrentPage());

        if (App.showWorld) {
            world = new World("canvas");

            window.addEventListener("resize", () => {
                world.resize();
            });
        }
    }, []);

    return (
        <div id="alex-meza"> 
            <Head>
                <title>ALEX MEZA | Web Developer</title>
                <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
                <link rel="icon" href="/favicon.ico" />
                <link rel="stylesheet" type="text/css" href="//cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.css" />
                <script
                    src="https://code.jquery.com/jquery-3.5.1.min.js"
                    integrity="sha256-9/aliU8dGd2tb6OSsuzixeV4y/faTqgFtohetphbbj0="
                    crossOrigin="anonymous">
                </script>
                <script type="text/javascript" src="//cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.min.js"></script>
            </Head>
            <Navigation />
            <canvas id="canvas"></canvas>
            { App.showWorld ? <canvas id="canvas"></canvas> : null  }
            {/* { App.showPages ? <Component {...pageProps} /> : null } */}
            <Pages>
                <Page>
                    <Home />
                </Page>
                <Page subpage={true}>
                    <About />
                </Page>
                <Page subpage={true}>
                    <Work />
                </Page>
                <Page subpage={true}>
                    <Contact />
                </Page>
            </Pages>
        </div>
    );
}

export default AlexMeza;
