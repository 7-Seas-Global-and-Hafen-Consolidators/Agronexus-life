import React from "react";

export default function AgroNexusLibrary() {
  return (
    <section id="library" className="bg-[#02060B] text-[#F3F0E8] py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="uppercase tracking-[0.35em] text-[#D4AF37] text-sm">AgroNexus Living Ecosystem™</p>
          <h2 className="text-5xl font-bold mt-4">Biblioteca AgroNexus</h2>
          <p className="max-w-3xl mx-auto mt-6 text-lg text-gray-300 leading-8">
            Guias oficiais, atlas editoriais e publicações sobre biodiversidade.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <img
            src="/images/marketplace/periquitos/agronexus-guia-periquito-capa.png"
            alt="Guia Oficial"
            className="rounded-2xl shadow-2xl border border-[#D4AF37]/30"
          />

          <div>
            <span className="inline-block bg-[#D4AF37] text-black px-4 py-2 rounded-full text-sm font-bold">
              PRIMEIRA PUBLICAÇÃO OFICIAL
            </span>

            <h3 className="text-4xl font-bold mt-6">Guia Oficial AgroNexus</h3>
            <h4 className="text-2xl text-[#D4AF37] mt-3">Periquito Australiano</h4>

            <p className="mt-6 text-gray-300 leading-8">
              Mais de 240 páginas sobre história natural, comportamento,
              alimentação, saúde, bem-estar e criação responsável.
            </p>

            <div className="flex flex-wrap gap-4 mt-10">
              <a
                href="/guides/agronexus-guia-oficial-periquito-australiano-v1.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 rounded-xl bg-[#D4AF37] text-black font-bold">
                📖 Baixar Guia Gratuitamente
              </a>

              <a
                href="#contribuicao"
                className="px-8 py-4 rounded-xl border border-[#D4AF37] text-[#D4AF37] font-bold">
                Apoiar o Projeto
              </a>
            </div>
          </div>
        </div>

        <div id="contribuicao" className="mt-24 rounded-3xl border border-[#D4AF37]/30 bg-[#081522] p-10">
          <h3 className="text-3xl font-bold text-[#D4AF37]">Projeto Independente</h3>

          <p className="mt-6 leading-8 text-gray-300">
            Este guia foi criado com muita dedicação, pesquisa e carinho.
            Se ele foi útil para você, considere uma contribuição voluntária
            para que novos guias, atlas editoriais e materiais educativos
            continuem sendo produzidos gratuitamente.
          </p>

          <ul className="mt-8 space-y-2">
            <li>✔ Novas espécies</li>
            <li>✔ Pesquisa científica</li>
            <li>✔ Conservação</li>
            <li>✔ Conteúdo gratuito</li>
            <li>✔ Atlas Mundial da Biodiversidade</li>
          </ul>

          <p className="mt-8 text-xl"><strong>Valor sugerido:</strong> R$ 10</p>

          <a
            href="COLE_AQUI_O_LINK_DO_ASAAS"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-6 px-10 py-4 rounded-xl bg-[#D30935] text-white font-bold">
            💚 Apoiar a AgroNexus
          </a>
        </div>
      </div>
    </section>
  );
}
