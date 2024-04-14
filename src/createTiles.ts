export interface TileI {
  id: number;
  title: string;
  left: string;
  top: string;
  stage: null | Stage;
}

export enum Stage {
  Seed = "Seed",
  Sprout = "Sprout",
  Flower = "Flower",
}

const gridSize = 10;
const angleIncrement = 45;

// Next Steps:
// Test images on tiles
// Add interaction on hover
// Add growth loop
// Add Rain

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

      tiles.push({
        id,
        title: `Tile ${i}, ${j} `,
        left,
        top,
        stage: null,
      });
    }
  }

  return tiles;
};
