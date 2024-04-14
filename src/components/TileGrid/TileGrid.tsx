import { createSignal, Show } from "solid-js";
import { Tile } from "../Tile/Tile";
import { TileI } from "../../createTiles";
import { Rain } from "../Rain/Rain";

export const TileGrid = (props: { tiles: TileI[] }) => {
  // @todo - all divs rerender when a single tile is updated
  const [tiles, setTiles] = createSignal(props.tiles);
  return (
    <div>
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
