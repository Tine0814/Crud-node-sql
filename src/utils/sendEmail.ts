import nodemailer, { Transporter } from "nodemailer";

interface EmailOptions {
  host: string;
  service: string;
  port: number;
  secure: boolean;
  auth: {
    user: string;
    pass: string;
  };
}

const sendEmail = async (
  email: string,
  subject: string,
  text: string
): Promise<void> => {
  try {
    const transporter: Transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      service: "gmail",
      port: 587,
      secure: true,
      auth: {
        user: "your_email@gmail.com", // Replace with your actual email address
        pass: "your_email_password", // Replace with your actual email password
      },
    });

    const mailOptions = {
      from: "your_email@gmail.com", // Replace with your actual email address
      to: email,
      subject: subject,
      text: text,
    };

    await transporter.sendMail(mailOptions);
    console.log("Email sent successfully");
  } catch (error) {
    console.log("Email not sent!");
    console.error(error);
    throw error;
  }
};

export default sendEmail;
