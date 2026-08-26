import OfferStack from "../OfferStack";
import ThreeBackground from "../ThreeBackgroundLazy";

export default function PriceCta() {
  return (
    <section className="section section--night section--cta" id="comprar">
      <ThreeBackground variant="cta" />
      <div className="cta-glow" aria-hidden="true" />
      <div className="container">
        <OfferStack
          eyebrow="Precio y acceso"
          title="Todo lo que necesitas para tu primer proyecto de cosplay, en un solo lugar"
          subtitle="Un pago único. Acceso de por vida. Sin mensualidades ni letras pequeñas."
        />
      </div>
    </section>
  );
}
