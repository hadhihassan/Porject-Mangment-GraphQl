import { useQuery, gql } from '@apollo/client';

const GET_CLIENT = gql`
    query getClient {
        clients {
            name
            id
            email
            phone
        }
    }
`
interface Client {
    name: string,
    id: string,
    email: string,
    phone: string
}
export default function Clients() {
    const { loading, error, data } = useQuery(GET_CLIENT);

    if (loading) return <>Loading...</>;
    if (error) return <>Error: {error.message}</>;

    return (
        <>
            <h1>Clients</h1>
            {data.clients.map((client: Client) => (
                <div key={client.id}>
                    <p>Name: {client.name}</p>
                    <p>Email: {client.email}</p>
                    <p>Phone: {client.phone}</p>
                </div>
            ))}
        </>
    );
}
