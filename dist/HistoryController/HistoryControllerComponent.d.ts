import { Component } from 'react';
import { RouteComponentProps } from 'react-router';
declare class HistoryControllerComponent extends Component<RouteComponentProps> {
    constructor(props: RouteComponentProps);
    render(): any;
}
declare const _default: import("react").ComponentClass<Pick<RouteComponentProps<{}, import("react-router").StaticContext, any>, never> & {
    wrappedComponentRef?: import("react").Ref<HistoryControllerComponent>;
}, any> & import("react-router").WithRouterStatics<typeof HistoryControllerComponent>;
export default _default;
