import { RoverState } from "./rover-state";
import { Direction } from "./direction";

export class Rover {
  constructor(p: string = "") {
    const s = p.split(" ");
    if (s.length >= 3) {
      this.rs.xx = parseInt(s[0]!, 10);
      this.rs.yy = parseInt(s[1]!, 10);
      this.rs.dd = s[2]![0]! as Direction;
    }
  }

  public go(cms: string): void {
    for (let i = 0; i < cms.length; i++) {
      const c = cms[i];
      if (c === "L") {
        if (this.rs.dd === Direction.EAST) {
          this.rs.dd = Direction.NORTH;
        } else if (this.rs.dd === Direction.NORTH) {
          this.rs.dd = Direction.WEST;
        } else if (this.rs.dd === Direction.WEST) {
          this.rs.dd = Direction.SOUTH;
        } else if (this.rs.dd === Direction.SOUTH) {
          this.rs.dd = Direction.EAST;
        }
      } else if (c === "R") {
        if (this.rs.dd === Direction.EAST) {
          this.rs.dd = Direction.SOUTH;
        } else if (this.rs.dd === Direction.SOUTH) {
          this.rs.dd = Direction.WEST;
        } else if (this.rs.dd === Direction.WEST) {
          this.rs.dd = Direction.NORTH;
        } else if (this.rs.dd === Direction.NORTH) {
          this.rs.dd = Direction.EAST;
        }
      } else if (c === "M") {
        if (this.rs.dd === Direction.EAST) {
          this.rs.xx++;
        }
        if (this.rs.dd === Direction.SOUTH) {
          this.rs.yy--;
        }
        if (this.rs.dd === Direction.WEST) {
          this.rs.xx--;
        }
        if (this.rs.dd === Direction.NORTH) {
          this.rs.yy++;
        }
      }
    }
  }

  public G(z: string): void {
    this.go(z[0]!);
  }

  public get XYD(): string {
    return `${this.rs.xx} ${this.rs.yy} ${this.rs.dd}`;
  }

  public pos(): string {
    return this.XYD;
  }

  private rs: RoverState = new RoverState();
}
