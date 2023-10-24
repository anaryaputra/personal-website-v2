import { ApolloClient, createHttpLink, InMemoryCache, NormalizedCacheObject } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

const httpLink = createHttpLink({
	uri: process.env.STRAPI_ADDRESS,
});

const authLink = setContext((_, { headers }) => {
	const token = process.env.STRAPI_API_TOKEN;
	return {
		headers: {
			...headers,
			authorization: token ? `Bearer ${token}` : '',
		},
	};
});

const client: ApolloClient<NormalizedCacheObject> = new ApolloClient({
	cache: new InMemoryCache(),
	link: authLink.concat(httpLink),
});

export default client;
