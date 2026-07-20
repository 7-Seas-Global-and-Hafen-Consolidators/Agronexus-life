import Reveal from './Reveal'
import majorMitchell from '../assets/images/community-hub/major-mitchell.png'
import '../styles/CommunityHub.css'

const MEMBERS = [
  'Criadores',
  'Consumidores',
  'Veterinários',
  'Biólogos',
  'Pesquisadores',
  'Universidades',
  'Clubes',
  'Instituições',
  'Empresas',
]

const NETWORKS = [
  {
    number: '01',
    title: 'Aquarismo',
    text: 'Água doce, marinho, reef, aquários plantados, ciclídeos, invertebrados, clubes e especialistas.',
  },
  {
    number: '02',
    title: 'Avicultura responsável',
    text: 'Criadores legalizados, genética, manejo, canto, conservação, espécies ornamentais e troca de conhecimento.',
  },
  {
    number: '03',
    title: 'Répteis e terrários',
    text: 'Répteis, quelônios, terrários, manejo responsável, saúde, bem-estar e orientação especializada.',
  },
  {
    number: '04',
    title: 'Pequenos mamíferos',
    text: 'Furões, chinchilas, hedgehogs, alpacas, lhamas e outras espécies criadas com responsabilidade.',
  },
  {
    number: '05',
    title: 'Botânica',
    text: 'Plantas ornamentais, espécies raras, plantas carnívoras, coleções botânicas e biodiversidade vegetal.',
  },
]

export default function CommunityHub() {
  const scrollToContact = (event) => {
    event.preventDefault()

    const target = document.querySelector('#contato')

    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
      })
    }
  }

  return (
    <section
      id="comunidade"
      className="section community-hub"
    >
      <div className="container">
        <div className="community-hub__layout">
          <Reveal className="community-hub__visual">
            <div className="community-hub__image-wrap">
              <img
                src={majorMitchell}
                alt="Cacatua Major Mitchell representando a diversidade do AgroNexus Living Ecosystem"
                className="community-hub__image"
                loading="lazy"
              />

              <div
                className="community-hub__image-overlay"
                aria-hidden="true"
              />

              <div className="community-hub__image-caption">
                <span>AgroNexus Community</span>

                <strong>
                  Conhecimento, responsabilidade e pertencimento.
                </strong>
              </div>
            </div>
          </Reveal>

          <Reveal
            className="community-hub__content"
            delay={120}
          >
            <span className="eyebrow">
              AgroNexus Living Ecosystem™
            </span>

            <h2 className="community-hub__title">
              Muito além de um marketplace.
              <span className="hl-cyan">
                {' '}Uma comunidade internacional.
              </span>
            </h2>

            <p className="community-hub__lead">
              Um espaço para quem sonha em conhecer uma espécie,
              para quem já cria com responsabilidade e para quem deseja
              compartilhar conhecimento, experiências, boas práticas e
              novas possibilidades.
            </p>

            <p className="community-hub__statement">
              Aqui, curiosidade pode virar conhecimento.
              <strong> Conhecimento pode virar conexão.</strong>
            </p>

            <div className="community-hub__members">
              {MEMBERS.map((member) => (
                <span key={member}>
                  {member}
                </span>
              ))}
            </div>

            <div className="community-hub__actions">
              <a
                href="#contato"
                className="btn btn-primary"
                onClick={scrollToContact}
              >
                Quero fazer parte
                <span className="arrow">→</span>
              </a>

              <a
                href="https://www.instagram.com/agronexus.life?igsh=MW9pMXhtbW9xeWwy"
                className="btn btn-outline community-hub__social"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Acompanhar a AgroNexus no Instagram"
              >
                Instagram
              </a>

              <a
                href="https://www.facebook.com/share/1E93BrSr1w/"
                className="btn btn-outline community-hub__social"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Acompanhar a AgroNexus no Facebook"
              >
                Facebook
              </a>
            </div>
          </Reveal>
        </div>

        <div className="community-hub__networks">
          {NETWORKS.map((network, index) => (
            <Reveal
              className="community-hub__network"
              key={network.title}
              delay={160 + index * 80}
            >
              <span className="community-hub__network-number">
                {network.number}
              </span>

              <div>
                <h3>{network.title}</h3>
                <p>{network.text}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal
          className="community-hub__closing"
          delay={260}
        >
          <span>
            Descubra.
          </span>

          <span>
            Aprenda.
          </span>

          <span>
            Conecte-se.
          </span>

          <strong>
            Faça parte do ecossistema.
          </strong>
        </Reveal>
      </div>
    </section>
  )
}
