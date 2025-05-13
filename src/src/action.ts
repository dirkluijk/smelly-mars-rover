import { RoverState } from "./rover-state";
import { Direction } from "./direction";

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
    switch (currentState.direction) {
      case Direction.NORTH:
        currentState.direction = Direction.WEST;
        return;
      case Direction.EAST:
        currentState.direction = Direction.NORTH;
        return;
      case Direction.SOUTH:
        currentState.direction = Direction.EAST;
        return;
      case Direction.WEST:
        currentState.direction = Direction.SOUTH;
        return;
    }
  }
}

export class TurnRightAction implements Action {
  execute(currentState: RoverState): void {
    switch (currentState.direction) {
      case Direction.NORTH:
        currentState.direction = Direction.EAST;
        return;
      case Direction.EAST:
        currentState.direction = Direction.SOUTH;
        return;
      case Direction.SOUTH:
        currentState.direction = Direction.WEST;
        return;
      case Direction.WEST:
        currentState.direction = Direction.NORTH;
        return;
    }
  }
}
