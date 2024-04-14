import "./App.css";
import styles from "./styles.module.css";
import { TileGrid } from "./components/TileGrid/TileGrid";
import { createTiles } from "./createTiles";
import { Rain } from "./components/Rain/Rain";

function App() {
  return (
    <>
      <Rain />
      <div class={styles.tileContainer}>
        <TileGrid tiles={createTiles()} />
      </div>
    </>
  );
}

export default App;
