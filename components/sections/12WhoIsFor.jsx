const FOR_YOU = [
  "Amas el cosplay, el anime o la cultura geek y quieres una prenda propia.",
  "Quieres tu primer proyecto de confección guiado paso a paso.",
  "Tienes una máquina de coser doméstica (o estás dispuesta a coser a mano).",
  "Prefieres aprender con calma, sin presión de “ya deberías saber esto”.",
];

const NOT_FOR_YOU = [
  "Buscas un curso avanzado de patronaje industrial.",
  "Esperas resultados profesionales sin practicar ni un poco.",
  "Prefieres comprar la prenda ya hecha en lugar de crearla tú misma.",
];

export default function WhoIsFor() {
  return (
    <section className="section section--cream" id="para-quien">
      <div className="container">
        <span className="eyebrow">¿Para quién es?</span>
        <h2 className="section-title">Este mini curso es para ti si…</h2>

        <div className="who-grid">
          <div className="who-card who-card--yes">
            <h3>Es para ti</h3>
            <ul>
              {FOR_YOU.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
          <div className="who-card who-card--no">
            <h3>No es para ti</h3>
            <ul>
              {NOT_FOR_YOU.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
