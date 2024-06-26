import useSWR from 'swr';
import './App.css';
import { AxiosInstance } from './api/axios';
import { useState } from 'react';


const fetcher = (url: string) => AxiosInstance.get(url).then((res) => {
  console.log('fetcher', res);
  return res
});

// const fetcherWithObj = (reqObj: { url: string }) => AxiosInstance.get(reqObj.url).then((res) => {
//   console.log('fetcher', res);
//   return res.data
// });
function App() {
  const [test, setTest] = useState(false);

  const { data, isLoading, isValidating, mutate } = useSWR('/comments', {
    revalidateOnFocus: false,
    revalidateIfStale: true,
    dudupingInterval: 0,
  });

  return (
    <>
      <h1>SWR Example</h1>
      {/* <input type="text" name="Account" id="" ></input> */}
      {/* <input type='password'>Password</input> */}
      {<button onClick={() => mutate()}>mutate</button>}
      <button onClick={() => setTest(!test)}>click</button>

      <div>
        {data && data && data.map((item: unknown, idx: number) => (
          <div key={idx}>{JSON.stringify(item)}</div>
        ))}
      </div>
      {test && <div>Data should be revalidated automatically if stale!</div>}
    </>
  )
}

export default App

