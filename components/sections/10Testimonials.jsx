const PLACEHOLDER_HEIGHTS = [420, 260, 340, 520, 300, 400, 240, 460];

export default function Testimonials() {
  return (
    <section className="section section--cream" id="testimonios">
      <div className="container">
        <span className="eyebrow">Casos reales</span>
        <h2 className="section-title">Lo que están creando otras alumnas</h2>
        <p className="section-lead">
          Espacio reservado para testimonios reales. Sube aquí las capturas o fotos de tus
          alumnas: cada casilla respeta el tamaño original de la imagen, sin recortarla.
        </p>

        <div className="masonry">
          {PLACEHOLDER_HEIGHTS.map((height, index) => (
            <div className="masonry__item" style={{ height }} key={index}>
              <span className="masonry__icon" aria-hidden="true">
                ⤒
              </span>
              <span>Espacio para testimonio {index + 1}</span>
              <span className="masonry__hint">Sube tu imagen aquí</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
