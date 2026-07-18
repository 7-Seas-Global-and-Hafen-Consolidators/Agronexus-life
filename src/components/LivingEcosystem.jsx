import geneticaAnimal from '../assets/images/living-ecosystem/Genetica-animal1.png'
import aquarismoReef from '../assets/images/living-ecosystem/Aquarismo & Reef.png'
import botanicaBiodiversidade from '../assets/images/living-ecosystem/Botanica & Biodiversidade.png'
import agroGenetica from '../assets/images/living-ecosystem/Agro & Genetica.png'
import veterinariosBiologos from '../assets/images/living-ecosystem/Veterinarios & Biologos.png'
import criadoresConsumidores from '../assets/images/living-ecosystem/Criadores & Consumidores.png'
import marketplaceResponsavel from '../assets/images/living-ecosystem/Marketplace responsavel.png'
import conservacaoGlobal from '../assets/images/living-ecosystem/Conservação Global.png'

export default function LivingEcosystem() {
  const ecosystems = [
    {
      title: 'Genética Animal',
      image: geneticaAnimal,
      text: 'Conectando criadores, especialistas e apaixonados por cães, gatos, aves, equinos e espécies selecionadas através do conhecimento, responsabilidade e preservação de linhagens.',
    },
    {
      title: 'Aquarismo & Reef',
      image: aquarismoReef,
      text: 'Um espaço para aquaristas, clubes reef, criadores, lojas especializadas e amantes da vida aquática compartilharem conhecimento, experiências e biodiversidade.',
    },
    {
      title: 'Botânica & Biodiversidade',
      image: botanicaBiodiversidade,
      text: 'Orquídeas, plantas raras, espécies tropicais, árvores frutíferas e coleções botânicas conectando produtores, biólogos e apaixonados pela natureza.',
    },
    {
      title: 'Agro & Genética',
      image: agroGenetica,
      text: 'Produtores, criadores e especialistas em genética animal e vegetal conectados ao mercado nacional e internacional com responsabilidade e rastreabilidade.',
    },
    {
      title: 'Veterinários & Biólogos',
      image: veterinariosBiologos,
      text: 'Uma rede de profissionais dedicados ao cuidado animal, pesquisa científica, conservação, saúde vegetal e equilíbrio dos ecossistemas.',
    },
    {
      title: 'Criadores & Consumidores',
      image: criadoresConsumidores,
      text: 'Conectando pessoas que procuram espécies, plantas e conhecimento aos criadores e produtores responsáveis dentro do mercado brasileiro.',
    },
    {
      title: 'Marketplace Responsável',
      image: marketplaceResponsavel,
      text: 'Uma ponte segura entre criadores, compradores, especialistas e empresas, valorizando transparência, conhecimento e comércio consciente.',
    },
    {
      title: 'Conservação Global',
      image: conservacaoGlobal,
      text: 'Projetos, instituições e especialistas conectados para preservar biodiversidade e construir um futuro sustentável para as próximas gerações.',
    },
  ]

  return (
    <section className="living-ecosystem">
      <div className="ecosystem-header">
        <span>AGRONEXUS LIVING ECOSYSTEM™</span>

        <h2>
          Onde vida, ciência e pessoas
          <br />
          encontram conexão.
        </h2>

        <p>
          Um ecossistema vivo que aproxima criadores, consumidores,
          especialistas, pesquisadores e empresas através da biodiversidade,
          genética e conhecimento.
        </p>
      </div>

      <div className="ecosystem-grid">
        {ecosystems.map((item) => (
          <article className="ecosystem-card" key={item.title}>
            <div className="ecosystem-card__image">
              <img src={item.image} alt={item.title} loading="lazy" />
            </div>

            <div className="ecosystem-card__content">
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
