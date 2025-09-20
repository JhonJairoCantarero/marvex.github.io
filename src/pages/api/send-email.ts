import type { APIRoute } from 'astro';
import nodemailer from 'nodemailer';

export const POST: APIRoute = async ({ request }) => {
  try {
    const body = await request.json();
    const { nombre, telefono, cantidad, ciudad, departamento, mensaje } = body || {};

    if (!nombre || !telefono || !cantidad || !ciudad || !departamento) {
      return new Response(JSON.stringify({ ok: false, error: 'Datos incompletos' }), { status: 400 });
    }

    const smtpHost = process.env.SMTP_HOST;
    const smtpPort = Number(process.env.SMTP_PORT || '465');
    const smtpUser = process.env.SMTP_USER;
    const smtpPass = process.env.SMTP_PASS;
    const toEmail = process.env.TO_EMAIL || 'ecantarero@Ferrecarmen.com';

    if (!smtpHost || !smtpUser || !smtpPass) {
      return new Response(JSON.stringify({ ok: false, error: 'SMTP no configurado' }), { status: 500 });
    }

    const transporter = nodemailer.createTransport({
      host: smtpHost,
      port: smtpPort,
      secure: smtpPort === 465,
      auth: { user: smtpUser, pass: smtpPass },
    });

    const html = `
      <h2>Nueva Solicitud de Cotización</h2>
      <p><strong>Nombre:</strong> ${nombre}</p>
      <p><strong>Teléfono:</strong> ${telefono}</p>
      <p><strong>Cantidad:</strong> ${cantidad} cajas</p>
      <p><strong>Ciudad:</strong> ${ciudad}</p>
      <p><strong>Departamento:</strong> ${departamento}</p>
      <p><strong>Mensaje:</strong> ${mensaje || 'Sin mensaje'}</p>
      <p><strong>Fecha:</strong> ${new Date().toLocaleString('es-HN')}</p>
    `;

    const info = await transporter.sendMail({
      from: `Marvex <${smtpUser}>`,
      to: toEmail,
      subject: 'Nueva Solicitud de Cotización - Marvex',
      html,
    });

    return new Response(JSON.stringify({ ok: true, id: info.messageId }), { status: 200 });
  } catch (err: any) {
    return new Response(JSON.stringify({ ok: false, error: err?.message || 'Error enviando correo' }), { status: 500 });
  }
};


