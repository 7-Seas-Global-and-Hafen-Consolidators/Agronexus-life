/**
 * AgroNexus — Application Router
 *
 * Interface pública:
 * AgroNexus
 *
 * Arquitetura interna:
 * Project Babylon Rebuild
 *
 * O codinome interno nunca deve aparecer
 * como identidade pública da plataforma.
 *
 * Responsabilidades:
 * - navegação global
 * - homepage
 * - roteamento dos mundos
 * - roteamento dos departamentos
 * - compatibilidade com URLs antigas
 * - experiência de rota não encontrada
 *
 * A arquitetura de dados permanece intacta.
 */

import {
  useEffect,
  useMemo,
  useState,
} from 'react'

import BabylonHeader from './components/babylon/BabylonHeader'
import BabylonFooter from './components/BabylonFooter'

import BabylonHome from './pages/BabylonHome'
import WorldPage from './pages/WorldPage'

/* ============================================================
   ROUTING CORE
   ============================================================ */

function normalizeRoute(value) {
  if (!value) {
    return '/'
  }

  const withoutHash =
    value.replace(
      /^#/,
      ''
    )

  const withoutQuery =
    withoutHash.split(
      '?'
    )[0]

  const normalized =
    withoutQuery.length > 1
      ? withoutQuery.replace(
          /\/+$/,
          ''
        )
      : withoutQuery

  return (
    normalized ||
    '/'
  )
}

function getCurrentRoute() {
  return normalizeRoute(
    window.location.hash ||
    '#/'
  )
}

/* ============================================================
   LEGACY ROUTE BRIDGE

   URLs antigas continuam válidas.

   A interface antiga não retorna.

   Cada endereço legado é convertido
   para o mundo AgroNexus correspondente.
   ============================================================ */

const LEGACY_WORLD_ROUTES = {
  '/aves':
    'aves',

  '/aquarismo':
    'aquarismo',

  '/corais':
    'corais',

  '/mamiferos':
    'pequenos-mamiferos',

  '/pequenos-mamiferos':
    'pequenos-mamiferos',

  '/caes':
    'caes',

  '/gatos':
    'gatos',

  '/repteis':
    'repteis',

  '/plantas':
    'plantas',

  '/plantas-aquaticas':
    'plantas-aquaticas',

  '/bonsais':
    'bonsais',

  '/orquideas':
    'orquideas',

  '/alimentacao':
    'alimentacao',

  '/saude':
    'saude',

  '/equipamentos':
    'equipamentos',

  '/habitats':
    'equipamentos',
}

/* ============================================================
   WORLD ROUTING

   #/mundo/:slug
   #/mundo/:slug/:department
   ============================================================ */

function resolveWorldRoute(
  route
) {
  const departmentMatch =
    route.match(
      /^\/mundo\/([^/]+)\/([^/]+)$/
    )

  if (departmentMatch) {
    const worldSlug =
      decodeURIComponent(
        departmentMatch[1]
      )

    const departmentSlug =
      decodeURIComponent(
        departmentMatch[2]
      )

    return (
      <WorldPage
        slug={worldSlug}
        departmentSlug={
          departmentSlug
        }
      />
    )
  }

  const worldMatch =
    route.match(
      /^\/mundo\/([^/]+)$/
    )

  if (worldMatch) {
    const worldSlug =
      decodeURIComponent(
        worldMatch[1]
      )

    return (
      <WorldPage
        slug={worldSlug}
      />
    )
  }

  return null
}

/* ============================================================
   LEGACY WORLD RESOLUTION
   ============================================================ */

function resolveLegacyWorldRoute(
  route
) {
  const worldSlug =
    LEGACY_WORLD_ROUTES[
      route
    ]

  if (!worldSlug) {
    return null
  }

  return (
    <WorldPage
      slug={worldSlug}
    />
  )
}

/* ============================================================
   NOT FOUND
   ============================================================ */

