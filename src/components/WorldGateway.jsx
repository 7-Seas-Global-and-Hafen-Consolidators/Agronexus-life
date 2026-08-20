/**
 * AgroNexus — World Gateway
 * Babylon Rebuild
 *
 * Porta visual principal para os mundos AgroNexus.
 * Cada card leva para um universo próprio.
 */

import { agronexusWorlds } from "../data/agronexusCatalog";

export default function WorldGateway({ onNavigate }) {
  const handleNavigate = (path) => {
    if (typeof onNavigate === "function") {
      onNavigate(path);
      return;
    }

    window.location.hash = `#${path}`;
  };

  return (
    <section className="agx-world-gateway">
      <div className="agx-world-gateway__header">
        <span className="agx-world-gateway__eyebrow">
          EXPLORE A AGRONEXUS
        </span>

        <h2>
          Cada universo abre um mundo.
        </h2>

        <p>
          Biodiversidade, produtos, conhecimento, saúde, habitats,
          serviços e especialistas conectados por espécie e necessidade.
        </p>
      </div>

      <div className="agx-world-gateway__grid">
        {agronexusWorlds.map((world) => (
          <button
            key={world.id}
            type="button"
            className={`agx-world-card agx-world-card--${world.type}`}
            onClick={() => handleNavigate(world.path)}
          >
            <div className="agx-world-card__media">
              <div className="agx-world-card__image-placeholder">
                <span>{world.name}</span>
              </div>
            </div>

            <div className="agx-world-card__content">
              <span className="agx-world-card__type">
                {world.type}
              </span>

              <h3>{world.name}</h3>

              <p>{world.description}</p>

              <span className="agx-world-card__cta">
                Explorar mundo →
              </span>
            </div>
          </button>
        ))}
      </div>
    </section>
  );
}
