import Header from 'components/Layout/Header';
import Body from 'components/Layout/Body';
import Fields from 'components/Blocks/Fields';
import Field from 'components/Blocks/Field';
import Panel from 'components/Layout/SpaceUI/Panel';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { gsap } from 'gsap/dist/gsap';

export default function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [formState, setFormState] = useState({
    finished: false,
    success: false,
    error: false,
  });

  async function submit(e) {
    e.preventDefault();
    setSubmitted(true);

    try {
      await axios.post('/api/send-email', { name, email, message });
      setFormState({ finished: true, success: true, error: false });
    } catch (e) {
      console.log(e);
      setFormState({ finished: true, success: false, error: true });
    }

    setTimeout(() => {
      setName('');
      setEmail('');
      setMessage('');
      setFormState({ finished: false, success: false, error: false });
      setSubmitted(false);
    }, 2500);
  }

  useEffect(() => {
    const tl = gsap.timeline();
    const tl2 = gsap.timeline();

    tl.to('.sp-1', { opacity: 1, y: 0, duration: 0.5 });
    tl.to('.sp-2', { opacity: 1, y: 0, duration: 0.5 }, 0.1);
    tl.to('.sp-3', { opacity: 1, y: 0, duration: 0.5 }, 0.2);
    tl.to('.sp-4', { opacity: 1, y: 0, duration: 0.5 }, 0.3);
    tl.to('.sp-5', { opacity: 1, y: 0, duration: 0.5 }, 0.4);
    tl.to('.sp-6', { opacity: 1, y: 0, duration: 0.5 }, 0.5);
    tl.to('.sp-7', { opacity: 1, y: 0, duration: 0.5 }, 0.6);
    tl2.to('.row-1', { opacity: 1, x: 0, y: 0, scale: 1, duration: 0.5 }, 1);
    tl2.to('.row-2', { opacity: 1, x: 0, y: 0, scale: 1, duration: 0.5 }, 1.5);
  }, []);

  return (
    <div className="subpage" id="page--contact">
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
        <div className="ct-2">
          <div className="picture row-1 row">
            <img
              className="filter-shadow box-shadow-white"
              src="/assets/images/profile-1.jpg"
            />
          </div>
          <div className="contact-form row-2 row text-shadow">
            <Panel>
              <div
                className={`contact-form-wrapper${
                  formState.finished ? ' finished' : ''
                }`}>
                <p>Let&apos;s grow together.</p>
                <Fields>
                  <form onSubmit={(e) => submit(e)}>
                    <Field
                      value={name}
                      handler={(e) => setName(e.target.value)}
                      placeholder="Full Name"
                      type="text"
                    />
                    <Field
                      value={email}
                      handler={(e) => setEmail(e.target.value)}
                      placeholder="Email"
                      type="email"
                    />
                    <Field
                      value={message}
                      handler={(e) => setMessage(e.target.value)}
                      placeholder="Message"
                      type="textarea"
                    />
                    <Field
                      disabled={submitted}
                      handler={() => {}}
                      type="button">
                      Send
                    </Field>
                  </form>
                </Fields>
              </div>
              {formState.success ? (
                <div className="success">
                  <div>
                    <i className="las la-check"></i>
                    <br />
                    Message sent!
                    <br />I will reach out to you shortly.
                    <br />
                    Thank you!
                  </div>
                </div>
              ) : null}
              {formState.error ? (
                <div className="error">
                  <div>
                    <i className="las la-times"></i>
                    <br />
                    Message not sent!
                    <br />
                    Please try again.
                  </div>
                </div>
              ) : null}
            </Panel>
          </div>
        </div>
      </Body>
    </div>
  );
}
