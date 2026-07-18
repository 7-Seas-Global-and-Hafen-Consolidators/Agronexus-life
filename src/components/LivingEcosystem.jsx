export default function LivingEcosystem() {

  const ecosystems = [
    {
      title: "Genética Animal",
      icon: "🧬",
      text: "Conectando criadores, especialistas e apaixonados por cães, gatos, aves, equinos e espécies selecionadas através do conhecimento, responsabilidade e preservação de linhagens."
    },
    {
      title: "Aquarismo & Reef",
      icon: "🐠",
      text: "Um espaço para aquaristas, clubes reef, criadores, lojas especializadas e amantes da vida aquática compartilharem conhecimento, experiências e biodiversidade."
    },
    {
      title: "Botânica & Biodiversidade",
      icon: "🌱",
      text: "Orquídeas, plantas raras, espécies tropicais, árvores frutíferas e coleções botânicas conectando produtores, biólogos e apaixonados pela natureza."
    },
    {
      title: "Agro & Genética",
      icon: "🌎",
      text: "Produtores, criadores e especialistas em genética animal e vegetal conectados ao mercado nacional e internacional com responsabilidade e rastreabilidade."
    },
    {
      title: "Veterinários & Biólogos",
      icon: "🩺",
      text: "Uma rede de profissionais dedicados ao cuidado animal, pesquisa científica, conservação, saúde vegetal e equilíbrio dos ecossistemas."
    },
    {
      title: "Criadores & Consumidores",
      icon: "🤝",
      text: "Conectando pessoas que procuram espécies, plantas e conhecimento aos criadores e produtores responsáveis dentro do mercado brasileiro."
    },
    {
      title: "Marketplace Responsável",
      icon: "🌿",
      text: "Uma ponte segura entre criadores, compradores, especialistas e empresas, valorizando transparência, conhecimento e comércio consciente."
    },
    {
      title: "Conservação Global",
      icon: "🌍",
      text: "Projetos, instituições e especialistas conectados para preservar biodiversidade e construir um futuro sustentável para as próximas gerações."
    }
  ];


  return (
    <section className="living-ecosystem">

      <div className="ecosystem-header">

        <span>
          AGRONEXUS LIVING ECOSYSTEM™
        </span>

        <h2>
          Onde vida, ciência e pessoas
          <br />
          encontram conexão.
        </h2>

        <p>
          Um ecossistema vivo que aproxima criadores,
          consumidores, especialistas, pesquisadores e empresas
          através da biodiversidade, genética e conhecimento.
        </p>

      </div>


      <div className="ecosystem-grid">

        {ecosystems.map((item, index) => (

          <article
            className="ecosystem-card"
            key={index}
          >

            <div className="ecosystem-icon">
              {item.icon}
            </div>


            <h3>
              {item.title}
            </h3>


            <p>
              {item.text}
            </p>


          </article>

        ))}

      </div>


    </section>
  );
}
