import ThreeBackground from "../ThreeBackgroundLazy";

export default function Hero() {
  return (
    <section className="section section--night hero-section" id="hero">
      <ThreeBackground variant="hero" />
      <div className="hero-glow" aria-hidden="true" />

      <div className="container hero-content">
        <span className="eyebrow eyebrow--on-dark">
          Mini curso para principiantes · El Taller de Moka
        </span>

        <h1 className="hero-title">
          ¿Sueñas con una hoodie de personaje, pero no sabes por dónde empezar a coser?
        </h1>

        <p className="hero-subtitle">
          Aprende a transformar una hoodie básica en tu primer proyecto de cosplay: una capucha con
          orejas y detalles de personaje, con patrones listos, materiales fáciles de conseguir e
          instrucciones claras — aunque nunca hayas cosido algo así antes.
        </p>

        <div className="vsl-frame">
          <div className="vsl-frame__inner">
            <span className="vsl-play" aria-hidden="true">
              ▶
            </span>
            <span className="vsl-frame__label">Video de presentación — Moka Torota</span>
          </div>
        </div>
      </div>
    </section>
  );
}
