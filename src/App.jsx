/** AgroNexus™ — Application Router */
import { useEffect,useMemo,useState } from 'react'
import BabylonHeader from './components/babylon/BabylonHeader'
import BabylonFooter from './components/BabylonFooter'
import AgroNexusCommerceHub from './components/AgroNexusCommerceHub'
import AgroNexusMarketSpotlight from './components/AgroNexusMarketSpotlight'
import Contact from './components/Contact'
import BabylonHome from './pages/BabylonHome'
import AgroNexusWorldExperience from './pages/AgroNexusWorldExperience'
import AgroNexusOfferPage from './pages/AgroNexusOfferPage'
import AgroNexusLifePlans from './pages/AgroNexusLifePlans'
import AgroNexusExotics from './pages/AgroNexusExotics'
import AgroNexusSpeciesPage from './pages/AgroNexusSpeciesPage'
import AgroNexusExoticDetail from './pages/AgroNexusExoticDetail'
function normalizeRoute(v){if(!v)return'/';const a=String(v).replace(/^#/,'').split('?')[0];return a&&a.length>1?a.replace(/\/+$/,''):a||'/'}
function getCurrentRoute(){return normalizeRoute(window.location.hash||'#/')}
function isHomeRoute(r){return['/','/home','/inicio'].includes(r)}
const LEGACY={'/aves':'aves','/aquarismo':'aquarismo','/corais':'corais','/mamiferos':'pequenos-mamiferos','/pequenos-mamiferos':'pequenos-mamiferos','/caes':'caes','/gatos':'gatos','/repteis':'repteis','/plantas':'plantas','/plantas-aquaticas':'plantas-aquaticas','/bonsais':'bonsais','/orquideas':'orquideas','/alimentacao':'alimentacao','/saude':'saude','/equipamentos':'equipamentos','/habitats':'equipamentos'}
function Marketplace(){return <main style={{minHeight:'100vh',paddingTop:92,background:'#f1f0e9'}}><AgroNexusMarketSpotlight title="Catálogo AgroNexus™" limit={12}/></main>}
function resolveRoute(r){if(isHomeRoute(r))return <BabylonHome/>;if(r==='/marketplace'||r==='/catalogo')return <Marketplace/>;if(r==='/contato'||r==='/contact')return <Contact/>;let m=r.match(/^\/especie\/([^/]+)$/);if(m)return <AgroNexusSpeciesPage speciesKey={decodeURIComponent(m[1])}/>;m=r.match(/^\/exotico\/([^/]+)$/);if(m)return <AgroNexusExoticDetail id={decodeURIComponent(m[1])}/>;m=r.match(/^\/anuncio\/([^/]+)$/);if(m)return <AgroNexusOfferPage offerId={decodeURIComponent(m[1])}/>;if(['/agronexus-life','/agronexus-life/planos','/planos-de-saude','/mundo/saude/planos-de-saude'].includes(r))return <AgroNexusLifePlans/>;if(['/exoticos','/agronexus-exoticos','/mundo/aves/exoticos','/mundo/pequenos-mamiferos/exoticos'].includes(r))return <AgroNexusExotics/>;if(['/apoie','/apoiar','/support'].includes(r))return <AgroNexusCommerceHub/>;m=r.match(/^\/mundo\/([^/]+)\/([^/]+)$/);if(m)return <AgroNexusWorldExperience slug={decodeURIComponent(m[1])} departmentSlug={decodeURIComponent(m[2])}/>;m=r.match(/^\/mundo\/([^/]+)$/);if(m)return <AgroNexusWorldExperience slug={decodeURIComponent(m[1])}/>;if(LEGACY[r])return <AgroNexusWorldExperience slug={LEGACY[r]}/>;return <main style={{minHeight:'100vh',padding:'180px 7vw'}}><h1>Página não encontrada.</h1><a href="#/">Voltar ao início</a></main>}
export default function App(){const[route,setRoute]=useState(getCurrentRoute);const page=useMemo(()=>resolveRoute(route),[route]);useEffect(()=>{const h=()=>setRoute(getCurrentRoute());window.addEventListener('hashchange',h);return()=>window.removeEventListener('hashchange',h)},[]);useEffect(()=>{window.scrollTo({top:0,left:0,behavior:'auto'})},[route]);return <><BabylonHeader/>{page}{isHomeRoute(route)&&<AgroNexusMarketSpotlight title="Em destaque agora" limit={12}/>}<BabylonFooter/></>}
