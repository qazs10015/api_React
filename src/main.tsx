import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { ErrorBoundary } from 'react-error-boundary';
import { SWRConfig } from 'swr';
import { AxiosInstance } from './api/axios.ts';

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

const fetcher = (url: string) => AxiosInstance.get(url).then((res) => {
  console.log('fetcher', res);
  return res
});

ReactDOM.createRoot(document.getElementById('root')!).render(
  <ErrorBoundary fallbackRender={fallbackRender}  >
    <SWRConfig value={{ fetcher }}>
      <App />
    </SWRConfig>
  </ErrorBoundary>
)
