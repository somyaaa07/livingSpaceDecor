import nodemailer from "nodemailer";
import {
  SMTP_HOST,
  SMTP_PORT,
  SMTP_USERNAME,
  SMTP_PASSWORD,
  SMTP_FROM,
  SMTP_FROM_NAME,
  MAIL_TO,
} from "../config/mailConfig.js";

const transporter = nodemailer.createTransport({
  host: SMTP_HOST,
  port: Number(SMTP_PORT),
  secure: false,
  auth: {
    user: SMTP_USERNAME,
    pass: SMTP_PASSWORD,
  },
});

// Server start hote hi SMTP connection verify karo
transporter.verify((error, success) => {
  if (error) {
    console.log("❌ SMTP connection failed:", error);
  } else {
    console.log("✅ SMTP server is ready to send emails");
  }
});

// Builds an HTML table from any object of form fields
function buildFieldsHTML(fields) {
  return Object.entries(fields)
    .filter(([key]) => key !== "formType")
    .map(
      ([key, value]) => `
        <tr>
          <td style="padding:8px;border:1px solid #ddd;font-weight:bold;text-transform:capitalize;">
            ${key.replace(/([A-Z])/g, " $1")}
          </td>
          <td style="padding:8px;border:1px solid #ddd;">${value || "N/A"}</td>
        </tr>`,
    )
    .join("");
}

// formType examples: 'Contact Form', 'Wardrobe Cost Calculator', 'Kitchen Calculator', 'BHK Calculator', 'Modal Form'
export async function sendFormMail(formType, fields) {
  console.log(` Sending mail for: ${formType}`, fields);

  const mailOptions = {
    from: `"${SMTP_FROM_NAME}" <${SMTP_FROM}>`,
    replyTo: fields.email || SMTP_FROM,
    to: MAIL_TO,
    subject: `New Submission — ${formType}`,
    html: `
      <h2>New ${formType} Submission</h2>
      <table style="border-collapse:collapse;width:100%;max-width:600px;">
        ${buildFieldsHTML(fields)}
      </table>
    `,
  };

  const info = await transporter.sendMail(mailOptions);
  console.log("✅ Mail sent successfully. Message ID:", info.messageId);
  return info;
}
