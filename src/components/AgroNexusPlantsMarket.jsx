import { useMemo, useState } from 'react'
import PLANTS_MERGED from '../data/plantsMerge'
import { AGRONEXUS_COMMERCE } from '../data/commerceConfig'

const brl = (v) => `R$ ${Number(v || 0).toFixed(2).replace('.', ',')}`
const agroPrice = (p) => (Number(p) || 0) * 0.9

const FALLBACK =
  "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='800' height='800'><rect width='800' height='800' fill='%230a1f16'/><text x='400' y='392' fill='%23a3e635' font-family='sans-serif' font-size='30' font-weight='bold' text-anchor='middle'>AgroNexus™</text><text x='400' y='436' fill='%23ffffff' font-family='sans-serif' font-size='18' text-anchor='middle'>10% abaixo do mercado</text></svg>"

const DEPARTMENTS = [
  { emoji: '🦜', name: 'Aves', desc: 'Rações, sementes, gaiolas e brinquedos', href: '/aves' },
  { emoji: '🐠', name: 'Peixes & Aquarismo', desc: 'Doce e marinho, tratamentos e testes', href: '/aquarismo' },
  { emoji: '🪸', name: 'Corais & Reef', desc: 'Corais, invertebrados e reef gear', href: '/corais' },
  { emoji: '🦎', name: 'Répteis', desc: 'Terrários, aquecimento e alimentação', href: '/repteis' },
  { emoji: '🐹', name: 'Pequenos Mamíferos', desc: 'Roedores, coelhos e furões', href: '/pequenos-mamiferos' },
  { emoji: '🌱', name: 'Plantas & Jardim', desc: 'Mudas, substratos, vasos e adubos', href: '/plantas' },
  { emoji: '💊', name: 'Farmácia & Saúde', desc: 'Medicamentos, vermífugos e vitaminas', href: '/saude' },
  { emoji: '🍖', name: 'Alimentação & Rações', desc: 'Para todas as espécies e fases', href: '/alimentacao' },
  { emoji: '🧸', name: 'Brinquedos & Enriquecimento', desc: 'Bem-estar e diversão espécie a espécie', href: '/equipamentos' },
  { emoji: '🏠', name: 'Equipamentos & Habitats', desc: 'Aquários, terrários, gaiolas e viveiros', href: '/equipamentos' },
  { emoji: '🐶', name: 'Cães', desc: 'Ração, higiene, farmácia e acessórios', href: '/caes' },
  { emoji: '🐱', name: 'Gatos', desc: 'Areias, arranhadores, ração e saúde', href: '/gatos' },
]

const ADVANTAGES = [
  { emoji: '🏷️', title: '10% abaixo do mercado', desc: 'Preço anunciado já com desconto sobre a média de mercado.' },
  { emoji: '💳', title: 'Até 12x no cartão', desc: 'Pix e boleto com condição especial no atendimento.' },
  { emoji: '🚚', title: 'Envio Brasil inteiro', desc: 'Embalagem viva: seres vivos viajam com segurança.' },
  { emoji: '🛡️', title: 'Garantia AgroNexus', desc: 'Troca em até 7 dias e suporte especializado.' },
]

const SEO_JSONLD = {
  '@context': 'https://schema.org',
  '@type': 'OnlineStore',
  name: 'AgroNexus™',
  url: 'https://agronexus.life/',
  description:
    'AgroNexus™ conecta aves, aquarismo, corais, répteis, pequenos mamíferos, plantas, farmácia, alimentação e equipamentos em um único ecossistema, com preços 10% abaixo da média de mercado.',
}

