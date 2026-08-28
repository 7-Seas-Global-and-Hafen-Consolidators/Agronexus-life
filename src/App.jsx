/** AgroNexus™ — Application Router */
import { useEffect } from 'react'
import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom'
import BabylonFooter from './components/BabylonFooter'
import AgroNexusCommerceHub from './components/AgroNexusCommerceHub'
import AgroNexusMarketSpotlight from './components/AgroNexusMarketSpotlight'
import AgroNexusPlantsMarket from './components/AgroNexusPlantsMarket'
import AgroNexusRuralMarket from './components/AgroNexusRuralMarket'
import AgroNexusMammalsMarket from './components/AgroNexusMammalsMarket'
import AgroNexusExoticsMarket from './components/AgroNexusExoticsMarket'
import AgroNexusPetMarket from './components/AgroNexusPetMarket'
import AgroNexusAquarioCalculator from './components/AgroNexusAquarioCalculator'
import AgroNexusPomarCalculator from './components/AgroNexusPomarCalculator'
import AgroNexusQuiz from './components/AgroNexusQuiz'
import AgroNexusToolsWidget from './components/AgroNexusToolsWidget'
import AgroNexusSupportDock from './components/AgroNexusSupportDock'
import AgroNexusImpactCounters from './components/AgroNexusImpactCounters'
import AgroNexusTrust from './components/AgroNexusTrust'
import AgroNexusSeoNewsletter from './components/AgroNexusSeoNewsletter'
import AgroNexusSuperHome from './pages/AgroNexusSuperHome'
import AgroNexusToolsHub from './pages/AgroNexusToolsHub'
import Contact from './components/Contact'
import BabylonHome from './pages/BabylonHome'
import AgroNexusWorldExperience from './pages/AgroNexusWorldExperience'
import AgroNexusOfferPage from './pages/AgroNexusOfferPage'
import AgroNexusLifePlans from './pages/AgroNexusLifePlans'
import AgroNexusExotics from './pages/AgroNexusExotics'
import AgroNexusSpeciesPage from './pages/AgroNexusSpeciesPage'
import AgroNexusExoticDetail from './pages/AgroNexusExoticDetail'

function SpaRedirect(){const navigate=useNavigate();useEffect(()=>{const r=new URLSearchParams(window.location.search).get('r');if(r)navigate(r,{replace:true})},[navigate]);return null}
function HashLinkFix(){const navigate=useNavigate();useEffect(()=>{const onClick=e=>{const a=e.target.closest('a[href^="#/"]');if(!a)return;e.preventDefault();navigate(a.getAttribute('href').slice(1))};document.addEventListener('click',onClick);return()=>document.removeEventListener('click',onClick)},[navigate]);return null}
function Marketplace(){return <main style={{minHeight:'100vh',paddingTop:92,background:'#f7f8fa'}}><AgroNexusMarketSpotlight title="Catálogo AgroNexus™" limit={24}/><AgroNexusTrust/></main>}
function ApoiePage(){return <main><AgroNexusCommerceHub/><AgroNexusImpactCounters/><AgroNexusTrust/></main>}

