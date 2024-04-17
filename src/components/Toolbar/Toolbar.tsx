import styles from "./styles.module.css";

export const Toolbar = (props: {
  setIsSnowing: (bool: boolean) => boolean;
  isSnowing: () => boolean;
}) => {
  return (
    <div class={styles.toolbar}>
      <label for="isSnowing">Is Snowing</label>
      <input
        type="checkbox"
        id="isSnowing"
        name="isSnowing"
        onChange={() => {
          props.setIsSnowing(!props.isSnowing());
        }}
      ></input>
    </div>
  );
};
