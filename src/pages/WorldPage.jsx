import React from "react";
import { Link, useParams } from "react-router-dom";
import { worldCatalog } from "../data/worldCatalog";
import { worldMedia } from "../data/worldMedia";

const getWorldBySlug = (slug) => {
  if (Array.isArray(worldCatalog)) {
    return worldCatalog.find(
      (item) => item.slug === slug || item.id === slug
    );
  }

  return worldCatalog?.[slug] || null;
};

const getMediaBySlug = (slug) => {
  if (Array.isArray(worldMedia)) {
    return worldMedia.find(
      (item) => item.slug === slug || item.id === slug
    );
  }

  return worldMedia?.[slug] || {};
};

export default function WorldPage() {
  const { slug } = useParams();

  const world = getWorldBySlug(slug);
  const media = getMediaBySlug(slug);

  if (!world) {
    return (
      <main className="world-page world-page--missing">
        <section className="world-missing">
          <p className="world-eyebrow">AGRONEXUS · BIODIVERSIDADE</p>

          <h1>Mundo não encontrado.</h1>

          <p>
            Esta área ainda não faz parte do catálogo navegável da AgroNexus.
          </p>

          <Link to="/" className="world-button">
            Voltar para AgroNexus
          </Link>
        </section>
      </main>
    );
  }

  const title = world.title || world.name || slug;
  const eyebrow =
    world.eyebrow || "AGRONEXUS · LIVING ECOSYSTEM";

  const description =
    world.description ||
    world.intro ||
    "Conhecimento, procedência, produtos e conexões reunidos em um único ecossistema.";

  const heroImage =
    media.hero ||
    media.image ||
    world.hero ||
    world.image ||
    "";

  const categories =
    world.categories ||
    world.sections ||
    world.children ||
    [];

  const highlights =
    world.highlights ||
    world.features ||
    [];

  return (
    <main className={`world-page world-page--${slug}`}>
      {/* HERO DO MUNDO */}
      <section
        className="world-hero"
        style={
          heroImage
            ? {
                backgroundImage: `linear-gradient(
                  90deg,
                  rgba(8, 22, 18, 0.90) 0%,
                  rgba(8, 22, 18, 0.64) 48%,
                  rgba(8, 22, 18, 0.18) 100%
                ), url("${heroImage}")`,
              }
            : undefined
        }
      >
        <div className="world-hero__content">
          <Link to="/" className="world-back">
            ← Explorar AgroNexus
          </Link>

          <p className="world-eyebrow">{eyebrow}</p>

          <h1>{title}</h1>

          <p className="world-hero__description">
            {description}
          </p>

          <div className="world-hero__actions">
            <a href="#explorar" className="world-button">
              Explorar este mundo
            </a>

            <a
              href="#procedencia"
              className="world-button world-button--secondary"
            >
              Procedência & confiança
            </a>
          </div>
        </div>
      </section>

      {/* PORTA DE ENTRADA */}
      <section id="explorar" className="world-section">
        <div className="world-section__heading">
          <p className="world-eyebrow">
            EXPLORE POR CATEGORIA
          </p>

          <h2>Entre mais fundo.</h2>

          <p>
            Cada categoria abre sua própria área de descoberta,
            conteúdo e marketplace.
          </p>
        </div>

        {categories.length > 0 ? (
          <div className="world-category-grid">
            {categories.map((category, index) => {
              const categoryName =
                category.name ||
                category.title ||
                category.label ||
                `Categoria ${index + 1}`;

              const categoryDescription =
                category.description ||
                category.subtitle ||
                "";

              const categoryImage =
                category.image ||
                category.hero ||
                "";

              const categorySlug =
                category.slug ||
                category.id ||
                "";

              const destination =
                category.href ||
                category.path ||
                (categorySlug
                  ? `/mundo/${slug}/${categorySlug}`
                  : "#");

              return (
                <Link
                  to={destination}
                  className="world-category-card"
                  key={categorySlug || categoryName}
                >
                  {categoryImage && (
                    <img
                      src={categoryImage}
                      alt={categoryName}
                      loading="lazy"
                    />
                  )}

                  <div className="world-category-card__content">
                    <span>
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <h3>{categoryName}</h3>

                    {categoryDescription && (
                      <p>{categoryDescription}</p>
                    )}

                    <strong>Explorar →</strong>
                  </div>
                </Link>
              );
            })}
          </div>
        ) : (
          <div className="world-coming">
            <span>AGRONEXUS WORLD</span>
            <h3>{title} está sendo expandido.</h3>
            <p>
              Novas categorias, espécies, produtos e serviços
              serão conectados a este mundo.
            </p>
          </div>
        )}
      </section>

      {/* DESTAQUES */}
      {highlights.length > 0 && (
        <section className="world-section world-section--highlights">
          <div className="world-section__heading">
            <p className="world-eyebrow">
              DESCOBRIR
            </p>

            <h2>Muito além de comprar.</h2>
          </div>

          <div className="world-highlight-grid">
            {highlights.map((item, index) => (
              <article
                className="world-highlight"
                key={item.id || item.title || index}
              >
                <span>
                  {String(index + 1).padStart(2, "0")}
                </span>

                <h3>
                  {item.title || item.name}
                </h3>

                {item.description && (
                  <p>{item.description}</p>
                )}
              </article>
            ))}
          </div>
        </section>
      )}

      {/* PROCEDÊNCIA */}
      <section
        id="procedencia"
        className="world-trust"
      >
        <div className="world-trust__intro">
          <p className="world-eyebrow">
            PROCEDÊNCIA · CONFIANÇA · RESPONSABILIDADE
          </p>

          <h2>
            Saber de onde vem faz parte da escolha.
          </h2>

          <p>
            Na AgroNexus, procedência não é um selo decorativo.
            É parte estrutural do registro de animais, plantas,
            organismos, produtos, criadores, produtores e parceiros.
          </p>
        </div>

        <div className="world-trust__grid">
          <article>
            <span>01</span>
            <h3>Origem</h3>
            <p>
              Identificação clara da procedência e das informações
              associadas ao registro.
            </p>
          </article>

          <article>
            <span>02</span>
            <h3>Responsável</h3>
            <p>
              Criadores, produtores, lojas e parceiros conectados
              ao que oferecem.
            </p>
          </article>

          <article>
            <span>03</span>
            <h3>Documentação</h3>
            <p>
              Informações e documentos aplicáveis organizados junto
              ao registro quando necessários.
            </p>
          </article>

          <article>
            <span>04</span>
            <h3>Histórico</h3>
            <p>
              Conhecimento e contexto acompanham a oferta para tornar
              a decisão mais informada.
            </p>
          </article>
        </div>
      </section>

      {/* ECOSSISTEMA COMERCIAL */}
      <section className="world-commerce">
        <div>
          <p className="world-eyebrow">
            UM ECOSSISTEMA. MUITAS CONEXÕES.
          </p>

          <h2>
            Descobrir. Conhecer. Cuidar. Comprar. Conectar.
          </h2>

          <p>
            Marketplace, biodiversidade, conteúdo, saúde,
            alimentação, equipamentos, serviços, comunidade e
            benefícios trabalhando como partes do mesmo sistema.
          </p>
        </div>

        <Link to="/" className="world-button">
          Continuar explorando
        </Link>
      </section>
    </main>
  );
}
