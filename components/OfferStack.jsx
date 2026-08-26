"use client";

import { BONUSES, CTA_HREF, CTA_LABEL, MODULES } from "@/lib/content";
import { useSales } from "./SalesProvider";
import UrgencyBar from "./UrgencyBar";

export default function OfferStack({ eyebrow, title, subtitle }) {
  const { current } = useSales();

  return (
    <div className="offer-stack">
      <div className="offer-stack__intro">
        {eyebrow && <span className="eyebrow eyebrow--on-dark">{eyebrow}</span>}
        <h2 className="offer-stack__title">{title}</h2>
        {subtitle && <p className="offer-stack__subtitle">{subtitle}</p>}
      </div>

      <div className="offer-card">
        <div className="offer-card__glow" aria-hidden="true" />

        <ul className="offer-card__list">
          <li>
            <span className="offer-check" aria-hidden="true">
              ✓
            </span>
            Mini curso completo — {MODULES.length} módulos paso a paso
          </li>
          <li>
            <span className="offer-check" aria-hidden="true">
              ✓
            </span>
            {BONUSES.length} bonos: patrones, plantillas y guías extra
          </li>
          <li>
            <span className="offer-check" aria-hidden="true">
              ✓
            </span>
            Checklist de proyecto imprimible
          </li>
          <li>
            <span className="offer-check" aria-hidden="true">
              ✓
            </span>
            Acceso de por vida, a tu propio ritmo
          </li>
          <li>
            <span className="offer-check" aria-hidden="true">
              ✓
            </span>
            Garantía de 7 días vía Hotmart
          </li>
        </ul>

        <div className="offer-card__price-row">
          <div className="offer-card__price">
            <span className="offer-card__currency">$</span>
            <span className="offer-card__amount">{current.price}</span>
            <span className="offer-card__usd">USD</span>
          </div>
          <span className="offer-card__price-note">Pago único · sin mensualidades</span>
        </div>

        <a className="btn btn--primary btn--block" href={CTA_HREF}>
          {CTA_LABEL}
        </a>
      </div>

      <UrgencyBar />
    </div>
  );
}
