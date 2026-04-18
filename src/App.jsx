import './App.css'

const milestones = [
  {
    step: '1',
    title: 'Origen artesanal',
    text: 'Cada pieza nace en talleres locales con materiales, artesanos y lotes identificables.',
  },
  {
    step: '2',
    title: 'Registro en Monad',
    text: 'Se guarda cada evento clave de la cadena de suministro para dar trazabilidad verificable.',
  },
  {
    step: '3',
    title: 'Escaneo del cliente',
    text: 'La prenda muestra su historia, autenticidad y recorrido en una experiencia simple y visual.',
  },
]

const traceItems = [
  'Materia prima local',
  'Taller artesanal',
  'Control de calidad',
  'Envío y entrega',
]

function App() {
  return (
    <main className="page-shell">
      <section className="hero">
        <div className="hero-copy">
          <span className="eyebrow">Monad Blitz Monterrey · Moda + trazabilidad</span>
          <h1>Ropa artesanal mexicana con historia verificable.</h1>
          <p className="lead">
            Una landing para presentar cómo tu marca usa Monad para registrar la cadena de suministro, reforzar autenticidad y conectar con el cliente final.
          </p>

          <div className="hero-actions">
            <a className="btn primary" href="#demo">Ver demo</a>
            <a className="btn secondary" href="#trazabilidad">Explorar trazabilidad</a>
          </div>

          <div className="stats">
            <div><strong>100%</strong><span>hecho artesanal</span></div>
            <div><strong>4</strong><span>eventos trazados</span></div>
            <div><strong>Monad</strong><span>capa de verificación</span></div>
          </div>
        </div>

        <div className="hero-card">
          <p className="card-label">Código de prenda</p>
          <div className="code-badge">AR-2026-044</div>
          <ul>
            {traceItems.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section" id="trazabilidad">
        <div className="section-header">
          <span className="eyebrow">Cómo funciona</span>
          <h2>Ruta de la prenda, de taller a cliente</h2>
        </div>
        <div className="milestones">
          {milestones.map((item) => (
            <article className="milestone" key={item.step}>
              <span>{item.step}</span>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section section-grid" id="demo">
        <div>
          <span className="eyebrow">Demo del hackathon</span>
          <h2>Una historia clara para jurado e inversionistas</h2>
          <p>
            El proyecto muestra valor de marca, transparencia y una utilidad real de blockchain: registrar origen, validar autenticidad y mejorar confianza.
          </p>
        </div>
        <div className="panel">
          <h3>Mensaje clave</h3>
          <p>
            “Cada prenda cuenta quién la hizo, de dónde viene y por qué es auténtica.”
          </p>
        </div>
      </section>
    </main>
  )
}

export default App
