import Hero from '../components/Hero'
import Mission from '../components/Mission'
import Contact from '../components/Contact'

export default function Home() {
  return (
    <main style={{ backgroundColor: '#0b0a0a', minHeight: '100vh' }}>
      
      <Hero />
      <Mission />

      <section style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', 
        gap: '25px', 
        padding: '60px 20px', 
        maxWidth: '1200px', 
        margin: '0 auto' 
      }}>
        
        <a href="/aves" style={{ textDecoration: 'none', color: '#f0e6d2' }}>
          <div className="portal-card">
            <h3>Aves & Psitacídeos</h3>
            <p>Guias de Calopsitas, Agapornis, Periquitos e mais.</p>
          </div>
        </a>

        <a href="/mamiferos" style={{ textDecoration: 'none', color: '#f0e6d2' }}>
          <div className="portal-card">
            <h3>Pequenos Mamíferos</h3>
            <p>Hamsters, Roedores e outros pequenos.</p>
          </div>
        </a>

        <a href="/aquarismo" style={{ textDecoration: 'none', color: '#f0e6d2' }}>
          <div className="portal-card">
            <h3>Aquarismo</h3>
            <p>Marinho, Água Doce e Plantado.</p>
          </div>
        </a>
        
      </section>

      <Contact />
    </main>
  )
}
