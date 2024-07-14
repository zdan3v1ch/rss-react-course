import React, { ErrorInfo } from 'react';
import { IProps } from '../../interfaces/MainPageInterface';
import { IErrorBoundary } from '../../interfaces/ErrorBoundary';

export class ErrorBoundary extends React.Component<IProps, IErrorBoundary> {
  constructor(props: IProps) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('ErrorBoundary error:', error, errorInfo);
    this.setState({ hasError: true });
  }

  render() {
    if (this.state.hasError) {
      return <h1>Something went wrong.</h1>;
    }
    return this.props.children;
  }
}

