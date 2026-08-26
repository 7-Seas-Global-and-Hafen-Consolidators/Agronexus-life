import React from 'react'

const WHATSAPP = 'https://wa.me/48732099369?text=Quero%20conhecer%20os%20planos%20AgroNexus%20Life'
const TELEGRAM = 'https://t.me/+447594716370'

const plans = [
  {
    name: 'AgroNexus Life™ Start',
    tagline: 'Cuidado essencial',
    price: 'R$ 12,90',
    note: 'por mês · valor de lançamento',
    features: ['Entrada acessível', 'Organização de histórico e cuidado', 'Acesso ao ecossistema AgroNexus Care', 'Atendimento para orientação de adesão'],
  },
  {
    name: 'AgroNexus Life™ Routine',
    tagline: 'Rotina e prevenção',
    price: 'R$ 29,90',
    note: 'por mês · valor de lançamento',
    features: ['Foco em prevenção', 'Jornada de cuidados recorrentes', 'Histórico conectado', 'Acompanhamento de serviços elegíveis'],
  },
  {
    name: 'AgroNexus Life™ Hospital',
    tagline: 'Proteção hospitalar',
    price: 'R$ 79,90',
    note: 'por mês · valor de lançamento',
    featured: true,
    features: ['Camada hospitalar', 'Jornada de internação quando elegível', 'Integração com histórico do animal', 'Prioridade na rede parceira disponível'],
  },
  {
    name: 'AgroNexus Life™ Plus',
    tagline: 'Cobertura ampliada',
    price: 'R$ 179,90',
    note: 'por mês · valor de lançamento',
    features: ['Cuidado ampliado', 'Mais categorias de atendimento elegível', 'Organização de exames e histórico', 'Acesso prioritário a parceiros participantes'],
  },
  {
    name: 'AgroNexus Life™ Prime',
    tagline: 'Cuidado premium',
    price: 'R$ 379,90',
    note: 'por mês · valor de lançamento',
    features: ['Experiência premium', 'Jornada de cuidado integral', 'Prioridade de atendimento', 'Benefícios ampliados conforme região e rede disponível'],
  },
]

