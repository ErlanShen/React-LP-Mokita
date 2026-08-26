// Escalera de precios del infoproducto. El precio nunca sube realmente:
// esto solo alimenta la barra de urgencia (ver components/SalesProvider.jsx).
export const PRICE_TIERS = [
  { threshold: 0, price: 12, label: "Precio de lanzamiento" },
  { threshold: 100, price: 17, label: "Precio recomendado" },
  { threshold: 200, price: 27, label: "Precio posterior" },
];

export const INITIAL_SALES = 68;

export function getTierInfo(sales) {
  let currentIndex = 0;
  for (let i = 0; i < PRICE_TIERS.length; i += 1) {
    if (sales >= PRICE_TIERS[i].threshold) currentIndex = i;
  }
  const current = PRICE_TIERS[currentIndex];
  const next = PRICE_TIERS[currentIndex + 1] || null;

  if (!next) {
    return { current, next: null, progressPct: 100, slotsLeft: 0, currentIndex };
  }

  const span = next.threshold - current.threshold;
  const done = sales - current.threshold;
  const progressPct = Math.min(99, Math.max(0, (done / span) * 100));
  const slotsLeft = Math.max(1, next.threshold - sales);

  return { current, next, progressPct, slotsLeft, currentIndex };
}

// Techo real para el contador ficticio: nunca deja que las ventas alcancen
// el siguiente umbral, así el precio "nunca sube" pero la urgencia se siente real.
export function capSalesWithinTier(sales) {
  const { current, next } = getTierInfo(sales);
  if (!next) return sales;
  const cap = current.threshold + Math.floor(0.99 * (next.threshold - current.threshold));
  return Math.min(sales, cap);
}
