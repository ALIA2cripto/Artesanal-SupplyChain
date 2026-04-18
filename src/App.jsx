import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import './App.css'

const products = [
  {
    id: 'MON-AR-2026-044',
    name: 'Huipil Aurora',
    artisan: 'María López',
    origin: 'Oaxaca, México',
    status: 'Autenticado en Monad',
    image:
      'https://images.unsplash.com/photo-1496747611176-843222e1e57c?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: 'MON-AR-2026-052',
    name: 'Rebozo Marea',
    artisan: 'Rosa Hernández',
    origin: 'Puebla, México',
    status: 'En tránsito',
    image:
      'https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: 'MON-AR-2026-061',
    name: 'Chaqueta Tierra',
    artisan: 'Sofía Martínez',
    origin: 'Nuevo León, México',
    status: 'Lista para entrega',
    image:
      'https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=1200&q=80',
  },
]

const chain = [
  { step: 'Origen', detail: 'Algodón local y tintes naturales' },
  { step: 'Taller', detail: 'Confección artesanal y control de calidad' },
  { step: 'Monad', detail: 'Registro de eventos y autenticidad' },
  { step: 'Entrega', detail: 'Seguimiento hasta cliente final' },
]

function Home() {
  return (
    <main className="page">
      <section className="hero-card">
        <div className="hero-copy">
          <p className="kicker">Artesanal SupplyChain</p>
          <h1>Moda artesanal mexicana con trazabilidad real.</h1>
          <p className="intro">
            Descubre piezas creadas por artesanos mexicanos, con cada paso de su cadena de
            suministro registrado y verificado en Monad.
          </p>

          <div className="actions">
            <Link to="/prendas" className="btn primary">Explorar prendas</Link>
            <a href="#coleccion" className="btn ghost">Ver colección</a>
          </div>
        </div>

        <aside className="hero-visual">
          <img
            src={products[0].image}
            alt={products[0].name}
            className="hero-image"
          />
          <div className="hero-chip">
            <span>Cadena verificada</span>
            <strong>{products[0].id}</strong>
          </div>
        </aside>
      </section>

      <section className="section" id="coleccion">
        <div className="section-head">
          <p className="kicker">Colección destacada</p>
          <h2>Piezas únicas, origen claro, historia visible.</h2>
        </div>
        <div className="product-grid">
          {products.map((product) => (
            <article className="product-card" key={product.id}>
              <img src={product.image} alt={product.name} />
              <div className="product-body">
                <p className="product-id">{product.id}</p>
                <h3>{product.name}</h3>
                <p>{product.artisan}</p>
                <p>{product.origin}</p>
                <span>{product.status}</span>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section section-grid">
        <div>
          <p className="kicker">Cómo funciona</p>
          <h2>Cadena de suministro simple y verificable.</h2>
        </div>
        <div className="chain-list">
          {chain.map((item) => (
            <article className="chain-item" key={item.step}>
              <h3>{item.step}</h3>
              <p>{item.detail}</p>
            </article>
          ))}
        </div>
      </section>
    </main>
  )
}

function ProductDetails() {
  return (
    <main className="page detail-page">
      <Link to="/" className="back-link">← Volver</Link>
      <section className="detail-card">
        <img src={products[0].image} alt={products[0].name} className="detail-image" />
        <div className="detail-copy">
          <p className="kicker">Ficha de prenda</p>
          <h1>{products[0].name}</h1>
          <p className="intro">
            Prenda artesanal con trazabilidad completa en Monad, desde materia prima hasta
            entrega final.
          </p>

          <div className="detail-grid">
            <div>
              <span>Artesana</span>
              <strong>{products[0].artisan}</strong>
            </div>
            <div>
              <span>Origen</span>
              <strong>{products[0].origin}</strong>
            </div>
            <div>
              <span>Estado</span>
              <strong>{products[0].status}</strong>
            </div>
            <div>
              <span>ID</span>
              <strong>{products[0].id}</strong>
            </div>
          </div>

          <div className="detail-actions">
            <a
              href="https://www.paypal.com/donate"
              target="_blank"
              rel="noreferrer"
              className="btn primary"
            >
              Donar a la artesana
            </a>
            <a href="#cadena" className="btn ghost">Ver cadena de suministro</a>
          </div>
        </div>
      </section>

      <section className="section" id="cadena">
        <div className="section-head">
          <p className="kicker">Cadena de suministro</p>
          <h2>Datos de ejemplo del recorrido de la prenda.</h2>
        </div>
        <div className="detail-grid supply-grid">
          {[
            ['Materia prima', 'Algodón orgánico local'],
            ['Hilo / color', 'Tintes naturales'],
            ['Taller', 'Colectivo textil de Oaxaca'],
            ['Registro', 'Evento anclado en Monad'],
          ].map(([label, value]) => (
            <div key={label}>
              <span>{label}</span>
              <strong>{value}</strong>
            </div>
          ))}
        </div>
      </section>
    </main>
  )
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/prendas" element={<ProductDetails />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
