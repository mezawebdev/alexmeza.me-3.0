import { useRouter } from "next/router";
import { useState } from "react";
import Link from "next/link";
import App from "../../../app.config";
import Header from "../../../components/Layout/Header";
import Body from "../../../components/Layout/Body";
import ProjectCard from "../../../components/Blocks/ProjectCard";
import SwiperCore, { Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import Head from 'next/head';
import axios from "axios";
import Spotlight from "../../../components/Blocks/Spotlight";
import FileViewer from "../../../components/Blocks/FileViewer/FileViewer"

SwiperCore.use([Navigation]);

const app: any = App;

export default function Projects(props) {
    const router = useRouter(),
        pid: number|any = parseInt(router.query.id.toString());
    
    if (isNaN(pid)) {
        router.push("/work"); 
        return null;
    }

    const [activeSlide, setActiveSlide] = useState(pid <= app.projects.length - 1 ? pid : 0),
        [viewingFile, setViewingFile] = useState(false),
        [currentFileName, setCurrentFileName] = useState(""),
        [currentFileContents, setCurrentFileContents] = useState(""),
        [showSpotlight, setShowSpotlight] = useState(false),
        [spotlightData, setSpotlightData] = useState({ images: [], index: 0 }),
        params = {
            spaceBetween: 100,
            slidesPerView: 1,
            centeredSlides: true,
            centerInsufficientSlides: false,
            breakpoints: {
                800: {
                    spaceBetween: 200
                }
            },
            navigation: {
                nextEl: ".nav-next",
                prevEl: ".nav-prev"
            },
            initialSlide: activeSlide,
            onSlideChange(e) {
                router.push("/work/projects?id=" + e.realIndex, undefined, { shallow: true });
                setActiveSlide(e.realIndex);
            },
            onSlideChangeTransitionStart(e) {
                const doc = document.documentElement,
                    top = (window.pageYOffset || doc.scrollTop) - (doc.clientTop || 0);
                
                if (window.innerWidth < 962 && top > 275) $("html, body").animate({ scrollTop: 0 }, "slow");
            },
            onResize(e) {
                e.updateSize();
                e.update();
            }
        },
        handlers = {
            async openFile(filePath: string): Promise<any> {
                try {
                    let filePathSplit = filePath.split("/");
                    setViewingFile(true);
                    const req = await axios.get("/api/get-file?path=" + filePath);
                    setCurrentFileName(filePathSplit[filePathSplit.length - 1]);
                    setCurrentFileContents(req.data);
                    window.document.body.style.overflowY = "hidden";
                } catch(e) {
                    console.log(e);
                }
            },
            closeFile: () => {
                setViewingFile(false);
                setCurrentFileContents("");
                window.document.body.style.overflowY = "scroll";
            },
            openSpotlight(images: Array<string>, index: number): void {
                setSpotlightData({ images, index })
                setShowSpotlight(true);
            },
            closeSpotlight(): void {
                setShowSpotlight(false);
                setSpotlightData({ images: [], index: 0 });
            }
        };

    return (
        <div 
            className="subpage"
            id="page--project">
            <Head>
                <link 
                    rel="stylesheet" 
                    type="text/css" 
                    href="/assets/plugins/jquery-file-tree/jQueryFileTree.min.css" />
            </Head>
            {showSpotlight ? <Spotlight images={spotlightData.images} index={spotlightData.index} close={handlers.closeSpotlight} /> : null}
            <Header 
                animate={true}
                align="left">
                <span className="sp sp-1">P</span>
                <span className="sp sp-2">R</span>
                <span className="sp sp-3">O</span>
                <span className="sp sp-4">J</span>
                <span className="sp sp-5">E</span>
                <span className="sp sp-6">C</span>
                <span className="sp sp-7">T</span>
                <span className="sp sp-7">S</span>
            </Header>
            <div className="back-link">
                <div className="ct-2">
                    <Link href={`/work#project-${ pid === 0 ? 0 : pid - 1 }`}>
                        <a><i className="las la-arrow-left"></i>&nbsp;Back to work list</a>
                    </Link>
                </div>
            </div>
            <Body>
                <Swiper {...params}>
                    {app.projects.map((project, i) => { 
                        return (
                            <SwiperSlide key={i}>
                                <ProjectCard 
                                    handlers={handlers}
                                    active={activeSlide === i}
                                    {...project} />
                            </SwiperSlide>
                        );
                    })}
                </Swiper>
                <div className="navigation">
                    <button className="nav-prev">
                        <i className="las la-angle-left"></i>
                    </button>
                    <button className="nav-next">
                        <i className="las la-angle-right"></i>
                    </button>
                </div>
            </Body>
            {viewingFile ? <FileViewer handlers={handlers} contents={currentFileContents} header={currentFileName} /> : null}
        </div>
    )
}