import '../styles/Dashboard.css'

const PILLARS = [
  {
    title: 'Genética e Biodiversidade',
    text: 'Conexão entre criadores, pesquisadores, produtores e especialistas em espécies animais e vegetais.',
  },
  {
    title: 'Mercado Nacional',
    text: 'Aproximação entre criadores responsáveis, consumidores, clubes, produtores e profissionais no Brasil.',
  },
  {
    title: 'Conexão Internacional',
    text: 'Estrutura para apoiar relações entre origem e destino, parceiros globais e projetos especializados.',
  },
  {
    title: 'Conhecimento e Bem-Estar',
    text: 'Conteúdo, orientação técnica, veterinários, biólogos e boas práticas para decisões responsáveis.',
  },
]

const NETWORK = [
  'Criadores e produtores',
  'Veterinários e biólogos',
  'Aquaristas e clubes reef',
  'Colecionadores e consumidores',
  'Universidades e instituições',
  'Parceiros de logística',
]

export default function Dashboard() {
  return (
    <div
      className="dashboard dashboard--institutional"
      aria-label="Painel institucional do AgroNexus"
    >
      <div className="dashboard__intro">
        <span className="dashboard__eyebrow">
          AGRONEXUS GLOBAL CONNECTION
        </span>

        <h3>
          Um ecossistema conectado
          <br />
          da origem ao destino.
        </h3>

        <p>
          Ciência, biodiversidade, mercado responsável e logística
          especializada reunidos numa mesma estrutura.
        </p>
      </div>

      <div className="dashboard__pillars">
        {PILLARS.map((item, index) => (
          <article className="dashboard__pillar" key={item.title}>
            <span className="dashboard__number">
              {String(index + 1).padStart(2, '0')}
            </span>

            <div>
              <h4>{item.title}</h4>
              <p>{item.text}</p>
            </div>
          </article>
        ))}
      </div>

      <div className="dashboard__network">
        <div className="dashboard__network-head">
          <span>Rede AgroNexus</span>
          <strong>Conexões que sustentam o ecossistema</strong>
        </div>

        <div className="dashboard__network-grid">
          {NETWORK.map((item) => (
            <span className="dashboard__network-item" key={item}>
              {item}
            </span>
          ))}
        </div>
      </div>

      <div className="dashboard__footer">
        <span>Conhecimento</span>
        <span>Biodiversidade</span>
        <span>Responsabilidade</span>
        <span>Conexão Global</span>
      </div>
    </div>
  )
}
