import { BONUSES } from "@/lib/content";

export default function Bonuses() {
  return (
    <section className="section section--lavender" id="bonos">
      <div className="container">
        <span className="eyebrow">Bonos incluidos</span>
        <h2 className="section-title">Para que tu primer proyecto salga aún mejor</h2>

        <div className="bonus-grid">
          {BONUSES.map((bonus) => (
            <div className="bonus-card" key={bonus.n}>
              <span className="bonus-card__badge">Bono {bonus.n}</span>
              <h3>{bonus.title}</h3>
              <p>{bonus.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
