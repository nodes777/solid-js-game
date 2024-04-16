import styles from "./styles.module.css";
import { Stage, TileI } from "../../createTiles";
import { Seed } from "../Plants/Seed/Seed";
import { Tree } from "../Plants/Tree/Tree";
import { Sapling } from "../Plants/Sapling/Sapling";
import { Lightning } from "../Lightning/Lightning";

const determineNextGrowthStage = (stage: Stage | null): Stage | null => {
  switch (stage) {
    case null:
      return Stage.Seed;
    case Stage.Seed:
      return Stage.Sapling;
    case Stage.Sapling:
      return Stage.Tree;
    case Stage.Tree:
      return Stage.Tree;
    default:
      return stage;
  }
};

export const Tile = (props: { tile: TileI; style: any }) => {
  const handleGrowth = () => {
    if (props.tile.tile().stage && props.tile.tile().stage !== Stage.Tree) {
      props.tile.setTile((tile) => ({
        ...tile,
        stage: determineNextGrowthStage(tile.stage),
      }));
    }
  };

  const rate = Math.floor(Math.random() * 2000) + 3000;
  // setInterval(() => {
  //   handleGrowth();
  // }, rate);

  const handleClick = (e: MouseEvent) => {
    //if left click
    if (e.type === "click") {
      console.log(props.tile.tile().id);
      props.tile.setTile((tile) => ({
        ...tile,
        stage: determineNextGrowthStage(tile.stage),
      }));
    }
    // if right click
    else if (e.type === "contextmenu") {
      e.preventDefault();
      props.tile.setTile((tile) => ({
        ...tile,
        stage: Stage.Lightning,
      }));
      // in .5 seconds set the stage to null
      setTimeout(() => {
        props.tile.setTile((tile) => ({
          ...tile,
          stage: null,
        }));
      }, 500);
    }
  };

  return (
    <div
      class={props.tile.tile().stage ? styles.centeredTile : styles.tile}
      style={props.style}
      onClick={handleClick}
      onContextMenu={handleClick}
    >
      {(() => {
        switch (props.tile.tile().stage) {
          case Stage.Seed:
            return <Seed />;
          case Stage.Sapling:
            return <Sapling />;
          case Stage.Tree:
            return <Tree />;
          case Stage.Lightning:
            return <Lightning />;
          default:
            return; //props.tile.tile().title;
        }
      })()}
    </div>
  );
};
