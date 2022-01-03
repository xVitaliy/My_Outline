import { ApolloClient, InMemoryCache } from "@apollo/client";
import { offsetLimitPagination } from "@apollo/client/utilities";


//SpaceX
export const client = new ApolloClient({
    uri: 'https://api.spacex.land/graphql/',
    cache: new InMemoryCache({
        typePolicies: {
            Query: {
                fields: {
                    // кешируемый список будет возвращен без какой либо обработки, поэтому функция реализуется без - read()
                    users: offsetLimitPagination()
                }
            }
        }
    }),
});


// todo=================
//
// export const client = new ApolloClient({
//     uri: 'https://api.spacex.land/graphql/',
//     cache: new InMemoryCache({
//         typePolicies: {
//             Query: {
//                 fields: {
//                     users: {
//                         keyArgs: false, - указывает, какой из аргументов поля, заставляют КЕШ хранить отдельное значение
//?  в нашем случае КЕШ должен хранить отдельный результат на основе любого значения аргумента => установим false

//? merge() - это функция, которай надо указать, как объединить (existing - существующие) данные с (incoming - входящими)
//? Без этой функции входящие значения поля по умолчанию перезаписывают существующие значения поля.
//                         merge(existing = [], incoming) {
//                             return [ ...existing, ...incoming ]
//                         }
//                     }
//                 }
//             }
//         }
//     }),
// });

// todo=================


// uri: 'https://graphql.org/swapi-graphql',


// console.log(client)

// const link = createHttpLink({
//     uri: 'https://graphql.org/swapi-graphql?query=query%20allFilms%20%7B%0A%20%20allPlanets%20%7B%0A%20%20%20%20planets%20%7B%0A%20%20%20%20%20%20id%0A%20%20%20%20%20%20name%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D',
//     credentials: false
// });
//
// export const client = new ApolloClient({
//     cache: new InMemoryCache(),
//     link,
// });


{
// import { ApolloClient, ApolloLink, InMemoryCache } from '@apollo/client';
// import { setContext } from '@apollo/client/link/context';
// import { onError } from '@apollo/client/link/error';
// import { createUploadLink } from 'apollo-upload-client';
// import create from 'zustand';
//
// import { API_HOST } from '../constants';
// import { SecureLocalStorage } from '../services';
//
//     export const useErrorsStore = create(() => ({
//         hasError: false,
//         error: null,
//         date: null,
//     }));
//
//     const httpLink = createUploadLink({
//         uri: `${API_HOST}/graphql`,
//     });
//
//     const errorLink = onError(({ networkError, graphQLErrors }) => {
//         console.log('graphQLErrors', graphQLErrors);
//         if (networkError || graphQLErrors[0]) {
//             useErrorsStore.setState({
//                 hasError: true,
//                 error: networkError || graphQLErrors[0],
//                 date: Date.now(),
//             });
//         }
//     });
//
//     const authLink = setContext(async (_, { headers }) => {
//         const token = await SecureLocalStorage.getValue('token');
//
//         return {
//             headers: {
//                 ...headers,
//                 authorization: token ? `Bearer ${token}` : '',
//             },
//         };
//     });
//
//     export const client = new ApolloClient({
//         link: ApolloLink.from([errorLink, authLink, httpLink]),
//         cache: new InMemoryCache(),
//     });
}