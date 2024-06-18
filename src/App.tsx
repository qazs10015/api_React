import axios from 'axios';
import { SWRConfig } from 'swr';
import './App.css';
import Users from './pages/Users';

axios.defaults.baseURL = 'https://jsonplaceholder.typicode.com/todos';


//* Fetcher Function
const fetcher = (url: string) => axios.get(url).then((res) => res.data);

function App() {

  return (
    <SWRConfig value={{
      fetcher,
      revalidateIfStale: false,
      revalidateOnFocus: false,
      revalidateOnReconnect: false
    }}>
      <Users></Users>
    </SWRConfig>
  )
}

export default App
