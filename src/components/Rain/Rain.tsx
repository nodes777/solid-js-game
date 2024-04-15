import { onMount, createSignal } from "solid-js";

import styles from "./styles.module.css";

export const Rain = () => {
  const generateRainDrops = () => {
    const rainDrops = [];
    for (let i = 0; i < 1000; i++) {
      const left = Math.random() * window.innerWidth;
      const top = Math.random() * window.innerHeight;
      // give each raindrop its own signal
      const [drop, setDrop] = createSignal({
        top,
        left,
        opacity: 1,
      });

      rainDrops.push({ drop, setDrop });
    }
    return rainDrops;
  };

  onMount(() => {
    document.body.style.overflow = "hidden"; // Hide scrollbar hack
  });

  const rainDrops = generateRainDrops();
  const step = () => {
    rainDrops.forEach((rainDrop) => {
      const { top, left, opacity } = rainDrop.drop();
      if (top > window.innerHeight || left < 0) {
        rainDrop.setDrop({
          top: 0,
          left: Math.random() * 2 * window.innerWidth,
          opacity: 1,
        });
      } else {
        rainDrop.setDrop({
          top: top + 2,
          left: left - 2,
          opacity,
        });
      }
    });
    requestAnimationFrame(step);
  };

  requestAnimationFrame(step);

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
