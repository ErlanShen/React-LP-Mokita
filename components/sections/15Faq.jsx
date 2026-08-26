import FaqAccordion from "../FaqAccordion";

export default function Faq() {
  return (
    <section className="section section--cream" id="preguntas-frecuentes">
      <div className="container">
        <span className="eyebrow">Preguntas frecuentes</span>
        <h2 className="section-title">Antes de inscribirte, seguro te preguntas esto</h2>
        <FaqAccordion />
      </div>
    </section>
  );
}
