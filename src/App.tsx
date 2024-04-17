import "./App.css";
import styles from "./styles.module.css";
import { TileGrid } from "./components/TileGrid/TileGrid";
import { createTiles } from "./createTiles";
import { Snow } from "./components/Snow/Snow";
import { Toolbar } from "./components/Toolbar/Toolbar";
import { createSignal } from "solid-js";

function App() {
  const [isSnowing, setIsSnowing] = createSignal(false);
  return (
    <>
      <Toolbar setIsSnowing={setIsSnowing} isSnowing={isSnowing} />
      {isSnowing() && <Snow />}
      <div class={styles.tileContainer}>
        <TileGrid tiles={createTiles()} />
      </div>
    </>
  );
}

export default App;
