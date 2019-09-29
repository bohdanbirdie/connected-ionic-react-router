const PUSH_TYPE = '@history-controller/push';
const REPLACE_TYPE = '@history-controller/replace';
const GO_TYPE = '@history-controller/go';
const GO_BACK_TYPE = '@history-controller/goBack';
const GO_FORWARD_TYPE = '@history-controller/goForward';

const createHistoryAction = (type: string) => (path: string) => ({
  path,
  type
});

const push = createHistoryAction(PUSH_TYPE);
const replace = createHistoryAction(REPLACE_TYPE);
const go = createHistoryAction(GO_TYPE);
const goBack = createHistoryAction(GO_BACK_TYPE);
const goForward = createHistoryAction(GO_FORWARD_TYPE);

export {
  push,
  replace,
  go,
  goBack,
  goForward,

  PUSH_TYPE,
  REPLACE_TYPE,
  GO_TYPE,
  GO_BACK_TYPE,
  GO_FORWARD_TYPE
};