function AgroNexusNotFound() {
  return (
    <>
      <style>
        {`
          .agronexus-not-found {
            min-height:
              100svh;

            display:
              flex;

            align-items:
              flex-end;

            padding:
              clamp(
                150px,
                18vw,
                240px
              )
              clamp(
                24px,
                5.6vw,
                96px
              )
              clamp(
                60px,
                8vw,
                110px
              );

            background:
              #090b0a;

            color:
              white;
          }

          .agronexus-not-found__inner {
            width:
              100%;
          }

          .agronexus-not-found__meta {
            display:
              flex;

            justify-content:
              space-between;

            gap:
              24px;

            margin-bottom:
              clamp(
                50px,
                8vw,
                100px
              );

            padding-bottom:
              18px;

            border-bottom:
              1px solid
              rgba(
                255,
                255,
                255,
                0.14
              );

            color:
              rgba(
                255,
                255,
                255,
                0.46
              );

            font-size:
              0.66rem;

            font-weight:
              900;

            letter-spacing:
              0.16em;

            text-transform:
              uppercase;
          }

          .agronexus-not-found__code {
            margin:
              0;

            color:
              #d8b76a;

            font-size:
              0.7rem;

            font-weight:
              900;

            letter-spacing:
              0.18em;

            text-transform:
              uppercase;
          }

          .agronexus-not-found h1 {
            max-width:
              1200px;

            margin:
              22px
              0
              34px;

            font-size:
              clamp(
                4rem,
                11vw,
                11rem
              );

            font-weight:
              500;

            line-height:
              0.82;

            letter-spacing:
              -0.075em;
          }

          .agronexus-not-found__footer {
            display:
              grid;

            grid-template-columns:
              minmax(
                0,
                1fr
              )
              auto;

            gap:
              40px;

            align-items:
              end;
          }

          .agronexus-not-found__text {
            max-width:
              620px;

            margin:
              0;

            color:
              rgba(
                255,
                255,
                255,
                0.6
              );

            font-size:
              clamp(
                1rem,
                1.6vw,
                1.3rem
              );

            line-height:
              1.7;
          }

          .agronexus-not-found__action {
            min-height:
              48px;

            display:
              inline-flex;

            align-items:
              center;

            justify-content:
              center;

            padding:
              0
              22px;

            border:
              1px solid
              rgba(
                255,
                255,
                255,
                0.24
              );

            color:
              white;

            text-decoration:
              none;

            font-size:
              0.66rem;

            font-weight:
              900;

            letter-spacing:
              0.14em;

            text-transform:
              uppercase;

            transition:
              background
                180ms ease,
              color
                180ms ease,
              border-color
                180ms ease;
          }

          .agronexus-not-found__action:hover,
          .agronexus-not-found__action:focus-visible {
            background:
              #d8b76a;

            border-color:
              #d8b76a;

            color:
              #111411;
          }

          @media (
            max-width:
              700px
          ) {
            .agronexus-not-found__meta {
              flex-direction:
                column;
            }

            .agronexus-not-found__footer {
              grid-template-columns:
                1fr;
            }

            .agronexus-not-found__action {
              justify-self:
                start;
            }
          }
        `}
      </style>

      <main
        className="agronexus-not-found"
      >
        <div
          className="agronexus-not-found__inner"
        >
          <div
            className="agronexus-not-found__meta"
          >
            <span>
              AgroNexus
            </span>

            <span>
              Território não encontrado
            </span>
          </div>

          <p
            className="agronexus-not-found__code"
          >
            Error / 404
          </p>

          <h1>
            Território
            <br />
            não encontrado.
          </h1>

          <div
            className="agronexus-not-found__footer"
          >
            <p
              className="agronexus-not-found__text"
            >
              Este endereço não corresponde
              a uma área atualmente navegável
              do ecossistema AgroNexus.
            </p>

            <a
              href="#/"
              className="agronexus-not-found__action"
            >
              Voltar ao início
            </a>
          </div>
        </div>
      </main>
    </>
  )
}

/* ============================================================
   ROUTE RESOLUTION
   ============================================================ */

