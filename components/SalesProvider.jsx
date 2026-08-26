"use client";

import { createContext, useCallback, useContext, useEffect, useRef, useState } from "react";
import { INITIAL_SALES, capSalesWithinTier, getTierInfo } from "@/lib/pricing";
import { SOCIAL_PROOF_PEOPLE } from "@/lib/socialProof";

const SalesContext = createContext(null);

const FIRST_EVENT_DELAY = [8000, 20000];
const NEXT_EVENT_DELAY = [60000, 180000];

function randomBetween([min, max]) {
  return min + Math.random() * (max - min);
}

export default function SalesProvider({ children }) {
  const [sales, setSales] = useState(INITIAL_SALES);
  const [latestEvent, setLatestEvent] = useState(null);
  const eventIdRef = useRef(0);
  const isFirstRef = useRef(true);

  const triggerSale = useCallback(() => {
    const person = SOCIAL_PROOF_PEOPLE[Math.floor(Math.random() * SOCIAL_PROOF_PEOPLE.length)];
    eventIdRef.current += 1;
    setLatestEvent({ id: eventIdRef.current, ...person });
    setSales((prev) => capSalesWithinTier(prev + 1));
  }, []);

  useEffect(() => {
    let timeoutId;
    const schedule = () => {
      const delay = randomBetween(isFirstRef.current ? FIRST_EVENT_DELAY : NEXT_EVENT_DELAY);
      timeoutId = setTimeout(() => {
        isFirstRef.current = false;
        triggerSale();
        schedule();
      }, delay);
    };
    schedule();
    return () => clearTimeout(timeoutId);
  }, [triggerSale]);

  const tierInfo = getTierInfo(sales);

  return (
    <SalesContext.Provider value={{ sales, latestEvent, ...tierInfo }}>
      {children}
    </SalesContext.Provider>
  );
}

export function useSales() {
  const ctx = useContext(SalesContext);
  if (!ctx) throw new Error("useSales debe usarse dentro de <SalesProvider>");
  return ctx;
}
