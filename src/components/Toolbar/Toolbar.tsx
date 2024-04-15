import styles from "./styles.module.css";

export const Toolbar = (props: {
  setIsRaining: (bool: boolean) => boolean;
  isRaining: () => boolean;
}) => {
  return (
    <div class={styles.toolbar}>
      <label for="isRaining">Is Raining</label>
      <input
        type="checkbox"
        id="isRaining"
        name="isRaining"
        onChange={() => {
          props.setIsRaining(!props.isRaining());
        }}
      ></input>
    </div>
  );
};
