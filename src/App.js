import { Container } from "react-bootstrap";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import BookList from "./components/BookList";
import 'bootstrap/dist/css/bootstrap.css';
import Form from "./components/Form";

const client = new ApolloClient({
	uri: 'http://localhost:8080/graphql',
	cache: new InMemoryCache()
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
