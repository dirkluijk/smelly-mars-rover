import { Direction } from "./direction";
import type { Position } from "./position";
import type { PositionString } from "./rover";

export class RoverState {
  position: Position = { x: 0, y: 0 };
  direction: Direction = Direction.NORTH;
}

export function parseState(string: PositionString): RoverState {
  const [x, y, direction] = string.split(" ");

  if (x === undefined || y === undefined || direction === undefined) {
    throw new Error("Invalid state");
  }

  return {
    position: {
      x: parseInt(x, 10),
      y: parseInt(y, 10),
    },
    direction: direction as Direction,
  };
}
