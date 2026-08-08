import { useEffect, useMemo, useState } from 'react'

import Navbar from './components/Navbar'
import Footer from './components/Footer'

import Home from './pages/Home'
import Aves from './pages/Aves'
import Aquarismo from './pages/Aquarismo'
import Mamiferos from './pages/Mamiferos'

import MarketplaceWarPlan from './components/MarketplaceWarPlan'
import GlobalPresence from './components/GlobalPresence'
import CommunityHub from './components/CommunityHub'
import LivingEcosystem from './components/LivingEcosystem'
import AgroNexusLibrary from './components/AgroNexusLibrary'
import Contact from './components/Contact'

/* ============================================================
   ROUTING
   ============================================================ */

function normalizeRoute(value) {
  if (!value) {
    return '/'
  }

  const routeWithoutQuery = value.split('?')[0]

  const routeWithoutTrailingSlash =
    routeWithoutQuery.length > 1
      ? routeWithoutQuery.replace(/\/+$/, '')
      : routeWithoutQuery

  return routeWithoutTrailingSlash || '/'
}

function getCurrentRoute() {
  const hash = window.location.hash || '#/'

  return normalizeRoute(
    hash.replace(/^#/, '')
  )
}

/* ============================================================
   PAGE WRAPPER
   ============================================================ */

function PageContainer({
  children,
  className = '',
}) {
  return (
    <main
      className={`page-container ${className}`.trim()}
    >
      {children}
    </main>
  )
}

/* ============================================================
   MARKETPLACE
   ============================================================ */

function MarketplacePage() {
  return (
    <PageContainer className="marketplace-page">
      <MarketplaceWarPlan />
    </PageContainer>
  )
}

/* ============================================================
   PRESENÇA GLOBAL
   ============================================================ */

function GlobalPresencePage() {
  return (
    <PageContainer className="global-presence-page">
      <GlobalPresence />
    </PageContainer>
  )
}

/* ============================================================
   COMUNIDADE
   ============================================================ */

function CommunityPage() {
  return (
    <PageContainer className="community-page">
      <CommunityHub />
      <LivingEcosystem />
    </PageContainer>
  )
}

/* ============================================================
   BIBLIOTECA
   ============================================================ */

function LibraryPage() {
  return (
    <PageContainer className="library-page">
      <AgroNexusLibrary />
    </PageContainer>
  )
}

/* ============================================================
   CONTATO
   ============================================================ */

function ContactPage() {
  return (
    <PageContainer className="contact-page">
      <Contact />
    </PageContainer>
  )
}

/* ============================================================
   GUIROPA WORLD — IDENTIFICAÇÃO GLOBAL
   ============================================================ */

function InstitutionalBar() {
  return (
    <div
      className="institutional-bar"
      style={{
        width: '100%',
        minHeight: '30px',
        padding: '7px 18px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: '#111411',
        borderBottom: '1px solid #2a2f2b',
        color: '#d6d6d6',
        fontSize: '0.68rem',
        fontWeight: 750,
        letterSpacing: '0.075em',
        lineHeight: 1.4,
        textAlign: 'center',
        textTransform: 'uppercase',
      }}
    >
      AgroNexus™ · Uma iniciativa da Guiropa World
    </div>
  )
}

/* ============================================================
   404
   ============================================================ */

function NotFound() {
  return (
    <main
      style={{
        minHeight: '76vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '150px 24px 80px',
        background: '#f5f7f5',
        color: '#111411',
        textAlign: 'center',
      }}
    >
      <div>
        <p
          style={{
            margin: '0 0 16px',
            color: '#087a4b',
            fontSize: '0.76rem',
            fontWeight: 800,
            letterSpacing: '0.16em',
            textTransform: 'uppercase',
          }}
        >
          AgroNexus™ · Guiropa World
        </p>

        <h1
          style={{
            margin: '0 0 22px',
            color: '#111411',
            fontSize: 'clamp(2.4rem, 7vw, 5.4rem)',
            fontWeight: 900,
            lineHeight: 0.95,
            letterSpacing: '-0.05em',
          }}
        >
          Página não encontrada
        </h1>

        <p
          style={{
            maxWidth: '620px',
            margin: '0 auto 34px',
            color: '#4b554e',
            fontSize: '1.05rem',
            lineHeight: 1.8,
          }}
        >
          O conteúdo solicitado não está disponível
          ou foi transferido para outra área da AgroNexus.
        </p>

        <a
          href="#/"
          style={{
            minHeight: '52px',
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '0 28px',
            border: '1px solid #111411',
            borderRadius: '4px',
            background: '#111411',
            color: '#ffffff',
            textDecoration: 'none',
            textTransform: 'uppercase',
            letterSpacing: '0.1em',
            fontSize: '0.78rem',
            fontWeight: 800,
          }}
        >
          Voltar ao início
        </a>
      </div>
    </main>
  )
}

/* ============================================================
   CONFIGURAÇÃO DAS ROTAS
   ============================================================ */

function getRouteConfiguration(route) {
  const routes = {
    '/': {
      component: <Home />,
      scrollTarget: null,
    },

    '/home': {
      component: <Home />,
      scrollTarget: null,
    },

    '/inicio': {
      component: <Home />,
      scrollTarget: null,
    },

    '/sobre': {
      component: <Home />,
      scrollTarget: '#sobre',
    },

    '/missao': {
      component: <Home />,
      scrollTarget: '#missao',
    },

    '/ecossistema': {
      component: <Home />,
      scrollTarget: '#ecossistema',
    },

    '/portfolio': {
      component: <Home />,
      scrollTarget: '#portfolio',
    },

    '/aves': {
      component: <Aves />,
      scrollTarget: null,
    },

    '/aquarismo': {
      component: <Aquarismo />,
      scrollTarget: null,
    },

    '/mamiferos': {
      component: <Mamiferos />,
      scrollTarget: null,
    },

    '/marketplace': {
      component: <MarketplacePage />,
      scrollTarget: null,
    },

    '/presenca-global': {
      component: <GlobalPresencePage />,
      scrollTarget: null,
    },

    '/comunidade': {
      component: <CommunityPage />,
      scrollTarget: null,
    },

    '/biblioteca': {
      component: <LibraryPage />,
      scrollTarget: null,
    },

    '/contato': {
      component: <ContactPage />,
      scrollTarget: null,
    },
  }

  return (
    routes[route] || {
      component: <NotFound />,
      scrollTarget: null,
    }
  )
}

/* ============================================================
   APP
   ============================================================ */

export default function App() {
  const [route, setRoute] =
    useState(getCurrentRoute)

  const routeConfiguration = useMemo(
    () => getRouteConfiguration(route),
    [route]
  )

  useEffect(() => {
    function handleRouteChange() {
      setRoute(getCurrentRoute())
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
    const { scrollTarget } =
      routeConfiguration

    const scrollPage = () => {
      if (scrollTarget) {
        const target =
          document.querySelector(
            scrollTarget
          )

        if (target) {
          const navbarHeight = 92

          const targetPosition =
            target.getBoundingClientRect().top +
            window.scrollY -
            navbarHeight

          window.scrollTo({
            top: Math.max(
              targetPosition,
              0
            ),
            left: 0,
            behavior: 'smooth',
          })

          return
        }
      }

      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'auto',
      })
    }

    const firstFrame =
      window.requestAnimationFrame(
        scrollPage
      )

    return () => {
      window.cancelAnimationFrame(
        firstFrame
      )
    }
  }, [routeConfiguration])

  return (
    <>
      <InstitutionalBar />

      <Navbar />

      {routeConfiguration.component}

      <Footer />
    </>
  )
}
