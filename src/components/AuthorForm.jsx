import React from 'react'
import { Form, Button } from 'react-bootstrap'

import { useForm } from "react-hook-form";
import { useMutation } from "@apollo/client";
import { getAuthors } from "../graphql/queries";
import { createSingleAuthor } from "../graphql/mutations";

const AuthorForm = () => {
	const { register, handleSubmit, reset } = useForm();

	const [createAuthor, dataMutation] = useMutation(createSingleAuthor);

	const onSubmit = (data) => {
		createAuthor({
			variables: {
				name: data.name,
				age: Number(data.age)
			},
			refetchQueries: [{ query: getAuthors }]
		});

		reset();
	}

	return (
		<Form onSubmit={handleSubmit(onSubmit)}>
			<Form.Group className='mb-3'>
				<Form.Label>Tên tác giả</Form.Label>
				<Form.Control
					{...register('name')}
					type='text'
					required
				/>
			</Form.Group>
			<Form.Group className='mb-3'>
				<Form.Label>Tuổi</Form.Label>
				<Form.Control
					{...register('age')}
					type='text'
					required
				/>
			</Form.Group>

			<Button className='float-end' variant='primary' type='submit'>
				Thêm tác giả
			</Button>
		</Form>
	)
}

export default AuthorForm;