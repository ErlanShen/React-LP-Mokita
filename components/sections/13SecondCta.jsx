import OfferStack from "../OfferStack";
import ThreeBackground from "../ThreeBackgroundLazy";

export default function SecondCta() {
  return (
    <section className="section section--night section--cta" id="segundo-cta">
      <ThreeBackground variant="cta" />
      <div className="cta-glow" aria-hidden="true" />
      <div className="container">
        <OfferStack
          eyebrow="Tu primer proyecto te espera"
          title="Tu primer proyecto de cosplay está a una decisión de distancia"
          subtitle="Módulos, patrones, bonos y checklist — todo en un solo acceso."
        />
      </div>
    </section>
  );
}
