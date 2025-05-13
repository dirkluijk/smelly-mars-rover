import { Direction } from "./direction";

/**
 * Rotates a direction
 *
 * @param direction The current direction
 * @param amount The amount (positive = clockwise, negative = counterclockwise)
 */
export function rotate(direction: Direction, amount: number): Direction {
  const index = Directions.indexOf(direction);

  return Directions.at((index + amount) % Directions.length)!;
}

const Directions = [
  Direction.NORTH,
  Direction.EAST,
  Direction.SOUTH,
  Direction.WEST,
];
