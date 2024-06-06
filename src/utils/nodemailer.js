import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
    host: 'smtp.ethereal.email',
    port: 587,
    secure: false, 
    auth: {
      user: 'abduvohidabdurahimov1@gmail.com',
      pass: 'dysi rcnh cytg lltm'
    },
});
  

async function main(email, otp) {
    
    const info = await transporter.sendMail({
      from: 'abduvohidabdurahimov1@gmail.com',
      to: email, 
      subject: "Verification ✔", 
      html: `<h1> Sizning otpi${otp} `, 
    });
  
};
  
main().catch(console.error);