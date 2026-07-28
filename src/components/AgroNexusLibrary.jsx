import Reveal from './Reveal'
import '../styles/AgroNexusLibrary.css'

const GUIDE_URL =
  '/guides/agronexus-guia-oficial-periquito-australiano-v1.pdf'

const SUPPORT_URL =
  'https://www.asaas.com/c/u6toboa8xhqsmosv'

const GUIDE_DETAILS = [
  'História natural e comportamento',
  'Alimentação e manejo responsável',
  'Saúde, bem-estar e prevenção',
  'Reprodução, genética e desenvolvimento',
]

const FUTURE_COLLECTIONS = [
  'Aves ornamentais',
  'Aquarismo e vida aquática',
  'Pequenos mamíferos',
  'Botânica e biodiversidade',
]

export default function AgroNexusLibrary() {
  return (
    <section
      id="biblioteca"
      className="section agronexus-library"
      aria-labelledby="agronexus-library-title"
    >
      <div className="container">
        <Reveal className="agronexus-library__head">
          <span className="eyebrow">Biblioteca AgroNexus</span>

          <h2
            id="agronexus-library-title"
            className="agronexus-library__title"
          >
            Conhecimento que permanece.
            <span className="hl-cyan">
              {' '}Publicações que conectam.
            </span>
          </h2>

          <p className="agronexus-library__intro">
            Uma coleção editorial dedicada à biodiversidade, ciência,
            conservação, manejo responsável e bem-estar animal. O primeiro
            volume já está disponível para leitura e download gratuito.
          </p>
        </Reveal>

        <div className="agronexus-library__feature">
          <Reveal className="agronexus-library__cover-column">
            <div
              className="agronexus-library__cover"
              aria-label="Capa editorial do Guia Oficial AgroNexus sobre Periquito Australiano"
            >
              <div className="agronexus-library__cover-glow" aria-hidden="true" />

              <div className="agronexus-library__cover-top">
                <span>AGRONEXUS.LIFE</span>
                <small>PUBLICAÇÃO OFICIAL · VOLUME 01</small>
              </div>

              <div className="agronexus-library__cover-mark" aria-hidden="true">
                <span />
                <span />
                <span />
              </div>

              <div className="agronexus-library__cover-content">
                <p>GUIA OFICIAL</p>

                <h3>
                  Periquito
                  <br />
                  Australiano
                </h3>

                <span>
                  História natural, genética, comportamento, manejo,
                  saúde e bem-estar.
                </span>
              </div>

              <div className="agronexus-library__cover-footer">
                <strong>AgroNexus Living Ecosystem™</strong>
                <span>Biodiversidade · Ciência · Conexão Global</span>
              </div>
            </div>

            <div className="agronexus-library__volume">
              <span>VOLUME 01</span>
              <strong>Mais de 240 páginas</strong>
              <p>Formato digital · PDF</p>
            </div>
          </Reveal>

          <Reveal
            className="agronexus-library__content"
            delay={120}
          >
            <span className="agronexus-library__edition">
              Primeira publicação oficial
            </span>

            <h3>Guia Oficial AgroNexus</h3>

            <h4>Periquito Australiano</h4>

            <p className="agronexus-library__lead">
              Um material completo, desenvolvido para criadores,
              tutores, estudantes e apaixonados pela espécie. Conteúdo
              organizado com linguagem acessível, cuidado editorial e foco
              em criação responsável.
            </p>

            <div className="agronexus-library__details">
              {GUIDE_DETAILS.map((detail) => (
                <div
                  className="agronexus-library__detail"
                  key={detail}
                >
                  <span aria-hidden="true" />
                  <p>{detail}</p>
                </div>
              ))}
            </div>

            <div className="agronexus-library__actions">
              <a
                href={GUIDE_URL}
                className="btn btn-primary agronexus-library__download"
                target="_blank"
                rel="noopener noreferrer"
              >
                Baixar o guia gratuitamente
                <span className="arrow">→</span>
              </a>

              <a
                href={SUPPORT_URL}
                className="btn btn-outline agronexus-library__support"
                target="_blank"
                rel="noopener noreferrer"
              >
                Apoiar a AgroNexus
              </a>
            </div>

            <p className="agronexus-library__access-note">
              O download é gratuito. O apoio voluntário ajuda a manter
              novas publicações acessíveis para toda a comunidade.
            </p>
          </Reveal>
        </div>

        <div className="agronexus-library__support-panel">
          <Reveal className="agronexus-library__support-copy">
            <span className="eyebrow">Projeto independente</span>

            <h3>
              Cada guia nasce de pesquisa,
              <span className="hl-cyan">
                {' '}tempo e propósito.
              </span>
            </h3>

            <p>
              A Biblioteca AgroNexus foi criada para democratizar
              conhecimento confiável sobre biodiversidade. Quem encontra
              valor neste trabalho pode contribuir voluntariamente para a
              produção de novos guias, atlas e materiais educativos.
            </p>
          </Reveal>

          <Reveal
            className="agronexus-library__support-card"
            delay={120}
          >
            <span className="agronexus-library__support-label">
              Apoio voluntário sugerido
            </span>

            <strong>R$ 10</strong>

            <p>
              Toda contribuição ajuda a financiar pesquisa, edição,
              design, revisão e publicação de novos conteúdos gratuitos.
            </p>

            <a
              href={SUPPORT_URL}
              className="btn btn-primary"
              target="_blank"
              rel="noopener noreferrer"
            >
              Contribuir pelo Asaas
              <span className="arrow">→</span>
            </a>
          </Reveal>
        </div>

        <Reveal
          className="agronexus-library__future"
          delay={180}
        >
          <div className="agronexus-library__future-head">
            <span className="eyebrow">Próximas coleções</span>

            <h3>
              Uma biblioteca em
              <span className="hl-cyan">
                {' '}constante expansão.
              </span>
            </h3>
          </div>

          <div className="agronexus-library__future-grid">
            {FUTURE_COLLECTIONS.map((collection, index) => (
              <article
                className="agronexus-library__future-item"
                key={collection}
              >
                <span>
                  {String(index + 2).padStart(2, '0')}
                </span>

                <h4>{collection}</h4>

                <p>Em desenvolvimento editorial.</p>
              </article>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  )
}
