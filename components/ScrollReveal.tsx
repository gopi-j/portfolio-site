"use client";

import { useEffect } from "react";

export default function ScrollReveal() {
  useEffect(() => {
    const items = Array.from(document.querySelectorAll<HTMLElement>(".reveal"));
    if (!items.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const el = entry.target as HTMLElement;

          if (entry.isIntersecting) {
            const delay = Number(el.dataset.revealDelay ?? "0");
            window.setTimeout(() => {
              el.classList.add("in-view");
            }, delay);
          } else {
            el.classList.remove("in-view");
          }
        });
      },
      {
        threshold: 0.24,
        rootMargin: "0px 0px -4% 0px",
      },
    );

    items.forEach((item, index) => {
      if (!item.dataset.revealDelay) {
        item.dataset.revealDelay = String(index * 70);
      }
      observer.observe(item);
    });

    return () => observer.disconnect();
  }, []);

  return null;
}
