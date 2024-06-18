import useSWR from 'swr';

function Users() {
    const { data, error } = useSWR("/1");
    console.log(data);
    if (error) return <h1>Error!</h1>;
    if (!data) return <h1>Loading...</h1>;
    return (
        <div>{JSON.stringify(data)}</div>
    )
}

export default Users