import { Action, Dispatch } from 'redux';
declare function HistoryControllerMiddleware(): (next: Dispatch<import("redux").AnyAction>) => (action: Action<any>) => Action<any>;
export default HistoryControllerMiddleware;
