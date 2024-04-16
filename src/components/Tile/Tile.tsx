import styles from "./styles.module.css";
import { Stage, TileI } from "../../createTiles";
import { Seed } from "../Plants/Seed/Seed";
import { Tree } from "../Plants/Tree/Tree";
import { Sprout } from "../Plants/Sapling/Sapling";

const determineNextGrowthStage = (stage: Stage | null): Stage | null => {
  switch (stage) {
    case null:
      return Stage.Seed;
    case Stage.Seed:
      return Stage.Sprout;
    case Stage.Sprout:
      return Stage.Tree;
    case Stage.Tree:
      return Stage.Tree;
    default:
      return stage;
  }
};

export const Tile = (props: { tile: TileI; style: any }) => {
  const handleClick = () => {
    console.log(props.tile.tile().id);
    props.tile.setTile((tile) => ({
      ...tile,
      stage: determineNextGrowthStage(tile.stage),
    }));
  };

  return (
    <div
      class={props.tile.tile().stage ? styles.centeredTile : styles.tile}
      style={props.style}
      onClick={handleClick}
    >
      {(() => {
        switch (props.tile.tile().stage) {
          case Stage.Seed:
            return <Seed />;
          case Stage.Sprout:
            return <Sprout />;
          case Stage.Tree:
            return <Tree />;
          default:
            return; //props.tile.tile().title;
        }
      })()}
    </div>
  );
};
