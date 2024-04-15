import styles from "../styles.module.css";
import { createSignal } from "solid-js";

export const Seed = () => {
  const [isAnimating, setIsAnimating] = createSignal(true);
  setTimeout(() => setIsAnimating(false), 1000);

  return (
    <div class={isAnimating() ? styles.plantAnimate : styles.plant}>🌱</div>
  );
};
