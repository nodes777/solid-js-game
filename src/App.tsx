import "./App.css";
import styles from "./styles.module.css";
import { TileGrid } from "./components/TileGrid/TileGrid";
import { createTiles } from "./createTiles";
import { Rain } from "./components/Rain/Rain";
import { Toolbar } from "./components/Toolbar/Toolbar";
import { createSignal } from "solid-js";

function App() {
  const [isRaining, setIsRaining] = createSignal(false);
  return (
    <>
      <Toolbar setIsRaining={setIsRaining} isRaining={isRaining} />
      {isRaining() && <Rain />}
      <div class={styles.tileContainer}>
        <TileGrid tiles={createTiles()} />
      </div>
    </>
  );
}

export default App;
