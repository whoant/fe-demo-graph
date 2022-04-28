import React from 'react';
import { useSubscription } from "@apollo/client";
import { onBookCreated } from "../graphql/subscriptions";

const BookCreated = () => {
	const { data, loading, error } = useSubscription(onBookCreated);

	if (error) return <p>Error</p>;

	console.log({ data, loading, error });
	return <h4>New books</h4>;
};

export default BookCreated;