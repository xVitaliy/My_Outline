import React, { memo } from 'react';
import { Button, Card, Typography } from "@mui/material";
import { Delete } from "@mui/icons-material";

const User = (props) => {
    const { id, name, rocket, timestamp, deleteUser } = props;
    return (
        <Card sx={ { maxWidth: 550, mt: 5, border: 4, padding: 2 } }>
            <Typography color={ 'darkred' }>
                id: { id }
            </Typography>
            <Typography>
                name: { name }
            </Typography>
            <Typography>
                rocket: { rocket }
            </Typography>
            <Typography>
                timestamp: { timestamp }
            </Typography>

            <Button
                variant={ 'contained' }
                color={ 'error' }
                sx={ { mt: 2 } }
                startIcon={ <Delete /> }
                onClick={ () => deleteUser(id) }
            >Delete</Button>

        </Card>
    );
};

export default memo(User);