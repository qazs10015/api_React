import useSWR from 'swr';
import './App.css';
import { AxiosInstance } from './api/axios';


const fetcher = (url: string) => AxiosInstance.get(url).then((res) => {
  console.log('fetcher', res);
  return res.data
});
function App() {
  const { data, isLoading, isValidating, mutate } = useSWR('/comments', fetcher);
  console.log('isLoading', isLoading);
  console.log('isValidating', isValidating);
  console.log('data', data);
  return (
    <>
      <h1>SWR Example</h1>
      <button onClick={() => mutate()}>mutate</button>

      {/* <div>
        {data.map((item: unknown, idx: number) => (
          <div key={idx}>{JSON.stringify(item)}</div>
        ))}
      </div> */}
    </>
  )
}

export default App
