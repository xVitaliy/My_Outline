import React, { useEffect } from 'react';
import { Box, Button, CircularProgress, Grid, Typography } from "@mui/material";
import { useQuery } from "@apollo/client";
import { GET_USERS_SCROLL_PAGINATOR } from "../../graphql/schema";
import { Waypoint } from "react-waypoint";

const styleItem = {
    backgroundColor: 'gray',
    minWidth: 250,
    minHeight: 280,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    border: '1px solid'
}

const UsersScrollPaginator = () => {

    const { error, data, fetchMore, networkStatus, refetch } = useQuery(GET_USERS_SCROLL_PAGINATOR, {
        variables: {
            limit: 2
        },
        notifyOnNetworkStatusChange: true,

    })


    // Пример ASYNC/AWAIT внутри USE EFFECT
    useEffect(() => {
        let didCancel = false
        console.log(didCancel)
        ;(async () => {
            if (!didCancel) {
                await refetch()
            }
        })();
        return () => didCancel = true
    }, [])

    if (!data || !data.users) return <div>Loading...</div>
    if (error) return <div>Error :(</div>


    const response = data.users.map((user, index) =>
        // Grid item - дочерний элемент grid container
        // xs - на extraSmall (0px) экранах item будет занимать все 12 колонок, а на medium (960px) и выше будет занимать
        // 4 колонки => это 3 карточки 12/4 = 3

        // offset - начинай добавлять с индекса номер... и лимит у нас установлен выше

        <Grid item key={ user.id } xs={ 12 } md={ 12 }>

            {/*как только индекс нашего элемента равен длине массива - 1 (тоесть доходит последнего эемента)
            тогда мы запускаем компонент Waypoint (который работает на скролл) запускаем fetchMore и добавляем новые
            объекты в текущий массив*/ }

            { index === data.users.length - 1 && <Waypoint onEnter={ () => fetchMore({
                variables: {
                    offset: data.users.length
                },

                // Данный фрагмент кода был удалён
                // https://stackoverflow.com/questions/62742379/apollo-3-pagination-with-field-policies

                // updateQuery: (prevResult, { fetchMoreResult }) => {
                //     fetchMoreResult.users = [
                //         ...prevResult.users,
                //         ...fetchMoreResult.users
                //     ]
                //     return fetchMoreResult
                // }
            }) } /> }
            <Box sx={ styleItem }>
                <Typography color={ 'orange' } variant={ 'h2' }>Index: { index }</Typography>
                <Typography> id: { user.id }</Typography>
                <Typography> name: { user.name }</Typography>
                <Typography> rocket: { user.rocket } </Typography>
                <Button variant={ 'contained' } color={ 'secondary' }>Press</Button>
            </Box>
        </Grid>
    )


    // spacing - отсттуп между git item/ 1 = 8px
    return (
        <Grid container rowSpacing={ 25 } columnSpacing={ 5 } sx={ { padding: 5 } }>
            { response }
            { networkStatus === 3 && <CircularProgress /> }
        </Grid>
    );
};

export default UsersScrollPaginator;