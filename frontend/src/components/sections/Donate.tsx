"use client";

import Badge from '@components/common/SectionBadge';
import { useState } from "react";

export default function Donate() {
  const [result, setResult] = useState("");
  const [fileName, setFileName] = useState<string>("");
  const [copied, setCopied] = useState(false);

  const pixKey = "61.696.288/0001-75";

  const handleCopy = () => {
    navigator.clipboard.writeText(pixKey);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    setFileName(file ? file.name : "");
  };

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        body: JSON.stringify({
          name: formData.get("name"),
          email: formData.get("email"),
          tel: formData.get("tel"),
          subject: "DOAÇÃO",
          message: `Solicitação de recibo de doação.\nMensagem: ${formData.get("message")}`,
          formType: "Doação",
        }),
        headers: {
          "Content-Type": "application/json",
        },
      });

      const data = await response.json();

      if (data.success) {
        setResult("Success!");
        form.reset();
        setFileName("");
      } else {
        setResult("Error");
      }

      setTimeout(() => setResult(""), 3000);
    } catch (error) {
      console.error(error);
      setResult("Error");
      setTimeout(() => setResult(""), 3000);
    }
  };

  return (
    <section className="relative w-full bg-neutral-50 mt-10 py-20 md:px-6 flex flex-col items-center justify-center" id="donations">
      <div className="relative z-10 w-full max-w-5xl px-3">
        {/* Cabeçalho */}
        <div className="text-center mb-16">
          <Badge text="Faça sua Doação" bgColor="bg-emerald-600/20" textColor="text-emerald-700" />
          <h2 className="text-4xl font-bold text-gray-900">Contribua com Nossa Causa</h2>
          <p className="mt-2 text-gray-700 max-w-2xl mx-auto">
            Você pode fazer sua doação pelo QR code abaixo ou através da chave Pix informada. Quer receber um recibo simples? Preencha o formulário e aguarde o contato da ONG solicitando o comprovante de doação.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl w-full">
          {/* Coluna 1 - QR Code */}
          <div className="flex flex-col items-center justify-center gap-6 bg-white shadow-md rounded-xl p-6 border border-gray-200 h-full">
            <h2 className="text-gray-700 font-medium mb-2 text-center">Doe pelo PIX</h2>
            <img src="/qrcode.png" alt="QR Code de Doação" className="w-60 h-60 object-contain" />
            <p className="text-gray-700 text-center">
              Escaneie o QR code acima ou copie a chave Pix abaixo para fazer sua doação de forma rápida e segura.
            </p>
            <div className="mt-4 flex flex-col sm:flex-row sm:items-center sm:justify-center gap-2 w-full">
              <input
                type="text"
                readOnly
                value={pixKey}
                className="border border-gray-300 rounded-lg px-2 py-2 text-sm text-gray-700 flex-1 w-full sm:w-auto text-center"
              />
              <button
                type="button"
                className="bg-emerald-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-emerald-700 transition w-full sm:w-auto"
                onClick={handleCopy}
              >
                {copied ? "Copiado!" : "Copiar"}
              </button>
            </div>
          </div>

          {/* Coluna 2 - Formulário */}
          <div className="bg-white shadow-md rounded-xl p-6 border border-gray-200 flex flex-col w-full">
            <form onSubmit={onSubmit} className="flex flex-col gap-5">
              <input type="hidden" name="formType" value="Doação" />
              <input type="hidden" name="_captcha" value="false" />
              <input type="hidden" name="_template" value="box" />

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Nome completo</label>
                <input
                  type="text"
                  name="name"
                  placeholder="Seu nome"
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-emerald-600 focus:outline-none text-gray-400 transition ease-in-out"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">E-mail</label>
                <input
                  type="email"
                  name="email"
                  placeholder="seuemail@exemplo.com"
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-emerald-600 focus:outline-none text-gray-400 transition ease-in-out"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Telefone</label>
                <input
                  type="tel"
                  name="tel"
                  placeholder="(99) 99999-9999"
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-emerald-600 focus:outline-none text-gray-400 transition ease-in-out"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Mensagem</label>
                <textarea
                  rows={5}
                  name="message"
                  placeholder="Desejo receber um recibo da doação."
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-emerald-600 focus:outline-none resize-none text-gray-400 transition ease-in-out"
                  required
                />
              </div>

              <button
                type="submit"
                className="text-white text-sm font-medium py-2 rounded-lg transition mt-4 cursor-pointer hover:brightness-90"
                style={{
                  background:
                    "linear-gradient(90deg, rgba(0,188,125,0.89) 0%, rgba(245,74,0,0.8) 50%, rgba(0,146,184,0.89) 100%)",
                }}
              >
                Solicitar Recibo
              </button>

              {result && (
                <p
                  className={`mt-2 text-center font-medium ${result === "Success!" ? "text-emerald-600" : "text-red-500"}`}
                >
                  {result === "Success!"
                    ? "Seu pedido de recibo foi enviado com sucesso! 🎉 Aguarde o contato da ONG para enviar o comprovante da doação."
                    : "Ops! Ocorreu um erro. Tente novamente."}
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
