import { ApolloClient, ApolloProvider, HttpLink, InMemoryCache, split } from "@apollo/client";
import { GraphQLWsLink } from '@apollo/client/link/subscriptions';
import { createClient } from 'graphql-ws';
import { getMainDefinition } from "@apollo/client/utilities";

import { Container } from "react-bootstrap";
import BookList from "./components/BookList";
import 'bootstrap/dist/css/bootstrap.css';
import Form from "./components/Form";

const httpLink = new HttpLink({
    uri: 'http://localhost:8080/graphql'
});

const wsLink = new GraphQLWsLink(createClient({
    url: 'ws://localhost:8080/graphql',
}));

const splitLink = split(
    ({ query }) => {
        const definition = getMainDefinition(query);
        return (
            definition.kind === 'OperationDefinition' &&
            definition.operation === 'subscription'
        );
    },
    wsLink,
    httpLink,
);

const defaultOptions = {
    watchQuery: {
        fetchPolicy: 'no-cache',
        errorPolicy: 'ignore',
    },
    query: {
        fetchPolicy: 'no-cache',
        errorPolicy: 'all',
    },
}


const client = new ApolloClient({
    link: splitLink,
    cache: new InMemoryCache(),
    defaultOptions
});

function App() {
    return (
        <ApolloProvider client={client}>
            <Container className='py-3 mt-3' style={{ backgroundColor: '' }}>
                <h1 className='text-center text-info mb-3'>My books</h1>
                <hr/>
                <Form/>
                <hr/>
                <BookList/>
            </Container>
        </ApolloProvider>
    );
}

export default App;
