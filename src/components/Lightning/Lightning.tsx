import { createSignal } from "solid-js";
import styles from "./styles.module.css";

export const Lightning = () => {
  const [isAnimating, setIsAnimating] = createSignal(true);
  setTimeout(() => setIsAnimating(false), 200);

  return (
    <div class={isAnimating() ? styles.lightningAnimate : styles.lightning}>
      ⚡️
    </div>
  );
};
