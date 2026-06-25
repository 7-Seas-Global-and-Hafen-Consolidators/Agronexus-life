import '../styles/Dashboard.css'

// Alturas relativas (%) das barras, replicando o visual da imagem
const GENETIC_BARS = [42, 48, 44, 70, 56, 84, 72]
const VOLUME_BARS = [38, 64, 40, 60, 46, 76, 92]
const REGIONS = ['Brasil', 'EUA', 'UE', 'Ásia', 'África', 'Oriente Médio']

// Pontos do gráfico de linha (Eficiência Logística)
const LINE_POINTS = '0,38 18,30 34,33 52,22 70,28 86,14 100,8'

function MetricCard({ title, delta, accent, icon, children }) {
  return (
    <div className={`metric metric--${accent}`}>
      <div className="metric__top">
        <span className="metric__title">{title}</span>
        <span className="metric__icon">{icon}</span>
      </div>
      <div className="metric__chart">{children}</div>
      <div className="metric__foot">
        <span className="metric__update">Última atualização: agora</span>
        <span className="metric__delta">{delta}</span>
      </div>
    </div>
  )
}

export default function Dashboard() {
  return (
    <div className="dashboard" aria-label="Dashboards de desempenho">
      <MetricCard title="Rastreabilidade Genética" delta="+12%" accent="cyan" icon="〜">
        <div className="bars">
          {GENETIC_BARS.map((h, i) => (
            <span className="bar bar--cyan" key={i} style={{ height: `${h}%` }} />
          ))}
        </div>
      </MetricCard>

      <MetricCard title="Volume Exportado (MT)" delta="+20%" accent="purple" icon="↗">
        <div className="bars">
          {VOLUME_BARS.map((h, i) => (
            <span className="bar bar--purple" key={i} style={{ height: `${h}%` }} />
          ))}
        </div>
      </MetricCard>

      <MetricCard title="Eficiência Logística" delta="+28%" accent="cyan" icon="▦">
        <svg className="line-chart" viewBox="0 0 100 44" preserveAspectRatio="none">
          <polyline points={LINE_POINTS} fill="none" stroke="var(--cyan)" strokeWidth="1.6"
            strokeLinejoin="round" strokeLinecap="round" />
          {LINE_POINTS.split(' ').map((p, i) => {
            const [x, y] = p.split(',')
            return <circle key={i} cx={x} cy={y} r="1.8" fill="var(--cyan)" />
          })}
        </svg>
      </MetricCard>

      <div className="metric metric--cyan dashboard__coverage">
        <span className="metric__title">Cobertura Global</span>
        <div className="regions">
          {REGIONS.map((r) => (
            <span className="region" key={r}>{r}</span>
          ))}
        </div>
      </div>
    </div>
  )
}
