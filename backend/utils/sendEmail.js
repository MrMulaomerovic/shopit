const nodemailer = require('nodemailer');

const sendEmail = async options => {
    const transporter = nodemailer.createTransport({
        host: proccess.env.SMTP_HOST,
        port: proccess.env.SMTP_PORT,
        auth: {
          user: proccess.env.SMTP_EMAIL,
          pass: proccess.env.SMTP_PASSWORD
        }
      });

      const message = {
          from: `${proccess.env.SMTP_FROM_NAME} <${proccess.env.SMTP_FROM_EMAIL}>`,
          to: options.email,
          subject: options.subject,
          text: options.message
      }
      await transporter.sendMail(message)
}

module.exports = sendEmail