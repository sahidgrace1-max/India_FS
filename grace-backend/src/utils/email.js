import transporter from "../config/mailer.js";

export const sendEmail = async ({ to, subject, html }) => {
  if (!process.env.MAIL_USER) {
    console.warn("⚠️ MAIL_USER is not set. Email 'from' address will be malformed.");
  }

  try {
    await transporter.sendMail({
      from: `"Grace International" <${process.env.MAIL_USER}>`,
      to,
      subject,
      html,
    });
    console.log(`📧 Email sent to ${to}`);
    return true;
  } catch (error) {
    console.error(`❌ Failed to send email to ${to}:`, error.message);
    return false;
  }
};