import { Action } from 'redux';
import { History } from 'history';

import {
  PUSH_TYPE,
  REPLACE_TYPE,
  GO_TYPE,
  GO_BACK_TYPE,
  GO_FORWARD_TYPE
} from '../actions';

export default class HistoryController {
  private static history: History;

  private static actionsMap: { [type: string]: Function };

  public static setHistory(history: History) {
    HistoryController.history = history;
    HistoryController.actionsMap = {
      [GO_BACK_TYPE]: history.goBack,
      [GO_FORWARD_TYPE]: history.goForward,
      [GO_TYPE]: history.go,
      [PUSH_TYPE]: history.push,
      [REPLACE_TYPE]: history.replace
    };
  }

  public static acceptAction(action: Action<string>) {
    if (HistoryController.history) {
      HistoryController.dispatchHistoryEvent(action);
    }
  }

  private static dispatchHistoryEvent(action: { type: string, path?: string }) {
    const historyFunc = HistoryController.actionsMap[action.type];

    if (historyFunc) {
      historyFunc(action.path);
    }
  }
}
