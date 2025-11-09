import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const data = await req.json();
    const { name, tel, email, subject, message, formType } = data;

    // Validação básica
    if (!name || !email || !subject || !message || !formType) {
      return Response.json(
        { error: "Campos obrigatórios ausentes." },
        { status: 400 }
      );
    }

    const to = process.env.RESEND_EMAIL;
    if (!to) throw new Error("Nenhum e-mail de destino configurado no .env");

    // Monta o subject incluindo o tipo de formulário
    const emailSubject = `[${formType.toUpperCase()}] ${subject}`;

    const response = await resend.emails.send({
      from: process.env.RESEND_FROM!,
      to: [to],
      subject: emailSubject,
      replyTo: email,
      html: `
        <h3>Nova mensagem do site</h3>
        <p><strong>Nome:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Telefone:</strong> ${tel || "Não informado"}</p>
        <p><strong>Assunto:</strong> ${subject}</p>
        <p><strong>Mensagem:</strong><br/>${message}</p>
      `,
    });

    return Response.json({ success: true, response });
  } catch (err) {
    console.error(err);
    return Response.json({ error: "Erro ao enviar email" }, { status: 500 });
  }
}
