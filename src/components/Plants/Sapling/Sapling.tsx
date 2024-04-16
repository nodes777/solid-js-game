import { createSignal } from "solid-js";
import styles from "./styles.module.css";

export const Sapling = () => {
  const [isAnimating, setIsAnimating] = createSignal(true);
  setTimeout(() => setIsAnimating(false), 1000);

  return (
    <div class={isAnimating() ? styles.saplingAnimate : styles.sapling}>🌿</div>
  );
};
