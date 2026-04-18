import './App.css'

const timeline = [
  {
    title: 'Origen artesanal',
    detail: 'Se registra el taller, materiales y lote de producción.',
  },
  {
    title: 'Evento en Monad',
    detail: 'Cada hito deja una prueba verificable de trazabilidad.',
  },
  {
    title: 'Historia del producto',
    detail: 'El cliente escanea y ve autenticidad, origen y recorrido.',
  },
]

const supplyChain = [
  { label: 'Material', value: 'Algodón local' },
  { label: 'Taller', value: 'Oaxaca / NL' },
  { label: 'Estado', value: 'Listo para envío' },
  { label: 'ID', value: 'MON-AR-2026-044' },
]

function App() {
  return (
    <main className="page">
      <section className="hero-card">
        <div className="hero-copy">
          <p className="kicker">Monad Blitz Monterrey</p>
          <h1>Artesanía mexicana con trazabilidad verificable.</h1>
          <p className="intro">
            Una landing y demo para mostrar cómo tu marca usa Monad para registrar
            la cadena de suministro, validar autenticidad y contar la historia de
            cada prenda.
          </p>

          <div className="actions">
            <a href="#demo" className="btn primary">Ver demo</a>
            <a href="#flujo" className="btn ghost">Ver flujo</a>
          </div>
        </div>

        <aside className="trace-panel">
          <span className="trace-tag">Prenda rastreada</span>
          <h2>Huipil de edición artesanal</h2>
          <div className="trace-grid">
            {supplyChain.map((item) => (
              <div key={item.label}>
                <span>{item.label}</span>
                <strong>{item.value}</strong>
              </div>
            ))}
          </div>
        </aside>
      </section>

      <section className="section" id="flujo">
        <h2>Flujo de trazabilidad</h2>
        <div className="timeline">
          {timeline.map((item, index) => (
            <article className="step" key={item.title}>
              <span>{index + 1}</span>
              <h3>{item.title}</h3>
              <p>{item.detail}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section demo" id="demo">
        <div>
          <p className="kicker">Demo del hackathon</p>
          <h2>Qué verán el jurado y los usuarios</h2>
          <p>
            Una experiencia limpia con el recorrido de la prenda, el proof-of-origin
            y el valor de confiar en una pieza artesanal auténtica.
          </p>
        </div>

        <div className="quote-card">
          <p>“Cada prenda cuenta su origen, su proceso y su autenticidad.”</p>
        </div>
      </section>
    </main>
  )
}

export default App
