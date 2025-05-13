import { RoverState } from "./rover-state";
import { Direction } from "./direction";
import {
  type Action,
  MoveForwardAction,
  TurnLeftAction,
  TurnRightAction,
} from "./action";

export class Rover {
  private readonly actions: Record<string, Action> = {
    L: new TurnLeftAction(),
    R: new TurnRightAction(),
    M: new MoveForwardAction(),
  };

  private readonly state: RoverState = new RoverState();

  constructor(position: string = "") {
    const [x, y, direction] = position.split(" ");
    if (x !== undefined && y !== undefined && direction !== undefined) {
      this.state.position.x = parseInt(x, 10);
      this.state.position.y = parseInt(y, 10);
      this.state.direction = direction[0]! as Direction;
    }
  }

  public go(commands: string): void {
    for (const command of commands) {
      const action = this.actions[command];
      if (action !== undefined) {
        action.execute(this.state);
      }
    }
  }

  public G(z: string): void {
    this.go(z[0]!);
  }

  public get XYD(): string {
    return `${this.state.position.x} ${this.state.position.y} ${this.state.direction}`;
  }

  public pos(): string {
    return this.XYD;
  }
}
