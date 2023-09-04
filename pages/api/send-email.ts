import { NextApiRequest, NextApiResponse } from 'next';
import sgMail from '@sendgrid/mail';

export default (req: NextApiRequest, res: NextApiResponse) => {
  try {
    sgMail.setApiKey(process.env.SENDGRID_API_KEY);

    if (req.body.name && req.body.email && req.body.message) {
      const msg = {
        to: 'mezawebdev@gmail.com',
        from: 'alex@mezaweblab.com',
        subject: 'AlexMeza.me Contact Form Submission',
        text: 'AlexMeza.me',
        html: `
          <strong>Someone Submitted Your Contact Form</strong>
          <br />
          <p>
            <span style="color:red;font-weight:bold;">Name: </span><br />
            ${req.body.name}
          </p>
          <p>
            <span style="color:red;font-weight:bold;">Email: </span><br />
            ${req.body.email}
          </p>
          <p>
            <span style="color:red;font-weight:bold;">Message: </span><br />
            ${req.body.message}
          </p>
        `,
      };

      sgMail.send(msg);

      return res.status(200).end();
    } else {
      return res.status(400).send('Missing paramenter');
    }
  } catch (e) {
    console.log(e);
    return res.status(500);
  }
};
