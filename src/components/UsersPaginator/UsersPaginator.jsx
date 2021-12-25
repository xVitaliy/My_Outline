import React from 'react';
import { useQuery } from "@apollo/client";
import { GET_USERS_PAGINATOR } from "../../graphql/schema";
import { Box, Button, CircularProgress } from "@mui/material";

const UsersPaginator = () => {

    //networkStatus - представляет детальную инфу о статусе запроса, default = 7. К этому св-ву мы можем привязаться,
    // что бы установить прелодер, но чтобы это зделать нам надо установить ->>
    //notifyOnNetworkStatusChange: true - сказать, чтобы уведомлял об изменении networkStatus
    // Послу того как мы установили (notifyOnNetworkStatusChange: true) мы можем работать с нашим networkStatus
    const { error, data, fetchMore, networkStatus } = useQuery(GET_USERS_PAGINATOR, {
        variables: {
            limit: 1,
        }
    })

    // if (loading) return <Box sx={ { padding: 5 } }>Loading...</Box>
    // для больше моневрености за меним loading на (!data || !data.users)
    if (!data || !data.users) return <Box sx={ { padding: 5 } }>Loading...</Box>
    if (error) return <div>Error, Sorry :(</div>
    console.log(data.users.length)
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