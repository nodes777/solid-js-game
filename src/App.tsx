import { Show, createSignal } from "solid-js";

import "./App.css";
import styles from "./styles.module.css";

interface Tile {
  id: number;
  title: string;
  left: string;
  top: string;
}

const gridSize = 10;
const angleIncrement = 45;

// Next Steps:
// Break App up into components
// Test images on tiles
// Add interaction on hover

const createTiles = (): Tile[] => {
  const tiles = [];

  for (let i = 0; i < gridSize; i++) {
    for (let j = 0; j < gridSize; j++) {
      const offsetX = i * -angleIncrement;
      const offsetY = i * angleIncrement;
      const coordX = j * angleIncrement + offsetX;
      const coordY = j * angleIncrement + offsetY;

      const left = `${coordX}px`;
      const top = `${coordY}px`;

      tiles.push({
        id: i,
        title: `Tile ${i}, ${j} `,
        left,
        top,
      });
    }
  }

  return tiles;
};

const TileGrid = (props: { tiles: Tile[] }) => {
  const [tiles] = createSignal(props.tiles);
  return (
    <div class={styles.grid}>
      <Show when={tiles().length > 0}>
        {tiles().map((tile) => (
          <Tile
            tile={tile}
            style={{
              left: `${tile.left}`,
              top: `${tile.top}`,
            }}
          />
        ))}
      </Show>
    </div>
  );
};

const Tile = (props: { tile: Tile; style: any }) => {
  return (
    <div class={styles.tile} style={props.style}>
      {props.tile.title}
    </div>
  );
};

function App() {
  return (
    <div class={styles.tileContainer}>
      <TileGrid tiles={createTiles()} />
    </div>
  );
}

export default App;
