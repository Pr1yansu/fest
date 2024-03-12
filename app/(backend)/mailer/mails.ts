import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    user: process.env.SERVER_MAIL,
    pass: process.env.SERVER_MAIL_PASSWORD,
  },
});

export const sendVerificationToken = async (email: string, otp: string) => {
  try {
    await transporter.sendMail({
      from: process.env.SERVER_MAIL,
      to: email,
      subject: otp,
      text: otp,
      html: `<b>${otp}</b>`,
    });
    return {
      success: "Successfully send token",
    };
  } catch (error) {
    console.log("ERROR_SENDING_MAIL", error);
    return {
      error: "Token send error",
    };
  }
};
