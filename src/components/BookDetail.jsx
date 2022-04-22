import React, { Fragment } from 'react';
import { Card } from "react-bootstrap";
import { useQuery } from "@apollo/client";
import { getSingleBook } from "../graphql/queries";

const BookDetail = props => {
	const { bookId } = props;
	const { loading, error, data } = useQuery(getSingleBook, {
		variables: {
			id: bookId
		},
		skip: bookId === null
	});

	if (loading) return <p>Loading book detail ...</p>;
	if (error) {
		console.log(error);
		return <p>Error loading book details !</p>;
	}

	const book = bookId !== null ? data.book : null;
	
	return (
		<Card bg='' text='' className='shadow'>
			{!book ? (
				<Card.Text>Vui lòng chọn sách !</Card.Text>
			) : (
				<Fragment>
					<Card.Header>{book.genre}</Card.Header>
					<Card.Body>
						<Card.Title>{book.name}</Card.Title>
						<Card.Body>
							<p>Tác giả: {book.author.name}</p>
							<p>Tuổi: {book.author.age}</p>
							<p>Tất cả sách của tác giả này</p>
							<ul>
								{book.author.books.map(book => (
									<li key={book.id}>{book.name}</li>
								))}
							</ul>
						</Card.Body>
					</Card.Body>
				</Fragment>
			)}
		</Card>
	);
};

export default BookDetail;