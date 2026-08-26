"use client";

import { useEffect, useState } from "react";
import { useSales } from "./SalesProvider";

export default function SocialProofToast() {
  const { latestEvent } = useSales();
  const [visible, setVisible] = useState(false);
  const [shown, setShown] = useState(null);

  useEffect(() => {
    if (!latestEvent) return;
    setShown(latestEvent);
    setVisible(true);
    const hideTimer = setTimeout(() => setVisible(false), 6500);
    return () => clearTimeout(hideTimer);
  }, [latestEvent]);

  if (!shown) return null;

  return (
    <div
      className={`social-proof-toast ${visible ? "is-visible" : "is-hidden"}`}
      role="status"
      aria-live="polite"
    >
      <div className="spt-avatar" aria-hidden="true">
        {shown.name.charAt(0)}
      </div>
      <div className="spt-body">
        <p className="spt-text">
          <strong>{shown.name}</strong> de {shown.country} acaba de inscribirse
        </p>
        <span className="spt-badge">Verificado por Hotmart</span>
      </div>
    </div>
  );
}
