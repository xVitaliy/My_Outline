import React, { memo } from 'react';
import User from "./User";
import { Typography } from "@mui/material";

const Users = ({ data, error, loading, deleteUser }) => {
    console.log('Users')
    if (loading) return <p>Loading...</p>
    if (error) return <p>Error :(</p>
    if (data?.users.length === 0) return (
        <Typography
            variant={ 'h3' }
            component={ 'h3' }
            sx={ { mt: 6 } }>ROCKET IS NOT FOUND</Typography>
    )

    const response = data.users.map((data) => {
        return <User key={ data.id } { ...data } deleteUser={ deleteUser } />
    })

    return (
        <div>
            { response }
        </div>
    );
};

export default memo(Users);