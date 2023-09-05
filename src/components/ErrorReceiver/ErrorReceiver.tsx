import { Component, type ReactNode, type ErrorInfo, Fragment, type PropsWithChildren } from 'react';

export class ErrorReceiver extends Component<PropsWithChildren> {
  componentDidCatch (error: Error, errorInfo: ErrorInfo): void {
    console.error('---------- Error Alert ----------');
    console.error(error, errorInfo);
  }

  render (): ReactNode {
    const { children } = this.props;

    return (
      <Fragment>
        { children }
      </Fragment>
    );
  }
}
