import { useState } from 'react'
import { AGRONEXUS_COMMERCE } from '../data/commerceConfig'

const brl = (v) => Number(v || 0).toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })
const pix = (v) => (Number(v) || 0) * 0.95

const REPTILES = [
  { emoji: '🐍', nome: 'Califórnia King Snake Albina', cient: 'Lampropeltis getula', desc: 'Coloração rara, super dócil.', preco: 3800, img: 'https://acdn-us.mitiendanube.com/stores/004/777/787/products/img_4269-b25d2a4ae9283f2c8217857996620364-480-0.webp' },
  { emoji: '🐍', nome: 'Milk Snake Hondurensis', cient: 'Lampropeltis triangulum', desc: 'Coloração intensa, dócil.', preco: 5200, img: 'https://acdn-us.mitiendanube.com/stores/004/777/787/products/img_4275-e08882d1f3658f846b17858005877442-480-0.webp' },
  { emoji: '🐍', nome: 'Milk Snake Snow', cient: 'Lampropeltis t. hondurensis', desc: 'Morf branco, muito procurado.', preco: 4600, img: 'https://www.thirdeyeherp.com/snowhome.jpg' },
  { emoji: '🦎', nome: 'Iguana El Salvador', cient: 'Iguana iguana', desc: 'Mansa, nascida em cativeiro.', preco: 2500, img: 'https://commons.wikimedia.org/wiki/Special:Redirect/file/Iguana_iguana_-_green_iguana.jpg?width=960' },
  { emoji: '🦎', nome: 'Teiú Brasileiro', cient: 'Salvator merianae', desc: 'Inteligente, dócil, nacional.', preco: 3000, img: 'https://commons.wikimedia.org/wiki/Special:Redirect/file/Teiu_Gigante_Em_Santa_Helena_de_Goi%C3%A1s.jpg?width=960' },
]

const PRODUTOS = [
  { emoji: '💡', nome: 'Iluminação LED / UVB', desc: 'Essencial pra répteis.', preco: 180 },
  { emoji: '🏠', nome: 'Terrários & Vivários', desc: 'Habitats completos.', preco: 350 },
  { emoji: '🪵', nome: 'Substratos', desc: 'Cavaco, areia e tapetes.', preco: 45 },
  { emoji: '🧪', nome: 'Suplementos & Tratamentos', desc: 'Cálcio, vitaminas e saúde.', preco: 70 },
]

function Card({ item, wa }) {
  const [fail, setFail] = useState(false)
  const showImg = item.img && !fail

  return (
    <div className="xx__card">
      <div className="xx__media">
        {showImg ? (
          <img src={item.img} alt={item.nome} loading="lazy" onError={() => setFail(true)} />
        ) : (
          <span className="xx__emoji">{item.emoji}</span>
        )}
      </div>
      <div className="xx__body">
        <h3>{item.nome}</h3>
        {item.cient && <span className="xx__cient">{item.cient}</span>}
        {item.desc && <p>{item.desc}</p>}
        {item.preco ? (
          <>
            <span className="xx__pix">R$ {brl(pix(item.preco))}<small>no Pix (5% OFF)</small></span>
            <span className="xx__cardprice">R$ {brl(item.preco)} no cartão</span>
          </>
        ) : (
          <span className="xx__pix">Sob consulta</span>
        )}
        <a href={wa(`Olá! Quero saber mais sobre: ${item.nome}`)} target="_blank" rel="noreferrer">Quero este</a>
      </div>
    </div>
  )
}

export default function AgroNexusExoticsMarket() {
  const wa = (msg) =>
    `${AGRONEXUS_COMMERCE.contactLinks.whatsapp.url}?text=${encodeURIComponent(msg)}`

  return (
    <main className="xx">
      <style>{`
        .xx{background:#f4f6f4;color:#101828;font-family:Inter,system-ui,sans-serif;padding:110px 20px 80px;min-height:100vh;}
        .xx__wrap{max-width:1280px;margin:0 auto;}
        .xx__hero h1{font-size:clamp(2rem,5vw,3.6rem);font-weight:900;letter-spacing:-.04em;margin:0 0 6px;}
        .xx__hero p{color:#4c5b53;max-width:680px;margin:0 0 22px;}
        .xx__h2{font-size:clamp(1.3rem,3vw,2rem);font-weight:900;letter-spacing:-.03em;margin:30px 0 14px;}
        .xx__grid{display:grid;grid-template-columns:repeat(5,1fr);gap:14px;}
        .xx__grid--prod{grid-template-columns:repeat(4,1fr);}
        .xx__card{background:#fff;border:1px solid #dce5df;border-radius:10px;overflow:hidden;display:flex;flex-direction:column;}
        .xx__media{aspect-ratio:1/1;background:#e8ece9;display:flex;align-items:center;justify-content:center;overflow:hidden;}
        .xx__media img{width:100%;height:100%;object-fit:cover;}
        .xx__emoji{font-size:3rem;}
        .xx__body{display:flex;flex-direction:column;flex:1;padding:14px;}
        .xx__body h3{font-size:.92rem;font-weight:800;margin:0 0 2px;line-height:1.25;}
        .xx__cient{color:#74827a;font-size:.68rem;font-style:italic;margin-bottom:4px;}
        .xx__body p{color:#4c5b53;font-size:.76rem;flex:1;margin:0 0 8px;}
        .xx__pix{color:#0e9f6e;font-size:1.1rem;font-weight:900;}
        .xx__pix small{font-size:.62rem;font-weight:800;margin-left:4px;}
        .xx__cardprice{color:#74827a;font-size:.66rem;text-decoration:line-through;margin:2px 0 10px;}
        .xx__body a{margin-top:auto;background:#0e9f6e;color:#fff;text-align:center;padding:11px;border-radius:6px;font-weight:900;font-size:.7rem;letter-spacing:.05em;text-transform:uppercase;text-decoration:none;}
        .xx__body a:hover{background:#0b8a5e;}
        .xx__legal{margin-top:30px;background:#f7fbf8;border:1px solid #dce5df;border-radius:10px;padding:16px;color:#5b6b62;font-size:.78rem;line-height:1.6;}
        @media(max-width:1100px){.xx__grid{grid-template-columns:repeat(3,1fr);}.xx__grid--prod{grid-template-columns:repeat(2,1fr);}}
        @media(max-width:640px){.xx__grid,.xx__grid--prod{grid-template-columns:repeat(2,1fr);}}
      `}</style>

      <div className="xx__wrap">
        <div className="xx__hero">
          <h1>Répteis & Exóticos</h1>
          <p>Serpentes, iguanas e teiús de criadouros licenciados, com fotos e procedência AgroNexus™.</p>
        </div>

        <h2 className="xx__h2">🦎 Répteis & exóticos</h2>
        <div className="xx__grid">{REPTILES.map((r) => <Card key={r.nome} item={r} wa={wa} />)}</div>

        <h2 className="xx__h2">🧰 Setup & cuidados</h2>
        <div className="xx__grid xx__grid--prod">{PRODUTOS.map((p) => <Card key={p.nome} item={p} wa={wa} />)}</div>

        <div className="xx__legal">
          ⚖️ <strong>Procedência primeiro:</strong> répteis e exóticos somente de criadouros licenciados
          (IBAMA/SISFAUNA), com nota fiscal e marcação conforme a lei. Saber de onde vem faz parte da escolha.
        </div>
      </div>
    </main>
  )
}
