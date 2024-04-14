import { createSignal, Show } from "solid-js";
import styles from "../styles.module.css";
import { Tile } from "./Tile/Tile";
import { TileI } from "../createTiles";

export const TileGrid = (props: { tiles: TileI[] }) => {
  const [tiles, setTiles] = createSignal(props.tiles);
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
            setTiles={setTiles}
          />
        ))}
      </Show>
    </div>
  );
};
