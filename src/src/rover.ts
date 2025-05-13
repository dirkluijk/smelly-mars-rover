import { RoverState } from "./rover-state";
import { Direction } from "./direction";
import { ActionFactory } from "./action-factory";

export class Rover {
  private readonly actionFactory = new ActionFactory();

  constructor(position: string = "") {
    const [x, y, direction] = position.split(" ");
    if (x !== undefined && y !== undefined && direction !== undefined) {
      this.state.x = parseInt(x, 10);
      this.state.y = parseInt(y, 10);
      this.state.direction = direction[0]! as Direction;
    }
  }

  public go(commands: string): void {
    for (const command of commands) {
      const action = this.actionFactory.createAction(command);
      this.state = action.execute(this.state);
    }
  }

  public G(z: string): void {
    this.go(z[0]!);
  }

  public get XYD(): string {
    return `${this.state.x} ${this.state.y} ${this.state.direction}`;
  }

  public pos(): string {
    return this.XYD;
  }

  private state: RoverState = new RoverState();
}
