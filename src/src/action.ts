import { RoverState } from "./rover-state";
import { Direction } from "./direction";
import { rotate } from "./rotate";

export interface Action {
  execute(currentState: RoverState): void;
}

export class MoveForwardAction implements Action {
  execute(currentState: RoverState): void {
    switch (currentState.direction) {
      case Direction.NORTH:
        currentState.position.y++;
        return;
      case Direction.EAST:
        currentState.position.x++;
        return;
      case Direction.SOUTH:
        currentState.position.y--;
        return;
      case Direction.WEST:
        currentState.position.x--;
        return;
    }
  }
}

export class TurnLeftAction implements Action {
  execute(currentState: RoverState): void {
    currentState.direction = rotate(currentState.direction, -1);
  }
}

export class TurnRightAction implements Action {
  execute(currentState: RoverState): void {
    currentState.direction = rotate(currentState.direction, 1);
  }
}
