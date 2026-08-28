/** AgroNexus™ — Application Router */
import { useEffect } from 'react'
import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom'
import BabylonHeader from './components/babylon/BabylonHeader'
import BabylonFooter from './components/BabylonFooter'
import AgroNexusCommerceHub from './components/AgroNexusCommerceHub'
import AgroNexusMarketSpotlight from './components/AgroNexusMarketSpotlight'
import AgroNexusPlantsMarket from './components/AgroNexusPlantsMarket'
import AgroNexusSuperHome from './pages/AgroNexusSuperHome'
import Contact from './components/Contact'
import BabylonHome from './pages/BabylonHome'
import AgroNexusWorldExperience from './pages/AgroNexusWorldExperience'
import AgroNexusOfferPage from './pages/AgroNexusOfferPage'
import AgroNexusLifePlans from './pages/AgroNexusLifePlans'
import AgroNexusExotics from './pages/AgroNexusExotics'
import AgroNexusSpeciesPage from './pages/AgroNexusSpeciesPage'
import AgroNexusExoticDetail from './pages/AgroNexusExoticDetail'

function SpaRedirect() {
  const navigate = useNavigate()
  useEffect(() => {
    const params = new URLSearchParams(window.location.search)
    const r = params.get('r')
    if (r) navigate(r, { replace: true })
  }, [navigate])
  return null
}

function HashLinkFix() {
  const navigate = useNavigate()
  useEffect(() => {
    const onClick = (e) => {
      const a = e.target.closest('a[href^="#/"]')
      if (!a) return
      e.preventDefault()
      navigate(a.getAttribute('href').slice(1))
    }
    document.addEventListener('click', onClick)
    return () => document.removeEventListener('click', onClick)
  }, [navigate])
  return null
}

function Marketplace() {
  return (
    <main style={{ minHeight: '100vh', paddingTop: 92, background: '#f1f0e9' }}>
      <AgroNexusMarketSpotlight title="Catálogo AgroNexus™" limit={12} />
    </main>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <SpaRedirect />
      <HashLinkFix />
      <Routes>
        <Route path="/" element={<AgroNexusSuperHome />} />
        <Route path="/home" element={<BabylonHome />} />
        <Route path="/inicio" element={<BabylonHome />} />

        <Route path="/marketplace" element={<Marketplace />} />
        <Route path="/catalogo" element={<Marketplace />} />
        <Route path="/mercado-de-plantas" element={<AgroNexusPlantsMarket />} />

        <Route path="/especie/:speciesKey" element={<AgroNexusSpeciesPage />} />
        <Route path="/exotico/:id" element={<AgroNexusExoticDetail />} />
        <Route path="/anuncio/:offerId" element={<AgroNexusOfferPage />} />

        <Route path="/contato" element={<Contact />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/fale-conosco" element={<Contact />} />

        <Route path="/agronexus-life" element={<AgroNexusLifePlans />} />
        <Route path="/agronexus-life/planos" element={<AgroNexusLifePlans />} />
        <Route path="/planos-de-saude" element={<AgroNexusLifePlans />} />
        <Route path="/mundo/saude/planos-de-saude" element={<AgroNexusLifePlans />} />

        <Route path="/exoticos" element={<AgroNexusExotics />} />
        <Route path="/agronexus-exoticos" element={<AgroNexusExotics />} />
        <Route path="/mundo/aves/exoticos" element={<AgroNexusExotics />} />
        <Route path="/mundo/pequenos-mamiferos/exoticos" element={<AgroNexusExotics />} />

        <Route path="/apoie" element={<AgroNexusCommerceHub />} />
        <Route path="/apoiar" element={<AgroNexusCommerceHub />} />
        <Route path="/support" element={<AgroNexusCommerceHub />} />

        <Route path="/mundo/:slug/:departmentSlug" element={<AgroNexusWorldExperience />} />
        <Route path="/mundo/:slug" element={<AgroNexusWorldExperience />} />

        <Route path="/aves" element={<AgroNexusWorldExperience slug="aves" />} />
        <Route path="/aquarismo" element={<AgroNexusWorldExperience slug="aquarismo" />} />
        <Route path="/corais" element={<AgroNexusWorldExperience slug="corais" />} />
        <Route path="/mamiferos" element={<AgroNexusWorldExperience slug="pequenos-mamiferos" />} />
        <Route path="/pequenos-mamiferos" element={<AgroNexusWorldExperience slug="pequenos-mamiferos" />} />
        <Route path="/caes" element={<AgroNexusWorldExperience slug="caes" />} />
        <Route path="/gatos" element={<AgroNexusWorldExperience slug="gatos" />} />
        <Route path="/repteis" element={<AgroNexusWorldExperience slug="repteis" />} />
        <Route path="/plantas" element={<AgroNexusWorldExperience slug="plantas" />} />
        <Route path="/plantas-aquaticas" element={<AgroNexusWorldExperience slug="plantas-aquaticas" />} />
        <Route path="/bonsais" element={<AgroNexusWorldExperience slug="bonsais" />} />
        <Route path="/orquideas" element={<AgroNexusWorldExperience slug="orquideas" />} />
        <Route path="/alimentacao" element={<AgroNexusWorldExperience slug="alimentacao" />} />
        <Route path="/saude" element={<AgroNexusWorldExperience slug="saude" />} />
        <Route path="/equipamentos" element={<AgroNexusWorldExperience slug="equipamentos" />} />
        <Route path="/habitats" element={<AgroNexusWorldExperience slug="equipamentos" />} />

        <Route path="*" element={
          <main style={{ minHeight: '100vh', padding: '180px 7vw' }}>
            <h1>Página não encontrada.</h1>
            <a href="/" style={{ color: '#087a4b', textDecoration: 'underline' }}>Voltar ao início</a>
          </main>
        } />
      </Routes>
      <BabylonFooter />
    </BrowserRouter>
  )
}
