import { useEffect, useState } from 'react'

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

function getCurrentRoute() {
  const hash = window.location.hash || '#/'
  return hash.replace('#', '') || '/'
}

function PageContainer({ children }) {
  return (
    <main className="page-container">
      {children}
    </main>
  )
}

function MarketplacePage() {
  return (
    <PageContainer>
      <MarketplaceWarPlan />
      <PsittacinesMarketplace />
    </PageContainer>
  )
}

function GlobalPresencePage() {
  return (
    <PageContainer>
      <GlobalPresence />
    </PageContainer>
  )
}

function CommunityPage() {
  return (
    <PageContainer>
      <CommunityHub />
      <LivingEcosystem />
    </PageContainer>
  )
}

function LibraryPage() {
  return (
    <PageContainer>
      <AgroNexusLibrary />
    </PageContainer>
  )
}

function ContactPage() {
  return (
    <PageContainer>
      <Contact />
    </PageContainer>
  )
}

function NotFound() {
  return (
    <main
      style={{
        minHeight: '70vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '120px 24px 60px',
        background: '#02060b',
        color: '#f3f0e8',
        textAlign: 'center',
      }}
    >
      <div>
        <p
          style={{
            margin: '0 0 12px',
            color: '#d4af37',
            letterSpacing: '0.18em',
            textTransform: 'uppercase',
          }}
        >
          AgroNexus™
        </p>

        <h1
          style={{
            margin: '0 0 18px',
            fontSize: 'clamp(2rem, 6vw, 4.5rem)',
          }}
        >
          Página não encontrada
        </h1>

        <p
          style={{
            maxWidth: '620px',
            margin: '0 auto 30px',
            lineHeight: 1.7,
            opacity: 0.8,
          }}
        >
          O conteúdo solicitado não está disponível ou foi transferido para
          uma nova área do ecossistema.
        </p>

        <a
          href="#/"
          style={{
            display: 'inline-flex',
            padding: '14px 26px',
            border: '1px solid #d4af37',
            borderRadius: '999px',
            color: '#d4af37',
            textDecoration: 'none',
            textTransform: 'uppercase',
            letterSpacing: '0.12em',
            fontSize: '0.82rem',
          }}
        >
          Voltar ao início
        </a>
      </div>
    </main>
  )
}

function renderRoute(route) {
  switch (route) {
    case '/':
    case '/home':
      return <Home />

    case '/aves':
      return <Aves />

    case '/aquarismo':
      return <Aquarismo />

    case '/mamiferos':
      return <Mamiferos />

    case '/marketplace':
      return <MarketplacePage />

    case '/presenca-global':
      return <GlobalPresencePage />

    case '/comunidade':
      return <CommunityPage />

    case '/biblioteca':
      return <LibraryPage />

    case '/contato':
      return <ContactPage />

    default:
      return <NotFound />
  }
}

export default function App() {
  const [route, setRoute] = useState(getCurrentRoute())

  useEffect(() => {
    function handleRouteChange() {
      setRoute(getCurrentRoute())
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'instant',
      })
    }

    window.addEventListener('hashchange', handleRouteChange)

    return () => {
      window.removeEventListener('hashchange', handleRouteChange)
    }
  }, [])

  return (
    <>
      <Navbar />
      {renderRoute(route)}
      <Footer />
    </>
  )
}
