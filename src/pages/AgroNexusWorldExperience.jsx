/**
 * AgroNexus™ — Application Router
 *
 * Public identity:
 * AgroNexus™
 *
 * Internal rebuild codename:
 * Babylon
 *
 * Babylon must never be rendered as public branding.
 */

import {
  useEffect,
  useMemo,
  useState,
} from 'react'

import BabylonHeader from './components/babylon/BabylonHeader'
import BabylonFooter from './components/BabylonFooter'
import AgroNexusCommerceHub from './components/AgroNexusCommerceHub'

import BabylonHome from './pages/BabylonHome'
import AgroNexusWorldExperience from './pages/AgroNexusWorldExperience'

/* ============================================================
   ROUTING
   ============================================================ */

function normalizeRoute(value) {
  if (!value) {
    return '/'
  }

  const withoutHash =
    String(value).replace(
      /^#/,
      ''
    )

  const withoutQuery =
    withoutHash.split('?')[0]

  if (!withoutQuery) {
    return '/'
  }

  if (
    withoutQuery.length > 1
  ) {
    return withoutQuery.replace(
      /\/+$/,
      ''
    )
  }

  return withoutQuery
}

function getCurrentRoute() {
  return normalizeRoute(
    window.location.hash ||
    '#/'
  )
}

/* ============================================================
   LEGACY URL BRIDGE
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
   WORLD ROUTE
   ============================================================ */

function resolveWorldRoute(
  route
) {
  const departmentMatch =
    route.match(
      /^\/mundo\/([^/]+)\/([^/]+)$/
    )

  if (departmentMatch) {
    return (
      <AgroNexusWorldExperience
        slug={
          decodeURIComponent(
            departmentMatch[1]
          )
        }
        departmentSlug={
          decodeURIComponent(
            departmentMatch[2]
          )
        }
      />
    )
  }

  const worldMatch =
    route.match(
      /^\/mundo\/([^/]+)$/
    )

  if (worldMatch) {
    return (
      <AgroNexusWorldExperience
        slug={
          decodeURIComponent(
            worldMatch[1]
          )
        }
      />
    )
  }

  return null
}

/* ============================================================
   LEGACY WORLD ROUTE
   ============================================================ */

function resolveLegacyWorldRoute(
  route
) {
  const slug =
    LEGACY_WORLD_ROUTES[
      route
    ]

  if (!slug) {
    return null
  }

  return (
    <AgroNexusWorldExperience
      slug={slug}
    />
  )
}

/* ============================================================
   NOT FOUND
   ============================================================ */

function AgroNexusNotFound() {
  return (
    <main
      style={{
        minHeight: '100svh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '140px 24px 80px',
        background: '#090b0a',
        color: '#ffffff',
      }}
    >
      <div
        style={{
          width: 'min(1100px, 100%)',
        }}
      >
        <p
          style={{
            margin: '0 0 18px',
            color: '#d8b76a',
            fontSize: '0.72rem',
            fontWeight: 900,
            letterSpacing: '0.18em',
            textTransform: 'uppercase',
          }}
        >
          AgroNexus™ · Error 404
        </p>

        <h1
          style={{
            margin: '0 0 30px',
            fontSize:
              'clamp(3.8rem, 10vw, 9rem)',
            lineHeight: 0.88,
            letterSpacing: '-0.065em',
            fontWeight: 500,
          }}
        >
          Território
          <br />
          não encontrado.
        </h1>

        <p
          style={{
            maxWidth: '620px',
            margin: '0 0 32px',
            color:
              'rgba(255,255,255,0.62)',
            fontSize: '1.05rem',
            lineHeight: 1.7,
          }}
        >
          Este endereço não corresponde
          a uma área atualmente navegável
          do ecossistema AgroNexus™.
        </p>

        <a
          href="#/"
          style={{
            display: 'inline-flex',
            minHeight: '48px',
            alignItems: 'center',
            padding: '0 22px',
            border:
              '1px solid rgba(255,255,255,0.25)',
            color: '#ffffff',
            textDecoration: 'none',
            fontSize: '0.7rem',
            fontWeight: 900,
            letterSpacing: '0.14em',
            textTransform: 'uppercase',
          }}
        >
          Voltar ao início
        </a>
      </div>
    </main>
  )
}

/* ============================================================
   ROUTE RESOLUTION
   ============================================================ */

function resolveRoute(
  route
) {
  if (
    route === '/' ||
    route === '/home' ||
    route === '/inicio'
  ) {
    return (
      <BabylonHome />
    )
  }

  if (
    route === '/apoie' ||
    route === '/apoiar' ||
    route === '/support'
  ) {
    return (
      <AgroNexusCommerceHub />
    )
  }

  const worldPage =
    resolveWorldRoute(
      route
    )

  if (worldPage) {
    return worldPage
  }

  const legacyWorld =
    resolveLegacyWorldRoute(
      route
    )

  if (legacyWorld) {
    return legacyWorld
  }

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

  return (
    <>
      <BabylonHeader />

      {page}

      <BabylonFooter />
    </>
  )
}
