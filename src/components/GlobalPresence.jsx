import { useState } from 'react'
import Reveal from './Reveal'
import '../styles/GlobalPresence.css'

/*
 * AgroNexus — Explorador Mundial da Biodiversidade
 *
 * IMPORTANTE:
 * - Esta seção possui finalidade editorial e educativa.
 * - A presença de uma espécie não representa autorização de criação,
 *   aquisição, transporte, reprodução ou comercialização.
 * - Antes de habilitar qualquer integração com marketplace, cada espécie
 *   deverá passar por validação ambiental, veterinária e jurídica.
 */

const COUNTRIES = [
  {
    code: 'BR',
    name: 'Brasil',
    region: 'América do Sul',
    position: {
      left: '31%',
      top: '67%',
    },
    image: '/images/biodiversity/countries/brazil.webp',
    imageAlt:
      'Composição editorial da biodiversidade brasileira com arara, acará-disco e vegetação tropical',
    headline: 'Florestas, rios e uma das maiores diversidades biológicas do planeta.',
    introduction:
      'Uma viagem por aves, peixes ornamentais, plantas tropicais, polinizadores e ecossistemas que atravessam diferentes biomas brasileiros.',
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
      top: '72%',
    },
    image: '/images/biodiversity/countries/australia.webp',
    imageAlt:
      'Composição editorial da biodiversidade australiana com calopsita, rosela e flora nativa',
    headline: 'Um continente de aves ornamentais, flora singular e paisagens extremas.',
    introduction:
      'A Austrália reúne algumas das aves mais conhecidas da avicultura ornamental, além de plantas e ecossistemas encontrados em poucas outras regiões.',
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
      left: '85%',
      top: '39%',
    },
    image: '/images/biodiversity/countries/japan.webp',
    imageAlt:
      'Composição editorial da biodiversidade japonesa com carpa ornamental, medaka e cerejeira',
    headline: 'Tradição, seleção ornamental e uma relação cultural profunda com a natureza.',
    introduction:
      'Peixes ornamentais, jardins, plantas e técnicas de cultivo transformaram a biodiversidade japonesa em referência internacional.',
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
    image: '/images/biodiversity/countries/madagascar.webp',
    imageAlt:
      'Composição editorial da biodiversidade de Madagascar com camaleão, flora tropical e paisagem insular',
    headline: 'Uma ilha marcada por espécies singulares e elevado endemismo.',
    introduction:
      'Madagascar será apresentado inicialmente em contexto exclusivamente educativo, científico e de conservação.',
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
  'Educação antes da aquisição',
  'Origem responsável',
  'Bem-estar',
  'Conservação',
  'Ciência',
  'Comércio legal',
]

export default function GlobalPresence() {
  const [selectedCountryCode, setSelectedCountryCode] = useState('BR')

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
              className="global-presence__map"
              aria-label="Explorador mundial da biodiversidade"
            >
              <div
                className="global-presence__map-atmosphere"
                aria-hidden="true"
              />

              <div
                className="global-presence__map-grid"
                aria-hidden="true"
              />

              <div className="global-presence__map-copy">
                <span>AgroNexus World Biodiversity Atlas</span>

                <strong>
                  Escolha um país para iniciar a jornada
                </strong>
              </div>

              <div
                className="global-presence__continent global-presence__continent--americas"
                aria-hidden="true"
              />

              <div
                className="global-presence__continent global-presence__continent--eurasia"
                aria-hidden="true"
              />

              <div
                className="global-presence__continent global-presence__continent--africa"
                aria-hidden="true"
              />

              <div
                className="global-presence__continent global-presence__continent--oceania"
                aria-hidden="true"
              />

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
                      aria-label={`Explorar biodiversidade de ${country.name}`}
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
                <span>
                  Primeira expedição
                </span>

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
                  <span>
                    {selectedCountry.region}
                  </span>

                  <strong>
                    {selectedCountry.name}
                  </strong>
                </div>
              </div>

              <div className="global-presence__country-body">
                <span className="global-presence__country-kicker">
                  Identidade natural
                </span>

                <h3>
                  {selectedCountry.headline}
                </h3>

                <p>
                  {selectedCountry.introduction}
                </p>
              </div>
            </Reveal>

            <div className="global-presence__species">
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

                    <h4>
                      {species.commonName}
                    </h4>

                    <p>
                      <em>
                        {species.scientificName}
                      </em>
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>

            <Reveal
              className="global-presence__legal"
              delay={260}
            >
              <span className="global-presence__legal-label">
                Conteúdo educativo
              </span>

              <p>
                A presença de uma espécie neste atlas não significa
                autorização para captura, criação, aquisição,
                reprodução, transporte ou comercialização. O status
                de conservação, a origem legal e as exigências
                documentais deverão ser verificados antes de qualquer
                atividade.
              </p>

              <strong>
                Marketplace de animais não habilitado nesta seção.
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
            <span> Depois, qualquer decisão.</span>
          </p>
        </Reveal>
      </div>
    </section>
  )
}
