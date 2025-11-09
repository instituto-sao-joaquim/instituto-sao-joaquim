"use client";

import { useEffect, useState } from "react";

interface AnimatedCounterProps {
  value: number;
  duration?: number;
  showPlus?: boolean;
}

export default function AnimatedCounter({
  value,
  duration = 2000,
  showPlus = false
}: AnimatedCounterProps) {

  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const end = value;
    const startTime = performance.now();

    const easeOutQuad = (t: number) => t * (2 - t);

    const animate = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);

      const eased = easeOutQuad(progress);

      setCount(Math.floor(eased * end));

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [value, duration]);

  return (
    <span>
      {count}
      {showPlus && count === value && "+"}
    </span>
  );
}
