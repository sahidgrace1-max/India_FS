import prisma from "../../config/db.js";
import { sendEmail } from "../../utils/email.js";

/**
 * Build HTML email notifying admin of a new student inquiry.
 */
function buildAdminNotificationHtml(data) {
  const courseRow = data.course
    ? `<tr><td style="padding:8px 12px;font-weight:600;color:#374151;">Course</td><td style="padding:8px 12px;color:#4b5563;">${data.course}</td></tr>`
    : "";
  const intakeRow = data.intake
    ? `<tr style="background-color:#f9fafb;"><td style="padding:8px 12px;font-weight:600;color:#374151;">Intake</td><td style="padding:8px 12px;color:#4b5563;">${data.intake}</td></tr>`
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
            <td style="background:linear-gradient(135deg,#065f46,#10b981);padding:24px 32px;">
              <h1 style="margin:0;color:#ffffff;font-size:22px;font-weight:700;">New Student Inquiry</h1>
              <p style="margin:4px 0 0;color:#a7f3d0;font-size:14px;">Grace International</p>
            </td>
          </tr>
          <tr>
            <td style="padding:24px 32px;">
              <p style="margin:0 0 16px;color:#374151;font-size:15px;">A new student inquiry has been submitted. Here are the details:</p>
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="border:1px solid #e5e7eb;border-radius:6px;overflow:hidden;">
                <tr style="background-color:#f9fafb;">
                  <td style="padding:8px 12px;font-weight:600;color:#374151;width:140px;">Name</td>
                  <td style="padding:8px 12px;color:#4b5563;">${data.name}</td>
                </tr>
                <tr>
                  <td style="padding:8px 12px;font-weight:600;color:#374151;">Email</td>
                  <td style="padding:8px 12px;color:#4b5563;"><a href="mailto:${data.email}" style="color:#059669;text-decoration:none;">${data.email}</a></td>
                </tr>
                <tr style="background-color:#f9fafb;">
                  <td style="padding:8px 12px;font-weight:600;color:#374151;">Phone</td>
                  <td style="padding:8px 12px;color:#4b5563;">${data.phone}</td>
                </tr>
                <tr>
                  <td style="padding:8px 12px;font-weight:600;color:#374151;">Destination</td>
                  <td style="padding:8px 12px;color:#4b5563;">${data.destination}</td>
                </tr>
                ${courseRow}
                ${intakeRow}
                <tr>
                  <td style="padding:8px 12px;font-weight:600;color:#374151;">Submitted At</td>
                  <td style="padding:8px 12px;color:#4b5563;">${new Date().toLocaleString("en-US", { dateStyle: "full", timeStyle: "short" })}</td>
                </tr>
              </table>
            </td>
          </tr>
          <tr>
            <td style="padding:16px 32px;background-color:#f9fafb;border-top:1px solid #e5e7eb;">
              <p style="margin:0;color:#9ca3af;font-size:12px;text-align:center;">This is an automated notification from Grace International's website.</p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>`.trim();
}

/**
 * Build HTML confirmation email sent to the student.
 */
