const STEPS = [
  { n: 1, title: "Elige tu diseño", desc: "Selecciona tu hoodie base y define color, personaje y nivel de dificultad." },
  { n: 2, title: "Prepara tu patrón", desc: "Imprime y ajusta el patrón de capucha a tu talla, con márgenes de costura." },
  { n: 3, title: "Corta los materiales", desc: "Ubica las piezas cuidando la dirección de la tela y evitando desperdicios." },
  { n: 4, title: "Cose orejas y detalles", desc: "Entretela, simetría, volumen y refuerzo para que no queden flácidos." },
  { n: 5, title: "Ensambla la capucha", desc: "Une las piezas, agrega forro y coloca la capucha sobre la hoodie." },
  { n: 6, title: "Personaliza y da acabado", desc: "Aplicaciones, detalles finales y revisión de cada costura." },
];

export default function HowItWorks() {
  return (
    <section className="section section--night" id="como-funciona">
      <div className="container">
        <span className="eyebrow eyebrow--on-dark">Cómo funciona</span>
        <h2 className="section-title section-title--on-dark">
          El proceso completo, en seis pasos claros
        </h2>

        <div className="steps-grid">
          {STEPS.map((step) => (
            <div className="step-card" key={step.n}>
              <span className="step-card__number">{step.n}</span>
              <h3>{step.title}</h3>
              <p>{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
