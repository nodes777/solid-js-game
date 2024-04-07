import "./App.css";
import styles from "./styles.module.css";
import { TileGrid } from "./components/TileGrid";
import { createTiles } from "./createTiles";

function App() {
  return (
    <div class={styles.tileContainer}>
      <TileGrid tiles={createTiles()} />
    </div>
  );
}

export default App;
