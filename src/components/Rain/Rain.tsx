import { onMount, createSignal } from "solid-js";

import styles from "./styles.module.css";

const generateRainDrops = () => {
  const rainDrops = [];
  for (let i = 0; i < 1000; i++) {
    const left = Math.random() * 2 * window.innerWidth;
    const top = Math.random() * window.innerHeight;
    // give each raindrop its own signal
    const [drop, setDrop] = createSignal({
      top,
      left,
      // random rate between 1 and 5
      rate: Math.random() * 4 + 1,
    });

    rainDrops.push({ drop, setDrop });
  }
  return rainDrops;
};

export const Rain = () => {
  onMount(() => {
    document.body.style.overflow = "hidden"; // Hide scrollbar hack
  });

  const rainDrops = generateRainDrops();

  const step = () => {
    rainDrops.forEach((rainDrop) => {
      const { top, left, rate } = rainDrop.drop();
      if (top > window.innerHeight || left < 0) {
        rainDrop.setDrop({
          top: 0,
          left: Math.random() * 2 * window.innerWidth,
          rate,
        });
      } else {
        rainDrop.setDrop({
          top: top + rate,
          left: left - rate,
          rate,
        });
      }
    });
    requestAnimationFrame(step);
  };

  step();

  return (
    <div class={styles.rainContainer}>
      {rainDrops.map((rainDrop, i) => (
        <div
          class={styles.rainDrop}
          style={{
            left: `${rainDrop.drop().left}px`,
            top: `${rainDrop.drop().top}px`,
          }}
        />
      ))}
    </div>
  );
};
