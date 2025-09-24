import React from 'react';
import './error-boundary.styles.css'; // Import the dedicated styles

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null, errorInfo: null };
  }

  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI.
    return { hasError: true, error: error };
  }

  componentDidCatch(error, errorInfo) {
    // You can also log the error to an error reporting service
    console.error("Uncaught error:", error, errorInfo);
    this.setState({ errorInfo: errorInfo });
  }

  render() {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return (
        <div className="error-container">
          <h1>Oops! Something went wrong.</h1>
          <p>We're sorry, but there was an unexpected error. Please try refreshing the page.</p>
          {this.props.showDetails && this.state.error && (
            <details className="error-details">
              <summary>Error Details</summary>
              <p>{this.state.error.toString()}</p>
              <p>{this.state.errorInfo.componentStack}</p>
            </details>
          )}
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
