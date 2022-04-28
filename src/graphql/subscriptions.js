import { gql } from "@apollo/client";

const onBookCreated = gql(`
	subscription onBookCreated {
		bookCreated {
			id
			name
		}
	}
`);

export { onBookCreated };