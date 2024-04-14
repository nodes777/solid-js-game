import styles from "./styles.module.css";

// const generateRaindrops = () => {
//   const raindrops = [];
//   for (let i = 0; i < 100; i++) {
//     raindrops.push(
//       <div
//         class={styles.rainDrop}
//         style={{
//           top: `${Math.random() * 100}vh`,
//           left: `${Math.random() * 100}vw`,
//         }}
//       ></div>
//     );
//   }
//   return raindrops;
// };
// export const Rain = () => {
//   return <div class={styles.rainContainer}>{generateRaindrops()}</div>;
// };

import { createEffect, onMount } from "solid-js";

export const Rain = () => {
  const generateRainDrops = () => {
    const rainDrops = [];
    for (let i = 0; i < 100; i++) {
      const left = Math.random() * window.innerWidth;
      const top = Math.random() * window.innerHeight;
      rainDrops.push({ left, top });
    }
    return rainDrops;
  };

  // onMount(() => {
  //   document.body.style.overflow = "hidden"; // Hide scrollbar
  // });

  return (
    <div class={styles.rainContainer}>
      {generateRainDrops().map((drop, i) => (
        <div
          // key={`raindrop-${i}`}
          class={styles.rainDrop}
          style={{
            left: `${drop.left}px`,
            top: `${drop.top}px`,
          }}
        />
      ))}
    </div>
  );
};
