/**
 * AgroNexus — Babylon World Media Registry
 *
 * Biblioteca visual central dos grandes mundos AgroNexus.
 *
 * Nenhuma página deve espalhar caminhos de imagens manualmente.
 * Todo o sistema Babylon consulta este registro.
 *
 * Estrutura preparada para:
 *
 * - fotografia de gateway
 * - hero editorial
 * - fotografia mobile
 * - departamentos
 * - campanhas
 * - destaques
 * - espécies
 * - marketplace contextual
 *
 * Assets públicos:
 * public/assets/worlds/
 */

const WORLD_ASSET_ROOT =
  'assets/worlds'

/* ============================================================
   ASSET HELPER
   ============================================================ */

function worldAsset(
  world,
  filename
) {
  return `${WORLD_ASSET_ROOT}/${world}/${filename}`
}

/* ============================================================
   MEDIA REGISTRY
   ============================================================ */

export const worldMedia = {
  /* ==========================================================
     AVES
     ========================================================== */

  aves: {
    card: worldAsset(
      'aves',
      'aves-card.jpg'
    ),

    hero: worldAsset(
      'aves',
      'aves-hero.jpg'
    ),

    mobile: worldAsset(
      'aves',
      'aves-mobile.jpg'
    ),

    focalPoint: 'center center',

    departments: {
      psitacideos: worldAsset(
        'aves',
        'departamento-psitacideos.jpg'
      ),

      canarios: worldAsset(
        'aves',
        'departamento-canarios.jpg'
      ),

      exoticos: worldAsset(
        'aves',
        'departamento-exoticos.jpg'
      ),

      alimentacao: worldAsset(
        'aves',
        'departamento-alimentacao.jpg'
      ),

      habitats: worldAsset(
        'aves',
        'departamento-habitats.jpg'
      ),

      saude: worldAsset(
        'aves',
        'departamento-saude.jpg'
      ),
    },
  },

  /* ==========================================================
     CÃES
     ========================================================== */

  caes: {
    card: worldAsset(
      'caes',
      'caes-card.jpg'
    ),

    hero: worldAsset(
      'caes',
      'caes-hero.jpg'
    ),

    mobile: worldAsset(
      'caes',
      'caes-mobile.jpg'
    ),

    focalPoint: 'center center',

    departments: {
      racas: worldAsset(
        'caes',
        'departamento-racas.jpg'
      ),

      alimentacao: worldAsset(
        'caes',
        'departamento-alimentacao.jpg'
      ),

      saude: worldAsset(
        'caes',
        'departamento-saude.jpg'
      ),

      higiene: worldAsset(
        'caes',
        'departamento-higiene.jpg'
      ),

      acessorios: worldAsset(
        'caes',
        'departamento-acessorios.jpg'
      ),

      servicos: worldAsset(
        'caes',
        'departamento-servicos.jpg'
      ),
    },
  },

  /* ==========================================================
     GATOS
     ========================================================== */

  gatos: {
    card: worldAsset(
      'gatos',
      'gatos-card.jpg'
    ),

    hero: worldAsset(
      'gatos',
      'gatos-hero.jpg'
    ),

    mobile: worldAsset(
      'gatos',
      'gatos-mobile.jpg'
    ),

    focalPoint: 'center center',

    departments: {
      racas: worldAsset(
        'gatos',
        'departamento-racas.jpg'
      ),

      alimentacao: worldAsset(
        'gatos',
        'departamento-alimentacao.jpg'
      ),

      saude: worldAsset(
        'gatos',
        'departamento-saude.jpg'
      ),

      higiene: worldAsset(
        'gatos',
        'departamento-higiene.jpg'
      ),

      enriquecimento: worldAsset(
        'gatos',
        'departamento-enriquecimento.jpg'
      ),

      acessorios: worldAsset(
        'gatos',
        'departamento-acessorios.jpg'
      ),
    },
  },

  /* ==========================================================
     AQUARISMO
     ========================================================== */

  aquarismo: {
    card: worldAsset(
      'aquarismo',
      'aquarismo-card.jpg'
    ),

    hero: worldAsset(
      'aquarismo',
      'aquarismo-hero.jpg'
    ),

    mobile: worldAsset(
      'aquarismo',
      'aquarismo-mobile.jpg'
    ),

    focalPoint: 'center center',

    departments: {
      peixes: worldAsset(
        'aquarismo',
        'departamento-peixes.jpg'
      ),

      plantados: worldAsset(
        'aquarismo',
        'departamento-plantados.jpg'
      ),

      aquarios: worldAsset(
        'aquarismo',
        'departamento-aquarios.jpg'
      ),

      filtragem: worldAsset(
        'aquarismo',
        'departamento-filtragem.jpg'
      ),

      iluminacao: worldAsset(
        'aquarismo',
        'departamento-iluminacao.jpg'
      ),

      alimentacao: worldAsset(
        'aquarismo',
        'departamento-alimentacao.jpg'
      ),
    },
  },

  /* ==========================================================
     CORAIS & REEF
     ========================================================== */

  corais: {
    card: worldAsset(
      'corais',
      'corais-card.jpg'
    ),

    hero: worldAsset(
      'corais',
      'corais-hero.jpg'
    ),

    mobile: worldAsset(
      'corais',
      'corais-mobile.jpg'
    ),

    focalPoint: 'center center',

    departments: {
      corais: worldAsset(
        'corais',
        'departamento-corais.jpg'
      ),

      peixes: worldAsset(
        'corais',
        'departamento-peixes.jpg'
      ),

      invertebrados: worldAsset(
        'corais',
        'departamento-invertebrados.jpg'
      ),

      aquarios: worldAsset(
        'corais',
        'departamento-aquarios.jpg'
      ),

      iluminacao: worldAsset(
        'corais',
        'departamento-iluminacao.jpg'
      ),

      tratamento: worldAsset(
        'corais',
        'departamento-tratamento.jpg'
      ),
    },
  },

  /* ==========================================================
     RÉPTEIS
     ========================================================== */

  repteis: {
    card: worldAsset(
      'repteis',
      'repteis-card.jpg'
    ),

    hero: worldAsset(
      'repteis',
      'repteis-hero.jpg'
    ),

    mobile: worldAsset(
      'repteis',
      'repteis-mobile.jpg'
    ),

    focalPoint: 'center center',

    departments: {
      especies: worldAsset(
        'repteis',
        'departamento-especies.jpg'
      ),

      terrarios: worldAsset(
        'repteis',
        'departamento-terrarios.jpg'
      ),

      alimentacao: worldAsset(
        'repteis',
        'departamento-alimentacao.jpg'
      ),

      aquecimento: worldAsset(
        'repteis',
        'departamento-aquecimento.jpg'
      ),

      iluminacao: worldAsset(
        'repteis',
        'departamento-iluminacao.jpg'
      ),

      saude: worldAsset(
        'repteis',
        'departamento-saude.jpg'
      ),
    },
  },

  /* ==========================================================
     PEQUENOS MAMÍFEROS
     ========================================================== */

  'pequenos-mamiferos': {
    card: worldAsset(
      'pequenos-mamiferos',
      'pequenos-mamiferos-card.jpg'
    ),

    hero: worldAsset(
      'pequenos-mamiferos',
      'pequenos-mamiferos-hero.jpg'
    ),

    mobile: worldAsset(
      'pequenos-mamiferos',
      'pequenos-mamiferos-mobile.jpg'
    ),

    focalPoint: 'center center',

    departments: {
      hamsters: worldAsset(
        'pequenos-mamiferos',
        'departamento-hamsters.jpg'
      ),

      coelhos: worldAsset(
        'pequenos-mamiferos',
        'departamento-coelhos.jpg'
      ),

      roedores: worldAsset(
        'pequenos-mamiferos',
        'departamento-roedores.jpg'
      ),

      alimentacao: worldAsset(
        'pequenos-mamiferos',
        'departamento-alimentacao.jpg'
      ),

      habitats: worldAsset(
        'pequenos-mamiferos',
        'departamento-habitats.jpg'
      ),

      enriquecimento: worldAsset(
        'pequenos-mamiferos',
        'departamento-enriquecimento.jpg'
      ),
    },
  },

  /* ==========================================================
     PLANTAS
     ========================================================== */

  plantas: {
    card: worldAsset(
      'plantas',
      'plantas-card.jpg'
    ),

    hero: worldAsset(
      'plantas',
      'plantas-hero.jpg'
    ),

    mobile: worldAsset(
      'plantas',
      'plantas-mobile.jpg'
    ),

    focalPoint: 'center center',

    departments: {
      ornamentais: worldAsset(
        'plantas',
        'departamento-ornamentais.jpg'
      ),

      aquaticas: worldAsset(
        'plantas',
        'departamento-aquaticas.jpg'
      ),

      bonsais: worldAsset(
        'plantas',
        'departamento-bonsais.jpg'
      ),

      orquideas: worldAsset(
        'plantas',
        'departamento-orquideas.jpg'
      ),

      flores: worldAsset(
        'plantas',
        'departamento-flores.jpg'
      ),

      cultivo: worldAsset(
        'plantas',
        'departamento-cultivo.jpg'
      ),
    },
  },
}

/* ============================================================
   WORLD MEDIA LOOKUP
   ============================================================ */

export function getWorldMedia(
  slug
) {
  return (
    worldMedia[slug] ||
    {}
  )
}

/* ============================================================
   DEPARTMENT MEDIA LOOKUP
   ============================================================ */

export function getDepartmentMedia(
  worldSlug,
  departmentSlug
) {
  return (
    worldMedia?.[worldSlug]
      ?.departments
      ?.[departmentSlug] ||
    ''
  )
}
