import { Direction } from "./direction";
import type { Position } from "./position";

export class RoverState {
  position: Position = { x: 0, y: 0 };
  direction: Direction = Direction.NORTH;
}
