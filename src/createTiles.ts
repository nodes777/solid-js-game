import { Accessor, Setter, createSignal } from "solid-js";

export interface TileI {
  // @todo: rename this to getTile
  tile: Accessor<{
    id: number;
    title: string;
    left: string;
    top: string;
    stage: null | Stage;
  }>;
  setTile: Setter<{
    id: number;
    title: string;
    left: string;
    top: string;
    stage: null | Stage;
  }>;
}

export enum Stage {
  Seed = "Seed",
  Sapling = "Sapling",
  Tree = "Tree",
  Lightning = "Lightning",
}

const gridSize = 10;
const angleIncrement = 45;

// Next Steps:
// Add growth loop
// Add interaction on hover

export const createTiles = (): TileI[] => {
  const tiles = [];

  for (let i = 0; i < gridSize; i++) {
    for (let j = 0; j < gridSize; j++) {
      const offsetX = i * -angleIncrement;
      const offsetY = i * angleIncrement;
      const coordX = j * angleIncrement + offsetX;
      const coordY = j * angleIncrement + offsetY;

      const left = `${coordX}px`;
      const top = `${coordY}px`;

      const id = i * gridSize + j;
      const [tile, setTile] = createSignal<{
        id: number;
        title: string;
        left: string;
        top: string;
        stage: null | Stage;
      }>({
        id,
        title: `Tile ${i}, ${j} `,
        left,
        top,
        stage: null,
      });

      tiles.push({ tile, setTile });
    }
  }

  return tiles;
};
