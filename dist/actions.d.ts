declare const PUSH_TYPE = "@history-controller/push";
declare const REPLACE_TYPE = "@history-controller/replace";
declare const GO_TYPE = "@history-controller/go";
declare const GO_BACK_TYPE = "@history-controller/goBack";
declare const GO_FORWARD_TYPE = "@history-controller/goForward";
declare const push: (path: string) => {
    path: string;
    type: string;
};
declare const replace: (path: string) => {
    path: string;
    type: string;
};
declare const go: (path: string) => {
    path: string;
    type: string;
};
declare const goBack: (path: string) => {
    path: string;
    type: string;
};
declare const goForward: (path: string) => {
    path: string;
    type: string;
};
export { push, replace, go, goBack, goForward, PUSH_TYPE, REPLACE_TYPE, GO_TYPE, GO_BACK_TYPE, GO_FORWARD_TYPE };
