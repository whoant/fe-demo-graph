import React from 'react';
import { Row, Col } from 'react-bootstrap';


import BookForm from './BookForm'
import AuthorForm from "./AuthorForm";

const Form = () => {
	return (
		<Row>
			<Col>
				<BookForm/>
			</Col>
			<Col>
				<AuthorForm/>
			</Col>

		</Row>
	)
}

export default Form;