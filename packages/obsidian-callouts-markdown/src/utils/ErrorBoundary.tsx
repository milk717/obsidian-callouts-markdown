import {Component, ErrorInfo, ReactNode} from 'react';
import DefaultCallout from '@/core/DefaultCallout.tsx';

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
  error: Error | null;
  errorInfo: ErrorInfo | null;
}

class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {hasError: false, error: null, errorInfo: null};
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo): void {
    this.setState({
      hasError: true,
      error: error,
      errorInfo: errorInfo,
    });
  }

  render(): ReactNode {
    if (this.state.hasError) {
      return (
        <DefaultCallout type="bug" title="Callout Parsing Error">
          <p>
            Sorry, I think I got into trouble parsing the callout 😅
            <br />
            <p>
              If you leave an{' '}
              <a href="https://github.com/milk717/obsidian-callouts-markdown/issues">
                issue
              </a>
              , we'll fix it quickly!
            </p>
          </p>
        </DefaultCallout>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