export default function App(){return <BrowserRouter><SpaRedirect/><HashLinkFix/><Routes>
<Route path="/" element={<AgroNexusSuperHome/>}/><Route path="/home" element={<BabylonHome/>}/><Route path="/inicio" element={<BabylonHome/>}/>
<Route path="/marketplace" element={<Marketplace/>}/><Route path="/catalogo" element={<Marketplace/>}/>
<Route path="/mercado-de-plantas" element={<AgroNexusPlantsMarket/>}/><Route path="/rural" element={<AgroNexusRuralMarket/>}/><Route path="/mercado-rural" element={<AgroNexusRuralMarket/>}/><Route path="/mercado-de-mamiferos" element={<AgroNexusMammalsMarket/>}/><Route path="/mercado-de-exoticos" element={<AgroNexusExoticsMarket/>}/><Route path="/mercado-pet" element={<AgroNexusPetMarket/>}/>
<Route path="/ferramentas" element={<AgroNexusToolsHub/>}/><Route path="/ferramentas/calculadora-aquario" element={<AgroNexusAquarioCalculator/>}/><Route path="/ferramentas/calculadora-pomar" element={<AgroNexusPomarCalculator/>}/><Route path="/ferramentas/desafio-biodiversidade" element={<AgroNexusQuiz/>}/><Route path="/novidades" element={<AgroNexusSeoNewsletter/>}/>
<Route path="/especie/:speciesKey" element={<AgroNexusSpeciesPage/>}/><Route path="/exotico/:id" element={<AgroNexusExoticDetail/>}/><Route path="/anuncio/:offerId" element={<AgroNexusOfferPage/>}/>
<Route path="/contato" element={<Contact/>}/><Route path="/contact" element={<Contact/>}/><Route path="/fale-conosco" element={<Contact/>}/>
<Route path="/agronexus-life" element={<AgroNexusLifePlans/>}/><Route path="/agronexus-life/planos" element={<AgroNexusLifePlans/>}/><Route path="/planos-de-saude" element={<AgroNexusLifePlans/>}/><Route path="/mundo/saude/planos-de-saude" element={<AgroNexusLifePlans/>}/>
<Route path="/exoticos" element={<AgroNexusExotics/>}/><Route path="/agronexus-exoticos" element={<AgroNexusExotics/>}/><Route path="/mundo/aves/exoticos" element={<AgroNexusExotics/>}/><Route path="/mundo/pequenos-mamiferos/exoticos" element={<AgroNexusExotics/>}/>
<Route path="/apoie" element={<ApoiePage/>}/><Route path="/apoiar" element={<ApoiePage/>}/><Route path="/support" element={<ApoiePage/>}/>
<Route path="/mundo/:slug/:departmentSlug" element={<AgroNexusWorldExperience/>}/><Route path="/mundo/:slug" element={<AgroNexusWorldExperience/>}/>
<Route path="/aves" element={<AgroNexusWorldExperience slug="aves"/>}/><Route path="/aquarismo" element={<AgroNexusWorldExperience slug="aquarismo"/>}/><Route path="/corais" element={<AgroNexusWorldExperience slug="corais"/>}/><Route path="/mamiferos" element={<AgroNexusWorldExperience slug="pequenos-mamiferos"/>}/><Route path="/pequenos-mamiferos" element={<AgroNexusWorldExperience slug="pequenos-mamiferos"/>}/><Route path="/caes" element={<AgroNexusWorldExperience slug="caes"/>}/><Route path="/gatos" element={<AgroNexusWorldExperience slug="gatos"/>}/><Route path="/repteis" element={<AgroNexusWorldExperience slug="repteis"/>}/><Route path="/plantas" element={<AgroNexusWorldExperience slug="plantas"/>}/><Route path="/plantas-aquaticas" element={<AgroNexusWorldExperience slug="plantas-aquaticas"/>}/><Route path="/bonsais" element={<AgroNexusWorldExperience slug="bonsais"/>}/><Route path="/orquideas" element={<AgroNexusWorldExperience slug="orquideas"/>}/><Route path="/alimentacao" element={<AgroNexusWorldExperience slug="alimentacao"/>}/><Route path="/saude" element={<AgroNexusWorldExperience slug="saude"/>}/><Route path="/equipamentos" element={<AgroNexusWorldExperience slug="equipamentos"/>}/><Route path="/habitats" element={<AgroNexusWorldExperience slug="equipamentos"/>}/>
<Route path="*" element={<main style={{minHeight:'100vh',padding:'180px 7vw'}}><h1>Página não encontrada.</h1><a href="/">Voltar ao início</a></main>}/>
</Routes><AgroNexusToolsWidget/><AgroNexusSupportDock/><BabylonFooter/></BrowserRouter>}
