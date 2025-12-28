export default function Home() {
  return (
    <main className="page">
      <header className="hero">
        <div className="hero-inner">
          <p className="badge">Indianapolis • Commercial • Residential • New Builds</p>
          <h1>Zero Trace Pro Cleaning</h1>
          <p className="subtitle">
            Professional, detail-focused cleaning services for homes, businesses,
            and new construction. Proudly serving the Indianapolis area.
          </p>

          <div className="cta-row">
            <a className="btn primary" href="tel:3174897255">
              Call (317) 489-7255
            </a>
            <a className="btn" href="mailto:zerotraceprocleaning@gmail.com">
              Email for a Quote
            </a>
          </div>

          <p className="micro">
            Reliable • Flexible scheduling • Quality you can see
          </p>
        </div>
      </header>

      <section className="section">
        <h2>Our Services</h2>
        <div className="grid">
          <div className="card">
            <h3>Commercial Cleaning</h3>
            <p>
              Offices and commercial spaces cleaned consistently and professionally.
            </p>
            <ul>
              <li>Restrooms & breakrooms</li>
              <li>Floors, trash, dusting</li>
              <li>One-time or recurring</li>
            </ul>
          </div>

          <div className="card">
            <h3>Residential Cleaning</h3>
            <p>
              From routine maintenance to deep cleans and move-outs.
            </p>
            <ul>
              <li>Kitchens & bathrooms</li>
              <li>Detail cleaning</li>
              <li>Weekly, biweekly, monthly</li>
            </ul>
          </div>

          <div className="card">
            <h3>New Builds</h3>
            <p>
              Post-construction cleaning to get your property move-in ready.
            </p>
            <ul>
              <li>Dust & debris removal</li>
              <li>Windows & trim</li>
              <li>Final walkthrough polish</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="section split">
        <div>
          <h2>Get a Quote</h2>
          <p>
            Contact us today and we’ll respond quickly with pricing and availability.
          </p>
          <div className="contact">
            <a className="contact-item" href="tel:3174897255">
              <span className="dot" /> (317) 489-7255
            </a>
            <a
              className="contact-item"
              href="mailto:zerotraceprocleaning@gmail.com"
            >
              <span className="dot" /> zerotraceprocleaning@gmail.com
            </a>
          </div>
        </div>

        <div className="card highlight">
          <h3>Service Area</h3>
          <p>Serving Indianapolis and surrounding communities.</p>
          <p className="small">
            Not sure if you’re in range? Call or email and we’ll confirm.
          </p>
        </div>
      </section>

      <footer className="footer">
        <p>
          © {new Date().getFullYear()} Zero Trace Pro Cleaning. All rights reserved.
        </p>
      </footer>
    </main>
  );
}

