import Reveal from './Reveal'
import '../styles/CommunityHub.css'

export default function CommunityHub() {
  return (
    <section className="section community-hub">
      <div className="container">

        <Reveal className="community-hub__inner">

          <span className="eyebrow">
            AgroNexus Living Ecosystem™
          </span>

          <h2 className="community-hub__title">
            Muito além de um marketplace.
            <br />
            <span className="hl-cyan">
              Uma comunidade internacional.
            </span>
          </h2>

          <p className="community-hub__lead">
            A AgroNexus conecta criadores, consumidores,
            veterinários, pesquisadores, universidades,
            instituições, clubes e empresas que acreditam
            em uma biodiversidade responsável, colaborativa
            e global.
          </p>

          <div className="community-hub__members">

            <span>Criadores</span>

            <span>Consumidores</span>

            <span>Veterinários</span>

            <span>Pesquisadores</span>

            <span>Universidades</span>

            <span>Clubes</span>

            <span>Instituições</span>

            <span>Empresas</span>

          </div>

        </Reveal>

      </div>
    </section>
  )
}
