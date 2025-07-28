// utils/email.js
import nodemailer from "nodemailer";

export const sendWelcomeEmail = async (toEmail, userName, role) => {
  try {
    // Create transporter
    const transporter = nodemailer.createTransport({
      service: process.env.EMAIL_SERVICE,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const mailOptions = {
      from: `"B2B Wholesale Market" <${process.env.EMAIL_USER}>`,
      to: toEmail,
      subject: `Welcome to B2B Wholesale Market, ${userName}!`,
      html: `
        <h2>Hello ${userName},</h2>
        <p>Thank you for registering as a <strong>${role}</strong> on <strong>B2B Wholesale Market</strong>!</p>
        <p>We're excited to have you on board. You can now log in and start buying/selling in bulk.</p>
        <br>
        <p>Best regards,<br>
        <strong>Team B2B Wholesale Market</strong></p>
        <hr>
        <p><small>This is an automated message, please do not reply.</small></p>
      `,
    };

    await transporter.sendMail(mailOptions);
    console.log(`Welcome email sent to ${toEmail}`);
  } catch (error) {
    console.error("Error sending email:", error);
  }
};
