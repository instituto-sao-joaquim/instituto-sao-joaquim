"use client";

import Badge from '@components/common/SectionBadge';
import { EnvelopeIcon, MapPinIcon, PhoneIcon } from "@heroicons/react/24/outline";
import { useState } from "react";
import { FaInstagram, FaLinkedin, FaWhatsapp } from "react-icons/fa";

export default function Contact() {
  const [result, setResult] = useState("");

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);

    formData.append("_captcha", "false");
    formData.append("_template", "box");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        body: JSON.stringify({
          name: formData.get("name"),
          email: formData.get("email"),
          tel: formData.get("tel"),
          subject: formData.get("subject"),
          message: formData.get("message"),
          formType: formData.get("formType"),
        }),
        headers: {
          "Content-Type": "application/json",
        },
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

  return (
    <section
      className="relative w-full bg-neutral-50 mt-10 py-20 px-3 flex flex-col items-center justify-center"
      id="contato"
    >
      <div className="relative z-10 w-full max-w-5xl">
        {/* Cabeçalho */}
        <div className="text-center mb-16">
          <Badge text="Entre em Contato" bgColor="bg-cyan-600/20" textColor="text-cyan-700" />
          <h2 className="text-4xl font-bold text-gray-900">Vamos Conversar?</h2>
          <p className="mt-2 text-gray-700 max-w-2xl mx-auto">
            Tem alguma dúvida ou quer saber como pode contribuir? Entre em contato conosco!
          </p>
        </div>

        {/* Duas colunas com altura igual */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl w-full items-stretch content-stretch min-h-[500px]">
          {/* Coluna 1 - Informações */}
          <div className="flex flex-col justify-between h-full">
            <div className="space-y-6">
              {/* Endereço */}
              <div className="flex items-start gap-3">
                <div className="flex items-center justify-center w-10 h-10 rounded-2xl bg-emerald-600">
                  <MapPinIcon className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h2 className="text-gray-700 font-medium">Endereço</h2>
                  <p className="text-gray-500 text-sm">
                    Rua Pedro Dantas, 335 <br /> Dias Macedo, Fortaleza, CE <br />
                    CEP: 60860-150
                  </p>
                </div>
              </div>

              {/* Telefone */}
              <div className="flex items-center gap-3">
                <div className="flex items-center justify-center w-10 h-10 rounded-2xl bg-orange-500">
                  <PhoneIcon className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h2 className="text-gray-700 font-medium">Telefone</h2>
                  <a
                    href="tel:+5585994118816"
                    className="text-gray-500 text-sm hover:text-emerald-600 transition"
                  >
                    (85) 99411-8816
                  </a>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-center gap-3">
                <div className="flex items-center justify-center w-10 h-10 rounded-2xl bg-cyan-600">
                  <EnvelopeIcon className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h2 className="text-gray-700 font-medium">E-mail</h2>
                  <a
                    href="mailto:institutosaojoaquim.isj@gmail.com"
                    className="text-gray-500 text-sm hover:text-emerald-600 transition"
                  >
                    institutosaojoaquim.isj@gmail.com
                  </a>
                </div>
              </div>
            </div>

            {/* Redes sociais + Horário juntos ao final */}
            <div className="space-y-6 mt-8">
              <div className="p-5 bg-orange-50/40 border border-cyan-600/30 rounded-xl">
                <h2 className="text-gray-700 font-medium mb-2">Nossas Redes Sociais</h2>
                <div className="flex gap-4">
                  <a
                    href="https://www.instagram.com/institutosaojoaquimm/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="border border-cyan-600/30 p-2 rounded-full text-gray-700 hover:bg-emerald-600 hover:text-white transition ease-in-out"
                    aria-label="Instagram"
                  >
                    <FaInstagram className="w-5 h-5" />
                  </a>

                  <a
                    href="https://wa.me/5585994118816"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="border border-cyan-600/30 p-2 rounded-full text-gray-700 hover:bg-orange-500 hover:text-white transition ease-in-out"
                    aria-label="WhatsApp"
                  >
                    <FaWhatsapp className="w-5 h-5" />
                  </a>

                  <a
                    href="https://www.linkedin.com/company/institutosaojoaquim"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="border border-cyan-600/30 p-2 rounded-full text-gray-700 hover:bg-orange-500 hover:text-white transition ease-in-out"
                    aria-label="LinkedIn"
                  >
                    <FaLinkedin className="w-5 h-5" />
                  </a>
                </div>
              </div>

              <div className="p-5 bg-cyan-50/40 border border-cyan-600/30 rounded-xl">
                <h2 className="text-gray-700 font-medium mb-2">Horário de Atendimento</h2>
                <p className="text-gray-500 text-sm">Segunda a Sexta: 8h às 11h e 14h às 17h</p>
                <p className="text-gray-500 text-sm">Sábado: Fechado</p>
                <p className="text-gray-500 text-sm">Domingo: Fechado</p>
              </div>
            </div>
          </div>

          {/* Coluna 2 - Formulário */}
          <div className="bg-white shadow-md rounded-xl p-4 md:p-8 border border-gray-200 flex flex-col justify-between h-full">
            <form onSubmit={onSubmit} className="flex flex-col gap-5 h-full">
              <input type="hidden" name="formType" value="Contato" />
              <input type="hidden" name="_captcha" value="false" />
              <input type="hidden" name="_template" value="box" />
              <div>
                {/* Nome completo */}
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

              {/* Assunto */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Assunto</label>
                <input
                  type="text"
                  name="subject"
                  placeholder="Sobre o que deseja falar?"
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-emerald-600 focus:outline-none text-gray-400 transition ease-in-out"
                />
              </div>

              {/* Mensagem */}
              <div className="max-h-20">
                <label className="block text-sm font-medium text-gray-700 mb-1">Mensagem</label>
                <textarea
                  rows={5}
                  name="message"
                  placeholder="Escreva sua mensagem..."
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-emerald-600 focus:outline-none resize-none h-full text-gray-400 transition ease-in-out"
                  required
                />
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
                Enviar Mensagem
              </button>

              {/* Feedback */}
              {result && (
                <p
                  className={`mt-2 text-center font-medium ${result === "Success!" ? "text-emerald-600" : "text-red-500"
                    }`}
                >
                  {result === "Success!"
                    ? "Sua mensagem foi enviada com sucesso! 🎉"
                    : "Ops! Ocorreu um erro ao enviar a mensagem. Tente novamente."}
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