function resolveRoute(
  route
) {
  /* ----------------------------------------------------------
     HOME
     ---------------------------------------------------------- */

  if (
    route === '/' ||
    route === '/home' ||
    route === '/inicio'
  ) {
    return (
      <BabylonHome />
    )
  }

  /* ----------------------------------------------------------
     WORLD ROUTES
     ---------------------------------------------------------- */

  const worldPage =
    resolveWorldRoute(
      route
    )

  if (worldPage) {
    return worldPage
  }

  /* ----------------------------------------------------------
     LEGACY URL → CURRENT WORLD
     ---------------------------------------------------------- */

  const legacyWorld =
    resolveLegacyWorldRoute(
      route
    )

  if (legacyWorld) {
    return legacyWorld
  }

  /* ----------------------------------------------------------
     RETIRED LEGACY ROUTES

     Mantemos compatibilidade evitando
     páginas mortas ou componentes antigos.
     ---------------------------------------------------------- */

  const retiredRoutes = [
    '/sobre',
    '/missao',
    '/ecossistema',
    '/portfolio',
    '/marketplace',
    '/presenca-global',
    '/comunidade',
    '/biblioteca',
    '/contato',
    '/guias',
  ]

  if (
    retiredRoutes.includes(
      route
    )
  ) {
    return (
      <BabylonHome />
    )
  }

  return (
    <AgroNexusNotFound />
  )
}

/* ============================================================
   APPLICATION
   ============================================================ */

export default function App() {
  const [
    route,
    setRoute,
  ] = useState(
    getCurrentRoute
  )

  const page =
    useMemo(
      () =>
        resolveRoute(
          route
        ),
      [route]
    )

  /* ----------------------------------------------------------
     HASH ROUTING
     ---------------------------------------------------------- */

  useEffect(() => {
    function handleRouteChange() {
      setRoute(
        getCurrentRoute()
      )
    }

    window.addEventListener(
      'hashchange',
      handleRouteChange
    )

    return () => {
      window.removeEventListener(
        'hashchange',
        handleRouteChange
      )
    }
  }, [])

  /* ----------------------------------------------------------
     RESET SCROLL ON NAVIGATION
     ---------------------------------------------------------- */

  useEffect(() => {
    const frame =
      window.requestAnimationFrame(
        () => {
          window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'auto',
          })
        }
      )

    return () => {
      window.cancelAnimationFrame(
        frame
      )
    }
  }, [route])

  /* ----------------------------------------------------------
     AGRONEXUS APPLICATION
     ---------------------------------------------------------- */

  return (
    <>
      <BabylonHeader />

      {page}

      <BabylonFooter />
    </>
  )
}/**
 * AgroNexus — Babylon Application Router
 * Project Babylon Rebuild
 *
 * NEW INTERFACE CORE
 *
 * The legacy interface is no longer rendered.
 *
 * Babylon now owns:
 * - global navigation
 * - homepage
 * - world routing
 * - department routing
 * - legacy route compatibility
 * - not-found experience
 *
 * Data architecture remains untouched.
 */

import {
  useEffect,
  useMemo,
  useState,
} from 'react'

import BabylonHeader from './components/babylon/BabylonHeader'
import BabylonFooter from './components/BabylonFooter'

import BabylonHome from './pages/BabylonHome'
import WorldPage from './pages/WorldPage'

/* ============================================================
   ROUTING CORE
   ============================================================ */

function normalizeRoute(value) {
  if (!value) {
    return '/'
  }

  const withoutHash =
    value.replace(
      /^#/,
      ''
    )

  const withoutQuery =
    withoutHash.split(
      '?'
    )[0]

  const normalized =
    withoutQuery.length > 1
      ? withoutQuery.replace(
          /\/+$/,
          ''
        )
      : withoutQuery

  return (
    normalized ||
    '/'
  )
}

function getCurrentRoute() {
  return normalizeRoute(
    window.location.hash ||
    '#/'
  )
}

/* ============================================================
   LEGACY ROUTE BRIDGE

   Old URLs remain usable, but the old interface does not.

   They now resolve directly into Babylon worlds.
   ============================================================ */

const LEGACY_WORLD_ROUTES = {
  '/aves':
    'aves',

  '/aquarismo':
    'aquarismo',

  '/corais':
    'corais',

  '/mamiferos':
    'pequenos-mamiferos',

  '/pequenos-mamiferos':
    'pequenos-mamiferos',

  '/caes':
    'caes',

  '/gatos':
    'gatos',

  '/repteis':
    'repteis',

  '/plantas':
    'plantas',

  '/plantas-aquaticas':
    'plantas-aquaticas',

  '/bonsais':
    'bonsais',

  '/orquideas':
    'orquideas',

  '/alimentacao':
    'alimentacao',

  '/saude':
    'saude',

  '/equipamentos':
    'equipamentos',

  '/habitats':
    'equipamentos',
}

