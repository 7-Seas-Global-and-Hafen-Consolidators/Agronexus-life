import { useState } from 'react'
import Reveal from './Reveal'
import '../styles/GlobalPresence.css'

/*
 * AgroNexus — Atlas Vivo da Biodiversidade
 *
 * Esta seção conecta países, espécies, conhecimento,
 * criadores responsáveis e pessoas interessadas.
 *
 * As imagens editoriais dos países ficam em:
 * public/images/countries/
 *
 * A disponibilidade de espécies regulamentadas depende
 * de origem comprovada, documentação aplicável e atuação
 * de criadores ou estabelecimentos autorizados.
 */

const COUNTRIES = [
  {
    code: 'BR',
    name: 'Brasil',
    region: 'América do Sul',
    position: {
      left: '31%',
      top: '68%',
    },
    image: '/images/countries/agronexus-brazil-world-biodiversity-atlas.webp',
    imageAlt:
      'Composição editorial da biodiversidade brasileira com arara-canindé, acará-disco e orquídea',
    headline:
      'Florestas, rios e uma das maiores diversidades biológicas do planeta.',
    introduction:
      'Uma viagem por aves, peixes ornamentais, plantas tropicais, polinizadores e ecossistemas presentes nos diferentes biomas brasileiros.',
    species: [
      {
        type: 'Ave',
        commonName: 'Arara-canindé',
        scientificName: 'Ara ararauna',
      },
      {
        type: 'Peixe',
        commonName: 'Acará-disco',
        scientificName: 'Symphysodon spp.',
      },
      {
        type: 'Planta',
        commonName: 'Orquídea Cattleya',
        scientificName: 'Cattleya spp.',
      },
    ],
  },
  {
    code: 'AU',
    name: 'Austrália',
    region: 'Oceania',
    position: {
      left: '84%',
      top: '73%',
    },
    image: '/images/countries/agronexus-australia-world-biodiversity-atlas.webp',
    imageAlt:
      'Composição editorial da biodiversidade australiana com calopsita, rosela e banksia',
    headline:
      'Um continente de aves ornamentais, flora singular e paisagens extremas.',
    introduction:
      'A Austrália reúne aves mundialmente conhecidas, plantas nativas extraordinárias e ecossistemas encontrados em poucas outras regiões.',
    species: [
      {
        type: 'Ave',
        commonName: 'Calopsita',
        scientificName: 'Nymphicus hollandicus',
      },
      {
        type: 'Ave',
        commonName: 'Rosela',
        scientificName: 'Platycercus spp.',
      },
      {
        type: 'Planta',
        commonName: 'Banksia',
        scientificName: 'Banksia spp.',
      },
    ],
  },
  {
    code: 'JP',
    name: 'Japão',
    region: 'Ásia',
    position: {
      left: '87%',
      top: '38%',
    },
    image: '/images/countries/agronexus-japan-world-biodiversity-atlas.webp',
    imageAlt:
      'Composição editorial da biodiversidade japonesa com carpa ornamental, medaka e cerejeira',
    headline:
      'Tradição, seleção ornamental e uma relação profunda com a natureza.',
    introduction:
      'Peixes ornamentais, jardins e técnicas de cultivo transformaram a biodiversidade japonesa em referência internacional.',
    species: [
      {
        type: 'Peixe',
        commonName: 'Nishikigoi',
        scientificName: 'Cyprinus carpio',
      },
      {
        type: 'Peixe',
        commonName: 'Medaka',
        scientificName: 'Oryzias latipes',
      },
      {
        type: 'Planta',
        commonName: 'Cerejeira',
        scientificName: 'Prunus spp.',
      },
    ],
  },
  {
    code: 'MG',
    name: 'Madagascar',
    region: 'África',
    position: {
      left: '60%',
      top: '72%',
    },
    image: '/images/countries/agronexus-madagascar-world-biodiversity-atlas.webp',
    imageAlt:
      'Composição editorial da biodiversidade de Madagascar com camaleão, baobá e floresta insular',
    headline:
      'Uma ilha marcada por espécies singulares e elevado endemismo.',
    introduction:
      'Madagascar revela como o isolamento geográfico pode produzir formas de vida únicas, paisagens extraordinárias e histórias de conservação.',
    species: [
      {
        type: 'Réptil',
        commonName: 'Camaleões de Madagascar',
        scientificName: 'Chamaeleonidae',
      },
      {
        type: 'Planta',
        commonName: 'Baobás',
        scientificName: 'Adansonia spp.',
      },
      {
        type: 'Ecossistema',
        commonName: 'Florestas insulares',
        scientificName: 'Biodiversidade endêmica',
      },
    ],
  },
]

const PRINCIPLES = [
  'Conhecimento',
  'Origem responsável',
  'Bem-estar',
  'Conservação',
  'Ciência',
  'Comércio legal',
]

