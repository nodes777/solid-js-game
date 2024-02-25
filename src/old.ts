// Matrix of positions for 3x3 grid
// const positions = [
//   { x: 0, y: 0 },
//   { x: 45, y: 45 },
//   { x: 90, y: 90 },
//   { x: -45, y: 45 },
//   { x: 0, y: 90 },
//   { x: 45, y: 135 },
//   { x: -90, y: 90 },
//   { x: -45, y: 135 },
//   { x: 0, y: 180 },
// ];

// Matrix of positions for 4x4 grid
// const positions = [
//   { x: 0, y: 0 },
//   { x: 45, y: 45 },
//   { x: 90, y: 90 },
//   { x: 135, y: 135 }, //
//   { x: -45, y: 45 },
//   { x: 0, y: 90 },
//   { x: 45, y: 135 },
//   { x: 90, y: 180 }, //
//   { x: -90, y: 90 },
//   { x: -45, y: 135 },
//   { x: 0, y: 180 },
//   { x: 45, y: 225 }, //
//   { x: -135, y: 135 },
//   { x: -90, y: 180 },
//   { x: -45, y: 225 },
//   { x: 0, y: 270 }, //
// ];

// matrix of positions for 5x5 grid
const positions = [
  { x: 0, y: 0 },
  { x: 45, y: 45 },
  { x: 90, y: 90 },
  { x: 135, y: 135 },
  { x: 180, y: 180 }, //
  { x: -45, y: 45 },
  { x: 0, y: 90 },
  { x: 45, y: 135 },
  { x: 90, y: 180 },
  { x: 135, y: 225 }, //
  { x: -90, y: 90 },
  { x: -45, y: 135 },
  { x: 0, y: 180 },
  { x: 45, y: 225 },
  { x: 90, y: 270 }, //
  { x: -135, y: 135 },
  { x: -90, y: 180 },
  { x: -45, y: 225 },
  { x: 0, y: 270 },
  { x: 45, y: 315 }, //
  { x: -180, y: 180 },
  { x: -135, y: 225 },
  { x: -90, y: 270 },
  { x: -45, y: 315 },
  { x: 0, y: 360 },
];

interface Tile {
  id: number;
  title: string;
  left: string;
  top: string;
}

const tileWidth = 90;
const tileHeight = 45;
const angleIncrement = 45;
const createTilesFromPositions = (): Tile[] => {
  const tiles: Tile[] = [];
  positions.forEach((position, index) => {
    const left = `${position.x}px`;
    const top = `${position.y}px`;
    tiles.push({
      id: index,
      title: `Tile ${index}`,
      left,
      top,
    });
  });
  return tiles;
};
// const determinePosition = (x: number, y: number) => {
//   const xCoord = x * (0.5 * tileWidth) + y * (-0.5 * tileWidth);
//   const yCoord = x * (0.25 * tileHeight) + y * (-0.25 * tileHeight);
//   return { offsetX: xCoord, offsetY: yCoord };
// };

// const determinePosition = (i: number, j: number) => {
//   const xCoord = (j - Math.floor(gridSize / 2)) * angleIncrement;
//   const yCoord = (i * gridSize + j) * angleIncrement;
//   return { offsetX: xCoord, offsetY: yCoord };
// };

// const determinePosition = (i: number, j: number) => {
//   const xCoord = j * angleIncrement;
//   const yCoord = i * angleIncrement;
//   return { offsetX: xCoord, offsetY: yCoord };
// };

// const determinePosition = (i: number, j: number) => {
//   // Calculate offsetX and offsetY based on i and j
//   const offsetX = (i - j) * (Math.cos((angleIncrement * Math.PI) / 180) * 45);
//   const offsetY = (i + j) * (Math.sin((angleIncrement * Math.PI) / 180) * 45);

//   return { offsetX, offsetY };
// };

const determinePosition = (i: number, j: number) => {
  // Calculate offsetX and offsetY based on i and j
  const offsetX = j * (Math.cos((angleIncrement * Math.PI) / 180) * 45);
  const offsetY = i * (Math.sin((angleIncrement * Math.PI) / 180) * 45);

  return { offsetX, offsetY };
};
