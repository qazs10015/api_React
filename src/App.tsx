import { useState } from 'react';
import './App.css';
import TestPage from './pages/TestPage';




// const fetcherWithObj = (reqObj: { url: string }) => AxiosInstance.get(reqObj.url).then((res) => {
//   console.log('fetcher', res);
//   return res.data
// });
function App() {

  const [key, setKey] = useState('');


  const handleKey = () => {

    if (key) setKey('');
    else setKey('/comments');
  }

  return (
    <>
      <button onClick={handleKey}>Change Key</button>
      <TestPage keyProp={key}></TestPage>
    </>
  )
}

export default App

