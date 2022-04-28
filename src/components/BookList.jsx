import React, { useState } from 'react';
import { Col, Row } from "react-bootstrap";
import Book from "./Book";
import { useQuery } from "@apollo/client";
import { getBooks } from "../graphql/queries";
import BookDetail from "./BookDetail";
import BookCreated from "./BookCreated";

const BookList = () => {
	const { loading, error, data } = useQuery(getBooks);
	const [bookSelected, setBookSelected] = useState(null);

	if (loading) return <p>Loading books ....</p>;
	if (error) return <p>Error loading books !</p>;

	const handleOnClickBook = (bookId) => {
		setBookSelected(bookId);
	};

	return (
		<Row>
			<Col>
				<Row xs={8}>
					{data.books.map(book => (
						<Col xs="6">
							<Book book={book} onClickBook={handleOnClickBook}/>
						</Col>
					))}
				</Row>
			</Col>
			{/*<Col>*/}
			{/*	<BookCreated/>*/}
			{/*</Col>*/}
			<Col>
				<BookDetail bookId={bookSelected}/>
			</Col>
		</Row>
	);

};

export default BookList;