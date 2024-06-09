import nodemailer from "nodemailer";
import configuration from "../config/configuration.js";

const { NODEMAILER_USER, NODEMAILER_PASS, NODEMAILER_HOST } = configuration.nodemailer;


const transporter = nodemailer.createTransport({
    host: NODEMAILER_HOST, 
    port: 465,
    secure: true, 
    auth: {
      user: NODEMAILER_USER,
      pass: NODEMAILER_PASS
    },
});
  

export async function main(email, otp) {
  try {
      const info = await transporter.sendMail({
          to: email,
          subject: 'Verification',
          html: `<h1>Your One Time Password: ${otp}</h1>`,
      });

      console.log('Email sent: %s', info.messageId);
      
      return true;

  } catch (error) {
      console.error(error);
      return false;
  };
};
