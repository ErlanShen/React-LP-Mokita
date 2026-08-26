"use client";

import { PRICE_TIERS } from "@/lib/pricing";
import { useSales } from "./SalesProvider";

export default function UrgencyBar({ compact = false }) {
  const { sales, current, next, progressPct, slotsLeft } = useSales();

  return (
    <div className={`urgency-bar ${compact ? "is-compact" : ""}`}>
      <div className="urgency-bar__banner">
        <span className="urgency-star" aria-hidden="true">
          ✦
        </span>
        <p>NO ES URGENCIA FALSA. ES LA POLÍTICA DEL PROGRAMA.</p>
        <span className="urgency-star" aria-hidden="true">
          ✦
        </span>
      </div>

      <div className="urgency-bar__metrics">
        <div className="urgency-metric">
          <span className="urgency-metric__label">Ventas actuales</span>
          <span className="urgency-metric__value">{sales}</span>
          <span className="urgency-live">
            <span className="urgency-live__dot" aria-hidden="true" />
            Actualizando en vivo
          </span>
        </div>

        <div className="urgency-metric urgency-metric--price">
          <span className="urgency-metric__label">Precio actual</span>
          <span className="urgency-metric__value urgency-metric__value--price">
            <span className="urgency-metric__sign">$</span>
            {current.price}
            <span className="urgency-metric__suffix">USD</span>
          </span>
          <span className="urgency-metric__hint">Pago único · Acceso de por vida</span>
        </div>

        <div className="urgency-metric">
          <span className="urgency-metric__label">Faltan solo</span>
          {next ? (
            <>
              <span className="urgency-metric__value urgency-metric__value--warn">
                {slotsLeft}
              </span>
              <span className="urgency-metric__hint">
                registros para <s>${current.price}</s> → ${next.price}
              </span>
            </>
          ) : (
            <span className="urgency-metric__value urgency-metric__value--warn">—</span>
          )}
        </div>
      </div>

      {next && (
        <div className="urgency-bar__progress">
          <div className="urgency-progress__labels">
            <span>PROGRESO HACIA EL PRÓXIMO PRECIO</span>
            <span className="urgency-progress__pct">{Math.round(progressPct)}%</span>
          </div>
          <div
            className="urgency-progress__track"
            role="progressbar"
            aria-valuenow={Math.round(progressPct)}
            aria-valuemin={0}
            aria-valuemax={100}
          >
            <div className="urgency-progress__fill" style={{ width: `${progressPct}%` }} />
          </div>
          <div className="urgency-progress__ends">
            <span>${current.price}</span>
            <span>${next.price}</span>
          </div>
        </div>
      )}

      {!compact && (
        <div className="urgency-bar__tiers">
          {PRICE_TIERS.map((tier, index) => {
            const isActive = tier.threshold === current.threshold;
            return (
              <div
                key={tier.threshold}
                className={`urgency-tier ${isActive ? "is-active" : "is-disabled"}`}
              >
                {isActive && <span className="urgency-tier__badge">AHORA</span>}
                <span className="urgency-tier__threshold">
                  {index === 0 ? "Desde el inicio" : `Desde ${tier.threshold} ventas`}
                </span>
                <span className="urgency-tier__price">${tier.price}</span>
              </div>
            );
          })}
        </div>
      )}

      <p className="urgency-bar__footer">
        {next ? (
          <>
            <strong>{slotsLeft} cupos</strong> al precio actual de <strong>${current.price}</strong>{" "}
            — al llegar a {next.threshold} ventas el precio sube a <strong>${next.price}</strong>
          </>
        ) : (
          <>Precio más alto de la escalera alcanzado.</>
        )}
      </p>
    </div>
  );
}