export default function AgroNexusLifePlans() {
  return (
    <main className="agx-life">
      <style>{`
        .agx-life{background:#f4f2eb;color:#0f1511;min-height:100vh;font-family:Inter,system-ui,sans-serif}.agx-life *{box-sizing:border-box}.agx-life__hero{padding:150px clamp(24px,6vw,92px) 90px;background:linear-gradient(135deg,#061d15 0%,#0b3b29 55%,#173f32 100%);color:#fff}.agx-life__wrap{width:min(1440px,100%);margin:0 auto}.agx-life__eyebrow{margin:0 0 18px;color:#8fe0b2;font-size:.7rem;font-weight:900;letter-spacing:.18em;text-transform:uppercase}.agx-life__hero h1{max-width:1100px;margin:0;font-size:clamp(4.2rem,9vw,9rem);line-height:.83;letter-spacing:-.07em}.agx-life__hero p{max-width:760px;margin:28px 0 0;color:rgba(255,255,255,.74);font-size:clamp(1rem,1.5vw,1.25rem);line-height:1.65}.agx-life__hero-actions{display:flex;gap:10px;flex-wrap:wrap;margin-top:32px}.agx-life__btn{display:inline-flex;align-items:center;justify-content:center;min-height:50px;padding:0 22px;border:1px solid #8fe0b2;background:#8fe0b2;color:#092017;text-decoration:none;font-size:.7rem;font-weight:900;letter-spacing:.09em;text-transform:uppercase}.agx-life__btn--ghost{background:transparent;color:#fff;border-color:rgba(255,255,255,.38)}.agx-life__intro{padding:80px clamp(24px,6vw,92px) 34px}.agx-life__intro h2{max-width:950px;margin:0;font-size:clamp(3rem,6vw,6rem);line-height:.9;letter-spacing:-.06em}.agx-life__intro p{max-width:760px;margin:22px 0 0;color:#68716b;line-height:1.65}.agx-life__grid{display:grid;grid-template-columns:repeat(5,minmax(0,1fr));gap:1px;margin-top:46px;background:rgba(16,21,17,.14);border:1px solid rgba(16,21,17,.14)}.agx-life__card{display:flex;flex-direction:column;min-height:570px;padding:28px;background:#fff}.agx-life__card--featured{background:#0a2e21;color:#fff}.agx-life__card-kicker{font-size:.64rem;font-weight:900;letter-spacing:.13em;text-transform:uppercase;color:#0e5638}.agx-life__card--featured .agx-life__card-kicker{color:#8fe0b2}.agx-life__card h3{margin:22px 0 8px;font-size:1.6rem;line-height:.95;letter-spacing:-.04em}.agx-life__tag{color:#68716b;font-size:.85rem}.agx-life__card--featured .agx-life__tag{color:rgba(255,255,255,.62)}.agx-life__price{margin:46px 0 4px;font-size:clamp(2.2rem,3vw,3.7rem);font-weight:950;letter-spacing:-.06em}.agx-life__note{font-size:.72rem;color:#7a817c}.agx-life__card--featured .agx-life__note{color:rgba(255,255,255,.55)}.agx-life__features{display:grid;gap:12px;margin:34px 0 28px;padding:0;list-style:none}.agx-life__features li{padding-top:12px;border-top:1px solid rgba(16,21,17,.12);font-size:.82rem;line-height:1.45}.agx-life__card--featured .agx-life__features li{border-color:rgba(255,255,255,.12)}.agx-life__card .agx-life__btn{margin-top:auto;width:100%}.agx-life__proof{padding:82px clamp(24px,6vw,92px);background:#fff}.agx-life__proof-grid{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));border-top:1px solid #d8ddd9;border-left:1px solid #d8ddd9}.agx-life__proof article{min-height:210px;padding:26px;border-right:1px solid #d8ddd9;border-bottom:1px solid #d8ddd9}.agx-life__proof span{font-size:.64rem;font-weight:900;color:#0e5638}.agx-life__proof h3{margin:60px 0 12px;font-size:1.5rem;letter-spacing:-.04em}.agx-life__proof p{margin:0;color:#68716b;font-size:.85rem;line-height:1.55}.agx-life__legal{padding:36px clamp(24px,6vw,92px) 90px;background:#fff;color:#68716b}.agx-life__legal p{max-width:1050px;margin:0;font-size:.74rem;line-height:1.65}.agx-life__compare{display:inline-block;margin-top:18px;padding:8px 10px;background:#e6eee8;color:#194f38;font-size:.66rem;font-weight:900;letter-spacing:.08em;text-transform:uppercase}@media(max-width:1180px){.agx-life__grid{grid-template-columns:repeat(3,minmax(0,1fr))}}@media(max-width:760px){.agx-life__grid{display:flex;overflow-x:auto;scroll-snap-type:x mandatory}.agx-life__card{flex:0 0 min(82vw,340px);scroll-snap-align:start}.agx-life__proof-grid{grid-template-columns:1fr 1fr}}@media(max-width:520px){.agx-life__proof-grid{grid-template-columns:1fr}.agx-life__hero h1{font-size:clamp(3.4rem,17vw,5.5rem)}}
      `}</style>

      <section className="agx-life__hero">
        <div className="agx-life__wrap">
          <p className="agx-life__eyebrow">AGRONEXUS LIFE™ · CARE</p>
          <h1>Cuidado animal com preço que faz sentido.</h1>
          <p>Uma linha própria de planos AgroNexus Life™ pensada para prevenção, rotina, cuidado hospitalar e jornadas ampliadas de saúde animal.</p>
          <div className="agx-life__hero-actions">
            <a className="agx-life__btn" href="#planos">Ver planos</a>
            <a className="agx-life__btn agx-life__btn--ghost" href={WHATSAPP} target="_blank" rel="noreferrer">Falar com atendimento</a>
          </div>
          <span className="agx-life__compare">valores de lançamento abaixo da referência observada no mercado</span>
        </div>
      </section>

      <section className="agx-life__intro" id="planos">
        <div className="agx-life__wrap">
          <p className="agx-life__eyebrow" style={{color:'#0e5638'}}>ESCOLHA SEU NÍVEL DE CUIDADO</p>
          <h2>Do essencial ao premium. Sem enrolação.</h2>
          <p>Os planos abaixo são a proposta comercial AgroNexus Life™. A disponibilidade de rede, procedimentos, carências, limites e regras varia por região e será confirmada no momento da adesão.</p>
          <div className="agx-life__grid">
            {plans.map((plan, index) => (
              <article className={`agx-life__card${plan.featured ? ' agx-life__card--featured' : ''}`} key={plan.name}>
                <span className="agx-life__card-kicker">{String(index + 1).padStart(2,'0')}</span>
                <h3>{plan.name}</h3>
                <div className="agx-life__tag">{plan.tagline}</div>
                <div className="agx-life__price">{plan.price}</div>
                <div className="agx-life__note">{plan.note}</div>
                <ul className="agx-life__features">{plan.features.map((item) => <li key={item}>{item}</li>)}</ul>
                <a className="agx-life__btn" href={WHATSAPP} target="_blank" rel="noreferrer">Quero este plano</a>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="agx-life__proof">
        <div className="agx-life__wrap agx-life__proof-grid">
          <article><span>01</span><h3>Histórico conectado</h3><p>Organização da jornada de cuidado e dos registros do animal dentro do ecossistema AgroNexus™.</p></article>
          <article><span>02</span><h3>Rede por região</h3><p>Parceiros e serviços participantes são apresentados conforme disponibilidade regional.</p></article>
          <article><span>03</span><h3>Adesão direta</h3><p>Atendimento digital para entender perfil, região, elegibilidade e próximo passo.</p></article>
          <article><span>04</span><h3>AgroNexus Life™</h3><p>Uma identidade própria para o eixo de cuidado, prevenção, saúde e bem-estar animal.</p></article>
        </div>
      </section>

      <section className="agx-life__legal">
        <div className="agx-life__wrap">
          <p>Valores promocionais de lançamento e sujeitos a alteração. Esta página apresenta a proposta comercial AgroNexus Life™. Coberturas, rede, carências, coparticipações, limites, elegibilidade e disponibilidade territorial devem constar no instrumento de adesão antes da contratação. Nenhuma rede, procedimento ou cobertura é presumida onde ainda não houver parceiro confirmado.</p>
          <div className="agx-life__hero-actions">
            <a className="agx-life__btn" href={WHATSAPP} target="_blank" rel="noreferrer">WhatsApp</a>
            <a className="agx-life__btn" href={TELEGRAM} target="_blank" rel="noreferrer">Telegram</a>
            <a className="agx-life__btn agx-life__btn--ghost" style={{color:'#0f1511',borderColor:'#0f1511'}} href="#/mundo/saude">Voltar para Saúde</a>
          </div>
        </div>
      </section>
    </main>
  )
}
