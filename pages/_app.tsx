import 'swiper/swiper.scss';
import 'swiper/components/pagination/pagination.scss';
import 'normalize.css';
import 'assets/scss/app.scss';
import Navigation from 'components/Navigation/Navigation';
import Router from 'next/router';
import Head from 'next/head';
import World from 'world/World';
import { useEffect, useState } from 'react';
import { AppProps } from 'next/app';
import { useRouter } from 'next/router';
import { PageTransition } from 'next-page-transitions';
import { config } from 'app.config';

let world: World;

function AlexMeza({ Component, pageProps }: AppProps) {
  const [currentPage, setCurrentPage] = useState({ path: '/' });
  const [mobileMenuOpened, setMobileMenuOpened] = useState(false);
  const [appLoaded, setAppLoaded] = useState(false);
  const [transition, setTransition] = useState(false);
  const [playingGame, setPlayingGame] = useState(false);
  const router = useRouter();

  function onBodyClick() {
    setMobileMenuOpened(false);
  }

  function launchGame() {
    setPlayingGame(true);
    world.startGame();
  }

  function goToPage(page) {
    if (window.location.pathname !== page.path && !transition) {
      setTransition(true);
      setMobileMenuOpened(false);
      setCurrentPage(page);

      let planet;

      switch (page.path) {
        case '/':
          planet = 'earth';
          break;
        case '/about':
          planet = 'venus';
          break;
        case '/work':
          planet = 'mars';
          break;
        case '/contact':
          planet = 'mercury';
          break;
        default:
          planet = 'earth';
          break;
      }

      window.moveToNewTarget(planet, () => {
        router.push(page.path);
        window.scroll(0, 0);
        setTimeout(() => setTransition(false), 500);
      });
    }
  }

  function getCurrentPage() {
    const current =
      Router.router.pathname === '/'
        ? config.pages[0]
        : config.pages.find((page) => {
            return (
              Router.router.pathname.includes(page.path) && page.path !== '/'
            );
          });
    const defaultPage = config.pages.find((page) => {
      return page.path === '/';
    });

    return current ? current : defaultPage;
  }

  useEffect(() => {
    setCurrentPage(getCurrentPage());

    if (config.showWorld) {
      world = new World('canvas', router.pathname, () => setAppLoaded(true));
      window.addEventListener('resize', () => world.resize());
    }

    window.addEventListener('load', () => setAppLoaded(true));

    router.events.on('routeChangeComplete', () =>
      setCurrentPage(getCurrentPage())
    );
  }, []);

  return (
    <div id="alex-meza" onClick={() => onBodyClick()}>
      <Head>
        <title>ALEX MEZA | Software Engineer</title>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0"></meta>
        <meta name="title" content="ALEX MEZA | Software Engineer" />
        <meta
          name="description"
          content="My name is Alex Meza, I am a Software engineer from San Diego, CA. I am extremely passionate about creating beautiful web applications that generate results. My work involves researching, planning, designing and developing full stack web applications, using the required tools. I am a fast-learner and a creative engineer always looking for growth opportunities."
        />
        <meta property="og:title" content="ALEX MEZA | Software Engineer" />
        <meta
          property="og:description"
          content="My name is Alex Meza, I am a Software engineer from San Diego, CA. I am extremely passionate about creating beautiful web applications that generate results. My work involves researching, planning, designing and developing full stack web applications, using the required tools. I am a fast-learner and a creative engineer always looking for growth opportunities."
        />
        <meta
          property="og:image"
          content="https://alexmeza.io/assets/images/meta.jpg"
        />
        <meta
          name="twitter:image"
          content="https://alexmeza.io/assets/images/meta.jpg"
        />
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="stylesheet"
          href="https://maxst.icons8.com/vue-static/landings/line-awesome/line-awesome/1.3.0/css/line-awesome.min.css"
        />
      </Head>
      <Navigation
        currentPage={currentPage}
        goToPage={goToPage}
        mobileMenuOpened={mobileMenuOpened}
        setMobileMenuOpened={setMobileMenuOpened}
        hide={playingGame}
      />
      {config.showWorld ? <canvas id="canvas"></canvas> : null}
      {config.showPages && appLoaded ? (
        <div className={`pages-wrapper${transition ? ' transition' : ''}`}>
          <PageTransition
            key={router.route}
            timeout={300}
            classNames="page-transition">
            <Component
              key={router.route}
              launchGame={() => launchGame()}
              playingGame={playingGame}
              {...pageProps}
            />
          </PageTransition>
        </div>
      ) : null}
      <style>{`
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
