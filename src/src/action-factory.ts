import {
  type Action,
  MoveForwardAction,
  TurnLeftAction,
  TurnRightAction,
} from "./action";

export class ActionFactory {
  public createAction(command: string): Action {
    switch (command) {
      case "L":
        return new TurnLeftAction();
      case "R":
        return new TurnRightAction();
      case "M":
        return new MoveForwardAction();
      default:
        throw new Error("Unknown command");
    }
  }
}
