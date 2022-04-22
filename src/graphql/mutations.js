import { gql } from "@apollo/client";

const createSingleBook = gql(`
	mutation createBookMutation (
		$name: String, 
		$genre: String, 
		$authorId: ID!
	){
		createBook(name: $name, genre: $genre, authorId: $authorId) {
			id
			name
			genre
		} 
	}
`);


const createSingleAuthor = gql(`
	mutation createAuthorMutation (
		$name: String, 
		$age: Int
	){
		createAuthor(name: $name, age: $age) {
			id
			name
		} 
	}
`);

export { createSingleBook, createSingleAuthor };