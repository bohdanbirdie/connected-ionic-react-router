import { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { RouteComponentProps } from 'react-router';

import HistoryController from './HistoryController';

class HistoryControllerComponent extends Component<RouteComponentProps> {
  constructor(props: RouteComponentProps) {
    super(props);

    HistoryController.setHistory(props.history);
  }

  render() {
    return null;
  }
}

export default withRouter(HistoryControllerComponent);
