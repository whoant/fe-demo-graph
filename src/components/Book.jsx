import React from 'react';
import { Card } from "react-bootstrap";

const Book = (props) => {
	const { book, onClickBook } = props;

	const onClickBookItem = (e) => {
		onClickBook(book.id);
	};


	return (
		<Card
			onClick={onClickBookItem}
			key={book.id}
			border="primary"
			text='info'
			className='text-center shadow mb-3'
			style={{ cursor: 'pointer' }}>
			<Card.Body>
				<Card.Title>{book.name}</Card.Title>
				<Card.Subtitle>
					{book.genre}
				</Card.Subtitle>
			</Card.Body>
		</Card>
	);
};

export default Book;