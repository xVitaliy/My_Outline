import React, { useCallback, useState } from 'react';
import { Box, Button } from "@mui/material";
import { useMutation, useQuery } from "@apollo/client";
import { DELETE_ALL_USERS, DELETE_USER, GET_USERS, INSERT_USER } from "../../graphql/schema";
import FillField from "../FillField";
import Users from "./Users";

const Main = () => {

    const [ name, setName ] = useState('')
    const [ rocket, setRocket ] = useState('')

    const { loading, error, data, refetch } = useQuery(GET_USERS)
    const [ insert_user ] = useMutation(INSERT_USER, {
        onCompleted: async () => {
            await refetch()
        },
        onError: () => {
            alert('Sorry :(')
        }
    })


    const [ delete_user ] = useMutation(DELETE_USER, {
        onCompleted: async () => {
            await refetch()
        },
        onError: () => {
            alert('Sorry')
        },
    });

    const [ delete_all_users ] = useMutation(DELETE_ALL_USERS, {
        onCompleted: async () => {
            await refetch()
        },
        onError: () => {
            alert('Sorry')
        },
    })

    const addUser = async () => {
        await insert_user({
            variables: {
                name,
                rocket,
            }
        })
        setName('');
        setRocket('');
    }

    const deleteUser = useCallback(async (id) => {
        await delete_user({
            variables: {
                id
            }
        })
    }, [ delete_user ])

    return (
        <div>
            <Box sx={ { mt: 5, mb: 5 } }>
                <FillField
                    label={ 'Name' }
                    placeholder={ 'Enter your name' }
                    state={ name }
                    setState={ setName }
                />

                <FillField
                    label={ 'Rocket' }
                    placeholder={ 'Enter Rocket name' }
                    state={ rocket }
                    setState={ setRocket }
                />
                <Button
                    variant={ 'contained' }
                    sx={ { mt: 1 } }
                    color={ 'secondary' }
                    onClick={ addUser }
                >
                    add User
                </Button>
            </Box>
            <Box>
                <Button
                    variant={ 'contained' }
                    color={ 'warning' }
                    onClick={ () => delete_all_users() }
                >Delete All</Button>
            </Box>

            <Users loading={ loading } error={ error } data={ data } refetch={ refetch }
                   deleteUser={ deleteUser } />
        </div>
    );
};

export default Main;
