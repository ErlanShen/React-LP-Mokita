const STAGES = [
  "Hoodie base, sin ningún detalle",
  "Patrón marcado y piezas cortadas",
  "Orejas cosidas, con entretela y refuerzo",
  "Capucha ensamblada sobre la hoodie",
  "Resultado final personalizado",
];

export default function Demo() {
  return (
    <section className="section section--lavender" id="demostracion">
      <div className="container">
        <span className="eyebrow">Ejemplo práctico</span>
        <h2 className="section-title">De hoodie lisa a personaje: mira el proceso</h2>
        <p className="section-lead">
          La misma base y el mismo método sirven para muchísimas variaciones: gato, conejo, zorro,
          oso, criatura fantástica o incluso un personaje original creado por ti.
        </p>

        <div className="demo-strip">
          {STAGES.map((stage, index) => (
            <div className="demo-stage" key={stage}>
              <span className="demo-stage__number">{index + 1}</span>
              <div className="demo-stage__placeholder" aria-hidden="true">
                Imagen del paso {index + 1}
              </div>
              <p>{stage}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
