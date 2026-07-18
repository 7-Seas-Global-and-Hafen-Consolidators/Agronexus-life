export default function LivingEcosystem() {
  const categories = [
    {
      title: "Genética Animal",
      description:
        "Conectando criadores, especialistas e apaixonados por cães, gatos, aves, equinos e espécies selecionadas.",
      icon: "🐾",
    },
    {
      title: "Aquarismo & Reef",
      description:
        "Uma comunidade para aquaristas, clubes reef, criadores, lojas especializadas e amantes da vida aquática.",
      icon: "🌊",
    },
    {
      title: "Plantas & Biodiversidade",
      description:
        "Orquídeas, plantas raras, frutíferas e coleções botânicas conectando produtores e colecionadores.",
      icon: "🌿",
    },
    {
      title: "Agro & Genética",
      description:
        "Pecuária, aves, genética premium e produtores conectados ao mercado nacional.",
      icon: "🐄",
    },
    {
      title: "Veterinários & Biólogos",
      description:
        "Uma rede de profissionais dedicados ao cuidado, pesquisa e preservação da vida.",
      icon: "👩‍⚕️",
    },
    {
      title: "Marketplace Responsável",
      description:
        "Criadores, compradores e especialistas conectados com transparência e conhecimento.",
      icon: "🌎",
    },
  ];

  return (
    <section className="living-ecosystem">
      <h2>AGRONEXUS LIVING ECOSYSTEM™</h2>

      <p>
        Um ecossistema que conecta genética, biodiversidade, conhecimento e pessoas.
      </p>

      <div className="ecosystem-grid">
        {categories.map((item, index) => (
          <div className="ecosystem-card" key={index}>
            <div className="ecosystem-icon">{item.icon}</div>

            <h3>{item.title}</h3>

            <p>{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
