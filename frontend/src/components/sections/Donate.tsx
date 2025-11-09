"use client";

import { useState } from "react";
import { FiPaperclip } from "react-icons/fi";
import { Badge } from "../";

export default function Donate() {
  const [result, setResult] = useState("");

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);

    // Adicione a chave de acesso do Web3Forms
    formData.append("access_key", process.env.NEXT_PUBLIC_API_FORM as string);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });
      const data = await response.json();

      if (data.success) {
        setResult("Success!");
        form.reset();
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

  const [copied, setCopied] = useState(false);

  const pixKey = "institutosaojoaquim.isj@gmail.com";

  const handleCopy = () => {
    navigator.clipboard.writeText(pixKey);
    setCopied(true);

    // Reseta o estado após 2 segundos
    setTimeout(() => setCopied(false), 2000);
  };

  const [fileName, setFileName] = useState<string>("");

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setFileName(file.name);
    } else {
      setFileName("");
    }
  };

  return (
    <section
      className="relative w-full bg-neutral-50 mt-10 py-20 md:px-6 flex flex-col items-center justify-center"
      id="donations"
    >
      <div className="relative z-10 w-full max-w-5xl">
        {/* Cabeçalho */}
        <div className="text-center mb-16">
          <Badge text="Faça sua Doação" bgColor="bg-emerald-600/20" textColor="text-emerald-700" />
          <h2 className="text-4xl font-bold text-gray-900">Contribua com Nossa Causa</h2>
          <p className="mt-2 text-gray-700 max-w-2xl mx-auto">
            Você pode fazer sua doação pelo QR code abaixo. Quer receber um recibo simples? Preencha o formulário!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl w-full items-stretch content-stretch min-h-[500px]">
          {/* Coluna 1 - QR Code */}
          <div className="flex flex-col items-center justify-center gap-6 bg-white shadow-md rounded-xl p-6 border border-gray-200 h-full">
            <h2 className="text-gray-700 font-medium mb-2 text-center">Doe pelo PIX</h2>

            <img
              src="/qrcode.png"
              alt="QR Code de Doação"
              className="w-60 h-60 object-contain"
            />

            <p className="text-gray-700 text-center">
              Escaneie o QR code acima para fazer sua doação de forma rápida e segura.
            </p>

            {/* Chave PIX */}
            <div className="mt-4 flex flex-col sm:flex-row sm:items-center sm:justify-center gap-2 w-full">
              <input
                type="text"
                readOnly
                value={pixKey}
                className="border border-gray-300 rounded-lg px-2 py-2 text-sm text-gray-700 flex-1 w-full sm:w-auto text-center"
              />
              <button
                className="bg-emerald-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-emerald-700 transition w-full sm:w-auto"
                onClick={handleCopy}
              >
                {copied ? "Copiado!" : "Copiar"}
              </button>
            </div>
          </div>

          {/* Coluna 2 - Formulário de Recibo */}
          <div className="bg-white shadow-md rounded-xl p-6 border border-gray-200 flex flex-col justify-between h-full w-full">
            <form onSubmit={onSubmit} className="flex flex-col gap-5 h-full">
              {/* Nome completo */}
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

              {/* Email */}
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

              {/* Telefone */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Telefone</label>
                <input
                  type="tel"
                  name="tel"
                  placeholder="(99) 99999-9999"
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-emerald-600 focus:outline-none text-gray-400 transition ease-in-out"
                />
              </div>

              {/* Upload do comprovante */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Comprovante da Doação
                </label>

                <div className="relative">
                  {/* Input invisível */}
                  <input
                    type="file"
                    id="receipt"
                    name="receipt"
                    accept="image/*,.pdf"
                    className="hidden"
                    onChange={handleFileChange}
                    required
                  />

                  {/* Botão estilizado */}
                  <label
                    htmlFor="receipt"
                    className="w-full inline-flex items-center justify-center px-4 py-2 bg-emerald-600 text-white font-medium rounded-lg shadow-sm hover:bg-emerald-700 transition cursor-pointer text-sm"
                  >
                    <FiPaperclip className="w-5 h-5 mr-2" />
                    {fileName ? "Trocar arquivo" : "Selecionar arquivo"}
                  </label>

                  {/* Nome do arquivo (caso tenha) */}
                  {fileName && (
                    <p className="mt-2 text-sm text-gray-600 truncate">
                      <span className="font-medium text-emerald-700">Arquivo:</span>{" "}
                      {fileName}
                    </p>
                  )}
                </div>
              </div>

              {/* Botão */}
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

              {/* Feedback */}
              {result && (
                <p
                  className={`mt-2 text-center font-medium ${result === "Success!" ? "text-emerald-600" : "text-red-500"
                    }`}
                >
                  {result === "Success!"
                    ? "Seu pedido de recibo foi enviado com sucesso! 🎉"
                    : "Ops! Ocorreu um erro. Tente novamente."}
                </p>
              )}
            </form>
          </div>
        </div>
        <p className="text-gray-500 text-sm text-justify mt-4">
          *No momento, as doações estão sendo recebidas temporariamente pela coordenadora administrativa da ONG, Tatiana Araújo de Sousa. Todas as contribuições serão integralmente destinadas aos projetos da instituição. Em breve, a conta oficial da ONG estará ativa.
        </p>
      </div>
    </section>
  );
}
