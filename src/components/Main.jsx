import React, { useState } from 'react';
import { Box, Button, Container } from "@mui/material";
import FillField from "./FillField";
import Todos from "./Todos";

const Main = () => {
    const [ name, setName ] = useState('')
    const [ username, setUsername ] = useState('')
    const [ todo, setTodo ] = useState('')

    const addTodo = () => {
        if (name.trim().length && username.trim().length && todo.trim().length) {
            console.log({
                name: name,
                username: username,
                todo: todo
            })
            setName('');
            setUsername('');
            setTodo('')
        }
    }

    return (
        <div>
            <Container maxWidth={ 'xl' }>
                <Box sx={ { mt: 5, mb: 5 } }>

                    <FillField
                        label={ 'Name' }
                        placeholder={ 'Enter your name' }
                        state={ name }
                        setState={ setName }
                    />
                    <FillField
                        label={ 'Username' }
                        placeholder={ 'Enter your Username' }
                        state={ username }
                        setState={ setUsername }
                    />
                    <FillField
                        label={ 'Todo' }
                        placeholder={ 'Enter Todo' }
                        state={ todo }
                        setState={ setTodo }
                    />
                    <Button
                        variant={ 'contained' }
                        sx={ { mt: 1 } }
                        color={ 'secondary' }
                        onClick={ addTodo }
                    >add Todo</Button>
                </Box>
                <Todos />
            </Container>
        </div>
    );
};

export default Main;