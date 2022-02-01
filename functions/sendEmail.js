const cors = require('cors');
const corsHandler = cors({ origin: true });
const { https, config } = require('firebase-functions');
const { createTransport } = require('nodemailer');

const {
  gmail: {password, recipient, sender}
} = config();

const transporter = createTransport({
  service: 'gmail',
  auth: {
    user: sender,
    pass: password,
  },
});

const mailOptions = ({ subject, name, email, phone, message }) => {
  const text = `
  Name: ${name}
  Email: ${email}
  Phone: ${phone}
  Message: ${message}
  `;

  const html = `
  <p>Imię i nazwisko/Nazwa firmy: ${name}</p>
  <p>Email: ${email}</p>
  <p>Numer telefonu: ${phone}</p>
  <p>${message}</p>
  `;

  return {
    from: sender,
    to: recipient,
    subject,
    text,
    html,
  };
};

const transport = (error, { messageId }) =>
  error ? console.log(error) : console.log(messageId);

const handleEmail = (req, res) => {
  corsHandler(req, res, () => {
    transporter.sendMail(mailOptions(req.query), transport);
  });
  res.send({ status: 200 });
};

module.exports = https.onRequest(handleEmail);