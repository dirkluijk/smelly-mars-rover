import { RoverState } from "./rover-state";
import { Direction } from "./direction";

export interface Command {
  execute(currentState: RoverState): RoverState;
}

export class MoveForwardCommand implements Command {
  execute(currentState: RoverState): RoverState {
    switch (currentState.direction) {
      case Direction.EAST:
        return { ...currentState, x: currentState.x + 1 };
      case Direction.SOUTH:
        return { ...currentState, y: currentState.y - 1 };
      case Direction.WEST:
        return { ...currentState, x: currentState.x - 1 };
      case Direction.NORTH:
        return { ...currentState, y: currentState.y + 1 };
    }
  }
}
