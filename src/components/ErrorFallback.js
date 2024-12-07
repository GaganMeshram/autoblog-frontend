// ErrorFallback.js
const ErrorFallback = ({ error, resetErrorBoundary }) => {
    return (
      <div role="alert" style={{ color: 'red', padding: '1rem', textAlign: 'center' }}>
        <h2>Something went wrong</h2>
        <p>{error.message}</p>
        <button className="btn btn-dark" onClick={resetErrorBoundary}>Try Again</button>
      </div>
    );
  };
  
  export default ErrorFallback;
  