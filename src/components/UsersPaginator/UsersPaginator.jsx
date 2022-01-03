import React from 'react';
import { useQuery } from "@apollo/client";
import { GET_USERS_PAGINATOR } from "../../graphql/schema";
import { Box, Button, CircularProgress } from "@mui/material";

const UsersPaginator = () => {

    //networkStatus - представляет детальную инфу о статусе запроса, default = 7. К этому св-ву мы можем привязаться,
    // что бы установить прелодер, но чтобы это зделать нам надо установить ->>
    //notifyOnNetworkStatusChange: true - сказать, чтобы уведомлял об изменении networkStatus
    // После того как мы установили (notifyOnNetworkStatusChange: true) мы можем работать с нашим networkStatus
    const { error, data, fetchMore, networkStatus } = useQuery(GET_USERS_PAGINATOR, {
        variables: {
            limit: 1,
        },
        notifyOnNetworkStatusChange: true,
        // !
        // errorPolicy: "none" - default, усли ошибка вернет ошибку
        // errorPolicy: "all" - Оба data и error.graphQLErrors заполняются, что позволяет отображать как частичные
        //                      результаты, так и информацию об ошибках.
        // errorPolicy: 'ignore' - graphQLErrors игнорируются ( error.graphQLErrors это не заполняется),
        //                  и любой возвращается data кэшируется и отображается как , если не произошло никаких ошибок.
        // !
        // fetchPolicy: 'cache-first' - default, усли данные уже доступны в кеши достанет из кэша, иначе => запрос
        //    "network-only" - всегда Запрос, невзирая, на то что данные есть к кеши
        // !
        // если мы указываем nextFetchPolicy, это значит что  fetchPolicy - будет для первого завпроса,
        // а nextFetchPolicy этот для последующих
        // nextFetchPolicy: 'cache-first'
        //!
        // если ошибка => выполняем функцию,  усли всё готово => выполняем функцию
        // onError: (e) => console.log('sorry', e),
        // onCompleted: () => console.log('good!'),

    })

    // if (loading) return <Box sx={ { padding: 5 } }>Loading...</Box>
    // для больше моневрености за меним loading на (!data || !data.users)
    if (!data || !data.users) return <Box sx={ { padding: 5 } }>Loading...</Box>
    if (error) return <div>Error, Sorry :(</div>
    // fetchMore - метод, который позволяет нам запрашивать дополнительные данные и добавлять их в хранилище,
    // обновляя исходный результат запроса
    // updateQuery - указывает, как новые результаты должны быть объединены с предыдущим результатом
    // offset - начинай добавлять с индекса номер... и лимит у нас установлен выше
    const fetch = async () => {
        await fetchMore({
            variables: {
                offset: data.users.length,
            },
            updateQuery: (prevResult, { fetchMoreResult }) => {
                fetchMoreResult.users = [
                    ...prevResult.users,
                    ...fetchMoreResult.users
                ]
                return fetchMoreResult
            }
        })
    }

    const response = data?.users.map(user => <pre key={ user.id }>{ JSON.stringify(user, null, 3) }</pre>)

    return (
        <Box sx={ { padding: 5 } }>
            <Box>
                <Button
                    disabled={ networkStatus !== 7 && true }
                    sx={ { width: 100, height: 35 } }
                    startIcon={ networkStatus !== 7 && <CircularProgress size={ '20px' } /> }
                    children={ networkStatus === 7 && 'receive' }
                    variant={ 'contained' }
                    color={ 'secondary' }
                    onClick={ fetch } />

            </Box>
            <Box>
                { response }
            </Box>

        </Box>
    );
};

export default UsersPaginator;