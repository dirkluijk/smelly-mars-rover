import { Direction } from "./direction";

export class RoverState {
  xx: number = 0;
  yy: number = 0;
  dd: Direction = Direction.NORTH; // 'char' in C# is effectively a one-character string in TypeScript
}
