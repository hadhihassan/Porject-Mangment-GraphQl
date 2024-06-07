import './App.css'
import Clients from './componets/Clients'
import Header from './componets/Header'
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client'


const client = new ApolloClient({
  uri: "http://localhost:3000/graphql/",
  cache: new InMemoryCache
})
function App() {
  return (
    <>
      <ApolloProvider
        client={client}>
        <Header />
        <Clients />
      </ApolloProvider>
    </>
  )
}

export default App
