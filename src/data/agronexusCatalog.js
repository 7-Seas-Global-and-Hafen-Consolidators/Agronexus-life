/**
 * AgroNexus — Core Catalog Architecture
 * Babylon Rebuild
 *
 * Esta camada define os grandes mundos navegáveis da AgroNexus.
 * Cada mundo terá rota, experiência, catálogo e conteúdo próprios.
 * A Home apenas apresenta os mundos — não carrega o marketplace inteiro.
 */

export const agronexusWorlds = [
  {
    id: "aves",
    name: "Aves",
    path: "/aves",
    type: "biodiversity",
    description:
      "Aves, criadores, espécies, alimentação, habitats, saúde, genética e cuidados.",
  },
  {
    id: "caes",
    name: "Cães",
    path: "/caes",
    type: "animals",
    description:
      "Cães, raças, alimentação, saúde, bem-estar, produtos, serviços e proteção.",
  },
  {
    id: "gatos",
    name: "Gatos",
    path: "/gatos",
    type: "animals",
    description:
      "Gatos, raças, alimentação, saúde, enriquecimento, produtos e serviços.",
  },
  {
    id: "aquarismo",
    name: "Peixes & Aquarismo",
    path: "/aquarismo",
    type: "aquatic",
    description:
      "Água doce, marinho, peixes, aquários, equipamentos e manutenção.",
  },
  {
    id: "corais",
    name: "Corais & Reef",
    path: "/corais",
    type: "aquatic",
    description:
      "Corais, reef, iluminação, circulação, química, equipamentos e especialistas.",
  },
  {
    id: "repteis",
    name: "Répteis",
    path: "/repteis",
    type: "biodiversity",
    description:
      "Répteis, espécies, terrários, alimentação, manejo, saúde e equipamentos.",
  },
  {
    id: "pequenos-mamiferos",
    name: "Pequenos Mamíferos",
    path: "/pequenos-mamiferos",
    type: "animals",
    description:
      "Roedores, coelhos e outros pequenos mamíferos, habitats, nutrição e cuidados.",
  },
  {
    id: "plantas",
    name: "Plantas",
    path: "/plantas",
    type: "botanical",
    description:
      "Plantas, cultivo, substratos, nutrição, vasos, ferramentas e biodiversidade vegetal.",
  },
  {
    id: "plantas-aquaticas",
    name: "Plantas Aquáticas",
    path: "/plantas-aquaticas",
    type: "botanical",
    description:
      "Plantas para aquários e ambientes aquáticos, cultivo, iluminação e nutrientes.",
  },
  {
    id: "bonsais",
    name: "Bonsais",
    path: "/bonsais",
    type: "botanical",
    description:
      "Espécies, cultivo, ferramentas, vasos, substratos e cuidados especializados.",
  },
  {
    id: "orquideas",
    name: "Orquídeas & Flores",
    path: "/orquideas",
    type: "botanical",
    description:
      "Orquídeas, flores, cultivo, substratos, fertilização e colecionismo.",
  },
  {
    id: "alimentacao",
    name: "Alimentação",
    path: "/alimentacao",
    type: "market",
    description:
      "Nutrição especializada para diferentes espécies e fases da vida.",
  },
  {
    id: "saude",
    name: "Saúde & Bem-estar",
    path: "/saude",
    type: "care",
    description:
      "Cuidados, prevenção, especialistas, serviços e soluções de saúde animal.",
  },
  {
    id: "equipamentos",
    name: "Equipamentos & Habitats",
    path: "/equipamentos",
    type: "market",
    description:
      "Aquários, terrários, viveiros, iluminação, filtragem, climatização e acessórios.",
  },
];

export const agronexusEcosystem = {
  marketplace: {
    name: "AgroNexus Market",
    path: "/marketplace",
  },

  care: {
    name: "AgroNexus Care",
    path: "/care",
  },

  services: {
    name: "Serviços & Especialistas",
    path: "/servicos",
  },

  origin: {
    name: "Origem & Procedência",
    path: "/procedencia",
  },

  knowledge: {
    name: "Conhecimento",
    path: "/conhecimento",
  },

  community: {
    name: "Comunidade",
    path: "/comunidade",
  },

  conservation: {
    name: "Conservação",
    path: "/conservacao",
  },

  myAgronexus: {
    name: "My AgroNexus",
    path: "/minha-agronexus",
  },
};

export const agronexusRelationship = {
  agxId: {
    name: "AGX-ID",
    description:
      "Identidade que conecta animal, origem, documentação, saúde, histórico e ecossistema.",
  },

  scheduledPurchase: {
    name: "Compra Programada",
    description:
      "Reposição recorrente de alimentação, consumíveis, suplementos, substratos e cuidados.",
  },

  subscriptions: {
    name: "Assinaturas",
    description:
      "Produtos, serviços e benefícios recorrentes dentro do ecossistema AgroNexus.",
  },

  healthPlans: {
    name: "Planos de Saúde Animal",
    description:
      "Acesso organizado a proteção, atendimento e parceiros de saúde animal.",
  },

  benefits: {
    name: "Benefícios AgroNexus",
    description:
      "Relacionamento, pontos, vantagens e recompensas pela permanência no ecossistema.",
  },
};

export const agronexusJourney = [
  "Descobrir",
  "Conhecer",
  "Escolher",
  "Adquirir",
  "Identificar",
  "Cuidar",
  "Repor",
  "Acumular benefícios",
  "Voltar",
  "Permanecer",
];

export default {
  worlds: agronexusWorlds,
  ecosystem: agronexusEcosystem,
  relationship: agronexusRelationship,
  journey: agronexusJourney,
};
