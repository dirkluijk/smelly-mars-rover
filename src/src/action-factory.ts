import {
  type Action,
  MoveForwardAction,
  TurnLeftAction,
  TurnRightAction,
} from "./action";

export class ActionFactory {
  private readonly actions: Record<string, Action> = {
    L: new TurnLeftAction(),
    R: new TurnRightAction(),
    M: new MoveForwardAction(),
  };

  public createAction(command: string): Action {
    const action = this.actions[command];

    if (action === undefined) {
      throw new Error("Unknown command");
    }

    return action;
  }
}
