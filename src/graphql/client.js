import { ApolloClient, createHttpLink, InMemoryCache } from "@apollo/client";


//SpaceX
export const client = new ApolloClient({
    uri: 'https://api.spacex.land/graphql/',
    cache: new InMemoryCache(),
});


// const link = createHttpLink({
//     uri: 'https://graphql.org/swapi-graphql?query=query%20allFilms%20%7B%0A%20%20allPlanets%20%7B%0A%20%20%20%20planets%20%7B%0A%20%20%20%20%20%20id%0A%20%20%20%20%20%20name%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D',
//     credentials: false
// });
//
// export const client = new ApolloClient({
//     cache: new InMemoryCache(),
//     link,
// });


