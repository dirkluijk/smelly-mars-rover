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
    return this.actions[command] ?? throwError(`Unknown command ${command}`);
  }
}

function throwError(message: string): never {
  throw new Error(message);
}
