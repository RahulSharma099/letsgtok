import sgMail, { MailDataRequired } from '@sendgrid/mail';
import config from '../config';

const initSgMailClient = () => {
  try {
    sgMail.setApiKey(config.sendGrid);
  } catch (err) {
    console.log({
      success: false,
      message: 'Error connecting send Grid',
    });
  }
};

export async function sendEmailMessage(email: string) {
  try {
    initSgMailClient();

    const message = {
      to: email,
      from: {
        name: 'Lets Gtok',
        email: 'e404rahul@gmail.com',
      },
      subject: 'Thank you for contacting Lets Gtok 🎉',
      templateId: config.templateId,
    };
    const mail = sgMail.send(message as MailDataRequired);
    if (mail) {
      console.log({ success: true, message: '💌 Mail Sent sucessfully' });
    }
  } catch (err) {
    console.log({
      success: false,
      message: 'Error sending email 📩',
    });
  }
}