export default function GlobalPresence() {
  const [selectedCountryCode, setSelectedCountryCode] = useState('BR')
  const [mapLoaded, setMapLoaded] = useState(true)

  const selectedCountry =
    COUNTRIES.find(
      (country) => country.code === selectedCountryCode,
    ) || COUNTRIES[0]

  return (
    <section
      id="presenca-global"
      className="section global-presence"
    >
      <div className="container">
        <Reveal className="global-presence__head">
          <span className="eyebrow center">
            Atlas Vivo AgroNexus
          </span>

          <h2 className="global-presence__title">
            Explore o planeta através da
            <span className="hl-cyan">
              {' '}biodiversidade.
            </span>
          </h2>

          <p className="global-presence__lead">
            Cada país guarda espécies, ecossistemas, conhecimentos e
            histórias próprias. Selecione um destino e descubra parte
            da sua identidade natural.
          </p>
        </Reveal>

        <div className="global-presence__layout">
          <Reveal
            className="global-presence__map-card"
            delay={100}
          >
            <div
              className={`global-presence__map ${
                !mapLoaded
                  ? 'global-presence__map--fallback'
                  : ''
              }`}
              aria-label="Mapa-múndi interativo do Atlas Vivo AgroNexus"
            >
              <img
                className="global-presence__map-image"
                src="/images/maps/world-map-editorial.webp"
                alt=""
                aria-hidden="true"
                onError={() => setMapLoaded(false)}
              />

              <div
                className="global-presence__map-shade"
                aria-hidden="true"
              />

              <div className="global-presence__map-copy">
                <span>
                  AgroNexus World Biodiversity Atlas
                </span>

                <strong>
                  Escolha um país para iniciar a jornada
                </strong>
              </div>

              <div className="global-presence__markers">
                {COUNTRIES.map((country) => {
                  const isActive =
                    country.code === selectedCountry.code

                  return (
                    <button
                      type="button"
                      className={`global-presence__marker ${
                        isActive
                          ? 'global-presence__marker--active'
                          : ''
                      }`}
                      key={country.code}
                      style={country.position}
                      aria-pressed={isActive}
                      aria-label={`Explorar a biodiversidade de ${country.name}`}
                      onClick={() =>
                        setSelectedCountryCode(country.code)
                      }
                    >
                      <span
                        className="global-presence__marker-ring"
                        aria-hidden="true"
                      />

                      <span className="global-presence__marker-code">
                        {country.code}
                      </span>

                      <span className="global-presence__marker-name">
                        {country.name}
                      </span>
                    </button>
                  )
                })}
              </div>

              <div className="global-presence__map-footer">
                <span>Primeira expedição</span>

                <strong>
                  {COUNTRIES.length} destinos em destaque
                </strong>
              </div>
            </div>
          </Reveal>

          <div
            className="global-presence__content"
            aria-live="polite"
          >
            <Reveal
              className="global-presence__country"
              delay={140}
              key={`country-${selectedCountry.code}`}
            >
              <div className="global-presence__country-image">
                <img
                  src={selectedCountry.image}
                  alt={selectedCountry.imageAlt}
                  onError={(event) => {
                    event.currentTarget.style.display = 'none'
                    event.currentTarget
                      .closest('.global-presence__country-image')
                      ?.classList.add(
                        'global-presence__country-image--fallback',
                      )
                  }}
                />

                <div className="global-presence__country-overlay">
                  <span>{selectedCountry.region}</span>
                  <strong>{selectedCountry.name}</strong>
                </div>
              </div>

              <div className="global-presence__country-body">
                <span className="global-presence__country-kicker">
                  Identidade natural
                </span>

                <h3>{selectedCountry.headline}</h3>
                <p>{selectedCountry.introduction}</p>
              </div>
            </Reveal>

            <div
              className="global-presence__species"
              key={`species-${selectedCountry.code}`}
            >
              {selectedCountry.species.map((species, index) => (
                <Reveal
                  className="global-presence__species-card"
                  key={`${selectedCountry.code}-${species.commonName}`}
                  delay={180 + index * 80}
                >
                  <span className="global-presence__species-number">
                    {String(index + 1).padStart(2, '0')}
                  </span>

                  <div>
                    <span className="global-presence__species-type">
                      {species.type}
                    </span>

                    <h4>{species.commonName}</h4>

                    <p>
                      <em>{species.scientificName}</em>
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>

            <Reveal
              className="global-presence__responsibility"
              delay={260}
              key={`responsibility-${selectedCountry.code}`}
            >
              <span className="global-presence__responsibility-label">
                Conexão responsável
              </span>

              <p>
                Espécies regulamentadas podem ser disponibilizadas por
                criadores e estabelecimentos autorizados, com origem
                comprovada e documentação aplicável.
              </p>

              <strong>
                Conhecimento para quem compra. Espaço para quem cria
                com responsabilidade.
              </strong>
            </Reveal>
          </div>
        </div>

        <Reveal
          className="global-presence__pillars"
          delay={300}
        >
          <span className="global-presence__pillars-label">
            Compromissos do ecossistema
          </span>

          <div className="global-presence__pillars-list">
            {PRINCIPLES.map((principle) => (
              <span key={principle}>
                {principle}
              </span>
            ))}
          </div>
        </Reveal>

        <Reveal
          className="global-presence__closing"
          delay={340}
        >
          <p>
            Primeiro o conhecimento.
            <span> Depois, a conexão.</span>
          </p>
        </Reveal>
      </div>
    </section>
  )
}
