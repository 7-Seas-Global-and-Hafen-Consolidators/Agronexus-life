export default function LivingEcosystem() {
  const ecosystems = [
    {
      title: "Genética Animal",
      icon: "🐾",
      text: "Criadores, especialistas e apaixonados por cães, gatos, aves, equinos e espécies selecionadas conectados através do conhecimento e responsabilidade."
    },
    {
      title: "Aquarismo & Reef",
      icon: "🌊",
      text: "Uma comunidade para aquaristas, clubes reef, criadores, lojas especializadas e amantes da vida aquática."
    },
    {
      title: "Plantas & Biodiversidade",
      icon: "🌿",
      text: "Orquídeas, plantas raras, espécies tropicais, frutíferas e coleções botânicas conectando produtores e colecionadores."
    },
    {
      title: "Agro & Genética",
      icon: "🐄",
      text: "Produtores, criadores e especialistas em genética animal e vegetal conectados ao mercado nacional e internacional."
    },
    {
      title: "Veterinários & Biólogos",
      icon: "👩‍⚕️",
      text: "Uma rede de profissionais dedicados ao cuidado, pesquisa, conservação e bem-estar dos organismos vivos."
    },
    {
      title: "Marketplace Responsável",
      icon: "🌎",
      text: "Conectando criadores, compradores e especialistas com transparência, conhecimento e responsabilidade."
    }
  ];

  return (
    <section className="living-ecosystem">

      <div className="ecosystem-header">
        <span>AGRONEXUS LIVING ECOSYSTEM™</span>

        <h2>
          Onde vida, ciência e pessoas
          <br />
          encontram conexão global.
        </h2>

        <p>
          Um ecossistema que conecta criadores, especialistas,
          pesquisadores, produtores e consumidores através da
          biodiversidade, genética e conhecimento.
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
