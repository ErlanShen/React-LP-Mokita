"use client";

import { useState } from "react";
import { FAQ_ITEMS } from "@/lib/content";

export default function FaqAccordion() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <div className="faq-list">
      {FAQ_ITEMS.map((item, index) => {
        const isOpen = openIndex === index;
        return (
          <div className={`faq-item ${isOpen ? "is-open" : ""}`} key={item.q}>
            <button
              type="button"
              className="faq-item__question"
              aria-expanded={isOpen}
              onClick={() => setOpenIndex(isOpen ? -1 : index)}
            >
              <span>{item.q}</span>
              <span className="faq-item__icon" aria-hidden="true">
                {isOpen ? "−" : "+"}
              </span>
            </button>
            {isOpen && <p className="faq-item__answer">{item.a}</p>}
          </div>
        );
      })}
    </div>
  );
}