/* ============================================================
   BABYLON WORLD ROUTING

   /mundo/:slug
   /mundo/:slug/:department
   ============================================================ */

function resolveBabylonWorldRoute(
  route
) {
  const departmentMatch =
    route.match(
      /^\/mundo\/([^/]+)\/([^/]+)$/
    )

  if (departmentMatch) {
    const worldSlug =
      decodeURIComponent(
        departmentMatch[1]
      )

    const departmentSlug =
      decodeURIComponent(
        departmentMatch[2]
      )

    return (
      <WorldPage
        slug={worldSlug}
        departmentSlug={
          departmentSlug
        }
      />
    )
  }

  const worldMatch =
    route.match(
      /^\/mundo\/([^/]+)$/
    )

  if (worldMatch) {
    const worldSlug =
      decodeURIComponent(
        worldMatch[1]
      )

    return (
      <WorldPage
        slug={worldSlug}
      />
    )
  }

  return null
}

/* ============================================================
   LEGACY WORLD RESOLUTION
   ============================================================ */

function resolveLegacyWorldRoute(
  route
) {
  const worldSlug =
    LEGACY_WORLD_ROUTES[
      route
    ]

  if (!worldSlug) {
    return null
  }

  return (
    <WorldPage
      slug={worldSlug}
    />
  )
}

/* ============================================================
   NOT FOUND
   ============================================================ */

function BabylonNotFound() {
  return (
    <>
      <style>
        {`
          .babylon-not-found {
            min-height:
              100svh;

            display:
              flex;

            align-items:
              flex-end;

            padding:
              clamp(
                150px,
                18vw,
                240px
              )
              clamp(
                24px,
                5.6vw,
                96px
              )
              clamp(
                60px,
                8vw,
                110px
              );

            background:
              #090b0a;

            color:
              white;
          }

          .babylon-not-found__inner {
            width:
              100%;
          }

          .babylon-not-found__meta {
            display:
              flex;

            justify-content:
              space-between;

            gap:
              24px;

            margin-bottom:
              clamp(
                50px,
                8vw,
                100px
              );

            padding-bottom:
              18px;

            border-bottom:
              1px solid
              rgba(
                255,
                255,
                255,
                0.14
              );

            color:
              rgba(
                255,
                255,
                255,
                0.46
              );

            font-size:
              0.66rem;

            font-weight:
              900;

            letter-spacing:
              0.16em;

            text-transform:
              uppercase;
          }

          .babylon-not-found__code {
            margin:
              0;

            color:
              #d8b76a;

            font-size:
              0.7rem;

            font-weight:
              900;

            letter-spacing:
              0.18em;

            text-transform:
              uppercase;
          }

          .babylon-not-found h1 {
            max-width:
              1200px;

            margin:
              22px
              0
              34px;

            font-size:
              clamp(
                4rem,
                11vw,
                11rem
              );

            font-weight:
              500;

            line-height:
              0.82;

            letter-spacing:
              -0.075em;
          }

          .babylon-not-found__footer {
            display:
              grid;

            grid-template-columns:
              minmax(
                0,
                1fr
              )
              auto;

            gap:
              40px;

            align-items:
              end;
          }

          .babylon-not-found__text {
            max-width:
              620px;

            margin:
              0;

            color:
              rgba(
                255,
                255,
                255,
                0.6
              );

            font-size:
              clamp(
                1rem,
                1.6vw,
                1.3rem
              );

            line-height:
              1.7;
          }

          .babylon-not-found__action {
            min-height:
              48px;

            display:
              inline-flex;

            align-items:
              center;

            justify-content:
              center;

            padding:
              0
              22px;

            border:
              1px solid
              rgba(
                255,
                255,
                255,
                0.24
              );

            color:
              white;

            text-decoration:
              none;

            font-size:
              0.66rem;

            font-weight:
              900;

            letter-spacing:
              0.14em;

            text-transform:
              uppercase;

            transition:
              background
                180ms ease,
              color
                180ms ease;
          }

          .babylon-not-found__action:hover,
          .babylon-not-found__action:focus-visible {
            background:
              #d8b76a;

            color:
              #111411;
          }

          @media (
            max-width:
              700px
          ) {
            .babylon-not-found__meta,
            .babylon-not-found__footer {
              grid-template-columns:
                1fr;

              flex-direction:
                column;
            }

            .babylon-not-found__footer {
              display:
                grid;
            }

            .babylon-not-found__action {
              justify-self:
                start;
            }
          }
        `}
      </style>

      <main className="babylon-not-found">

        <div className="babylon-not-found__inner">

          <div className="babylon-not-found__meta">
            <span>
              AgroNexus Babylon
            </span>

            <span>
              Unknown territory
            </span>
          </div>

          <p className="babylon-not-found__code">
            Error / 404
          </p>

          <h1>
            World
            <br />
            not found.
          </h1>

          <div className="babylon-not-found__footer">

            <p className="babylon-not-found__text">
              Este território não existe
              na arquitetura atual de
              Babylon ou ainda não foi
              conectado ao ecossistema.
            </p>

            <a
              href="#/"
              className="babylon-not-found__action"
            >
              Voltar ao início
            </a>

          </div>

        </div>

      </main>
    </>
  )
}

