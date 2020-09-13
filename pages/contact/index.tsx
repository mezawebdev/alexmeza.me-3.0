import Header from "../../components/Layout/Header";
import Body from "../../components/Layout/Body";
import Fields from "../../components/Blocks/Fields";
import Field from "../../components/Blocks/Field";

export default function Contact(props) {
    return (
        <div 
            className="subpage"
            id="page--contact">
            <Header align="left">CONTACT</Header>
            <Body>
                <div className="contact-form">
                    <div className="ct">
                        <Fields>
                            <Field 
                                placeholder="Full Name"
                                type="text">
                            </Field>
                            <Field 
                                placeholder="Email"
                                type="text">
                            </Field>
                            <Field 
                                placeholder="Message"
                                type="textarea">
                            </Field>
                            <Field type="button">
                                Send
                            </Field>
                        </Fields>
                    </div>
                </div>
            </Body>
        </div>
    );
}