import { Setter } from "solid-js";
import styles from "./styles.module.css";
import { Stage, TileI } from "../../createTiles";
import { Seed } from "../Seed/Seed";
import { Flower } from "../Flower/Flower";
import { Sprout } from "../Sprout/Sprout";

export const Tile = (props: {
  tile: TileI;
  style: any;
  setTiles: Setter<TileI[]>;
}) => {
  const handleClick = () => {
    console.log(props.tile.id);
    props.setTiles((allTiles) =>
      allTiles.map((tile) =>
        tile.id === props.tile.id ? { ...tile, stage: Stage.Seed } : tile
      )
    );
  };

  return (
    <div
      class={props.tile.stage ? styles.centeredTile : styles.tile}
      style={props.style}
      onClick={handleClick}
    >
      {(() => {
        switch (props.tile.stage) {
          case Stage.Seed:
            return <Seed />;
          case Stage.Sprout:
            return <Sprout />;
          case Stage.Flower:
            return <Flower />;
          default:
            return props.tile.title;
        }
      })()}
    </div>
  );
};
