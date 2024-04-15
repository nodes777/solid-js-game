import { Show } from "solid-js";
import { Tile } from "../Tile/Tile";
import { TileI } from "../../createTiles";

export const TileGrid = (props: { tiles: TileI[] }) => {
  return (
    <div>
      <Show when={props.tiles.length > 0}>
        {props.tiles.map((tile) => (
          <Tile
            tile={tile}
            style={{
              left: `${tile.tile().left}`,
              top: `${tile.tile().top}`,
            }}
          />
        ))}
      </Show>
    </div>
  );
};
