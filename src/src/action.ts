import { RoverState } from "./rover-state";
import { Direction, Directions } from "./direction";

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

function rotate(direction: Direction, amount: number): Direction {
  const index = Directions.indexOf(direction);

  return Directions.at((index + amount) % Directions.length)!;
}
