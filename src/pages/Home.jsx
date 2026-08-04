import Hero from '../components/Hero'
import Mission from '../components/Mission'
import Contact from '../components/Contact'

export default function Home() {
  return (
    <main style={{ backgroundColor: '#0b0a0a', minHeight: '100vh' }}>
      
      <Hero />
      <Mission />

      {/* PRIMEIRA LINHA DE CARTÕES */}
      <section style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', 
        gap: '25px', 
        padding: '60px 20px 20px', 
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

      {/* SEGUNDA LINHA DE CARTÕES (Recuperando Manuais e Projetos) */}
      <section style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', 
        gap: '25px', 
        padding: '20px 20px 60px', 
        maxWidth: '1200px', 
        margin: '0 auto' 
      }}>
        <a href="/manuais" style={{ textDecoration: 'none', color: '#f0e6d2' }}>
          <div className="portal-card">
            <h3>📚 Manuais & Documentos</h3>
            <p>Biblioteca AgroNexus, PDFs e guias de criação.</p>
          </div>
        </a>

        <a href="/sobre" style={{ textDecoration: 'none', color: '#f0e6d2' }}>
          <div className="portal-card">
            <h3>Sobre o Projeto</h3>
            <p>Biodiversidade, ciência e o ecossistema AgroNexus.</p>
          </div>
        </a>

        {/* ATENÇÃO: COLE O SEU LINK DO ASAAS ONDE ESTÁ ESCRITO "COLE_AQUI_O_LINK" */}
        <a href="COLE_AQUI_O_LINK" target="_blank" style={{ textDecoration: 'none', color: '#f0e6d2' }}>
          <div className="portal-card">
            <h3>Apoie o AgroNexus</h3>
            <p>Contribua com PIX, boleto ou cartão via Asaas.</p>
          </div>
        </a>
      </section>

      <Contact />
    </main>
  )
}
