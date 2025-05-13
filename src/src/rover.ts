import { RoverState } from "./rover-state";
import { Direction } from "./direction";
import { ActionFactory } from "./action-factory";

export class Rover {
  private readonly actionFactory = new ActionFactory();

  constructor(position: string = "") {
    const s = position.split(" ");
    if (s.length >= 3) {
      this.state.x = parseInt(s[0]!, 10);
      this.state.y = parseInt(s[1]!, 10);
      this.state.direction = s[2]![0]! as Direction;
    }
  }

  public go(commands: string): void {
    for (let i = 0; i < commands.length; i++) {
      const command = commands[i]!;
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
