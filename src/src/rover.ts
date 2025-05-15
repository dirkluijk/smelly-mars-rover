import { parseState, RoverState } from "./rover-state";
import { Direction } from "./direction";
import { ActionFactory } from "./action-factory";

export class Rover {
  private readonly state = new RoverState();
  private readonly actionFactory = new ActionFactory();

  constructor(position: PositionString) {
    this.state = parseState(position);
  }

  public go(commands: string): void {
    for (const command of commands) {
      this.actionFactory.createAction(command).execute(this.state);
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

export type PositionString = `${number} ${number} ${Direction}`;
