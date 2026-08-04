import '../styles/agro-hub.css'
import Hero from '../components/Hero'
import Mission from '../components/Mission'
import Portfolio from '../components/Portfolio'

const areas = [
  {
    title: 'Aves',
    subtitle: 'Psitacídeos e biodiversidade',
    description:
      'Espécies, genética, mutações, manejo responsável, criadores e conhecimento especializado.',
    href: '#/aves',
    number: '01',
  },
  {
    title: 'Aquarismo',
    subtitle: 'Ecossistemas de água doce e marinhos',
    description:
      'Peixes ornamentais, recifes, genética, equipamentos, conservação e bem-estar.',
    href: '#/aquarismo',
    number: '02',
  },
  {
    title: 'Mamíferos',
    subtitle: 'Criação e cuidado responsável',
    description:
      'Espécies, comportamento, saúde, genética, ambientes adequados e criadores responsáveis.',
    href: '#/mamiferos',
    number: '03',
  },
  {
    title: 'Marketplace',
    subtitle: 'Mercado responsável',
    description:
      'Criadores, produtos, serviços e conexões selecionadas dentro do ecossistema AgroNexus™.',
    href: '#/marketplace',
    number: '04',
  },
  {
    title: 'Biblioteca',
    subtitle: 'Conhecimento que orienta',
    description:
      'Guias, artigos, pesquisas, conteúdos técnicos e materiais educacionais especializados.',
    href: '#/biblioteca',
    number: '05',
  },
  {
    title: 'Comunidade',
    subtitle: 'Conexões que transformam',
    description:
      'Criadores, especialistas, instituições, clubes e apaixonados por biodiversidade.',
    href: '#/comunidade',
    number: '06',
  },
]

export default function Home() {
  return (
    <main>
      <Hero />

      <Mission />

      <section className="agro-hub" aria-labelledby="agro-hub-title">
        <div className="agro-hub__container">
          <header className="agro-hub__header">
            <span className="agro-hub__eyebrow">
              Living Ecosystem
            </span>

            <h2 id="agro-hub-title">
              Explore o ecossistema AgroNexus™
            </h2>

            <p>
              Cada área possui agora seu próprio ambiente. Mais organização,
              velocidade, profundidade e uma experiência muito melhor em
              computadores, tablets e celulares.
            </p>
          </header>

          <div className="agro-hub__grid">
            {areas.map((area) => (
              <a
                className="agro-hub__card"
                href={area.href}
                key={area.title}
              >
                <span className="agro-hub__number">
                  {area.number}
                </span>

                <div className="agro-hub__content">
                  <span className="agro-hub__subtitle">
                    {area.subtitle}
                  </span>

                  <h3>{area.title}</h3>

                  <p>{area.description}</p>

                  <span className="agro-hub__action">
                    Explorar área
                    <span aria-hidden="true">→</span>
                  </span>
                </div>
              </a>
            ))}
          </div>

          <div className="agro-hub__footer">
            <a href="#/presenca-global">
              Presença global
            </a>

            <a href="#/contato">
              Fale com a AgroNexus™
            </a>
          </div>
        </div>
      </section>

      <Portfolio />
    </main>
  )
}
