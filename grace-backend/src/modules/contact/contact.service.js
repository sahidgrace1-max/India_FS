import prisma from "../../config/db.js";
import { sendEmail } from "../../utils/email.js";

function escapeHTML(str) {
  if (!str) return "";
  return str.replace(/[&<>'"]/g, 
    tag => ({
      '&': '&amp;',
      '<': '&lt;',
      '>': '&gt;',
      "'": '&#39;',
      '"': '&quot;'
    }[tag] || tag)
  );
}

function buildContactNotificationHtml(data) {
  const safeName = escapeHTML(data.name);
  const safeEmail = escapeHTML(data.email);
  const safePhone = escapeHTML(data.phone);
  const safeMessage = escapeHTML(data.message);

  const phoneRow = safePhone
    ? `<tr><td style="padding:8px 12px;font-weight:600;color:#374151;">Phone</td><td style="padding:8px 12px;color:#4b5563;">${safePhone}</td></tr>`
    : "";

  return `
<!DOCTYPE html>
<html lang="en">
<head><meta charset="UTF-8"></head>
<body style="margin:0;padding:0;background-color:#f3f4f6;font-family:'Segoe UI',Roboto,Arial,sans-serif;">
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color:#f3f4f6;padding:32px 0;">
    <tr>
      <td align="center">
        <table role="presentation" width="600" cellpadding="0" cellspacing="0" style="background-color:#ffffff;border-radius:8px;overflow:hidden;box-shadow:0 2px 8px rgba(0,0,0,0.08);">
          <tr>
            <td style="background:linear-gradient(135deg,#1e40af,#3b82f6);padding:24px 32px;">
              <h1 style="margin:0;color:#ffffff;font-size:22px;font-weight:700;">New Contact Form Submission</h1>
            </td>
          </tr>
          <tr>
            <td style="padding:24px 32px;">
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="border:1px solid #e5e7eb;border-radius:6px;overflow:hidden;">
                <tr style="background-color:#f9fafb;">
                  <td style="padding:8px 12px;font-weight:600;color:#374151;width:120px;">Name</td>
                  <td style="padding:8px 12px;color:#4b5563;">${safeName}</td>
                </tr>
                <tr>
                  <td style="padding:8px 12px;font-weight:600;color:#374151;">Email</td>
                  <td style="padding:8px 12px;color:#4b5563;"><a href="mailto:${safeEmail}" style="color:#2563eb;text-decoration:none;">${safeEmail}</a></td>
                </tr>
                ${phoneRow}
                <tr style="background-color:#f9fafb;">
                  <td style="padding:8px 12px;font-weight:600;color:#374151;vertical-align:top;">Message</td>
                  <td style="padding:8px 12px;color:#4b5563;line-height:1.5;">${safeMessage}</td>
                </tr>
                <tr>
                  <td style="padding:8px 12px;font-weight:600;color:#374151;">Received At</td>
                  <td style="padding:8px 12px;color:#4b5563;">${new Date().toLocaleString("en-US", { dateStyle: "full", timeStyle: "short" })}</td>
                </tr>
              </table>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>`.trim();
}

export async function create(data) {
  const submission = await prisma.contactSubmission.create({ data });

  sendEmail({
    to: process.env.ADMIN_EMAIL,
    subject: "New Contact Form Submission",
    html: buildContactNotificationHtml(data),
  }).catch((err) => {
    console.error("Failed to send contact notification email:", err.message);
  });

  return submission;
}

export async function getAll(query) {
  const page = parseInt(query.page) || 1;
  const limit = parseInt(query.limit) || 10;
  const skip = (page - 1) * limit;

  const where = {};
  if (query.isRead !== undefined) {
    where.isRead = query.isRead === "true";
  }

  const [items, total] = await Promise.all([
    prisma.contactSubmission.findMany({
      where,
      orderBy: { createdAt: "desc" },
      skip,
      take: limit,
    }),
    prisma.contactSubmission.count({ where }),
  ]);

  return {
    items,
    pagination: { page, limit, total, totalPages: Math.ceil(total / limit) },
  };
}

export async function updateStatus(id, isRead) {
  const submission = await prisma.contactSubmission.findUnique({ where: { id } });

  if (!submission) {
    const err = new Error("Contact submission not found");
    err.statusCode = 404;
    throw err;
  }

  return await prisma.contactSubmission.update({
    where: { id },
    data: { isRead },
  });
}