import { RoverState } from "./rover-state";
import { Direction } from "./direction";

export class Rover {
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
      const command = commands[i];
      if (command === "L") {
        this.turnLeft();
      } else if (command === "R") {
        this.turnRight();
      } else if (command === "M") {
        this.moveForward();
      }
    }
  }

  private moveForward() {
    switch (this.state.direction) {
      case Direction.EAST:
        return this.state.x++;
      case Direction.SOUTH:
        return this.state.y--;
      case Direction.WEST:
        return this.state.x--;
      case Direction.NORTH:
        return this.state.y++;
    }
  }

  private turnRight() {
    if (this.state.direction === Direction.EAST) {
      this.state.direction = Direction.SOUTH;
    } else if (this.state.direction === Direction.SOUTH) {
      this.state.direction = Direction.WEST;
    } else if (this.state.direction === Direction.WEST) {
      this.state.direction = Direction.NORTH;
    } else if (this.state.direction === Direction.NORTH) {
      this.state.direction = Direction.EAST;
    }
  }

  private turnLeft() {
    if (this.state.direction === Direction.EAST) {
      this.state.direction = Direction.NORTH;
    } else if (this.state.direction === Direction.NORTH) {
      this.state.direction = Direction.WEST;
    } else if (this.state.direction === Direction.WEST) {
      this.state.direction = Direction.SOUTH;
    } else if (this.state.direction === Direction.SOUTH) {
      this.state.direction = Direction.EAST;
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
