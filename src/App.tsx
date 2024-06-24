import useSWR from 'swr';
import './App.css';
import { AxiosInstance } from './api/axios';


const fetcher = (url: string) => AxiosInstance.get(url).then((res) => {
  console.log('fetcher', res);
  return res.data
});

// const fetcherWithObj = (reqObj: { url: string }) => AxiosInstance.get(reqObj.url).then((res) => {
//   console.log('fetcher', res);
//   return res.data
// });
function App() {
  const { data, isLoading, isValidating, mutate } = useSWR('/comments', fetcher);
  console.log('isLoading', isLoading);
  console.log('isValidating', isValidating);
  console.log('data', data);
  return (
    <>
      <h1>SWR Example</h1>
      <input type="text" name="Account" id="">123</input>
      {/* <input type='password'>Password</input> */}
      <button onClick={() => mutate()}>mutate</button>

      <div>
        {data && data.map((item: unknown, idx: number) => (
          <div key={idx}>{JSON.stringify(item)}</div>
        ))}
      </div>
    </>
  )
}

export default App
