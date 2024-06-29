import { useState } from 'react';
import useSWR from 'swr';
import { AxiosInstance } from '../api/axios';

const fetcher = (url: string) => AxiosInstance.get(url).then((res) => {
    console.log('fetcher', res);
    return res
});

function TestPage({ keyProp }: { keyProp: string }) {
    console.log(keyProp);
    const [shouldFetch, setShouldFetch] = useState(false);

    const { data, isLoading, isValidating, mutate } = useSWR('/comments', {

        focusThrottleInterval: 30000,
    });

    return (
        <>
            <h1>SWR Example</h1>
            {/* <input type="text" name="Account" id="" ></input> */}
            {/* <input type='password'>Password</input> */}
            {<button onClick={() => mutate()}>mutate</button>}
            <button onClick={() => setShouldFetch(!shouldFetch)}>click</button>

            <div>
                {data && data && data.map((item: unknown, idx: number) => (
                    <div key={idx}>{JSON.stringify(item)}</div>
                ))}
            </div>
            {shouldFetch && <div>Data should be revalidated automatically if stale!</div>}
        </>
    )
}

export default TestPage