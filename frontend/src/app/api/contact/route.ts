import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const data = await req.json();

    const { name, tel, email, subject, message } = data;

    // Aqui você decide para onde vai o e-mail
    let to = process.env.RESEND_CONTACT_EMAIL; // padrão

    if (subject?.toLowerCase().includes("volunt") || subject?.toLowerCase().includes("voluntário")) {
      to = process.env.RESEND_VOLUNTEER_EMAIL;
    }

    if (subject?.toLowerCase().includes("doa") || subject?.toLowerCase().includes("doação")) {
      to = process.env.RESEND_DONATION_EMAIL;
    }

    // Garante que o "to" é válido e vira array
    if (!to) {
      throw new Error("Nenhum e-mail de destino foi configurado no .env");
    }

    const response = await resend.emails.send({
      from: `${process.env.RESEND_FROM}`,
      to: [to],
      subject: `Nova mensagem: ${subject}`,
      replyTo: email,
      html: `
        <h3>Nova mensagem do site</h3>
        <p><strong>Nome:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Telefone:</strong> ${tel}</p>
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
