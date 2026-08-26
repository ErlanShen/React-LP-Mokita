const BEFORE = [
  "Una hoodie genérica, sin identidad propia.",
  "Ideas de cosplay guardadas que nunca se ejecutan.",
  "Miedo a arruinar la tela que ya compraste.",
  "Piezas ya hechas, compradas a precios altos.",
  "La sensación de no saber por dónde empezar.",
];

const AFTER = [
  "Una hoodie transformada en una pieza de personaje única.",
  "Orejas simétricas, firmes y con acabados prolijos.",
  "Tu primer proyecto de cosplay, hecho con tus propias manos.",
  "Una base y un método que puedes repetir en nuevos diseños.",
  "La confianza de saber exactamente qué hacer, paso a paso.",
];

export default function BeforeAfter() {
  return (
    <section className="section section--cream" id="antes-despues">
      <div className="container">
        <span className="eyebrow">Antes vs. después</span>
        <h2 className="section-title">De la idea guardada… a la prenda terminada</h2>

        <div className="compare-grid">
          <div className="compare-card compare-card--before">
            <span className="compare-tag">Antes</span>
            <ul>
              {BEFORE.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          <div className="compare-arrow" aria-hidden="true">
            →
          </div>

          <div className="compare-card compare-card--after">
            <span className="compare-tag">Después</span>
            <ul>
              {AFTER.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