/* ============================================================
   ROUTE RESOLUTION
   ============================================================ */

function resolveRoute(
  route
) {
  /* ----------------------------------------------------------
     BABYLON HOME
     ---------------------------------------------------------- */

  if (
    route === '/' ||
    route === '/home' ||
    route === '/inicio'
  ) {
    return (
      <BabylonHome />
    )
  }

  /* ----------------------------------------------------------
     NATIVE BABYLON WORLD
     ---------------------------------------------------------- */

  const babylonWorld =
    resolveBabylonWorldRoute(
      route
    )

  if (babylonWorld) {
    return babylonWorld
  }

  /* ----------------------------------------------------------
     OLD URL → NEW BABYLON WORLD

     Compatibility survives.
     Legacy UI does not.
     ---------------------------------------------------------- */

  const legacyWorld =
    resolveLegacyWorldRoute(
      route
    )

  if (legacyWorld) {
    return legacyWorld
  }

  /* ----------------------------------------------------------
     DEAD LEGACY ROUTES

     These no longer resurrect old components.
     They return Babylon Home instead.
     ---------------------------------------------------------- */

  const retiredRoutes = [
    '/sobre',
    '/missao',
    '/ecossistema',
    '/portfolio',
    '/marketplace',
    '/presenca-global',
    '/comunidade',
    '/biblioteca',
    '/contato',
    '/guias',
  ]

  if (
    retiredRoutes.includes(
      route
    )
  ) {
    return (
      <BabylonHome />
    )
  }

  return (
    <BabylonNotFound />
  )
}

/* ============================================================
   APP
   ============================================================ */

export default function App() {
  const [
    route,
    setRoute,
  ] = useState(
    getCurrentRoute
  )

  const page =
    useMemo(
      () =>
        resolveRoute(
          route
        ),
      [route]
    )

  /* ----------------------------------------------------------
     HASH ROUTING
     ---------------------------------------------------------- */

  useEffect(() => {
    function handleRouteChange() {
      setRoute(
        getCurrentRoute()
      )
    }

    window.addEventListener(
      'hashchange',
      handleRouteChange
    )

    return () => {
      window.removeEventListener(
        'hashchange',
        handleRouteChange
      )
    }
  }, [])

  /* ----------------------------------------------------------
     RESET SCROLL ON NAVIGATION
     ---------------------------------------------------------- */

  useEffect(() => {
    const frame =
      window.requestAnimationFrame(
        () => {
          window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'auto',
          })
        }
      )

    return () => {
      window.cancelAnimationFrame(
        frame
      )
    }
  }, [route])

  /* ----------------------------------------------------------
     BABYLON APPLICATION
     ---------------------------------------------------------- */

  return (
    <>
      <BabylonHeader />

      {page}

      <BabylonFooter />
    </>
  )
}
