"use client";

import CardWithButton from '@components/common/CardWithButton';
import Badge from '@components/common/SectionBadge';
import { BiDonateHeart } from 'react-icons/bi';
import { GoOrganization } from 'react-icons/go';
import { MdOutlineVolunteerActivism } from 'react-icons/md';

export default function Volunteer() {
  return (
    <section
      className="relative w-full bg-cover bg-center flex items-center justify-center bg-neutral-50 px-3"
      id='volunteer'
    >
      {/* Conteúdo central */}
      <div className="relative z-10 py-15 max-w-5xl text-center">
        <div className="text-center mb-16">
          <Badge text="Participe" bgColor='bg-brand-green/20' textColor='text-dark-green' />
          <h2 className="text-4xl font-bold text-gray-900">Faça Parte da Transformação</h2>
          <p className="mt-2 text-gray-700 max-w-2xl mx-auto">
            Existem diversas formas de contribuir com o Instituto São Joaquim e fazer a diferença na vida de dezenas de pessoas.
          </p>
        </div>

        {/* 3 Cards abaixo */}
        <div className="flex flex-col justify-center gap-6 mb-16">
          <div className="flex flex-col md:flex-row justify-center items-stretch gap-6">
            <CardWithButton
              icon={<MdOutlineVolunteerActivism className="w-12 h-12 fill-dark-green" />}
              title="Voluntariado"
              text="Doe seu tempo e talento para fazer a diferença. Temos oportunidades em diversas áreas."
              bgColor='bg-light-green/10'
              borderColor='border-dark-green/30'
              textButton='Seja Voluntário'
              textColorButton='text-white'
              bgButton='bg-dark-green'
              href='/volunteers/volunteer'
            />


            <CardWithButton
              icon={<GoOrganization className="w-12 h-12 fill-dark-orange" />}
              title="Parcerias Corporativas"
              text="Empresas que acreditam na responsabilidade social podem ser nossas parceiras."
              bgColor='bg-light-orange/10'
              borderColor='border-dark-orange/30'
              textButton='Seja Parceiro'
              textColorButton='text-white'
              bgButton='bg-dark-orange'
              href='/volunteers/corporate-collaborations'
            />

            <CardWithButton
              icon={<BiDonateHeart className="w-12 h-12 fill-dark-blue" />}
              title="Doações"
              text="Sua contribuição financeira nos ajuda a ampliar nosso impacto e alcançar mais pessoas."
              bgColor='bg-light-blue/10'
              borderColor='border-dark-blue/30'
              textButton='Doar Agora'
              textColorButton='text-white'
              bgButton='bg-dark-blue'
              href='/donate'
            />
          </div>
        </div>
      </div>
    </section>
  );
}
