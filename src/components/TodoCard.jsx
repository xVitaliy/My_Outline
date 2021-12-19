import React from 'react';
import { Card, Checkbox, IconButton, Typography } from "@mui/material";
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';

// const styles = {
//     textDecoration: completed && 'line-through'
// }

const TodoCard = (props) => {
    const { title, completed, user } = props
    const { name, username } = user

    return (
        <Card variant={ 'outlined' } sx={ { mt: 3 } }>
            <div style={ { marginLeft: '45px', textDecoration: 'underline' } }>
                name:{ name } username: { username }
            </div>
            <Checkbox checked={ completed } color={ 'secondary' } />
            <Typography sx={ { textDecoration: completed && 'line-through' } }
                        component={ 'span' }> todo: { title }
            </Typography>
            <IconButton>
                <DeleteForeverIcon sx={ { color: 'red' } } />
            </IconButton>

        </Card>
    );
};

export default TodoCard;

