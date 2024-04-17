import { onMount, createSignal } from "solid-js";

import styles from "./styles.module.css";

const generatesnowFlakes = () => {
  const snowFlakes = [];
  for (let i = 0; i < 1000; i++) {
    const left = Math.random() * 2 * window.innerWidth;
    const top = Math.random() * window.innerHeight;
    // give each snowFlake its own signal
    const drop = {
      top,
      left,
      // random rate between 1 and 5
      rate: Math.random() * 4 + 1,
    };

    snowFlakes.push(drop);
  }
  return snowFlakes;
};

export const Snow = () => {
  onMount(() => {
    document.body.style.overflow = "hidden"; // Hide scrollbar hack
  });

  const [snowFlakes, setSnowFlakes] = createSignal(generatesnowFlakes());

  const step = () => {
    const newDrops = snowFlakes().map((snowFlake) => {
      const { top, left, rate } = snowFlake;
      if (top > window.innerHeight || left < 0) {
        return {
          top: 0,
          left: Math.random() * 2 * window.innerWidth,
          rate,
        };
      } else {
        return {
          top: top + rate,
          left: left - rate,
          rate,
        };
      }
    });
    setSnowFlakes(newDrops);
    requestAnimationFrame(step);
  };

  step();

  return (
    <div class={styles.SnowContainer}>
      {snowFlakes().map((snowFlake, i) => (
        <div
          class={styles.snowFlake}
          style={{
            left: `${snowFlake.left}px`,
            top: `${snowFlake.top}px`,
          }}
        />
      ))}
    </div>
  );
};
