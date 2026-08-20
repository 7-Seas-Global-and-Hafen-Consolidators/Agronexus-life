/**
 * AgroNexus — World Media Registry
 * Babylon Rebuild
 *
 * Registro central das imagens editoriais dos grandes mundos AgroNexus.
 *
 * Os arquivos físicos ficam em:
 * public/assets/worlds/
 */

export const worldMedia = {
  aves: {
    hero: "/assets/worlds/aves-hero.jpg",
    card: "/assets/worlds/aves-card.jpg",
  },

  caes: {
    hero: "/assets/worlds/caes-hero.jpg",
    card: "/assets/worlds/caes-card.jpg",
  },

  gatos: {
    hero: "/assets/worlds/gatos-hero.jpg",
    card: "/assets/worlds/gatos-card.jpg",
  },

  aquarismo: {
    hero: "/assets/worlds/aquarismo-hero.jpg",
    card: "/assets/worlds/aquarismo-card.jpg",
  },

  corais: {
    hero: "/assets/worlds/corais-hero.jpg",
    card: "/assets/worlds/corais-card.jpg",
  },

  repteis: {
    hero: "/assets/worlds/repteis-hero.jpg",
    card: "/assets/worlds/repteis-card.jpg",
  },

  "pequenos-mamiferos": {
    hero: "/assets/worlds/pequenos-mamiferos-hero.jpg",
    card: "/assets/worlds/pequenos-mamiferos-card.jpg",
  },

  plantas: {
    hero: "/assets/worlds/plantas-hero.jpg",
    card: "/assets/worlds/plantas-card.jpg",
  },

  "plantas-aquaticas": {
    hero: "/assets/worlds/plantas-aquaticas-hero.jpg",
    card: "/assets/worlds/plantas-aquaticas-card.jpg",
  },

  bonsais: {
    hero: "/assets/worlds/bonsais-hero.jpg",
    card: "/assets/worlds/bonsais-card.jpg",
  },

  orquideas: {
    hero: "/assets/worlds/orquideas-hero.jpg",
    card: "/assets/worlds/orquideas-card.jpg",
  },

  alimentacao: {
    hero: "/assets/worlds/alimentacao-hero.jpg",
    card: "/assets/worlds/alimentacao-card.jpg",
  },

  saude: {
    hero: "/assets/worlds/saude-hero.jpg",
    card: "/assets/worlds/saude-card.jpg",
  },

  equipamentos: {
    hero: "/assets/worlds/equipamentos-hero.jpg",
    card: "/assets/worlds/equipamentos-card.jpg",
  },
};

export const getWorldMedia = (worldId) =>
  worldMedia[worldId] || {
    hero: "/assets/worlds/agronexus-fallback.jpg",
    card: "/assets/worlds/agronexus-fallback.jpg",
  };

export default worldMedia;
