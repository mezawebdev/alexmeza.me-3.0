import { useRouter } from "next/router";
import { useState } from "react";
import App from "../../../app.config";
import Header from "../../../components/Layout/Header";
import Body from "../../../components/Layout/Body";
import ProjectCard from "../../../components/Blocks/ProjectCard";
import { Swiper, SwiperSlide } from 'swiper/react';
import Head from 'next/head';
import axios from "axios";
import FileViewer from "../../../components/Blocks/FileViewer/FileViewer"

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
        params = {
            slidesPerView: 1,
            spaceBetween: -120,
            centeredSlides: true,
            pagination: {
                el: '.swiper-pagination',
                clickable: true
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
            </Body>
            {viewingFile ? <FileViewer handlers={handlers} contents={currentFileContents} header={currentFileName} /> : null}
        </div>
    )
}