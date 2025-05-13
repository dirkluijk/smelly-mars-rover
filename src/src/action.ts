import { RoverState } from "./rover-state";
import { Direction } from "./direction";

export interface Action {
  execute(currentState: RoverState): RoverState;
}

export class MoveForwardAction implements Action {
  execute(currentState: RoverState): RoverState {
    switch (currentState.direction) {
      case Direction.NORTH:
        return { ...currentState, y: currentState.y + 1 };
      case Direction.EAST:
        return { ...currentState, x: currentState.x + 1 };
      case Direction.SOUTH:
        return { ...currentState, y: currentState.y - 1 };
      case Direction.WEST:
        return { ...currentState, x: currentState.x - 1 };
    }
  }
}

export class TurnLeftAction implements Action {
  execute(currentState: RoverState): RoverState {
    switch (currentState.direction) {
      case Direction.NORTH:
        return { ...currentState, direction: Direction.WEST };
      case Direction.EAST:
        return { ...currentState, direction: Direction.NORTH };
      case Direction.SOUTH:
        return { ...currentState, direction: Direction.EAST };
      case Direction.WEST:
        return { ...currentState, direction: Direction.SOUTH };
    }
  }
}

export class TurnRightAction implements Action {
  execute(currentState: RoverState): RoverState {
    switch (currentState.direction) {
      case Direction.NORTH:
        return { ...currentState, direction: Direction.EAST };
      case Direction.EAST:
        return { ...currentState, direction: Direction.SOUTH };
      case Direction.SOUTH:
        return { ...currentState, direction: Direction.WEST };
      case Direction.WEST:
        return { ...currentState, direction: Direction.NORTH };
    }
  }
}
