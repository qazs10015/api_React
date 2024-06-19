import { SWRConfig } from 'swr';
import './App.css';
import Users from './pages/Users';
import { AxiosInstance } from './api/axios';

//* Fetcher Function
const fetcher = (url: string) => AxiosInstance.get(url).then((res) => res.data);

function App() {

  return (
    <SWRConfig value={{ fetcher }}>
      <Users></Users>
    </SWRConfig>
  )
}

export default App
