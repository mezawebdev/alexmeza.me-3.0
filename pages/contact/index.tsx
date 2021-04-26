import Header from "../../components/Layout/Header";
import Body from "../../components/Layout/Body";
import Fields from "../../components/Blocks/Fields";
import Field from "../../components/Blocks/Field";
import { useEffect, useState } from "react";
import { gsap } from "gsap/dist/gsap";
import Panel from "../../components/Layout/SpaceUI/Panel";

export default function Contact(props) {
    const [name, setName] = useState(""),
        [email, setEmail] = useState(""),
        [message, setMessage] = useState(""),
        [submitted, setSubmitted] = useState(false),
        handlers = {
            submit() {
                setSubmitted(true);
            }
        };

    useEffect(() => {
        let tl = gsap.timeline(),
            tl2 = gsap.timeline();

        tl.to(".sp-1", { opacity: 1, y: 0, duration: 0.5 });
        tl.to(".sp-2", { opacity: 1, y: 0, duration: 0.5 }, 0.1);
        tl.to(".sp-3", { opacity: 1, y: 0, duration: 0.5 }, 0.2);
        tl.to(".sp-4", { opacity: 1, y: 0, duration: 0.5 }, 0.3);
        tl.to(".sp-5", { opacity: 1, y: 0, duration: 0.5 }, 0.4);
        tl.to(".sp-6", { opacity: 1, y: 0, duration: 0.5 }, 0.5);
        tl.to(".sp-7", { opacity: 1, y: 0, duration: 0.5 }, 0.6);
        tl2.to(".row-1", { opacity: 1, x: 0, y: 0, scale: 1, duration: 0.5 }, 1);
        tl2.to(".row-2", { opacity: 1, x: 0, y: 0, scale: 1, duration: 0.5 }, 1.5);
    }, []);

    return (
        <div 
            className="subpage"
            id="page--contact">
            <Header align="left">
                <span className="sp-1 sp">C</span>
                <span className="sp-2 sp">O</span>
                <span className="sp-3 sp">N</span>
                <span className="sp-4 sp">T</span>
                <span className="sp-5 sp">A</span>
                <span className="sp-6 sp">C</span>
                <span className="sp-7 sp">T</span>
            </Header>
            <Body>
                <div className="ct">
                    <div className="picture row-1 row">
                        <img 
                            className="filter-shadow box-shadow-white"
                            src="/assets/images/profile-1.jpg" />
                    </div>
                    <div className="contact-form row-2 row text-shadow">
                        <Panel>
                            <p>Let's grow together.</p>
                            <Fields>
                                <form onSubmit={() => handlers.submit()}>
                                    <Field 
                                        handler={e => setName(e.target.value)}
                                        placeholder="Full Name"
                                        type="text">
                                    </Field>
                                    <Field 
                                        handler={e => setEmail(e.target.value)}
                                        placeholder="Email"
                                        type="email">
                                    </Field>
                                    <Field 
                                        handler={e => setMessage(e.target.value)}
                                        placeholder="Message"
                                        type="textarea">
                                    </Field>
                                    <Field 
                                        disabled={submitted}
                                        handler={() => {}}
                                        type="button">
                                        Send
                                    </Field>
                                </form>
                            </Fields>
                        </Panel>
                    </div>
                </div>
            </Body>
        </div>
    );
}