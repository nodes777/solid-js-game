import { onMount, createSignal } from "solid-js";

import styles from "./styles.module.css";

export const Snow = () => {
  const generateSnowFlakes = () => {
    const snowFlakes = [];
    for (let i = 0; i < 1000; i++) {
      const left = Math.random() * 2 * window.innerWidth;
      const top = Math.random() * window.innerHeight;
      // give each snowFlake its own signal
      const [snowFlake, setSnowFlake] = createSignal({
        top,
        left,
        // random rate between 1 and 5
        rate: Math.random() * 4 + 1,
      });

      snowFlakes.push({ snowFlake, setSnowFlake });
    }
    return snowFlakes;
  };

  onMount(() => {
    document.body.style.overflow = "hidden"; // Hide scrollbar hack
  });

  const snowFlakes = generateSnowFlakes();

  const step = () => {
    snowFlakes.forEach((snowFlake) => {
      const { top, left, rate } = snowFlake.snowFlake();
      if (top > window.innerHeight || left < 0) {
        snowFlake.setSnowFlake({
          top: 0,
          left: Math.random() * 2 * window.innerWidth,
          rate,
        });
      } else {
        snowFlake.setSnowFlake({
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
    <div class={styles.snowContainer}>
      {snowFlakes.map((snowFlake, i) => {
        return (
          <div
            class={styles.snowFlake}
            style={{
              left: `${snowFlake.snowFlake().left}px`,
              top: `${snowFlake.snowFlake().top}px`,
            }}
          />
        );
      })}
    </div>
  );
};
