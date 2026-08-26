import { MODULES } from "@/lib/content";

export default function WhatsIncluded() {
  return (
    <section className="section section--cream" id="contenido">
      <div className="container">
        <span className="eyebrow">Contenido del curso</span>
        <h2 className="section-title">Todo lo que recibes al inscribirte</h2>
        <p className="section-lead">
          Video-clases y guías descargables, organizadas en {MODULES.length} módulos secuenciales
          — con acceso de por vida y soporte para resolver tus dudas del proceso.
        </p>

        <div className="module-list">
          {MODULES.map((mod) => (
            <div className="module-row" key={mod.n}>
              <span className="module-row__number">{String(mod.n).padStart(2, "0")}</span>
              <div>
                <h3>{mod.title}</h3>
                <p>{mod.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
