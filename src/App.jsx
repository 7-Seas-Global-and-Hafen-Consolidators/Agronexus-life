import { useEffect, useMemo, useState } from 'react'

import Navbar from './components/Navbar'
import Footer from './components/Footer'

import Home from './pages/Home'
import Aves from './pages/Aves'
import Aquarismo from './pages/Aquarismo'
import Mamiferos from './pages/Mamiferos'

import MarketplaceWarPlan from './components/MarketplaceWarPlan'
import PsittacinesMarketplace from './components/PsittacinesMarketplace'
import GlobalPresence from './components/GlobalPresence'
import CommunityHub from './components/CommunityHub'
import LivingEcosystem from './components/LivingEcosystem'
import AgroNexusLibrary from './components/AgroNexusLibrary'
import Contact from './components/Contact'

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
  return normalizeRoute(hash.replace(/^#/, ''))
}

function PageContainer({ children, className = '' }) {
  return (
    <main className={`page-container ${className}`.trim()}>
      {children}
    </main>
  )
}

function MarketplacePage() {
  return (
    <PageContainer className="page-container--marketplace">
      <MarketplaceWarPlan />
      <PsittacinesMarketplace />
    </PageContainer>
  )
}

function GlobalPresencePage() {
  return (
    <PageContainer className="page-container--global">
      <GlobalPresence />
    </PageContainer>
  )
}

function CommunityPage() {
  return (
    <PageContainer className="page-container--community">
      <CommunityHub />
      <LivingEcosystem />
    </PageContainer>
  )
}

function LibraryPage() {
  return (
    <PageContainer className="page-container--library">
      <AgroNexusLibrary />
    </PageContainer>
  )
}

function ContactPage() {
  return (
    <PageContainer className="page-container--contact">
      <Contact />
    </PageContainer>
  )
}

function NotFound() {
  return (
    <main
      style={{
        minHeight: '76vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '150px 24px 80px',
        background:
          'radial-gradient(circle at 50% 20%, rgba(34, 211, 216, 0.08), transparent 34%), #02060b',
        color: '#f3f0e8',
        textAlign: 'center',
      }}
    >
      <div>
        <p
          style={{
            margin: '0 0 16px',
            color: '#d4af37',
            fontSize: '0.76rem',
            fontWeight: 700,
            letterSpacing: '0.22em',
            textTransform: 'uppercase',
          }}
        >
          AgroNexus Living Ecosystem™
        </p>

        <h1
          style={{
            margin: '0 0 22px',
            fontSize: 'clamp(2.4rem, 7vw, 5.4rem)',
            lineHeight: 1,
          }}
        >
          Página não encontrada
        </h1>

        <p
          style={{
            maxWidth: '620px',
            margin: '0 auto 34px',
            color: 'rgba(243, 240, 232, 0.68)',
            fontSize: '1.05rem',
            lineHeight: 1.8,
          }}
        >
          O conteúdo solicitado não está disponível ou foi transferido
          para uma nova área do ecossistema.
        </p>

        <a
          href="#/"
          style={{
            minHeight: '52px',
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '0 28px',
            border: '1px solid #d4af37',
            borderRadius: '999px',
            color: '#d4af37',
            textDecoration: 'none',
            textTransform: 'uppercase',
            letterSpacing: '0.13em',
            fontSize: '0.78rem',
            fontWeight: 700,
          }}
        >
          Voltar ao início
        </a>
      </div>
    </main>
  )
}

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

export default function App() {
  const [route, setRoute] = useState(getCurrentRoute)

  const routeConfiguration = useMemo(
    () => getRouteConfiguration(route),
    [route]
  )

  useEffect(() => {
    function handleRouteChange() {
      setRoute(getCurrentRoute())
    }

    window.addEventListener('hashchange', handleRouteChange)

    return () => {
      window.removeEventListener('hashchange', handleRouteChange)
    }
  }, [])

  useEffect(() => {
    const { scrollTarget } = routeConfiguration

    const scrollPage = () => {
      if (scrollTarget) {
        const target = document.querySelector(scrollTarget)

        if (target) {
          const navbarHeight = 92
          const targetPosition =
            target.getBoundingClientRect().top +
            window.scrollY -
            navbarHeight

          window.scrollTo({
            top: Math.max(targetPosition, 0),
            left: 0,
            behavior: 'smooth',
          })

          return
        }
      }

      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'instant',
      })
    }

    const firstFrame = window.requestAnimationFrame(() => {
      const secondFrame = window.requestAnimationFrame(scrollPage)

      return () => {
        window.cancelAnimationFrame(secondFrame)
      }
    })

    return () => {
      window.cancelAnimationFrame(firstFrame)
    }
  }, [routeConfiguration])

  return (
    <>
      <Navbar currentRoute={route} />

      {routeConfiguration.component}

      <Footer />
    </>
  )
}
