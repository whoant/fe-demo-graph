import React from 'react'
import { Form, Button } from 'react-bootstrap'

import { useForm } from "react-hook-form";
import { useMutation, useQuery } from "@apollo/client";
import { getAuthors, getBooks } from "../graphql/queries";
import { createSingleBook } from "../graphql/mutations";

const BookForm = () => {
	const { register, handleSubmit, reset } = useForm();
	const { loading, error, data } = useQuery(getAuthors);

	const [createBook, dataMutation] = useMutation(createSingleBook);

	const onSubmit = (data) => {
		createBook({
			variables: data,
			refetchQueries: [{ query: getBooks }]
		});

		reset();
	}

	return (
		<Form onSubmit={handleSubmit(onSubmit)}>
			<Form.Group className='mb-3'>
				<Form.Label>Tên sách</Form.Label>
				<Form.Control
					{...register('name')}
					type='text'
					required
				/>
			</Form.Group>
			<Form.Group className='mb-3'>
				<Form.Label>Thể loại</Form.Label>
				<Form.Control
					{...register('genre')}
					type='text'
					required
				/>
			</Form.Group>
			<Form.Group className='mb-3'>
				<Form.Label>Tác giả</Form.Label>
				{
					loading ? (
						<p>Loading author ...</p>
					) : (
						<Form.Control
							{...register('authorId')}
							as='select'
							required
						>
							<option value='' disabled>
								Select author
							</option>
							{
								data.authors.map(author => (
									<option key={author.id} value={author.id}>{author.name}</option>
								))
							}
						</Form.Control>
					)}
			</Form.Group>
			<Button className='float-right' variant='primary' type='submit'>
				Thêm sách
			</Button>
		</Form>
	)
}

export default BookForm;