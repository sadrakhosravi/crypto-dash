'use client';

import React from 'react';

interface ErrorBoundaryProps {
  children: React.ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
  errorInfo?: string;
}

export default class ErrorBoundary extends React.Component<
  ErrorBoundaryProps,
  ErrorBoundaryState
> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false, errorInfo: '' };
  }

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    // Update state so the next render shows the fallback UI.
    return { hasError: true, errorInfo: error.message };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo): void {
    // Log error details for debugging (e.g., send to monitoring service)
    console.error('ErrorBoundary caught an error:', error, errorInfo);
  }

  handleReload = (): void => {
    // Reset the state and reload the page
    this.setState({ hasError: false, errorInfo: '' });
    window.location.reload();
  };

  render() {
    if (this.state.hasError) {
      return (
        <div className="flex h-screen flex-col items-center justify-center text-center">
          <h1 className="mb-4 text-2xl font-bold">Something went wrong</h1>
          <p className="mb-4 text-gray-600">
            {this.state.errorInfo || 'An unexpected error occurred.'}
          </p>
          <button
            className="rounded-md bg-blue-500 px-4 py-2 text-white shadow-md hover:bg-blue-600"
            onClick={this.handleReload}
          >
            Reload Page
          </button>
        </div>
      );
    }

    // Render children if no error
    return this.props.children;
  }
}