function buildStudentConfirmationHtml(data) {
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
            <td style="background:linear-gradient(135deg,#065f46,#10b981);padding:24px 32px;">
              <h1 style="margin:0;color:#ffffff;font-size:22px;font-weight:700;">Thank You for Your Inquiry!</h1>
              <p style="margin:4px 0 0;color:#a7f3d0;font-size:14px;">Grace International</p>
            </td>
          </tr>
          <tr>
            <td style="padding:24px 32px;">
              <p style="margin:0 0 12px;color:#374151;font-size:15px;">Dear <strong>${data.name}</strong>,</p>
              <p style="margin:0 0 12px;color:#4b5563;font-size:15px;line-height:1.6;">
                Thank you for reaching out to Grace International. We have successfully received your inquiry
                regarding studying in <strong>${data.destination}</strong>.
              </p>
              <p style="margin:0 0 12px;color:#4b5563;font-size:15px;line-height:1.6;">
                One of our experienced counselors will review your inquiry and get in touch with you shortly.
                We are committed to helping you find the best educational path for your future.
              </p>
              <div style="margin:20px 0;padding:16px;background-color:#ecfdf5;border-left:4px solid #10b981;border-radius:4px;">
                <p style="margin:0;color:#065f46;font-size:14px;font-weight:600;">What happens next?</p>
                <ul style="margin:8px 0 0;padding-left:20px;color:#047857;font-size:14px;line-height:1.6;">
                  <li>Our team will review your inquiry within 24 hours</li>
                  <li>A counselor will contact you via phone or email</li>
                  <li>We'll provide personalized guidance for your study abroad journey</li>
                </ul>
              </div>
              <p style="margin:16px 0 0;color:#4b5563;font-size:15px;">
                If you have any urgent questions, feel free to contact us directly.
              </p>
              <p style="margin:20px 0 0;color:#374151;font-size:15px;">
                Warm regards,<br>
                <strong>Grace International Team</strong>
              </p>
            </td>
          </tr>
          <tr>
            <td style="padding:16px 32px;background-color:#f9fafb;border-top:1px solid #e5e7eb;">
              <p style="margin:0;color:#9ca3af;font-size:12px;text-align:center;">© ${new Date().getFullYear()} Grace International. All rights reserved.</p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>`.trim();
}

/**
 * Create a new student inquiry, send notification to admin and confirmation to student.
 * @param {object} data
 * @returns {object} created inquiry
 */
export async function create(data) {
  const inquiry = await prisma.inquiry.create({ data });

  // Send admin notification (fire-and-forget)
  sendEmail({
    to: process.env.ADMIN_EMAIL,
    subject: "New Student Inquiry – Grace International",
    html: buildAdminNotificationHtml(data),
  }).catch((err) => {
    console.error("Failed to send admin inquiry notification:", err.message);
  });

  // Send student confirmation (fire-and-forget)
  sendEmail({
    to: data.email,
    subject: "We received your inquiry – Grace International",
    html: buildStudentConfirmationHtml(data),
  }).catch((err) => {
    console.error("Failed to send student confirmation email:", err.message);
  });

  return inquiry;
}

/**
 * Get a paginated list of inquiries with optional status and destination filters.
 * @param {object} query - { page?, limit?, status?, destination? }
 */
export async function getAll(query) {
  const page = parseInt(query.page) || 1;
  const limit = parseInt(query.limit) || 10;
  const skip = (page - 1) * limit;

  const where = {};
  if (query.status) {
    where.status = query.status;
  }
  if (query.destination) {
    where.destination = query.destination;
  }

  const [items, total] = await Promise.all([
    prisma.inquiry.findMany({
      where,
      orderBy: { createdAt: "desc" },
      skip,
      take: limit,
    }),
    prisma.inquiry.count({ where }),
  ]);

  return {
    items,
    pagination: {
      page,
      limit,
      total,
      totalPages: Math.ceil(total / limit),
    },
  };
}

/**
 * Get a single inquiry by id.
 * @param {string} id
 * @returns {object} inquiry
 */
export async function getById(id) {
  const inquiry = await prisma.inquiry.findUnique({ where: { id } });

  if (!inquiry) {
    const err = new Error("Inquiry not found");
    err.statusCode = 404;
    throw err;
  }

  return inquiry;
}

/**
 * Update an inquiry by id.
 * @param {string} id
 * @param {object} data - { status?, notes? }
 * @returns {object} updated inquiry
 */
export async function update(id, data) {
  const inquiry = await prisma.inquiry.findUnique({ where: { id } });

  if (!inquiry) {
    const err = new Error("Inquiry not found");
    err.statusCode = 404;
    throw err;
  }

  const updated = await prisma.inquiry.update({
    where: { id },
    data,
  });

  return updated;
}
