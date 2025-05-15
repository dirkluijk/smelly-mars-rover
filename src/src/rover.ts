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
    Array.of(...commands)
      .map((it) => this.actionFactory.createAction(it))
      .forEach((it) => it.execute(this.state));
  }

  public G(z: string): void {
    this.go(z[0]!);
  }

  public get XYD(): PositionString {
    return `${this.state.position.x} ${this.state.position.y} ${this.state.direction}`;
  }

  public pos(): PositionString {
    return this.XYD;
  }
}

export type PositionString = `${number} ${number} ${Direction}`;
