import { CTA_HREF, CTA_LABEL } from "@/lib/content";
import UrgencyBar from "../UrgencyBar";

export default function FinalCta() {
  return (
    <section className="section section--moka" id="cta-final">
      <div className="container final-cta-layout">
        <span className="eyebrow eyebrow--on-dark">Última llamada</span>
        <h2 className="final-cta__title">
          Deja de guardar la idea. Empieza tu primer proyecto de cosplay hoy.
        </h2>
        <p className="final-cta__text">
          Sabes cuál es el problema: ideas sin ejecutar, miedo a arruinar la tela, orejas que
          nunca quedan simétricas. Y sabes cuál es la solución: un método paso a paso, con
          patrones listos, pensado para tu primer proyecto — no para expertas. Diez módulos, siete
          bonos y un checklist completo para que termines con una prenda real, hecha por ti.
        </p>

        <a className="btn btn--primary btn--large" href={CTA_HREF}>
          {CTA_LABEL}
        </a>

        <div className="final-cta__urgency">
          <UrgencyBar compact />
        </div>
      </div>
    </section>
  );
}