export default function AgroNexusPlantsMarket() {
  const [query, setQuery] = useState('')

  const items = useMemo(() => {
    const q = query.trim().toLowerCase()
    const base = PLANTS_MERGED.filter((i) => i.price)
    if (!q) return base
    return base.filter(
      (i) =>
        (i.name || '').toLowerCase().includes(q) ||
        (i.scientificName || '').toLowerCase().includes(q)
    )
  }, [query])

  const wa = (name) =>
    `${AGRONEXUS_COMMERCE.contactLinks.whatsapp.url}?text=${encodeURIComponent(
      `Olá! Quero com 10% abaixo do mercado: ${name}`
    )}`

  return (
    <main className="agx-super">
      <style>{`
        .agx-super{background:#f4f6f4;color:#111411;font-family:Inter,system-ui,sans-serif;min-height:100vh;padding-top:92px}
        .agx-super *{box-sizing:border-box}
        .agx-super a{text-decoration:none;color:inherit}
        .agx-super__wrap{width:min(1280px,100% - 32px);margin:0 auto}
        .agx-super__hero{padding:34px 0 10px}
        .agx-super__hero h1{margin:0;font-size:clamp(2rem,5vw,3.6rem);letter-spacing:-.04em;line-height:1}
        .agx-super__hero p{margin:10px 0 0;color:#4c5b53}
        .agx-super__search{margin:18px 0 8px}
        .agx-super__search input{width:100%;min-height:54px;padding:0 16px;border:1px solid #a9bbaf;border-radius:8px;font-size:1rem;outline:none}
        .agx-super__search input:focus{border-color:#0e9f6e;box-shadow:0 0 0 3px rgba(14,159,110,.15)}
        .agx-super__adv{display:grid;grid-template-columns:repeat(4,1fr);gap:10px;margin:18px 0 26px}
        .agx-super__adv article{background:#0a1f16;color:#fff;border-radius:10px;padding:14px}
        .agx-super__adv b{display:block;margin:6px 0 4px;font-size:.85rem}
        .agx-super__adv span{display:block;color:#bcd8c9;font-size:.72rem;line-height:1.4}
        .agx-super__adv .e{font-size:1.2rem}
        .agx-super__deps{display:grid;grid-template-columns:repeat(4,1fr);gap:10px;margin-bottom:30px}
        .agx-super__dep{background:#fff;border:1px solid #dce5df;border-radius:10px;padding:16px;display:block;transition:.15s}
        .agx-super__dep:hover{border-color:#0e9f6e;transform:translateY(-2px)}
        .agx-super__dep .e{font-size:1.6rem}
        .agx-super__dep b{display:block;margin:8px 0 4px;font-size:.95rem}
        .agx-super__dep span{display:block;color:#5b6b62;font-size:.72rem;line-height:1.4}
        .agx-super__grid{display:grid;grid-template-columns:repeat(4,1fr);gap:12px}
        .agx-super__card{background:#fff;border:1px solid #dce5df;border-radius:10px;overflow:hidden;display:flex;flex-direction:column}
        .agx-super__img{position:relative;aspect-ratio:1/1;overflow:hidden;background:#e8ece9}
        .agx-super__img img{width:100%;height:100%;object-fit:cover;object-position:center 20%;transform:scale(1.15)}
        .agx-super__badge{position:absolute;top:8px;left:8px;background:#0e9f6e;color:#fff;font-size:.65rem;font-weight:800;padding:4px 8px;border-radius:4px}
        .agx-super__body{padding:14px;display:flex;flex-direction:column;flex:1}
        .agx-super__body h3{margin:0 0 8px;font-size:.9rem;line-height:1.25}
        .agx-super__de{color:#8a978e;text-decoration:line-through;font-size:.75rem}
        .agx-super__por{color:#0e9f6e;font-weight:900;font-size:1.15rem;margin:2px 0 10px}
        .agx-super__cta{margin-top:auto;display:block;text-align:center;background:#111411;color:#fff;border-radius:6px;padding:10px;font-size:.7rem;font-weight:800;letter-spacing:.06em;text-transform:uppercase}
        .agx-super__cta:hover{background:#0e9f6e}
        .agx-super__seo{margin:40px 0 60px;color:#4c5b53;font-size:.85rem;line-height:1.7;max-width:900px}
        .agx-super__seo h2{color:#111411;font-size:1.2rem;margin:0 0 10px}
        @media(max-width:1000px){.agx-super__adv,.agx-super__deps,.agx-super__grid{grid-template-columns:repeat(2,1fr)}}
        @media(max-width:560px){.agx-super__adv,.agx-super__deps,.agx-super__grid{grid-template-columns:1fr}}
      `}</style>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(SEO_JSONLD) }} />

      <div className="agx-super__wrap">
        <header className="agx-super__hero">
          <h1>Supermercado da biodiversidade.</h1>
          <p>Do brinquedinho ao medicamento, da ração à muda rara: tudo pra toda espécie, com preço 10% abaixo do mercado.</p>
          <div className="agx-super__search">
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Busque: jabuticaba, lichia, rosa, maracujá…"
            />
          </div>
        </header>

        <section className="agx-super__adv">
          {ADVANTAGES.map((a) => (
            <article key={a.title}>
              <span className="e">{a.emoji}</span>
              <b>{a.title}</b>
              <span>{a.desc}</span>
            </article>
          ))}
        </section>

        <section className="agx-super__deps">
          {DEPARTMENTS.map((d) => (
            <a className="agx-super__dep" key={d.name} href={d.href}>
              <span className="e">{d.emoji}</span>
              <b>{d.name}</b>
              <span>{d.desc}</span>
            </a>
          ))}
        </section>

        <section className="agx-super__grid">
          {items.slice(0, 48).map((i) => (
            <article className="agx-super__card" key={i.id}>
              <div className="agx-super__img">
                <img src={i.image || FALLBACK} alt={i.name} loading="lazy"
                  onError={(e) => { e.currentTarget.onerror = null; e.currentTarget.src = FALLBACK }} />
                <span className="agx-super__badge">-10% MERCADO</span>
              </div>
              <div className="agx-super__body">
                <h3>{i.name}</h3>
                <span className="agx-super__de">de {brl(i.price)}</span>
                <span className="agx-super__por">por {brl(agroPrice(i.price))}</span>
                <a className="agx-super__cta" href={wa(i.name)} target="_blank" rel="noreferrer">Quero este</a>
              </div>
            </article>
          ))}
        </section>

        <section className="agx-super__seo">
          <h2>Por que a AgroNexus™ é diferente?</h2>
          <p>
            A AgroNexus™ nasceu pra quem cuida de vida: aves, peixes, corais, répteis, pequenos mamíferos e plantas.
            Em vez de vitrines genéricas, organizamos tudo por mundo e departamento, com procedência, nome científico
            e atendimento especializado. O preço anunciado já sai 10% abaixo da média de mercado, e o fechamento é
            direto no WhatsApp ou Telegram, sem enrolação.
          </p>
          <p>
            Seres vivos viajam com embalagem adequada e garantia de chegada; produtos secos seguem com rastreio.
            Se não for o que você esperava, troca em até 7 dias. Simples assim.
          </p>
        </section>
      </div>
    </main>
  )
}
