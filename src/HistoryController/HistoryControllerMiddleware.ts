import { Action, Dispatch } from 'redux';

import HistoryController from './HistoryController';

function HistoryControllerMiddleware() {
  return (next: Dispatch) => (action: Action) => {
    HistoryController.acceptAction(action);

    const returnValue = next(action);

    return returnValue;
  };
}

export default HistoryControllerMiddleware;
