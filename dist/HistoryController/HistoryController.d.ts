import { Action } from 'redux';
import { History } from 'history';
export default class HistoryController {
    private static history;
    private static actionsMap;
    static setHistory(history: History): void;
    static acceptAction(action: Action<string>): void;
    private static dispatchHistoryEvent;
}
