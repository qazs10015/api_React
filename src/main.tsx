import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { ErrorBoundary } from 'react-error-boundary';

function fallbackRender({ error, resetErrorBoundary }) {
  // Call resetErrorBoundary() to reset the error boundary and retry the render.
  // console.log(error);
  return (
    <div role="alert">
      <p>Something went wrong:</p>
      <h3 style={{ color: "red" }}>{error.message}</h3>
    </div>
  );
}


ReactDOM.createRoot(document.getElementById('root')!).render(
  <ErrorBoundary fallbackRender={fallbackRender}  >
    <App />
  </ErrorBoundary>
)
